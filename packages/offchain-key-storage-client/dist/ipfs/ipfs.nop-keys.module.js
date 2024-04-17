'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../node_modules/tslib/tslib.es6.js');
var common = require('@nestjs/common');
var ipfs_nopKeys_service = require('./ipfs.nop-keys.service.js');

var IpfsNopKeysModule_1;
exports.IpfsNopKeysModule = IpfsNopKeysModule_1 = class IpfsNopKeysModule {
    static forRoot(options) {
        return Object.assign({ global: true }, this.forFeature(options));
    }
    static forFeature(options) {
        const { imports } = options;
        return {
            module: IpfsNopKeysModule_1,
            imports,
        };
    }
};
exports.IpfsNopKeysModule = IpfsNopKeysModule_1 = tslib_es6.__decorate([
    common.Module({
        providers: [ipfs_nopKeys_service.IpfsNopKeysService],
        exports: [ipfs_nopKeys_service.IpfsNopKeysService],
    })
], exports.IpfsNopKeysModule);
