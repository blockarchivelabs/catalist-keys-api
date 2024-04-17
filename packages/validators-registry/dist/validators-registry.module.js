'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var common = require('@nestjs/common');
var validatorsRegistry = require('./validators-registry.js');
var validatorRegistry_interface = require('./interfaces/validator-registry.interface.js');
var storage_module = require('./storage/storage.module.js');

var ValidatorsRegistryModule_1;
exports.ValidatorsRegistryModule = ValidatorsRegistryModule_1 = class ValidatorsRegistryModule {
    static forRoot(options) {
        return Object.assign({ global: true }, this.forFeature(options));
    }
    static forRootAsync(options) {
        return Object.assign({ global: true }, this.forFeatureAsync(options));
    }
    static forFeature(options) {
        return {
            module: ValidatorsRegistryModule_1,
            imports: options === null || options === void 0 ? void 0 : options.imports,
        };
    }
    static forFeatureAsync(options) {
        return {
            module: ValidatorsRegistryModule_1,
            imports: options.imports,
        };
    }
};
exports.ValidatorsRegistryModule = ValidatorsRegistryModule_1 = tslib.__decorate([
    common.Module({
        providers: [
            {
                provide: validatorRegistry_interface.ValidatorsRegistryInterface,
                useClass: validatorsRegistry.ValidatorsRegistry,
            },
        ],
        exports: [validatorRegistry_interface.ValidatorsRegistryInterface],
        imports: [storage_module.StorageModule],
    })
], exports.ValidatorsRegistryModule);
