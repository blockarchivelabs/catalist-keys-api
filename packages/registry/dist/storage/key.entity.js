'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core = require('@mikro-orm/core');
var key_repository = require('./key.repository.js');

exports.RegistryKey = class RegistryKey {
    constructor(operatorKey) {
        this.index = operatorKey.index;
        this.operatorIndex = operatorKey.operatorIndex;
        this.key = operatorKey.key.toLocaleLowerCase();
        this.depositSignature = operatorKey.depositSignature.toLocaleLowerCase();
        this.used = operatorKey.used;
    }
};
tslib.__decorate([
    core.PrimaryKey(),
    tslib.__metadata("design:type", Number)
], exports.RegistryKey.prototype, "index", void 0);
tslib.__decorate([
    core.PrimaryKey(),
    tslib.__metadata("design:type", Number)
], exports.RegistryKey.prototype, "operatorIndex", void 0);
tslib.__decorate([
    core.Property({ length: 98 }),
    tslib.__metadata("design:type", String)
], exports.RegistryKey.prototype, "key", void 0);
tslib.__decorate([
    core.Property({ length: 194 }),
    tslib.__metadata("design:type", String)
], exports.RegistryKey.prototype, "depositSignature", void 0);
tslib.__decorate([
    core.Property(),
    tslib.__metadata("design:type", Boolean)
], exports.RegistryKey.prototype, "used", void 0);
exports.RegistryKey = tslib.__decorate([
    core.Entity({ customRepository: () => key_repository.RegistryKeyRepository }),
    tslib.__metadata("design:paramtypes", [exports.RegistryKey])
], exports.RegistryKey);
