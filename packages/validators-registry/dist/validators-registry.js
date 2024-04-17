'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var common = require('@nestjs/common');
var consensus = require('@catalist-nestjs/consensus');
var validators_stream = require('./utils/validators.stream.js');
var core = require('@mikro-orm/core');
var primitives = require('./types/primitives.js');
var calcEpoch = require('./utils/calc-epoch.js');
var storage_service_interface = require('./storage/storage.service.interface.js');
var blockHeader_type = require('./types/block-header.type.js');
var consensusDataInvalid_error = require('./errors/consensus-data-invalid.error.js');
var parse = require('./utils/parse.js');
var validator_type = require('./types/validator.type.js');
var consensusMeta_type = require('./types/consensus-meta.type.js');

exports.ValidatorsRegistry = class ValidatorsRegistry {
    constructor(consensusService, storageService) {
        this.consensusService = consensusService;
        this.storageService = storageService;
    }
    /**
     * @inheritDoc
     */
    async getMeta() {
        return this.storageService.getConsensusMeta();
    }
    /**
     * @inheritDoc
     */
    async getValidators(pubkeys, where, options) {
        return this.storageService.getValidatorsAndMeta(pubkeys, where, options);
    }
    isNewDataInConsensus(previousMeta, currentBlockHeader) {
        return previousMeta.slot < currentBlockHeader.slot;
    }
    /**
     * @inheritDoc
     */
    async update(blockId) {
        const previousMeta = await this.storageService.getConsensusMeta();
        const blockHeader = await this.getSlotHeaderFromConsensus(blockId);
        if (previousMeta && !this.isNewDataInConsensus(previousMeta, blockHeader)) {
            return previousMeta;
        }
        const consensusMeta = await this.getConsensusMetaFromConsensus(blockHeader.root);
        const validators = await this.getValidatorsFromConsensus(consensusMeta.slotStateRoot);
        await this.storageService.updateValidatorsAndMeta(validators, consensusMeta);
        return consensusMeta;
    }
    async updateStream(blockId) {
        const previousMeta = await this.storageService.getConsensusMeta();
        const blockHeader = await this.getSlotHeaderFromConsensus(blockId);
        if (previousMeta && !this.isNewDataInConsensus(previousMeta, blockHeader)) {
            return previousMeta;
        }
        const consensusMeta = await this.getConsensusMetaFromConsensus(blockHeader.root);
        const em = this.storageService.getEntityManager();
        await em.transactional(async () => {
            const validators = await this.getValidatorsFromConsensusStream(consensusMeta.slotStateRoot);
            await this.storageService.deleteValidators();
            await this.storageService.updateMeta(consensusMeta);
            const callback = (validatorsChunk) => this.storageService.updateValidators(validatorsChunk);
            await validators_stream.processValidatorsStream(validators, callback);
        }, { isolationLevel: core.IsolationLevel.READ_COMMITTED });
        return consensusMeta;
    }
    async getValidatorsFromConsensusStream(slotRoot) {
        const validatorsData = await this.consensusService.getStateValidatorsStream({
            stateId: slotRoot,
        });
        return validatorsData;
    }
    async getValidatorsFromConsensus(slotRoot) {
        const validatorsData = await this.consensusService.getStateValidators({
            stateId: slotRoot,
        });
        const validators = validatorsData === null || validatorsData === void 0 ? void 0 : validatorsData.data;
        if (!Array.isArray(validators)) {
            throw new consensusDataInvalid_error.ConsensusDataInvalidError(`Validators must be array`);
        }
        return validators.map((validator) => {
            var _a;
            // runtime type check
            /* istanbul ignore next */
            return parse.parseAsTypeOrFail(validator_type.Validator, {
                pubkey: (_a = validator.validator) === null || _a === void 0 ? void 0 : _a.pubkey,
                index: validator.index,
                status: validator.status,
            }, (error) => {
                throw new consensusDataInvalid_error.ConsensusDataInvalidError(`Got invalid validators`, error);
            });
        });
    }
    async getSlotHeaderFromConsensus(blockId) {
        var _a, _b, _c, _d;
        const header = await this.consensusService.getBlockHeader({
            blockId: blockId.toString(),
        });
        /* istanbul ignore next */
        const root = (_a = header === null || header === void 0 ? void 0 : header.data) === null || _a === void 0 ? void 0 : _a.root;
        /* istanbul ignore next */
        const slot = (_d = (_c = (_b = header === null || header === void 0 ? void 0 : header.data) === null || _b === void 0 ? void 0 : _b.header) === null || _c === void 0 ? void 0 : _c.message) === null || _d === void 0 ? void 0 : _d.slot;
        /**
         * TODO Should we have an option to check `execution_optimistic === false`
         */
        return parse.parseAsTypeOrFail(blockHeader_type.BlockHeader, {
            root,
            slot,
        }, (error) => {
            throw new consensusDataInvalid_error.ConsensusDataInvalidError(`Got invalid block header`, error);
        });
    }
    async getConsensusMetaFromConsensus(blockId) {
        var _a, _b, _c, _d, _e, _f;
        const block = await this.consensusService.getBlockV2({
            blockId: blockId,
        });
        /* istanbul ignore next */
        const beaconBlockBody = (_b = (_a = block === null || block === void 0 ? void 0 : block.data) === null || _a === void 0 ? void 0 : _a.message) === null || _b === void 0 ? void 0 : _b.body;
        const executionPayload = beaconBlockBody && 'execution_payload' in beaconBlockBody
            ? beaconBlockBody.execution_payload
            : null;
        if (!executionPayload) {
            throw new consensusDataInvalid_error.ConsensusDataInvalidError(`No execution_payload data in a block`);
        }
        /* istanbul ignore next */
        const slot = parse.parseAsTypeOrFail(primitives.Slot, (_d = (_c = block === null || block === void 0 ? void 0 : block.data) === null || _c === void 0 ? void 0 : _c.message) === null || _d === void 0 ? void 0 : _d.slot, (error) => {
            throw new consensusDataInvalid_error.ConsensusDataInvalidError(`Got invalid slot`, error);
        });
        const epoch = calcEpoch.calcEpochBySlot(slot);
        /* istanbul ignore next */
        const slotStateRoot = (_f = (_e = block === null || block === void 0 ? void 0 : block.data) === null || _e === void 0 ? void 0 : _e.message) === null || _f === void 0 ? void 0 : _f.state_root;
        /* istanbul ignore next */
        const blockNumber = executionPayload.block_number;
        const blockHash = executionPayload.block_hash;
        const timestamp = executionPayload.timestamp;
        /* istanbul ignore next */
        return parse.parseAsTypeOrFail(consensusMeta_type.ConsensusMeta, {
            epoch,
            slot,
            slotStateRoot,
            blockNumber,
            blockHash,
            timestamp,
        }, (error) => {
            throw new consensusDataInvalid_error.ConsensusDataInvalidError(`Got invalid ConsensusMeta`, error);
        });
    }
};
exports.ValidatorsRegistry = tslib.__decorate([
    common.Injectable(),
    tslib.__metadata("design:paramtypes", [consensus.ConsensusService,
        storage_service_interface.StorageServiceInterface])
], exports.ValidatorsRegistry);
