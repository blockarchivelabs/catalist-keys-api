'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core = require('@mikro-orm/core');
var consensusMeta_repository = require('./consensus-meta.repository.js');

exports.ConsensusMetaEntity = class ConsensusMetaEntity {
    constructor(meta) {
        // only one meta will exist in table
        this.id = 0;
        this.slot = meta.slot;
        this.epoch = meta.epoch;
        this.slotStateRoot = meta.slotStateRoot;
        this.blockNumber = meta.blockNumber;
        this.blockHash = meta.blockHash;
        this.timestamp = meta.timestamp;
    }
};
tslib.__decorate([
    core.PrimaryKey({
        type: core.t.smallint,
        default: 0,
        unique: true,
        autoincrement: false,
    }),
    tslib.__metadata("design:type", Object)
], exports.ConsensusMetaEntity.prototype, "id", void 0);
tslib.__decorate([
    core.Property({ type: core.t.integer }),
    tslib.__metadata("design:type", Number)
], exports.ConsensusMetaEntity.prototype, "epoch", void 0);
tslib.__decorate([
    core.Property({ type: core.t.integer }),
    tslib.__metadata("design:type", Number)
], exports.ConsensusMetaEntity.prototype, "slot", void 0);
tslib.__decorate([
    core.Property({ type: core.t.string, length: 66 }),
    tslib.__metadata("design:type", String)
], exports.ConsensusMetaEntity.prototype, "slotStateRoot", void 0);
tslib.__decorate([
    core.PrimaryKey({ type: core.t.integer }),
    tslib.__metadata("design:type", Number)
], exports.ConsensusMetaEntity.prototype, "blockNumber", void 0);
tslib.__decorate([
    core.Property({ type: core.t.string, length: 66 }),
    tslib.__metadata("design:type", String)
], exports.ConsensusMetaEntity.prototype, "blockHash", void 0);
tslib.__decorate([
    core.Property({ type: core.t.integer }),
    tslib.__metadata("design:type", Number)
], exports.ConsensusMetaEntity.prototype, "timestamp", void 0);
exports.ConsensusMetaEntity = tslib.__decorate([
    core.Entity({
        tableName: 'consensus_meta',
        customRepository: () => consensusMeta_repository.ConsensusMetaRepository,
    }),
    tslib.__metadata("design:paramtypes", [Object])
], exports.ConsensusMetaEntity);
