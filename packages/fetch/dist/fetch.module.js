'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var common = require('@nestjs/common');
var middleware = require('@catalist-nestjs/middleware');
var fetch_constants = require('./fetch.constants.js');
var fetch_service = require('./fetch.service.js');

var FetchModule_1;
exports.FetchModule = FetchModule_1 = class FetchModule {
    static forRoot(options) {
        return Object.assign({ global: true }, this.forFeature(options));
    }
    static forRootAsync(options) {
        return Object.assign({ global: true }, this.forFeatureAsync(options));
    }
    static forFeature(options) {
        return {
            module: FetchModule_1,
            providers: [
                {
                    provide: fetch_constants.FETCH_GLOBAL_OPTIONS_TOKEN,
                    useValue: options,
                },
            ],
        };
    }
    static forFeatureAsync(options) {
        return {
            module: FetchModule_1,
            imports: options.imports,
            providers: [
                {
                    provide: fetch_constants.FETCH_GLOBAL_OPTIONS_TOKEN,
                    useFactory: options.useFactory,
                    inject: options.inject,
                },
            ],
        };
    }
};
exports.FetchModule = FetchModule_1 = tslib.__decorate([
    common.Module({
        imports: [middleware.MiddlewareModule],
        providers: [fetch_service.FetchService],
        exports: [fetch_service.FetchService],
    })
], exports.FetchModule);
