'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var common = require('@nestjs/common');
var contracts = require('@catalist-nestjs/contracts');

exports.RegistryMetaFetchService = class RegistryMetaFetchService {
    constructor(registryContract) {
        this.registryContract = registryContract;
    }
    /** fetches keys operation index */
    async fetchKeysOpIndex(overrides = {}) {
        const bigNumber = await this.registryContract.getKeysOpIndex(overrides);
        return bigNumber.toNumber();
    }
};
exports.RegistryMetaFetchService = tslib.__decorate([
    common.Injectable(),
    tslib.__param(0, common.Inject(contracts.REGISTRY_CONTRACT_TOKEN)),
    tslib.__metadata("design:paramtypes", [Object])
], exports.RegistryMetaFetchService);
