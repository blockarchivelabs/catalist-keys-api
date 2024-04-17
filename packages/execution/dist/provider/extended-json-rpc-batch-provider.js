'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var properties = require('@ethersproject/properties');
var web = require('@ethersproject/web');
var providers = require('@ethersproject/providers');
var queue = require('../common/queue.js');
var fetch_error = require('../error/fetch.error.js');
var common = require('@nestjs/common');
var promiseLimit = require('../common/promise-limit.js');
var formatterWithEip1898 = require('../ethers/formatter-with-eip1898.js');
var middleware = require('@catalist-nestjs/middleware');
var feeHistory = require('../ethers/fee-history.js');
var errorCodes = require('../error/codes/error-codes.js');
var debugTraceBlockByHash = require('../ethers/debug-trace-block-by-hash.js');

exports.ExtendedJsonRpcBatchProvider = class ExtendedJsonRpcBatchProvider extends providers.JsonRpcProvider {
    constructor(url, network, requestPolicy, fetchMiddlewares = []) {
        super(url, network);
        this._batchAggregator = null;
        this._queue = new queue.Queue();
        this._tickCounter = 0;
        this._requestPolicy = requestPolicy !== null && requestPolicy !== void 0 ? requestPolicy : {
            jsonRpcMaxBatchSize: 200,
            maxConcurrentRequests: 5,
            batchAggregationWaitMs: 10,
        };
        this._concurrencyLimiter = promiseLimit["default"](this._requestPolicy.maxConcurrentRequests);
        this._fetchMiddlewareService = new middleware.MiddlewareService({
            middlewares: fetchMiddlewares,
        });
    }
    static getFormatter() {
        if (this._formatter == null) {
            this._formatter = new formatterWithEip1898.FormatterWithEIP1898();
        }
        return this._formatter;
    }
    _batchAggregatorTick() {
        this._tickCounter++;
        if (this._queue.length > this._requestPolicy.jsonRpcMaxBatchSize ||
            this._tickCounter > 2) {
            this._tickCounter = 0;
            // getting multiple ('jsonRpcMaxBatchSize') elements from queue at once
            // if queue size is less then 'jsonRpcMaxBatchSize' - dequeue remaining elements
            const batch = this._queue.dequeueMultiple(this._requestPolicy.jsonRpcMaxBatchSize);
            const batchRequest = batch.map((intent) => intent.request);
            this.emit('debug', {
                action: 'requestBatch',
                request: properties.deepCopy(batchRequest),
                provider: this,
            });
            this._concurrencyLimiter(() => {
                return this._fetchMiddlewareService.go(() => this.fetchJson(this.connection, JSON.stringify(batchRequest)), {
                    provider: this,
                });
            })
                .then((batchResult) => {
                var _a;
                this.emit('debug', {
                    action: 'response',
                    request: properties.deepCopy(batchRequest),
                    response: properties.deepCopy(batchResult),
                    provider: this,
                });
                if (!Array.isArray(batchResult)) {
                    const errMessage = 'Unexpected batch result.';
                    const jsonRpcErrorMessage = (_a = batchResult.error) === null || _a === void 0 ? void 0 : _a.message;
                    const detailedMessage = jsonRpcErrorMessage
                        ? ` Possible reason: "${jsonRpcErrorMessage}".`
                        : '';
                    const error = new fetch_error.FetchError(errMessage + detailedMessage);
                    error.code = errorCodes.ErrorCode.UNEXPECTED_BATCH_RESULT;
                    error.data = batchResult.error;
                    throw error;
                }
                const resultMap = batchResult.reduce((resultMap, payload) => {
                    resultMap[payload.id] = payload;
                    return resultMap;
                }, {});
                // For each batch, feed it to the correct Promise, depending
                // on whether it was a success or error
                batch.forEach((inflightRequest) => {
                    const payload = resultMap[inflightRequest.request.id];
                    if (!payload) {
                        const error = new fetch_error.FetchError(`Partial payload batch result. Response ${inflightRequest.request.id} not found`);
                        error.code = errorCodes.ErrorCode.PARTIAL_BATCH_RESULT;
                        error.data = batchResult;
                        inflightRequest.reject(error);
                    }
                    else if (payload.error) {
                        const error = new fetch_error.FetchError(payload.error.message);
                        error.code = payload.error.code;
                        error.data = payload.error.data;
                        inflightRequest.reject(error);
                    }
                    else {
                        inflightRequest.resolve(payload.result);
                    }
                });
            }, (error) => {
                this.emit('debug', {
                    action: 'response',
                    error: error,
                    request: properties.deepCopy(batchRequest),
                    provider: this,
                });
                batch.forEach((inflightRequest) => {
                    inflightRequest.reject(error);
                });
            })
                .catch((error) => {
                // catch errors happening in the 'then' callback
                this.emit('debug', {
                    action: 'response',
                    error: error,
                    request: properties.deepCopy(batchRequest),
                    provider: this,
                });
                batch.forEach((inflightRequest) => {
                    inflightRequest.reject(error);
                });
            });
        }
        this._batchAggregator && clearTimeout(this._batchAggregator);
        this._batchAggregator = null;
        // if the queue is not empty we should continue 'ticking'
        // every 'batchAggregationWaitMs' time, until the queue is empty
        if (this._queue.length > 0) {
            this._startBatchAggregator();
        }
    }
    _startBatchAggregator() {
        if (!this._batchAggregator) {
            // schedule batch for next event loop + short duration (macrotask)
            this._batchAggregator = setTimeout(this._batchAggregatorTick.bind(this), this._requestPolicy.batchAggregationWaitMs);
        }
    }
    async getFeeHistory(blockCount, newestBlock, rewardPercentiles) {
        return feeHistory.getFeeHistory.call(this, blockCount, newestBlock, rewardPercentiles);
    }
    async getDebugTraceBlockByHash(blockHash, traceConfig) {
        return debugTraceBlockByHash.getDebugTraceBlockByHash.call(this, blockHash, traceConfig);
    }
    prepareRequest(method, params) {
        switch (method) {
            case 'getFeeHistory':
                return [
                    'eth_feeHistory',
                    [params.blockCount, params.newestBlock, params.rewardPercentiles],
                ];
            case 'getDebugTraceBlockByHash':
                return [
                    'debug_traceBlockByHash',
                    [params.blockHash, params.traceConfig],
                ];
            default:
                return super.prepareRequest(method, params);
        }
    }
    use(callback) {
        this._fetchMiddlewareService.use(callback);
    }
    send(method, params) {
        const request = {
            method: method,
            params: params,
            id: this._nextId++,
            jsonrpc: '2.0',
        };
        const currentRequest = {
            request,
            reject: null,
            resolve: null,
        };
        const promise = new Promise((resolve, reject) => {
            currentRequest.resolve = resolve;
            currentRequest.reject = reject;
        });
        this._queue.enqueue(currentRequest);
        this._startBatchAggregator();
        return promise;
    }
    async detectNetwork() {
        let network = this.network;
        if (network == null) {
            network = await super.detectNetwork();
            // If still not set, set it
            if (this._network == null) {
                // A static network does not support "any"
                properties.defineReadOnly(this, '_network', network);
                this.emit('network', network, null);
            }
        }
        return network;
    }
    async fetchJson(connection, json, processFunc) {
        return await web.fetchJson(connection, json, processFunc);
    }
};
exports.ExtendedJsonRpcBatchProvider._formatter = null;
exports.ExtendedJsonRpcBatchProvider = tslib.__decorate([
    common.Injectable(),
    tslib.__metadata("design:paramtypes", [Object, Object, Object, Array])
], exports.ExtendedJsonRpcBatchProvider);
