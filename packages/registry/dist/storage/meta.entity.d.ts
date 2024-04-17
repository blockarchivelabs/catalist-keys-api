import { EntityRepositoryType } from '@mikro-orm/core';
import { RegistryMetaRepository } from './meta.repository';
export declare class RegistryMeta {
    [EntityRepositoryType]?: RegistryMetaRepository;
    constructor(meta: RegistryMeta);
    blockNumber: number;
    blockHash: string;
    keysOpIndex: number;
    timestamp: number;
}
