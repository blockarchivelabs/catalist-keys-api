'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var common = require('@nestjs/common');
var keyRegistry_service = require('./key-registry.service.js');
var registryStorage_module = require('../../storage/registry-storage.module.js');
var registryFetch_module = require('../../fetch/registry-fetch.module.js');
var constants = require('../constants.js');

var KeyRegistryModule_1;
exports.KeyRegistryModule = KeyRegistryModule_1 = class KeyRegistryModule {
    static forRoot(options) {
        return Object.assign({ global: true }, this.forFeature(options));
    }
    static forRootAsync(options) {
        return Object.assign({ global: true }, this.forFeatureAsync(options));
    }
    static forFeature(options) {
        return {
            module: KeyRegistryModule_1,
            imports: [
                ...((options === null || options === void 0 ? void 0 : options.imports) || []),
                registryFetch_module.RegistryFetchModule.forFeature(options),
            ],
            providers: [
                {
                    provide: constants.REGISTRY_GLOBAL_OPTIONS_TOKEN,
                    useValue: options,
                },
            ],
            exports: [registryFetch_module.RegistryFetchModule],
        };
    }
    static forFeatureAsync(options) {
        return {
            module: KeyRegistryModule_1,
            imports: [
                ...(options.imports || []),
                registryFetch_module.RegistryFetchModule.forFeatureAsync(options),
            ],
            providers: [
                {
                    provide: constants.REGISTRY_GLOBAL_OPTIONS_TOKEN,
                    useFactory: options.useFactory,
                },
            ],
            exports: [registryFetch_module.RegistryFetchModule],
        };
    }
};
exports.KeyRegistryModule = KeyRegistryModule_1 = tslib.__decorate([
    common.Module({
        imports: [registryStorage_module.RegistryStorageModule],
        providers: [keyRegistry_service.KeyRegistryService],
        exports: [keyRegistry_service.KeyRegistryService, registryStorage_module.RegistryStorageModule],
    })
], exports.KeyRegistryModule);
