import { EntityRepositoryType, PrimaryKeyType } from '@mikro-orm/core';
import { RegistryKeyRepository } from './key.repository';
export declare class RegistryKey {
    [EntityRepositoryType]?: RegistryKeyRepository;
    [PrimaryKeyType]?: [number, number];
    constructor(operatorKey: RegistryKey);
    index: number;
    operatorIndex: number;
    key: string;
    depositSignature: string;
    used: boolean;
}
