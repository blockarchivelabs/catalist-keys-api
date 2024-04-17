import { DynamicModule } from '@nestjs/common';
import { RegistryStorageModuleSyncOptions, RegistryStorageModuleAsyncOptions } from './interfaces/module.interface';
export declare class RegistryStorageModule {
    static forRoot(options?: RegistryStorageModuleSyncOptions): DynamicModule;
    static forRootAsync(options: RegistryStorageModuleAsyncOptions): DynamicModule;
    static forFeature(options?: RegistryStorageModuleSyncOptions): DynamicModule;
    static forFeatureAsync(options: RegistryStorageModuleAsyncOptions): DynamicModule;
}
