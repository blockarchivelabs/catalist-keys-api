'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var consensusMeta_entity = require('./consensus-meta.entity.js');
var common = require('@nestjs/common');
var core = require('@mikro-orm/core');
var index = require('../constants/index.js');
var consensusValidator_entity = require('./consensus-validator.entity.js');
var parse = require('../utils/parse.js');
var chunk = require('../utils/src/chunk.js');
var mapSet = require('../utils/map-set.js');
var consensusDataInvalid_error = require('../errors/consensus-data-invalid.error.js');
var validator_type = require('../types/validator.type.js');
var consensusMeta_type = require('../types/consensus-meta.type.js');

exports.StorageService = class StorageService {
    constructor(orm) {
        this.orm = orm;
    }
    async onModuleDestroy() {
        await this.orm.close();
    }
    get entityManager() {
        // It will automatically pick the request specific context under the hood, or use global entity manager
        return this.orm.em;
    }
    getEntityManager() {
        return this.entityManager;
    }
    async deleteValidators() {
        await this.orm.em.getRepository(consensusValidator_entity.ConsensusValidatorEntity).nativeDelete({});
    }
    async updateValidators(validators) {
        const validatorsChecked = parse.parseAsTypeOrFail(validator_type.Validators, validators, (error) => {
            throw new consensusDataInvalid_error.ConsensusDataInvalidError('Got invalid Validators when writing to storage', error);
        });
        const validatorsPartitions = chunk.chunk(validatorsChecked, index.NUM_VALIDATORS_MAX_CHUNK);
        const promises = validatorsPartitions.map((x) => this.orm.em
            .getRepository(consensusValidator_entity.ConsensusValidatorEntity)
            .createQueryBuilder()
            .insert(x)
            .execute());
        await Promise.all(promises);
    }
    /**
     * @inheritDoc
     */
    async getConsensusMeta() {
        const metaEntities = await this.entityManager
            .getRepository(consensusMeta_entity.ConsensusMetaEntity)
            .find({}, {
            orderBy: { blockNumber: core.QueryOrder.DESC },
            limit: 1,
        });
        const metaEntity = metaEntities.pop();
        if (!metaEntity) {
            // default meta
            return null;
        }
        return {
            epoch: metaEntity.epoch,
            slot: metaEntity.slot,
            blockNumber: metaEntity.blockNumber,
            blockHash: metaEntity.blockHash,
            slotStateRoot: metaEntity.slotStateRoot,
            timestamp: metaEntity.timestamp,
        };
    }
    /**
     * @inheritDoc
     */
    async updateValidatorsAndMeta(validators, meta) {
        return this.entityManager.transactional(async () => {
            await this.deleteValidators();
            await this.updateMeta(meta);
            await this.updateValidators(validators);
        }, { isolationLevel: core.IsolationLevel.READ_COMMITTED });
    }
    /**
     * @inheritDoc
     */
    async updateMeta(meta) {
        const metaChecked = parse.parseAsTypeOrFail(consensusMeta_type.ConsensusMeta, meta, (error) => {
            throw new consensusDataInvalid_error.ConsensusDataInvalidError('Got invalid ConsensusMeta when writing to storage', error);
        });
        const metaEntity = new consensusMeta_entity.ConsensusMetaEntity(metaChecked);
        await this.entityManager
            .getRepository(consensusMeta_entity.ConsensusMetaEntity)
            .upsert(metaEntity);
    }
    async getValidators(pubkeys, where, options) {
        const pubkeysSet = this.pubkeysToSet(pubkeys);
        const whereInPubkeys = pubkeysSet && pubkeysSet.size <= 100
            ? {
                pubkey: { $in: [...pubkeysSet.values()] },
            }
            : null;
        let qb = this.entityManager
            .createQueryBuilder(consensusValidator_entity.ConsensusValidatorEntity)
            .where(where !== null && where !== void 0 ? where : {});
        if (whereInPubkeys) {
            qb = qb.andWhere(whereInPubkeys);
        }
        if (options && options.orderBy) {
            qb = qb.orderBy(options.orderBy);
        }
        const rawValidators = await qb.execute('all', false);
        const validators = rawValidators.map((v) => ({
            index: v.index,
            status: v.status,
            pubkey: v.pubkey,
        }));
        return pubkeysSet && whereInPubkeys === null
            ? validators.filter((v) => pubkeysSet.has(v.pubkey))
            : validators;
    }
    /**
     * @inheritDoc
     */
    async getValidatorsAndMeta(pubkeys, where, options) {
        return this.entityManager.transactional(async () => {
            const meta = await this.getConsensusMeta();
            if (meta === null) {
                return {
                    meta,
                    validators: [],
                };
            }
            const validators = await this.getValidators(pubkeys, where, options);
            return {
                meta,
                validators,
            };
        }, { isolationLevel: core.IsolationLevel.REPEATABLE_READ });
    }
    pubkeysToSet(pubkeys) {
        return Array.isArray(pubkeys)
            ? mapSet.mapSet(new Set(pubkeys), (s) => s.toLocaleLowerCase())
            : null;
    }
};
exports.StorageService = tslib.__decorate([
    common.Injectable(),
    tslib.__metadata("design:paramtypes", [core.MikroORM])
], exports.StorageService);
