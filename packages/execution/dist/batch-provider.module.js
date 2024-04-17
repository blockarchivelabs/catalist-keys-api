'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var common = require('@nestjs/common');
var extendedJsonRpcBatchProvider = require('./provider/extended-json-rpc-batch-provider.js');
var constants = require('./constants/constants.js');

var BatchProviderModule_1;
const getModuleProviders = (options) => {
    return [
        {
            provide: extendedJsonRpcBatchProvider.ExtendedJsonRpcBatchProvider,
            useFactory: () => {
                return new extendedJsonRpcBatchProvider.ExtendedJsonRpcBatchProvider(options.url, options.network, options.requestPolicy, options.fetchMiddlewares);
            },
        },
    ];
};
exports.BatchProviderModule = BatchProviderModule_1 = class BatchProviderModule {
    static forRoot(options) {
        return Object.assign({ global: true }, this.forFeature(options));
    }
    static forFeature(options) {
        return {
            module: BatchProviderModule_1,
            imports: options.imports,
            providers: getModuleProviders(options),
            exports: [extendedJsonRpcBatchProvider.ExtendedJsonRpcBatchProvider],
        };
    }
    static forRootAsync(options) {
        return Object.assign({ global: true }, this.forFeatureAsync(options));
    }
    static forFeatureAsync(options) {
        return {
            module: BatchProviderModule_1,
            imports: options.imports,
            providers: [
                {
                    provide: constants.BATCH_PROVIDER_MODULE_OPTIONS,
                    useFactory: options.useFactory,
                    inject: options.inject,
                },
                {
                    provide: extendedJsonRpcBatchProvider.ExtendedJsonRpcBatchProvider,
                    useFactory: (options) => {
                        return new extendedJsonRpcBatchProvider.ExtendedJsonRpcBatchProvider(options.url, options.network, options.requestPolicy, options.fetchMiddlewares);
                    },
                    inject: [constants.BATCH_PROVIDER_MODULE_OPTIONS],
                },
                ...(options.providers || []),
            ],
            exports: [extendedJsonRpcBatchProvider.ExtendedJsonRpcBatchProvider],
        };
    }
};
exports.BatchProviderModule = BatchProviderModule_1 = tslib.__decorate([
    common.Module({})
], exports.BatchProviderModule);
