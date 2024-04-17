'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var common = require('@nestjs/common');
var contracts = require('@catalist-nestjs/contracts');
var operator_fetch = require('./operator.fetch.js');
var meta_fetch = require('./meta.fetch.js');
var key_fetch = require('./key.fetch.js');
var registryFetch_service = require('./registry-fetch.service.js');

var RegistryFetchModule_1;
exports.RegistryFetchModule = RegistryFetchModule_1 = class RegistryFetchModule {
    static forRoot(options) {
        return Object.assign({ global: true }, this.forFeature(options));
    }
    static forRootAsync(options) {
        return Object.assign({ global: true }, this.forFeatureAsync(options));
    }
    static forFeature(options) {
        return {
            module: RegistryFetchModule_1,
            imports: [
                ...((options === null || options === void 0 ? void 0 : options.imports) || []),
                contracts.CatalistContractModule.forFeature({
                    address: options === null || options === void 0 ? void 0 : options.catalistAddress,
                    provider: options === null || options === void 0 ? void 0 : options.provider,
                }),
                contracts.RegistryContractModule.forFeature({
                    address: options === null || options === void 0 ? void 0 : options.registryAddress,
                    provider: options === null || options === void 0 ? void 0 : options.provider,
                }),
            ],
            exports: [contracts.CatalistContractModule, contracts.RegistryContractModule],
        };
    }
    static forFeatureAsync(options) {
        return {
            module: RegistryFetchModule_1,
            imports: [
                ...(options.imports || []),
                contracts.CatalistContractModule.forFeatureAsync({
                    async useFactory(...args) {
                        const config = await options.useFactory(...args);
                        const { provider, catalistAddress } = config;
                        return { provider, address: catalistAddress };
                    },
                    inject: options.inject,
                }),
                contracts.RegistryContractModule.forFeatureAsync({
                    async useFactory(...args) {
                        const config = await options.useFactory(...args);
                        const { provider, registryAddress } = config;
                        return { provider, address: registryAddress };
                    },
                    inject: options.inject,
                }),
            ],
            exports: [contracts.CatalistContractModule, contracts.RegistryContractModule],
        };
    }
};
exports.RegistryFetchModule = RegistryFetchModule_1 = tslib.__decorate([
    common.Module({
        providers: [
            registryFetch_service.RegistryFetchService,
            operator_fetch.RegistryOperatorFetchService,
            meta_fetch.RegistryMetaFetchService,
            key_fetch.RegistryKeyFetchService,
        ],
        exports: [
            registryFetch_service.RegistryFetchService,
            operator_fetch.RegistryOperatorFetchService,
            meta_fetch.RegistryMetaFetchService,
            key_fetch.RegistryKeyFetchService,
        ],
    })
], exports.RegistryFetchModule);
