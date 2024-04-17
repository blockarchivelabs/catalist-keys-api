import { DynamicModule } from '@nestjs/common';
import { ValidatorsRegistryModuleSyncOptions, ValidatorsRegistryModuleAsyncOptions } from './interfaces';
export declare class ValidatorsRegistryModule {
    static forRoot(options?: ValidatorsRegistryModuleSyncOptions): DynamicModule;
    static forRootAsync(options: ValidatorsRegistryModuleAsyncOptions): DynamicModule;
    static forFeature(options?: ValidatorsRegistryModuleSyncOptions): DynamicModule;
    static forFeatureAsync(options: ValidatorsRegistryModuleAsyncOptions): DynamicModule;
}
