import { DynamicModule } from '@nestjs/common';
import { IpfsModuleOptions, IpfsModuleOptionsAsync } from './interfaces/ipfs-module-options';
export declare class IpfsModule {
    static forRoot(options: IpfsModuleOptions): DynamicModule;
    static forRootAsync(options: IpfsModuleOptionsAsync): DynamicModule;
    static forFeature(options: IpfsModuleOptions): DynamicModule;
    static forFeatureAsync(options: IpfsModuleOptionsAsync): DynamicModule;
}
