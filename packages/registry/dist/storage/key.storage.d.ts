import { FilterQuery, FindOptions } from '@mikro-orm/core';
import { RegistryKey } from './key.entity';
import { RegistryKeyRepository } from './key.repository';
export declare class RegistryKeyStorageService {
    private readonly repository;
    constructor(repository: RegistryKeyRepository);
    /** find keys */
    find<P extends string = never>(where: FilterQuery<RegistryKey>, options?: FindOptions<RegistryKey, P>): Promise<RegistryKey[]>;
    /** find all keys */
    findAll(): Promise<RegistryKey[]>;
    /** find used keys */
    findUsed(): Promise<RegistryKey[]>;
    /** find all keys by operator */
    findByOperatorIndex(operatorIndex: number): Promise<RegistryKey[]>;
    /** find key by pubkey */
    findByPubkey(key: string): Promise<RegistryKey[]>;
    /** find key by signature */
    findBySignature(depositSignature: string): Promise<RegistryKey[]>;
    /** find key by index */
    findOneByIndex(operatorIndex: number, keyIndex: number): Promise<RegistryKey | null>;
    /** removes key by index */
    removeOneByIndex(operatorIndex: number, keyIndex: number): Promise<number>;
    /** removes all keys */
    removeAll(): Promise<number>;
    /** saves key to storage */
    saveOne(operatorKey: RegistryKey): Promise<void>;
    /** saves multiply keys to storage */
    save(operatorKeys: RegistryKey[]): Promise<import("@mikro-orm/core").EntityManager<import("@mikro-orm/core").IDatabaseDriver<import("@mikro-orm/core").Connection>>[]>;
}
