'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var abstractRegistry = require('../abstract-registry.js');

class KeyRegistryService extends abstractRegistry.AbstractRegistryService {
    getToIndex(currOperator) {
        // the right border for updating range is all operator keys
        return currOperator.totalSigningKeys;
    }
    /** returns all operators keys from the db */
    async getAllKeysFromStorage() {
        return await this.keyStorage.findAll();
    }
    /** returns used keys from the db */
    async getUsedKeysFromStorage() {
        return await this.keyStorage.findUsed();
    }
}

exports.KeyRegistryService = KeyRegistryService;
