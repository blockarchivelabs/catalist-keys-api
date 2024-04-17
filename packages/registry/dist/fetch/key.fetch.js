'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var common = require('@nestjs/common');
var utils = require('@catalist-nestjs/utils');
var contracts = require('@catalist-nestjs/contracts');
var operator_fetch = require('./operator.fetch.js');
var key_constants = require('./key.constants.js');

exports.RegistryKeyFetchService = class RegistryKeyFetchService {
    constructor(contract, operatorsService) {
        this.contract = contract;
        this.operatorsService = operatorsService;
    }
    /** fetches one key */
    async fetchOne(operatorIndex, keyIndex, overrides = {}) {
        const keyData = await this.contract.getSigningKey(operatorIndex, keyIndex, overrides);
        const { key, depositSignature, used } = keyData;
        return {
            operatorIndex,
            index: keyIndex,
            key,
            depositSignature,
            used,
        };
    }
    /** fetches operator's keys */
    async fetch(operatorIndex, fromIndex = 0, toIndex = -1, overrides = {}) {
        if (fromIndex > toIndex && toIndex !== -1) {
            throw new Error('fromIndex is greater than or equal to toIndex');
        }
        if (toIndex == null || toIndex === -1) {
            const operator = await this.operatorsService.fetchOne(operatorIndex, overrides);
            toIndex = operator.totalSigningKeys;
        }
        const fetcher = async (keyIndex) => {
            return await this.fetchOne(operatorIndex, keyIndex, overrides);
        };
        const batchSize = key_constants.REGISTRY_KEY_BATCH_SIZE;
        return await utils.rangePromise(fetcher, fromIndex, toIndex, batchSize);
    }
};
exports.RegistryKeyFetchService = tslib.__decorate([
    common.Injectable(),
    tslib.__param(0, common.Inject(contracts.REGISTRY_CONTRACT_TOKEN)),
    tslib.__metadata("design:paramtypes", [Object, operator_fetch.RegistryOperatorFetchService])
], exports.RegistryKeyFetchService);
