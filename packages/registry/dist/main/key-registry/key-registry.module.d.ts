import { DynamicModule } from '@nestjs/common';
import { RegistryModuleSyncOptions, RegistryModuleAsyncOptions } from '../interfaces/module.interface';
export declare class KeyRegistryModule {
    static forRoot(options?: RegistryModuleSyncOptions): DynamicModule;
    static forRootAsync(options: RegistryModuleAsyncOptions): DynamicModule;
    static forFeature(options?: RegistryModuleSyncOptions): DynamicModule;
    static forFeatureAsync(options: RegistryModuleAsyncOptions): DynamicModule;
}
