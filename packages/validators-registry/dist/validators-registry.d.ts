/// <reference types="node" />
import { ConsensusService } from '@catalist-nestjs/consensus';
import { ValidatorsRegistryInterface, BlockId } from './interfaces';
import { BlockHeader, Validator, ConsensusMeta, ConsensusValidatorsAndMetadata } from './types';
import { FindOptions, FilterQuery, StorageServiceInterface } from './storage';
import { ConsensusValidatorEntity } from './storage/consensus-validator.entity';
export declare class ValidatorsRegistry implements ValidatorsRegistryInterface {
    protected readonly consensusService: ConsensusService;
    protected readonly storageService: StorageServiceInterface;
    constructor(consensusService: ConsensusService, storageService: StorageServiceInterface);
    /**
     * @inheritDoc
     */
    getMeta(): Promise<ConsensusMeta | null>;
    /**
     * @inheritDoc
     */
    getValidators(pubkeys?: string[], where?: FilterQuery<ConsensusValidatorEntity>, options?: FindOptions<ConsensusValidatorEntity>): Promise<ConsensusValidatorsAndMetadata>;
    protected isNewDataInConsensus(previousMeta: ConsensusMeta, currentBlockHeader: BlockHeader): boolean;
    /**
     * @inheritDoc
     */
    update(blockId: BlockId): Promise<ConsensusMeta>;
    updateStream(blockId: BlockId): Promise<ConsensusMeta>;
    protected getValidatorsFromConsensusStream(slotRoot: string): Promise<NodeJS.ReadableStream>;
    protected getValidatorsFromConsensus(slotRoot: string): Promise<Validator[]>;
    protected getSlotHeaderFromConsensus(blockId: BlockId): Promise<BlockHeader>;
    protected getConsensusMetaFromConsensus(blockId: string): Promise<ConsensusMeta>;
}
