'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../node_modules/tslib/tslib.es6.js');
var common = require('@nestjs/common');
var fetch = require('@catalist-nestjs/fetch');
var ipfsModuleOptions = require('./interfaces/ipfs-module-options.js');
var ipfs_general_service = require('./ipfs.general.service.js');

var IpfsModule_1;
exports.IpfsModule = IpfsModule_1 = class IpfsModule {
    static forRoot(options) {
        return Object.assign({ global: true }, this.forFeature(options));
    }
    static forRootAsync(options) {
        return Object.assign({ global: true }, this.forFeatureAsync(options));
    }
    static forFeature(options) {
        const { imports } = options, opts = tslib_es6.__rest(options, ["imports"]);
        return {
            module: IpfsModule_1,
            imports,
            providers: [
                {
                    provide: ipfs_general_service.IpfsGeneralService,
                    // FetchServiceInterface
                    useFactory: (fetchService) => {
                        return new ipfs_general_service.IpfsGeneralService(fetchService, opts.url, opts.username, opts.password);
                    },
                    inject: [fetch.FetchService],
                },
            ],
            exports: [ipfs_general_service.IpfsGeneralService],
        };
    }
    static forFeatureAsync(options) {
        const { imports } = options;
        return {
            module: IpfsModule_1,
            imports,
            providers: [
                {
                    provide: ipfsModuleOptions.IpfsModuleOptions,
                    useFactory: options.useFactory,
                    inject: options.inject,
                },
                {
                    provide: ipfs_general_service.IpfsGeneralService,
                    useFactory: (fetchService, ipfsModuleOptions) => {
                        return new ipfs_general_service.IpfsGeneralService(fetchService, ipfsModuleOptions.url, ipfsModuleOptions.username, ipfsModuleOptions.password);
                    },
                    inject: [fetch.FetchService, ipfsModuleOptions.IpfsModuleOptions],
                },
            ],
            exports: [ipfs_general_service.IpfsGeneralService],
        };
    }
};
exports.IpfsModule = IpfsModule_1 = tslib_es6.__decorate([
    common.Module({})
], exports.IpfsModule);
