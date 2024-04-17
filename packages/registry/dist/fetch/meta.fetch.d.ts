import { Registry } from '@catalist-nestjs/contracts';
import { CallOverrides } from './interfaces/overrides.interface';
export declare class RegistryMetaFetchService {
    private registryContract;
    constructor(registryContract: Registry);
    /** fetches keys operation index */
    fetchKeysOpIndex(overrides?: CallOverrides): Promise<number>;
}
