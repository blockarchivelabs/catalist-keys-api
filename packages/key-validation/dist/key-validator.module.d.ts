import { DynamicModule, Provider } from '@nestjs/common';
import { KeyValidatorModuleOptions, KeyValidatorModuleSyncOptions } from './interfaces/module.options';
export declare const getDefaultKeyValidatorModuleProviders: (options?: KeyValidatorModuleOptions | undefined) => Provider[];
export declare class KeyValidatorModule {
    static forRoot(options?: KeyValidatorModuleSyncOptions): DynamicModule;
    static forFeature(options?: KeyValidatorModuleSyncOptions): DynamicModule;
}
