'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core = require('@mikro-orm/core');
var meta_repository = require('./meta.repository.js');

exports.RegistryMeta = class RegistryMeta {
    constructor(meta) {
        this.blockNumber = meta.blockNumber;
        this.blockHash = meta.blockHash.toLocaleLowerCase();
        this.keysOpIndex = meta.keysOpIndex;
        this.timestamp = meta.timestamp;
    }
};
tslib.__decorate([
    core.PrimaryKey(),
    tslib.__metadata("design:type", Number)
], exports.RegistryMeta.prototype, "blockNumber", void 0);
tslib.__decorate([
    core.Property({ length: 66 }),
    tslib.__metadata("design:type", String)
], exports.RegistryMeta.prototype, "blockHash", void 0);
tslib.__decorate([
    core.Property(),
    tslib.__metadata("design:type", Number)
], exports.RegistryMeta.prototype, "keysOpIndex", void 0);
tslib.__decorate([
    core.Property(),
    tslib.__metadata("design:type", Number)
], exports.RegistryMeta.prototype, "timestamp", void 0);
exports.RegistryMeta = tslib.__decorate([
    core.Entity({ customRepository: () => meta_repository.RegistryMetaRepository }),
    tslib.__metadata("design:paramtypes", [exports.RegistryMeta])
], exports.RegistryMeta);
