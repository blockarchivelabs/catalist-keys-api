import { DynamicModule } from '@nestjs/common';
import { BatchProviderModuleAsyncOptions, BatchProviderModuleSyncOptions } from './interfaces/module.options';
export declare class BatchProviderModule {
    static forRoot(options: BatchProviderModuleSyncOptions): DynamicModule;
    static forFeature(options: BatchProviderModuleSyncOptions): DynamicModule;
    static forRootAsync(options: BatchProviderModuleAsyncOptions): DynamicModule;
    static forFeatureAsync(options: BatchProviderModuleAsyncOptions): DynamicModule;
}
