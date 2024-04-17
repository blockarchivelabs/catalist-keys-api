'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var common = require('@nestjs/common');
var di = require('@catalist-nestjs/di');
var catalistKeyValidator_interface = require('../interfaces/catalist-key-validator.interface.js');
var withdrawalCredentials_extractor_interface = require('../interfaces/withdrawal-credentials.extractor.interface.js');
var genesisForkVersion_interface = require('../interfaces/genesis-fork-version.interface.js');
var keyValidator_interface = require('../interfaces/key-validator.interface.js');

exports.CatalistKeyValidator = class CatalistKeyValidator {
    constructor(keyValidator, wcExtractor, genesisForkVersionService) {
        this.keyValidator = keyValidator;
        this.wcExtractor = wcExtractor;
        this.genesisForkVersionService = genesisForkVersionService;
    }
    async validateKey(catalistKey) {
        const possibleWC = await this.wcExtractor.getPossibleWithdrawalCredentials();
        return (await this.validateCatalistKeysForDifferentPossibleWC([catalistKey], possibleWC))[0];
    }
    async validateKeys(catalistKeys) {
        if (catalistKeys.length === 0) {
            return [];
        }
        const possibleWC = await this.wcExtractor.getPossibleWithdrawalCredentials();
        return await this.validateCatalistKeysForDifferentPossibleWC(catalistKeys, possibleWC);
    }
    async validateCatalistKeysForDifferentPossibleWC(catalistKeys, possibleWC) {
        const chainId = await this.wcExtractor.getChainId();
        const genesisForkVersion = await this.genesisForkVersionService.getGenesisForkVersion(chainId);
        const unUsedKeys = catalistKeys
            .filter((catalistKey) => !catalistKey.used)
            .map((catalistKey) => this.catalistKeyToBasicKey(catalistKey, possibleWC.currentWC[1], genesisForkVersion));
        const usedKeys = catalistKeys
            .filter((catalistKey) => catalistKey.used)
            .map((catalistKey) => this.catalistKeyToBasicKey(catalistKey, possibleWC.currentWC[1], genesisForkVersion));
        // 1. first step of validation - unused keys with ONLY current WC
        const unUsedKeysResults = await this.keyValidator.validateKeys(unUsedKeys.map((key) => (Object.assign(Object.assign({}, key), { withdrawalCredentials: possibleWC.currentWC[1] }))));
        let usedKeysResults = [];
        let remainingKeys = usedKeys;
        let notValidKeys = [];
        // TODO solve performance issues when there are many keys
        // 2. second step of validation - used keys with current and multiple previous WC
        for (const wc of [possibleWC.currentWC, ...possibleWC.previousWC]) {
            const resultsForWC = await this.keyValidator.validateKeys(
            // validating keys with previous WC
            remainingKeys.map((key) => (Object.assign(Object.assign({}, key), { withdrawalCredentials: wc[1] }))));
            const validKeys = resultsForWC.filter((res) => res[1]);
            // Adding not valid keys for next iteration
            notValidKeys = resultsForWC.filter((res) => !res[1]);
            remainingKeys = notValidKeys.map((res) => res[0]);
            usedKeysResults = usedKeysResults.concat(validKeys);
        }
        usedKeysResults = usedKeysResults.concat(notValidKeys);
        return usedKeysResults.concat(unUsedKeysResults);
    }
    catalistKeyToBasicKey(catalistKey, withdrawalCredentials, genesisForkVersion) {
        return Object.assign(Object.assign({}, catalistKey), { withdrawalCredentials: withdrawalCredentials, genesisForkVersion });
    }
};
exports.CatalistKeyValidator = tslib.__decorate([
    common.Injectable(),
    di.ImplementsAtRuntime(catalistKeyValidator_interface.CatalistKeyValidatorInterface),
    tslib.__metadata("design:paramtypes", [keyValidator_interface.KeyValidatorInterface,
        withdrawalCredentials_extractor_interface.WithdrawalCredentialsExtractorInterface,
        genesisForkVersion_interface.GenesisForkVersionServiceInterface])
], exports.CatalistKeyValidator);
