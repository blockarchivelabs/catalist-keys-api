'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core = require('@mikro-orm/core');
var common = require('@nestjs/common');
var operator_entity = require('./operator.entity.js');
var operator_repository = require('./operator.repository.js');

exports.RegistryOperatorStorageService = class RegistryOperatorStorageService {
    constructor(repository) {
        this.repository = repository;
    }
    /** find operators */
    async find(where, options) {
        return await this.repository.find(where, options);
    }
    /** find all operators */
    async findAll() {
        return await this.repository.findAll({
            orderBy: [{ index: core.QueryOrder.ASC }],
        });
    }
    /** find operator by index */
    async findOneByIndex(operatorIndex) {
        return await this.repository.findOne({ index: operatorIndex });
    }
    /** removes operator by index */
    async removeOneByIndex(operatorIndex) {
        return await this.repository.nativeDelete({ index: operatorIndex });
    }
    /** removes all operators */
    async removeAll() {
        return await this.repository.nativeDelete({});
    }
    /** saves operator to storage */
    async saveOne(operator) {
        const key = new operator_entity.RegistryOperator(operator);
        return await this.repository.persistAndFlush(key);
    }
    /** saves multiply operators to storage */
    async save(operators) {
        const result = await Promise.all(operators.map(async (operator) => {
            const instance = new operator_entity.RegistryOperator(operator);
            return await this.repository.persist(instance);
        }));
        await this.repository.flush();
        return result;
    }
};
exports.RegistryOperatorStorageService = tslib.__decorate([
    common.Injectable(),
    tslib.__metadata("design:paramtypes", [operator_repository.RegistryOperatorRepository])
], exports.RegistryOperatorStorageService);
