/// <reference types="node" />
import { Deferrable } from '@ethersproject/properties';
import { ConnectionInfo, FetchJsonResponse } from '@ethersproject/web';
import { Formatter, JsonRpcProvider } from '@ethersproject/providers';
import { Network, Networkish } from '@ethersproject/networks';
import { Queue } from '../common/queue';
import { LimitFunction } from '../common/promise-limit';
import { BigNumber, BigNumberish } from '@ethersproject/bignumber';
import { BlockTag } from '../ethers/block-tag';
import { TransactionRequest } from '@ethersproject/abstract-provider/src.ts/index';
import { MiddlewareCallback, MiddlewareService } from '@catalist-nestjs/middleware';
import { FeeHistory } from '../ethers/fee-history';
import { TraceConfig, TraceResult } from '../interfaces/debug-traces';
export interface RequestPolicy {
    jsonRpcMaxBatchSize: number;
    maxConcurrentRequests: number;
    batchAggregationWaitMs: number;
}
export interface JsonRpcRequest {
    method: string;
    params: Array<unknown>;
    id: number;
    jsonrpc: '2.0';
}
export interface JsonRpcResponse {
    jsonrpc: '2.0';
    id: number;
    result?: unknown;
    error?: {
        code: number;
        message: string;
        data?: unknown;
    };
}
export interface FullRequestIntent {
    request: JsonRpcRequest;
    resolve: (result: unknown) => void;
    reject: (error: Error) => void;
}
export interface RequestIntent {
    request: FullRequestIntent['request'];
    resolve: FullRequestIntent['resolve'] | null;
    reject: FullRequestIntent['reject'] | null;
}
export declare type PartialRequestIntent = RequestIntent | {
    request: RequestIntent['request'];
    resolve: null;
    reject: null;
};
/**
 * EIP-1898 support
 * https://eips.ethereum.org/EIPS/eip-1898
 */
declare module '@ethersproject/providers' {
    interface JsonRpcProvider {
        getBalance(addressOrName: string | Promise<string>, blockTag?: BlockTag | Promise<BlockTag>): Promise<BigNumber>;
        getTransactionCount(addressOrName: string | Promise<string>, blockTag?: BlockTag | Promise<BlockTag>): Promise<number>;
        getCode(addressOrName: string | Promise<string>, blockTag?: BlockTag | Promise<BlockTag>): Promise<string>;
        getStorageAt(addressOrName: string | Promise<string>, position: BigNumberish | Promise<BigNumberish>, blockTag?: BlockTag | Promise<BlockTag>): Promise<string>;
        call(transaction: Deferrable<TransactionRequest>, blockTag?: BlockTag | Promise<BlockTag>): Promise<string>;
    }
}
export declare class ExtendedJsonRpcBatchProvider extends JsonRpcProvider {
    protected _batchAggregator: NodeJS.Timeout | null;
    protected _queue: Queue<FullRequestIntent>;
    protected _requestPolicy: RequestPolicy;
    protected _concurrencyLimiter: LimitFunction;
    protected _tickCounter: number;
    protected _fetchMiddlewareService: MiddlewareService<Promise<any>>;
    constructor(url: ConnectionInfo | string, network?: Networkish, requestPolicy?: RequestPolicy, fetchMiddlewares?: MiddlewareCallback<Promise<any>>[]);
    static _formatter: Formatter | null;
    static getFormatter(): Formatter;
    protected _batchAggregatorTick(): void;
    protected _startBatchAggregator(): void;
    getFeeHistory(blockCount: number, newestBlock?: string | null | number, rewardPercentiles?: number[]): Promise<FeeHistory>;
    getDebugTraceBlockByHash(blockHash: string, traceConfig: TraceConfig): Promise<TraceResult[]>;
    prepareRequest(method: string, params: any): [string, Array<any>];
    use(callback: MiddlewareCallback<Promise<any>>): void;
    send(method: string, params: Array<unknown>): Promise<unknown>;
    detectNetwork(): Promise<Network>;
    protected fetchJson(connection: string | ConnectionInfo, json?: string, processFunc?: (value: any, response: FetchJsonResponse) => any): Promise<any>;
}
