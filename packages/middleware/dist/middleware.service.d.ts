import { MiddlewareModuleOptions, MiddlewareCallback, MiddlewareNext } from './interfaces/middleware.interface';
export declare class MiddlewareService<T> {
    private options;
    constructor(options: MiddlewareModuleOptions<T> | undefined);
    use(callback: MiddlewareCallback<T>): void;
    go: (next: MiddlewareNext<T>, _?: any) => T;
}
