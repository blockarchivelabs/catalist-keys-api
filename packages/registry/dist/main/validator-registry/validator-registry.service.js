'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var abstractRegistry = require('../abstract-registry.js');

class ValidatorRegistryService extends abstractRegistry.AbstractRegistryService {
    getToIndex(currOperator) {
        // the right border for updating range is used keys
        return currOperator.usedSigningKeys;
    }
    /** returns used keys from the db */
    async getValidatorsKeysFromStorage() {
        return await this.keyStorage.findUsed();
    }
}

exports.ValidatorRegistryService = ValidatorRegistryService;
