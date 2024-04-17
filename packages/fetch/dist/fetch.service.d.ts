/// <reference types="node" />
import { Response } from 'node-fetch';
import { MiddlewareService } from '@catalist-nestjs/middleware';
import { RequestInfo, RequestInit, FetchModuleOptions } from './interfaces/fetch.interface';
export declare class FetchService {
    options: FetchModuleOptions | null;
    private middlewareService;
    constructor(options: FetchModuleOptions | null, middlewareService: MiddlewareService<Promise<Response>>);
    fetchJson<T>(url: RequestInfo, options?: RequestInit): Promise<T>;
    fetchText(url: RequestInfo, options?: RequestInit): Promise<string>;
    fetchStream(url: RequestInfo, options?: RequestInit): Promise<NodeJS.ReadableStream>;
    protected wrappedRequest(url: RequestInfo, options?: RequestInit): Promise<Response>;
    protected request(url: RequestInfo, options?: RequestInit, attempt?: number): Promise<Response>;
    protected delay(options?: RequestInit): Promise<void>;
    protected extractErrorBody(response: Response): Promise<string | Record<string, unknown>>;
    protected getRetryAttempts(options?: RequestInit): number;
    protected getDelayTimeout(options?: RequestInit): number;
    protected getBaseUrl(attempt: number): string | null;
    protected getUrl(baseUrl: string | null, url: RequestInfo): RequestInfo;
    protected isAbsoluteUrl(url: string): boolean;
}
