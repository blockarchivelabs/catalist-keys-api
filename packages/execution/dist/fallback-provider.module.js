'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var common = require('@nestjs/common');
var extendedJsonRpcBatchProvider = require('./provider/extended-json-rpc-batch-provider.js');
var constants = require('./constants/constants.js');
var simpleFallbackJsonRpcBatchProvider = require('./provider/simple-fallback-json-rpc-batch-provider.js');
var logger = require('@catalist-nestjs/logger');

var FallbackProviderModule_1;
const getModuleProviders = (options) => {
    return [
        {
            provide: simpleFallbackJsonRpcBatchProvider.SimpleFallbackJsonRpcBatchProvider,
            useFactory: (logger) => {
                return new simpleFallbackJsonRpcBatchProvider.SimpleFallbackJsonRpcBatchProvider(options, logger);
            },
            inject: [logger.LOGGER_PROVIDER],
        },
        {
            provide: extendedJsonRpcBatchProvider.ExtendedJsonRpcBatchProvider,
            useFactory: () => {
                return new extendedJsonRpcBatchProvider.ExtendedJsonRpcBatchProvider(options.urls[0], undefined, // options.network,
                options.requestPolicy, options.fetchMiddlewares);
            },
        },
    ];
};
exports.FallbackProviderModule = FallbackProviderModule_1 = class FallbackProviderModule {
    static forRoot(options) {
        return Object.assign({ global: true }, this.forFeature(options));
    }
    static forFeature(options) {
        return {
            module: FallbackProviderModule_1,
            imports: options.imports,
            providers: getModuleProviders(options),
            exports: [simpleFallbackJsonRpcBatchProvider.SimpleFallbackJsonRpcBatchProvider],
        };
    }
    static forRootAsync(options) {
        return Object.assign({ global: true }, this.forFeatureAsync(options));
    }
    static forFeatureAsync(options) {
        return {
            module: FallbackProviderModule_1,
            imports: options.imports,
            providers: [
                {
                    provide: constants.FALLBACK_PROVIDER_MODULE_OPTIONS,
                    useFactory: options.useFactory,
                    inject: options.inject,
                },
                {
                    provide: simpleFallbackJsonRpcBatchProvider.SimpleFallbackJsonRpcBatchProvider,
                    useFactory: (logger, options) => {
                        return new simpleFallbackJsonRpcBatchProvider.SimpleFallbackJsonRpcBatchProvider(options, logger);
                    },
                    inject: [logger.LOGGER_PROVIDER, constants.FALLBACK_PROVIDER_MODULE_OPTIONS],
                },
                ...(options.providers || []),
            ],
            exports: [simpleFallbackJsonRpcBatchProvider.SimpleFallbackJsonRpcBatchProvider],
        };
    }
};
exports.FallbackProviderModule = FallbackProviderModule_1 = tslib.__decorate([
    common.Module({})
], exports.FallbackProviderModule);
