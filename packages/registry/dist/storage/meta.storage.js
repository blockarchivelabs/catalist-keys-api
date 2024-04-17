'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var common = require('@nestjs/common');
var core = require('@mikro-orm/core');
var meta_entity = require('./meta.entity.js');
var meta_repository = require('./meta.repository.js');

exports.RegistryMetaStorageService = class RegistryMetaStorageService {
    constructor(repository) {
        this.repository = repository;
    }
    /** returns meta */
    async get() {
        var _a;
        const result = await this.repository.find({}, { orderBy: { blockNumber: core.QueryOrder.DESC }, limit: 1 });
        return (_a = result[0]) !== null && _a !== void 0 ? _a : null;
    }
    /** removes meta */
    async remove() {
        return await this.repository.nativeDelete({});
    }
    /** saves meta */
    async save(registryMeta) {
        const metaData = new meta_entity.RegistryMeta(registryMeta);
        return await this.repository.persistAndFlush(metaData);
    }
};
exports.RegistryMetaStorageService = tslib.__decorate([
    common.Injectable(),
    tslib.__metadata("design:paramtypes", [meta_repository.RegistryMetaRepository])
], exports.RegistryMetaStorageService);
