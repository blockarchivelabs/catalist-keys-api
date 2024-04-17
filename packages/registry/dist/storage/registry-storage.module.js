'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var common = require('@nestjs/common');
var registryStorage_service = require('./registry-storage.service.js');
var operator_storage = require('./operator.storage.js');
var meta_storage = require('./meta.storage.js');
var key_storage = require('./key.storage.js');
var nestjs = require('@mikro-orm/nestjs');
var key_entity = require('./key.entity.js');
var operator_entity = require('./operator.entity.js');
var meta_entity = require('./meta.entity.js');

var RegistryStorageModule_1;
exports.RegistryStorageModule = RegistryStorageModule_1 = class RegistryStorageModule {
    static forRoot(options) {
        return Object.assign({ global: true }, this.forFeature(options));
    }
    static forRootAsync(options) {
        return Object.assign({ global: true }, this.forFeatureAsync(options));
    }
    static forFeature(options) {
        return {
            module: RegistryStorageModule_1,
            imports: options === null || options === void 0 ? void 0 : options.imports,
        };
    }
    static forFeatureAsync(options) {
        return {
            module: RegistryStorageModule_1,
            imports: options.imports,
        };
    }
};
exports.RegistryStorageModule = RegistryStorageModule_1 = tslib.__decorate([
    common.Module({
        imports: [
            nestjs.MikroOrmModule.forFeature({
                entities: [key_entity.RegistryKey, operator_entity.RegistryOperator, meta_entity.RegistryMeta],
            }),
        ],
        providers: [
            registryStorage_service.RegistryStorageService,
            operator_storage.RegistryOperatorStorageService,
            meta_storage.RegistryMetaStorageService,
            key_storage.RegistryKeyStorageService,
        ],
        exports: [
            registryStorage_service.RegistryStorageService,
            operator_storage.RegistryOperatorStorageService,
            meta_storage.RegistryMetaStorageService,
            key_storage.RegistryKeyStorageService,
        ],
    })
], exports.RegistryStorageModule);
