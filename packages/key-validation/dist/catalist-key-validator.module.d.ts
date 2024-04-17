import { DynamicModule, Provider } from '@nestjs/common';
import { KeyValidatorModuleSyncOptions } from './interfaces/module.options';
export declare const getDefaultCatalistKeyValidatorModuleProviders: () => Provider[];
export declare class CatalistKeyValidatorModule {
    static forRoot(options?: KeyValidatorModuleSyncOptions): DynamicModule;
    static forFeature(options?: KeyValidatorModuleSyncOptions): DynamicModule;
}
