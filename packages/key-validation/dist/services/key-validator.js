'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var common = require('@nestjs/common');
var di = require('@catalist-nestjs/di');
var keyValidator_interface = require('../interfaces/key-validator.interface.js');
var keyValidator_executor_interface = require('../interfaces/key-validator.executor.interface.js');

exports.KeyValidator = class KeyValidator {
    constructor(executor) {
        this.executor = executor;
    }
    async validateKey(key) {
        return this.executor.validateKey(key);
    }
    async validateKeys(keys) {
        if (keys.length === 0) {
            return [];
        }
        return this.executor.validateKeys(keys);
    }
};
exports.KeyValidator = tslib.__decorate([
    common.Injectable(),
    di.ImplementsAtRuntime(keyValidator_interface.KeyValidatorInterface),
    tslib.__metadata("design:paramtypes", [keyValidator_executor_interface.KeyValidatorExecutorInterface])
], exports.KeyValidator);
