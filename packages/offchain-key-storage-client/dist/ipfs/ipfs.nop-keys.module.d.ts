import { DynamicModule } from '@nestjs/common';
import { ModuleMetadata } from '@nestjs/common';
declare type NopIpfsModuleOptions = Pick<ModuleMetadata, 'imports'>;
export declare class IpfsNopKeysModule {
    static forRoot(options: NopIpfsModuleOptions): DynamicModule;
    static forFeature(options: NopIpfsModuleOptions): DynamicModule;
}
export {};
