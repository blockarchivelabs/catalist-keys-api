'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var common = require('@nestjs/common');
var contracts = require('@catalist-nestjs/contracts');
var knex = require('@mikro-orm/knex');
var logger = require('@catalist-nestjs/logger');
var decorators = require('@catalist-nestjs/decorators');
var EventEmitter = require('events');
var cron = require('cron');
var meta_fetch = require('../fetch/meta.fetch.js');
var key_fetch = require('../fetch/key.fetch.js');
var operator_fetch = require('../fetch/operator.fetch.js');
var meta_storage = require('../storage/meta.storage.js');
var key_storage = require('../storage/key.storage.js');
var operator_storage = require('../storage/operator.storage.js');
var meta_entity = require('../storage/meta.entity.js');
var key_entity = require('../storage/key.entity.js');
var operator_entity = require('../storage/operator.entity.js');
var meta_utils = require('../utils/meta.utils.js');
var operator_utils = require('../utils/operator.utils.js');
var constants = require('./constants.js');
var utils = require('@catalist-nestjs/utils');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var EventEmitter__default = /*#__PURE__*/_interopDefaultLegacy(EventEmitter);

exports.AbstractRegistryService = class AbstractRegistryService {
    constructor(registryContract, logger, metaFetch, metaStorage, keyFetch, keyStorage, operatorFetch, operatorStorage, entityManager, options) {
        this.registryContract = registryContract;
        this.logger = logger;
        this.metaFetch = metaFetch;
        this.metaStorage = metaStorage;
        this.keyFetch = keyFetch;
        this.keyStorage = keyStorage;
        this.operatorFetch = operatorFetch;
        this.operatorStorage = operatorStorage;
        this.entityManager = entityManager;
        this.options = options;
        this.eventEmitter = new EventEmitter__default["default"]();
        this.cronJob = new cron.CronJob((options === null || options === void 0 ? void 0 : options.subscribeInterval) || '*/10 * * * * *', () => this.cronHandler());
    }
    async cronHandler() {
        try {
            const result = await this.update('latest');
            if (!result)
                return;
            this.eventEmitter.emit('result', result);
        }
        catch (error) {
            this.eventEmitter.emit('error', error);
        }
    }
    collectListenerCount() {
        return (this.eventEmitter.listenerCount('result') +
            this.eventEmitter.listenerCount('error'));
    }
    subscribe(cb) {
        this.cronJob.start();
        const resultCb = (result) => cb(null, result);
        this.eventEmitter.addListener('result', resultCb);
        this.eventEmitter.addListener('error', cb);
        return () => {
            this.eventEmitter.off('result', resultCb);
            this.eventEmitter.off('error', cb);
            if (!this.collectListenerCount()) {
                this.cronJob.stop();
            }
        };
    }
    /** collects changed data from the contract and store it to the db */
    async update(blockHashOrBlockTag) {
        var _a, _b, _c, _d, _e;
        const prevMeta = await this.getMetaDataFromStorage();
        const currMeta = await this.getMetaDataFromContract(blockHashOrBlockTag);
        const isSameContractState = meta_utils.compareMeta(prevMeta, currMeta);
        this.logger.log('Collected metadata', { prevMeta, currMeta });
        const previousBlockNumber = (_a = prevMeta === null || prevMeta === void 0 ? void 0 : prevMeta.blockNumber) !== null && _a !== void 0 ? _a : -1;
        const currentBlockNumber = currMeta.blockNumber;
        if (previousBlockNumber > currentBlockNumber) {
            this.logger.warn('Previous data is newer than current data');
            return;
        }
        if (isSameContractState) {
            (_c = (_b = this.logger).debug) === null || _c === void 0 ? void 0 : _c.call(_b, 'Same state, no data update required', { currMeta });
            await this.entityManager.transactional(async (entityManager) => {
                await entityManager.nativeDelete(meta_entity.RegistryMeta, {});
                await entityManager.persist(new meta_entity.RegistryMeta(currMeta));
            });
            (_e = (_d = this.logger).debug) === null || _e === void 0 ? void 0 : _e.call(_d, 'Updated metadata in the DB', { currMeta });
            return;
        }
        const blockHash = currMeta.blockHash;
        const previousOperators = await this.getOperatorsFromStorage();
        const currentOperators = await this.getOperatorsFromContract(blockHash);
        this.logger.log('Collected operators', {
            previousOperators: previousOperators.length,
            currentOperators: currentOperators.length,
        });
        const updatedKeys = await this.getUpdatedKeysFromContract(previousOperators, currentOperators, blockHash);
        this.logger.log('Fetched updated keys', {
            updatedKeys: updatedKeys.length,
        });
        await this.save(updatedKeys, currentOperators, currMeta);
        this.logger.log('Saved data to the DB', {
            operators: currentOperators.length,
            updatedKeys: updatedKeys.length,
            currMeta,
        });
        return currMeta;
    }
    /** contract */
    /** returns the meta data from the contract */
    async getMetaDataFromContract(blockHashOrBlockTag) {
        const { provider } = this.registryContract;
        const block = await provider.getBlock(blockHashOrBlockTag);
        const blockHash = block.hash;
        const blockTag = { blockHash };
        const keysOpIndex = await this.metaFetch.fetchKeysOpIndex({ blockTag });
        return {
            blockNumber: block.number,
            blockHash,
            keysOpIndex,
            timestamp: block.timestamp,
        };
    }
    /** returns operators from the contract */
    async getOperatorsFromContract(blockHash) {
        const overrides = { blockTag: { blockHash } };
        return await this.operatorFetch.fetch(0, -1, overrides);
    }
    /** returns updated keys from the contract */
    async getUpdatedKeysFromContract(previousOperators, currentOperators, blockHash) {
        /**
         * TODO: optimize a number of queries
         * it's possible to update keys faster by using different strategies depending on the reason for the update
         */
        const keysByOperator = await Promise.all(currentOperators.map(async (currOperator, currentIndex) => {
            var _a;
            // check if the operator in the registry has changed since the last update
            const prevOperator = (_a = previousOperators[currentIndex]) !== null && _a !== void 0 ? _a : null;
            const isSameOperator = operator_utils.compareOperators(prevOperator, currOperator);
            // skip updating keys from 0 to `usedSigningKeys` of previous collected data
            // since the contract guarantees that these keys cannot be changed
            const unchangedKeysMaxIndex = isSameOperator
                ? prevOperator.usedSigningKeys
                : 0;
            // get the right border up to which the keys should be updated
            // it's different for different scenarios
            const toIndex = this.getToIndex(currOperator);
            // fromIndex may become larger than toIndex if used keys are deleted
            // this should not happen in mainnet, but sometimes keys can be deleted in testnet by modification of the contract
            const fromIndex = unchangedKeysMaxIndex <= toIndex ? unchangedKeysMaxIndex : 0;
            const operatorIndex = currOperator.index;
            const overrides = { blockTag: { blockHash } };
            const result = await this.keyFetch.fetch(operatorIndex, fromIndex, toIndex, overrides);
            this.logger.log('Keys fetched', {
                operatorIndex,
                fromIndex,
                toIndex,
                fetchedKeys: result.length,
            });
            return result;
        }));
        return keysByOperator.flat().filter((key) => key);
    }
    /** storage */
    /** returns the latest meta data from the db */
    async getMetaDataFromStorage() {
        return await this.metaStorage.get();
    }
    /** returns the latest operators data from the db */
    async getOperatorsFromStorage() {
        return await this.operatorStorage.findAll();
    }
    /** returns all the keys from storage */
    async getOperatorsKeysFromStorage() {
        return await this.keyStorage.findAll();
    }
    /** saves all the data to the db */
    async save(updatedKeys, currentOperators, currMeta) {
        // save all data in a transaction
        await this.entityManager.transactional(async (entityManager) => {
            await Promise.all(
            // remove all keys from the database that are greater than the total number of keys
            // it's needed to clear the list in db when removing keys from the contract
            currentOperators.map(async (operator) => {
                await entityManager.nativeDelete(key_entity.RegistryKey, {
                    index: { $gte: operator.totalSigningKeys },
                    operatorIndex: operator.index,
                });
            }));
            await Promise.all(
            // 500 — SQLite limit in insert operation
            utils.chunk(updatedKeys, 499).map(async (keysChunk) => {
                await entityManager
                    .createQueryBuilder(key_entity.RegistryKey)
                    .insert(keysChunk)
                    .onConflict(['index', 'operator_index'])
                    .merge()
                    .execute();
            }));
            await Promise.all(
            // 500 — SQLite limit in insert operation
            utils.chunk(currentOperators, 499).map(async (operatorsChunk) => {
                await entityManager
                    .createQueryBuilder(operator_entity.RegistryOperator)
                    .insert(operatorsChunk)
                    .onConflict('index')
                    .merge()
                    .execute();
            }));
            // replace metadata with new one
            await entityManager.nativeDelete(meta_entity.RegistryMeta, {});
            await entityManager.persist(new meta_entity.RegistryMeta(currMeta));
        });
    }
    /** clears the db */
    async clear() {
        await this.entityManager.transactional(async (entityManager) => {
            entityManager.nativeDelete(key_entity.RegistryKey, {});
            entityManager.nativeDelete(operator_entity.RegistryOperator, {});
            entityManager.nativeDelete(meta_entity.RegistryMeta, {});
        });
    }
};
tslib.__decorate([
    decorators.OneAtTime(),
    tslib.__metadata("design:type", Function),
    tslib.__metadata("design:paramtypes", []),
    tslib.__metadata("design:returntype", Promise)
], exports.AbstractRegistryService.prototype, "cronHandler", null);
exports.AbstractRegistryService = tslib.__decorate([
    common.Injectable(),
    tslib.__param(0, common.Inject(contracts.REGISTRY_CONTRACT_TOKEN)),
    tslib.__param(1, common.Inject(logger.LOGGER_PROVIDER)),
    tslib.__param(9, common.Optional()),
    tslib.__param(9, common.Inject(constants.REGISTRY_GLOBAL_OPTIONS_TOKEN)),
    tslib.__metadata("design:paramtypes", [Object, Object, meta_fetch.RegistryMetaFetchService,
        meta_storage.RegistryMetaStorageService,
        key_fetch.RegistryKeyFetchService,
        key_storage.RegistryKeyStorageService,
        operator_fetch.RegistryOperatorFetchService,
        operator_storage.RegistryOperatorStorageService,
        knex.EntityManager, Object])
], exports.AbstractRegistryService);
