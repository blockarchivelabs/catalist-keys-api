import { ModuleMetadata } from '@nestjs/common';
export declare const IpfsModuleOptions: import("@catalist-nestjs/di").InterfaceTag<IpfsModuleOptions>;
export interface IpfsModuleOptions extends Pick<ModuleMetadata, 'imports'> {
    url: string;
    username?: string;
    password?: string;
}
export interface IpfsModuleOptionsAsync extends Pick<ModuleMetadata, 'imports'> {
    useFactory: (...args: any[]) => Promise<IpfsModuleOptions> | IpfsModuleOptions;
    inject: any[];
}
