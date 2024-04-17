import { DynamicModule } from '@nestjs/common';
import { Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';
import { ContractFactoryOptions, ContractModuleAsyncOptions, ContractModuleSyncOptions } from './interfaces/contract.interface';
import { ContractFactory } from './interfaces/factory.interface';
import { ModuleRef } from '@nestjs/core';
export declare class ContractModule {
    static module: typeof ContractModule;
    static contractFactory: ContractFactory;
    static contractToken: symbol;
    static defaultAddresses: Record<number, string>;
    static forRoot(options?: ContractModuleSyncOptions): DynamicModule;
    static forRootAsync(options: ContractModuleAsyncOptions): DynamicModule;
    static forFeature(options?: ContractModuleSyncOptions): DynamicModule;
    static forFeatureAsync(options: ContractModuleAsyncOptions): DynamicModule;
    protected static factory(moduleRef: ModuleRef, options?: ContractFactoryOptions): Promise<any>;
    protected static detectChainId(providerOrSigner: Signer | Provider): Promise<number>;
    protected static extractAddress(address: string | undefined, providerOrSigner: Signer | Provider, addressMap: Record<number, string>): Promise<string>;
}
