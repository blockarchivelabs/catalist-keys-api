'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var common = require('@nestjs/common');
var core = require('@mikro-orm/core');

exports.RegistryStorageService = class RegistryStorageService {
    constructor(orm) {
        this.orm = orm;
    }
    async onModuleDestroy() {
        await this.orm.close();
    }
};
exports.RegistryStorageService = tslib.__decorate([
    common.Injectable(),
    tslib.__metadata("design:paramtypes", [core.MikroORM])
], exports.RegistryStorageService);
