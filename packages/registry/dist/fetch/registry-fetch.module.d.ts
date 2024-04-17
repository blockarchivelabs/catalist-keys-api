import { DynamicModule } from '@nestjs/common';
import { RegistryFetchModuleSyncOptions, RegistryFetchModuleAsyncOptions } from './interfaces/module.interface';
export declare class RegistryFetchModule {
    static forRoot(options?: RegistryFetchModuleSyncOptions): DynamicModule;
    static forRootAsync(options: RegistryFetchModuleAsyncOptions): DynamicModule;
    static forFeature(options?: RegistryFetchModuleSyncOptions): DynamicModule;
    static forFeatureAsync(options: RegistryFetchModuleAsyncOptions): DynamicModule;
}
