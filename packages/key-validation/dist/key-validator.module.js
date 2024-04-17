'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var common = require('@nestjs/common');
var keyValidator = require('./services/key-validator.js');
var multiThreadedKeyValidatorExecutor = require('./services/multi-threaded-key-validator-executor.js');
var singleThreadedKeyValidatorExecutor = require('./services/single-threaded-key-validator-executor.js');
var keyValidator_interface = require('./interfaces/key-validator.interface.js');
var keyValidator_executor_interface = require('./interfaces/key-validator.executor.interface.js');

var KeyValidatorModule_1;
const getDefaultKeyValidatorModuleProviders = (options) => [
    {
        provide: keyValidator_interface.KeyValidatorInterface,
        useClass: keyValidator.KeyValidator,
    },
    {
        provide: keyValidator_executor_interface.KeyValidatorExecutorInterface,
        useClass: options
            ? options.multithreaded
                ? multiThreadedKeyValidatorExecutor.MultiThreadedKeyValidatorExecutor
                : singleThreadedKeyValidatorExecutor.SingleThreadedKeyValidatorExecutor
            : multiThreadedKeyValidatorExecutor.MultiThreadedKeyValidatorExecutor,
    },
];
exports.KeyValidatorModule = KeyValidatorModule_1 = class KeyValidatorModule {
    static forRoot(options) {
        return Object.assign({ global: true }, this.forFeature(options));
    }
    static forFeature(options) {
        return {
            imports: [],
            module: KeyValidatorModule_1,
            providers: getDefaultKeyValidatorModuleProviders(options),
            exports: [keyValidator_interface.KeyValidatorInterface],
        };
    }
};
exports.KeyValidatorModule = KeyValidatorModule_1 = tslib.__decorate([
    common.Module({})
], exports.KeyValidatorModule);

exports.getDefaultKeyValidatorModuleProviders = getDefaultKeyValidatorModuleProviders;
