import { DynamicModule } from '@nestjs/common';
import { FetchModuleOptions, FetchModuleAsyncOptions } from './interfaces/fetch.interface';
export declare class FetchModule {
    static forRoot(options?: FetchModuleOptions): DynamicModule;
    static forRootAsync(options: FetchModuleAsyncOptions): DynamicModule;
    static forFeature(options?: FetchModuleOptions): DynamicModule;
    static forFeatureAsync(options: FetchModuleAsyncOptions): DynamicModule;
}
