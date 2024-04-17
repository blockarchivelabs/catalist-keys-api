'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core = require('@mikro-orm/core');
var common = require('@nestjs/common');
var key_entity = require('./key.entity.js');
var key_repository = require('./key.repository.js');

exports.RegistryKeyStorageService = class RegistryKeyStorageService {
    constructor(repository) {
        this.repository = repository;
    }
    /** find keys */
    async find(where, options) {
        return await this.repository.find(where, options);
    }
    /** find all keys */
    async findAll() {
        return await this.repository.findAll({
            orderBy: [{ operatorIndex: core.QueryOrder.ASC }, { index: core.QueryOrder.ASC }],
        });
    }
    /** find used keys */
    async findUsed() {
        return await this.repository.find({ used: true });
    }
    /** find all keys by operator */
    async findByOperatorIndex(operatorIndex) {
        return await this.repository.find({ operatorIndex });
    }
    /** find key by pubkey */
    async findByPubkey(key) {
        return await this.repository.find({ key: key.toLocaleLowerCase() });
    }
    /** find key by signature */
    async findBySignature(depositSignature) {
        depositSignature = depositSignature.toLocaleLowerCase();
        return await this.repository.find({ depositSignature });
    }
    /** find key by index */
    async findOneByIndex(operatorIndex, keyIndex) {
        return await this.repository.findOne({ operatorIndex, index: keyIndex });
    }
    /** removes key by index */
    async removeOneByIndex(operatorIndex, keyIndex) {
        return await this.repository.nativeDelete({
            operatorIndex,
            index: keyIndex,
        });
    }
    /** removes all keys */
    async removeAll() {
        return await this.repository.nativeDelete({});
    }
    /** saves key to storage */
    async saveOne(operatorKey) {
        const key = new key_entity.RegistryKey(operatorKey);
        return await this.repository.persistAndFlush(key);
    }
    /** saves multiply keys to storage */
    async save(operatorKeys) {
        const result = await Promise.all(operatorKeys.map(async (operatorKey) => {
            const instance = new key_entity.RegistryKey(operatorKey);
            return await this.repository.persist(instance);
        }));
        await this.repository.flush();
        return result;
    }
};
exports.RegistryKeyStorageService = tslib.__decorate([
    common.Injectable(),
    tslib.__metadata("design:paramtypes", [key_repository.RegistryKeyRepository])
], exports.RegistryKeyStorageService);
