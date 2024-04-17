'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var common = require('@nestjs/common');
var utils = require('@catalist-nestjs/utils');
var contracts = require('@catalist-nestjs/contracts');
var operator_constants = require('./operator.constants.js');

exports.RegistryOperatorFetchService = class RegistryOperatorFetchService {
    constructor(contract) {
        this.contract = contract;
    }
    /** fetches number of operators */
    async count(overrides = {}) {
        const bigNumber = await this.contract.getNodeOperatorsCount(overrides);
        return bigNumber.toNumber();
    }
    /** fetches one operator */
    async fetchOne(operatorIndex, overrides = {}) {
        const fullInfo = true;
        const operator = await this.contract.getNodeOperator(operatorIndex, fullInfo, overrides);
        const { name, active, rewardAddress, totalVettedValidators, totalExitedValidators, totalAddedValidators, totalDepositedValidators, } = operator;
        return {
            index: operatorIndex,
            active,
            name,
            rewardAddress,
            stakingLimit: totalVettedValidators.toNumber(),
            stoppedValidators: totalExitedValidators.toNumber(),
            totalSigningKeys: totalAddedValidators.toNumber(),
            usedSigningKeys: totalDepositedValidators.toNumber(),
        };
    }
    /** fetches operators */
    async fetch(fromIndex = 0, toIndex = -1, overrides = {}) {
        if (fromIndex > toIndex && toIndex !== -1) {
            throw new Error('fromIndex is greater than or equal to toIndex');
        }
        if (toIndex == null || toIndex === -1) {
            toIndex = await this.count(overrides);
        }
        const fetcher = async (operatorIndex) => {
            return await this.fetchOne(operatorIndex, overrides);
        };
        const batchSize = operator_constants.REGISTRY_OPERATORS_BATCH_SIZE;
        return await utils.rangePromise(fetcher, fromIndex, toIndex, batchSize);
    }
};
exports.RegistryOperatorFetchService = tslib.__decorate([
    common.Injectable(),
    tslib.__param(0, common.Inject(contracts.REGISTRY_CONTRACT_TOKEN)),
    tslib.__metadata("design:paramtypes", [Object])
], exports.RegistryOperatorFetchService);
