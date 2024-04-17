'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var providers = require('@ethersproject/providers');
var extendedJsonRpcBatchProvider = require('./extended-json-rpc-batch-provider.js');
var common = require('@nestjs/common');
var retrier = require('../common/retrier.js');
var formatterWithEip1898 = require('../ethers/formatter-with-eip1898.js');
var networks = require('../common/networks.js');
var noNewBlocksWhilePolling_error = require('../error/no-new-blocks-while-polling.error.js');
var errors = require('../common/errors.js');
var allProvidersFailed_error = require('../error/all-providers-failed.error.js');
var feeHistory = require('../ethers/fee-history.js');
var debugTraceBlockByHash = require('../ethers/debug-trace-block-by-hash.js');

exports.SimpleFallbackJsonRpcBatchProvider = class SimpleFallbackJsonRpcBatchProvider extends providers.BaseProvider {
    constructor(config, logger) {
        super(config.network);
        this.detectNetworkFirstRun = true;
        this.resetTimer = null;
        // it is crucial not to mix these two errors
        this.lastPerformError = null; // last error for 'perform' operations, is batch-oriented
        this.lastError = null; // last error for whole provider
        this.config = Object.assign({ maxRetries: 3, minBackoffMs: 500, maxBackoffMs: 5000, logRetries: true, resetIntervalMs: 10000, maxTimeWithoutNewBlocksMs: 60000 }, config);
        this.logger = logger;
        const conns = config.urls.filter((url) => {
            if (!url) {
                return false;
            }
            if (typeof url === 'object' && !url.url) {
                return false;
            }
            return true;
        });
        if (conns.length < 1) {
            throw new Error('No valid URLs or Connections were provided');
        }
        this.fallbackProviders = conns.map((conn, index) => {
            var _a;
            const provider = new extendedJsonRpcBatchProvider.ExtendedJsonRpcBatchProvider(conn, undefined, config.requestPolicy, (_a = config.fetchMiddlewares) !== null && _a !== void 0 ? _a : []);
            return {
                network: null,
                provider,
                index,
                unreachable: false,
            };
        });
        this.activeFallbackProviderIndex = 0;
    }
    static getFormatter() {
        if (this._formatter == null) {
            this._formatter = new formatterWithEip1898.FormatterWithEIP1898();
        }
        return this._formatter;
    }
    on(eventName, listener) {
        let dieTimer = null;
        const startDieTimer = (latestObservedBlockNumber) => {
            if (dieTimer)
                clearTimeout(dieTimer);
            dieTimer = setTimeout(async () => {
                const error = new noNewBlocksWhilePolling_error.NoNewBlocksWhilePollingError('No new blocks for a long time while polling', latestObservedBlockNumber);
                this.emit('error', error);
            }, this.config.maxTimeWithoutNewBlocksMs);
        };
        if (eventName === 'block') {
            startDieTimer(-1);
            return super.on(eventName, function (...args) {
                startDieTimer(args[0]);
                return listener.apply(this, args);
            });
        }
        return super.on(eventName, listener);
    }
    async getFeeHistory(blockCount, newestBlock, rewardPercentiles) {
        return feeHistory.getFeeHistory.call(this, blockCount, newestBlock, rewardPercentiles);
    }
    async getDebugTraceBlockByHash(blockHash, traceConfig) {
        return debugTraceBlockByHash.getDebugTraceBlockByHash.call(this, blockHash, traceConfig);
    }
    get provider() {
        if (this.activeFallbackProviderIndex > this.fallbackProviders.length - 1) {
            this.activeFallbackProviderIndex = 0;
        }
        let fallbackProvider = this.fallbackProviders[this.activeFallbackProviderIndex];
        let attempt = 0;
        const isValid = (provider) => provider.network !== null &&
            provider.network.chainId === networks.getNetworkChain(this.config.network);
        while (!isValid(fallbackProvider) &&
            attempt < this.fallbackProviders.length) {
            fallbackProvider =
                this.fallbackProviders[this.activeFallbackProviderIndex];
            // skipping providers with unreachable endpoints or networks
            // that are not equal to predefined network (from config)
            if (!isValid(fallbackProvider)) {
                this.activeFallbackProviderIndex++;
            }
            attempt++;
        }
        return fallbackProvider;
    }
    switchToNextProvider() {
        if (this.fallbackProviders.length === 1) {
            this.logger.warn('Will not switch to next provider. No valid backup provider provided.');
            return;
        }
        this.activeFallbackProviderIndex++;
        this.logger.log(`Switched to next provider for execution layer`);
    }
    isNonRetryableError(error) {
        return (!errors.isEthersServerError(error) &&
            errors.isErrorHasCode(error) &&
            errors.nonRetryableErrors.includes(error.code));
    }
    async perform(method, params) {
        const retry = retrier.retrier(this.logger, this.config.maxRetries, this.config.minBackoffMs, this.config.maxBackoffMs, this.config.logRetries, (e) => this.isNonRetryableError(e));
        let attempt = 0;
        // will perform maximum `this.config.maxRetries` retries for fetching data with single provider
        // after failure will switch to next provider
        // maximum number of switching is limited to total fallback provider count
        while (attempt < this.fallbackProviders.length) {
            try {
                attempt++;
                // awaiting is extremely important here
                // without it, the error will not be caught in current try-catch scope
                return await retry(() => this.provider.provider.perform(method, params));
            }
            catch (e) {
                this.lastError = e;
                // checking that error should not be retried on another provider
                if (this.isNonRetryableError(e)) {
                    throw e;
                }
                this.logger.error('Error while doing ETH1 RPC request. Will try to switch to another provider');
                this.logger.error(e);
                // This check is needed to avoid multiple `switchToNextProvider` calls when doing one JSON-RPC batch.
                // This can happen when multiple N calls to `perform` are batched in one JSON-RPC request and
                // that request fails and throws `Error`. This `Error` is bubbled N times to corresponding `perform` calls.
                // Without the following check, each `perform` call from batch catches `Error` and switches to the next provider,
                // so during one batch multiple switching to next provider can occur, which is not needed.
                if (this.lastPerformError != e) {
                    this.switchToNextProvider();
                    this.lastPerformError = e;
                }
            }
        }
        const allProvidersFailedError = new allProvidersFailed_error.AllProvidersFailedError('All attempts to do ETH1 RPC request failed');
        allProvidersFailedError.cause = this.lastError;
        throw allProvidersFailedError;
    }
    async detectNetwork() {
        const results = await Promise.allSettled(this.fallbackProviders
            .filter((c) => !c.unreachable)
            .map((c) => c.provider.getNetwork()));
        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                this.fallbackProviders[index].network = result.value;
                this.fallbackProviders[index].unreachable = false;
            }
            else {
                this.fallbackProviders[index].network = null;
                this.fallbackProviders[index].unreachable = true;
                this.lastError = result.reason;
            }
        });
        let previousNetwork = null;
        this.fallbackProviders.forEach((fallbackProvider, index) => {
            if (!fallbackProvider.network) {
                return;
            }
            if (!networks.networksChainsEqual(fallbackProvider.network, this.config.network)) {
                if (this.detectNetworkFirstRun) {
                    throw new Error(`Fallback provider [${index}] network chainId ` +
                        `[${fallbackProvider.network.chainId}] is different to network ` +
                        `chainId from config [${networks.getNetworkChain(this.config.network)}]`);
                }
                // TODO add logs here
                // skipping network with bad chainId
                return;
            }
            if (previousNetwork) {
                // Make sure the fallbackProvider network matches the previous network
                if (!this.networksEqual(previousNetwork, fallbackProvider.network)) {
                    if (this.detectNetworkFirstRun) {
                        throw new Error(`Fallback provider [${index}] network is different to other provider's networks`);
                    }
                    this.logger.warn(`Fallback provider [${index}] network is different to other provider's networks`);
                }
            }
            else {
                previousNetwork = fallbackProvider.network;
            }
        });
        if (!previousNetwork) {
            const error = new allProvidersFailed_error.AllProvidersFailedError('All fallback endpoints are unreachable or all fallback networks differ between each other');
            error.cause = this.lastError;
            throw error;
        }
        if (this.detectNetworkFirstRun) {
            this.detectNetworkFirstRun = false;
        }
        if (this.resetTimer) {
            clearTimeout(this.resetTimer);
        }
        this.resetTimer = setTimeout(() => {
            this.resetFallbacks();
        }, this.config.resetIntervalMs || 10000);
        return previousNetwork;
    }
    resetFallbacks() {
        if (this.resetTimer) {
            clearTimeout(this.resetTimer);
        }
        this.fallbackProviders.forEach((fallbackProvider, index) => {
            var _a;
            if (!((_a = this.fallbackProviders[index].network) === null || _a === void 0 ? void 0 : _a.chainId)) {
                this.fallbackProviders[index].unreachable = false;
            }
        });
        this.activeFallbackProviderIndex = 0;
    }
    networksEqual(networkA, networkB) {
        return networks.networksEqual(networkA, networkB);
    }
    get activeProviderIndex() {
        return this.activeFallbackProviderIndex;
    }
};
exports.SimpleFallbackJsonRpcBatchProvider._formatter = null;
exports.SimpleFallbackJsonRpcBatchProvider = tslib.__decorate([
    common.Injectable(),
    tslib.__metadata("design:paramtypes", [Object, Object])
], exports.SimpleFallbackJsonRpcBatchProvider);
