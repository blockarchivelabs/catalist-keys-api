import { DynamicModule } from '@nestjs/common';
import { FallbackProviderModuleAsyncOptions, FallbackProviderModuleSyncOptions } from './interfaces/module.options';
export declare class FallbackProviderModule {
    static forRoot(options: FallbackProviderModuleSyncOptions): DynamicModule;
    static forFeature(options: FallbackProviderModuleSyncOptions): DynamicModule;
    static forRootAsync(options: FallbackProviderModuleAsyncOptions): DynamicModule;
    static forFeatureAsync(options: FallbackProviderModuleAsyncOptions): DynamicModule;
}
