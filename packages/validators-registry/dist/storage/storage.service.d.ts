import { ConsensusMeta, ConsensusValidatorsAndMetadata, Validator } from '../types';
import { StorageServiceInterface } from './storage.service.interface';
import { OnModuleDestroy } from '@nestjs/common';
import { MikroORM } from '@mikro-orm/core';
import { ConsensusValidatorEntity } from './consensus-validator.entity';
import { EntityManager } from '@mikro-orm/knex';
import { FindOptions, FilterQuery } from './interfaces';
export declare class StorageService implements StorageServiceInterface, OnModuleDestroy {
    protected readonly orm: MikroORM;
    constructor(orm: MikroORM);
    onModuleDestroy(): Promise<void>;
    protected get entityManager(): EntityManager;
    getEntityManager(): EntityManager;
    deleteValidators(): Promise<void>;
    updateValidators(validators: Validator[]): Promise<void>;
    /**
     * @inheritDoc
     */
    getConsensusMeta(): Promise<ConsensusMeta | null>;
    /**
     * @inheritDoc
     */
    updateValidatorsAndMeta(validators: Validator[], meta: ConsensusMeta): Promise<void>;
    /**
     * @inheritDoc
     */
    updateMeta(meta: ConsensusMeta): Promise<void>;
    getValidators(pubkeys?: string[], where?: FilterQuery<ConsensusValidatorEntity>, options?: FindOptions<ConsensusValidatorEntity>): Promise<Validator[]>;
    /**
     * @inheritDoc
     */
    getValidatorsAndMeta(pubkeys?: string[], where?: FilterQuery<ConsensusValidatorEntity>, options?: FindOptions<ConsensusValidatorEntity>): Promise<ConsensusValidatorsAndMetadata>;
    protected pubkeysToSet(pubkeys?: string[]): Set<string> | null;
}
