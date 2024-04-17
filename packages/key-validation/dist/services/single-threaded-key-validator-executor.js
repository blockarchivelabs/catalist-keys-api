'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var validateOneKey = require('../common/validate-one-key.js');

class SingleThreadedKeyValidatorExecutor {
    async validateKey(key) {
        return validateOneKey.validateOneKey(key.key, key.depositSignature, key.withdrawalCredentials, key.genesisForkVersion, key.amount, key.domainDeposit, key.zeroHash);
    }
    async validateKeys(keys) {
        return Promise.all(keys.map(async (key) => [key, await this.validateKey(key)]));
    }
}

exports.SingleThreadedKeyValidatorExecutor = SingleThreadedKeyValidatorExecutor;
