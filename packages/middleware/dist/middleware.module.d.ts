import { DynamicModule } from '@nestjs/common';
import { MiddlewareModuleOptions, MiddlewareModuleAsyncOptions } from './interfaces/middleware.interface';
export declare class MiddlewareModule {
    static forRoot<T = unknown>(options?: MiddlewareModuleOptions<T>): DynamicModule;
    static forRootAsync<T = unknown>(options: MiddlewareModuleAsyncOptions<T>): DynamicModule;
    static forFeature<T = unknown>(options?: MiddlewareModuleOptions<T>): DynamicModule;
    static forFeatureAsync<T = unknown>(options: MiddlewareModuleAsyncOptions<T>): DynamicModule;
}
