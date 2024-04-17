import { RegistryMeta } from './meta.entity';
import { RegistryMetaRepository } from './meta.repository';
export declare class RegistryMetaStorageService {
    private readonly repository;
    constructor(repository: RegistryMetaRepository);
    /** returns meta */
    get(): Promise<RegistryMeta | null>;
    /** removes meta */
    remove(): Promise<number>;
    /** saves meta */
    save(registryMeta: RegistryMeta): Promise<void>;
}
