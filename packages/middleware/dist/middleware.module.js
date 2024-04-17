'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var common = require('@nestjs/common');
var middleware_constants = require('./middleware.constants.js');
var middleware_service = require('./middleware.service.js');

var MiddlewareModule_1;
exports.MiddlewareModule = MiddlewareModule_1 = class MiddlewareModule {
    static forRoot(options) {
        return Object.assign({ global: true }, this.forFeature(options));
    }
    static forRootAsync(options) {
        return Object.assign({ global: true }, this.forFeatureAsync(options));
    }
    static forFeature(options) {
        return {
            module: MiddlewareModule_1,
            providers: [
                {
                    provide: middleware_constants.MIDDLEWARE_OPTIONS_TOKEN,
                    useValue: options !== null && options !== void 0 ? options : null,
                },
            ],
        };
    }
    static forFeatureAsync(options) {
        return {
            module: MiddlewareModule_1,
            imports: options.imports,
            providers: [
                {
                    provide: middleware_constants.MIDDLEWARE_OPTIONS_TOKEN,
                    useFactory: options.useFactory,
                    inject: options.inject,
                },
            ],
        };
    }
};
exports.MiddlewareModule = MiddlewareModule_1 = tslib.__decorate([
    common.Module({
        providers: [middleware_service.MiddlewareService],
        exports: [middleware_service.MiddlewareService],
    })
], exports.MiddlewareModule);
