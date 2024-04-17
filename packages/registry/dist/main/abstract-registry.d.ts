/// <reference types="node" />
import { LoggerService } from '@nestjs/common';
import { Registry } from '@catalist-nestjs/contracts';
import { EntityManager } from '@mikro-orm/knex';
import EventEmitter from 'events';
import { CronJob } from 'cron';
import { RegistryMetaFetchService } from '../fetch/meta.fetch';
import { RegistryKeyFetchService } from '../fetch/key.fetch';
import { RegistryOperatorFetchService } from '../fetch/operator.fetch';
import { RegistryMetaStorageService } from '../storage/meta.storage';
import { RegistryKeyStorageService } from '../storage/key.storage';
import { RegistryOperatorStorageService } from '../storage/operator.storage';
import { RegistryMeta } from '../storage/meta.entity';
import { RegistryKey } from '../storage/key.entity';
import { RegistryOperator } from '../storage/operator.entity';
import { RegistryOptions } from './interfaces/module.interface';
export declare abstract class AbstractRegistryService {
    protected registryContract: Registry;
    protected logger: LoggerService;
    protected readonly metaFetch: RegistryMetaFetchService;
    protected readonly metaStorage: RegistryMetaStorageService;
    protected readonly keyFetch: RegistryKeyFetchService;
    protected readonly keyStorage: RegistryKeyStorageService;
    protected readonly operatorFetch: RegistryOperatorFetchService;
    protected readonly operatorStorage: RegistryOperatorStorageService;
    protected readonly entityManager: EntityManager;
    options?: RegistryOptions | undefined;
    constructor(registryContract: Registry, logger: LoggerService, metaFetch: RegistryMetaFetchService, metaStorage: RegistryMetaStorageService, keyFetch: RegistryKeyFetchService, keyStorage: RegistryKeyStorageService, operatorFetch: RegistryOperatorFetchService, operatorStorage: RegistryOperatorStorageService, entityManager: EntityManager, options?: RegistryOptions | undefined);
    eventEmitter: EventEmitter;
    cronJob: CronJob;
    protected cronHandler(): Promise<void>;
    protected collectListenerCount(): number;
    subscribe(cb: (error: null | Error, payload: RegistryKey[]) => void): () => void;
    /** collects changed data from the contract and store it to the db */
    update(blockHashOrBlockTag: string | number): Promise<RegistryMeta | undefined>;
    /** contract */
    /** returns the meta data from the contract */
    getMetaDataFromContract(blockHashOrBlockTag: string | number): Promise<RegistryMeta>;
    /** returns operators from the contract */
    getOperatorsFromContract(blockHash: string): Promise<import("../fetch/interfaces/operator.interface").RegistryOperator[]>;
    /** returns the right border of the update keys range */
    abstract getToIndex(currOperator: RegistryOperator): number;
    /** returns updated keys from the contract */
    getUpdatedKeysFromContract(previousOperators: RegistryOperator[], currentOperators: RegistryOperator[], blockHash: string): Promise<import("../fetch/interfaces/key.interface").RegistryKey[]>;
    /** storage */
    /** returns the latest meta data from the db */
    getMetaDataFromStorage(): Promise<RegistryMeta | null>;
    /** returns the latest operators data from the db */
    getOperatorsFromStorage(): Promise<RegistryOperator[]>;
    /** returns all the keys from storage */
    getOperatorsKeysFromStorage(): Promise<RegistryKey[]>;
    /** saves all the data to the db */
    save(updatedKeys: RegistryKey[], currentOperators: RegistryOperator[], currMeta: RegistryMeta): Promise<void>;
    /** clears the db */
    clear(): Promise<void>;
}
