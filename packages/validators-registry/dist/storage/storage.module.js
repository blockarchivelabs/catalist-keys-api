'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var common = require('@nestjs/common');
var nestjs = require('@mikro-orm/nestjs');
var consensusMeta_entity = require('./consensus-meta.entity.js');
var consensusValidator_entity = require('./consensus-validator.entity.js');
var storage_service_interface = require('./storage.service.interface.js');
var storage_service = require('./storage.service.js');

var StorageModule_1;
const entities = [consensusMeta_entity.ConsensusMetaEntity, consensusValidator_entity.ConsensusValidatorEntity];
exports.StorageModule = StorageModule_1 = class StorageModule {
    static forRoot(options) {
        return Object.assign({ global: true }, this.forFeature(options));
    }
    static forRootAsync(options) {
        return Object.assign({ global: true }, this.forFeatureAsync(options));
    }
    static forFeature(options) {
        return {
            module: StorageModule_1,
            imports: options === null || options === void 0 ? void 0 : options.imports,
        };
    }
    static forFeatureAsync(options) {
        return {
            module: StorageModule_1,
            imports: options.imports,
        };
    }
};
exports.StorageModule.entities = entities;
exports.StorageModule = StorageModule_1 = tslib.__decorate([
    common.Module({
        imports: [
            nestjs.MikroOrmModule.forFeature({
                entities,
            }),
        ],
        providers: [
            {
                provide: storage_service_interface.StorageServiceInterface,
                useClass: storage_service.StorageService,
            },
        ],
        exports: [storage_service_interface.StorageServiceInterface],
    })
], exports.StorageModule);
