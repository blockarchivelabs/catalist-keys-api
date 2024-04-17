import { DynamicModule } from '@nestjs/common';
import { ConsensusMetaEntity } from './consensus-meta.entity';
import { ConsensusValidatorEntity } from './consensus-validator.entity';
import { StorageModuleAsyncOptions, StorageModuleSyncOptions } from './interfaces';
export declare class StorageModule {
    static readonly entities: (typeof ConsensusMetaEntity | typeof ConsensusValidatorEntity)[];
    static forRoot(options?: StorageModuleSyncOptions): DynamicModule;
    static forRootAsync(options: StorageModuleAsyncOptions): DynamicModule;
    static forFeature(options?: StorageModuleSyncOptions): DynamicModule;
    static forFeatureAsync(options: StorageModuleAsyncOptions): DynamicModule;
}
