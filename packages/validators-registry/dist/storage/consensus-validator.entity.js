'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core = require('@mikro-orm/core');
var consensusValidator_repository = require('./consensus-validator.repository.js');

exports.ConsensusValidatorEntity = class ConsensusValidatorEntity {
};
tslib.__decorate([
    core.PrimaryKey({ type: core.t.string, length: 98 }),
    tslib.__metadata("design:type", String)
], exports.ConsensusValidatorEntity.prototype, "pubkey", void 0);
tslib.__decorate([
    core.Property({ type: core.t.integer }),
    core.Unique({ name: 'index' }),
    tslib.__metadata("design:type", Number)
], exports.ConsensusValidatorEntity.prototype, "index", void 0);
tslib.__decorate([
    core.Property({ length: 128 }),
    core.Index({ name: 'idx_consensus_validator__status' }),
    tslib.__metadata("design:type", String)
], exports.ConsensusValidatorEntity.prototype, "status", void 0);
exports.ConsensusValidatorEntity = tslib.__decorate([
    core.Entity({
        tableName: 'consensus_validator',
        customRepository: () => consensusValidator_repository.ConsensusValidatorRepository,
    })
], exports.ConsensusValidatorEntity);
