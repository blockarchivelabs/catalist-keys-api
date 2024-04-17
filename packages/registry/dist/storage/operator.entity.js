'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core = require('@mikro-orm/core');
var operator_repository = require('./operator.repository.js');

exports.RegistryOperator = class RegistryOperator {
    constructor(operator) {
        this.index = operator.index;
        this.active = operator.active;
        this.name = operator.name;
        this.rewardAddress = operator.rewardAddress.toLocaleLowerCase();
        this.stakingLimit = operator.stakingLimit;
        this.stoppedValidators = operator.stoppedValidators;
        this.totalSigningKeys = operator.totalSigningKeys;
        this.usedSigningKeys = operator.usedSigningKeys;
    }
};
tslib.__decorate([
    core.PrimaryKey(),
    tslib.__metadata("design:type", Number)
], exports.RegistryOperator.prototype, "index", void 0);
tslib.__decorate([
    core.Property(),
    tslib.__metadata("design:type", Boolean)
], exports.RegistryOperator.prototype, "active", void 0);
tslib.__decorate([
    core.Property({ length: 256 }),
    tslib.__metadata("design:type", String)
], exports.RegistryOperator.prototype, "name", void 0);
tslib.__decorate([
    core.Property({ length: 42 }),
    tslib.__metadata("design:type", String)
], exports.RegistryOperator.prototype, "rewardAddress", void 0);
tslib.__decorate([
    core.Property(),
    tslib.__metadata("design:type", Number)
], exports.RegistryOperator.prototype, "stakingLimit", void 0);
tslib.__decorate([
    core.Property(),
    tslib.__metadata("design:type", Number)
], exports.RegistryOperator.prototype, "stoppedValidators", void 0);
tslib.__decorate([
    core.Property(),
    tslib.__metadata("design:type", Number)
], exports.RegistryOperator.prototype, "totalSigningKeys", void 0);
tslib.__decorate([
    core.Property(),
    tslib.__metadata("design:type", Number)
], exports.RegistryOperator.prototype, "usedSigningKeys", void 0);
exports.RegistryOperator = tslib.__decorate([
    core.Entity({ customRepository: () => operator_repository.RegistryOperatorRepository }),
    tslib.__metadata("design:paramtypes", [exports.RegistryOperator])
], exports.RegistryOperator);
