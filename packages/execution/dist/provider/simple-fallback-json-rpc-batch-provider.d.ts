import { BaseProvider, Formatter } from '@ethersproject/providers';
import { CallOverrides as CallOverridesSource } from '@ethersproject/contracts';
import { SimpleFallbackProviderConfig } from '../interfaces/simple-fallback-provider-config';
import { Network } from '@ethersproject/networks';
import { LoggerService } from '@nestjs/common';
import { FallbackProvider } from '../interfaces/fallback-provider';
import { BlockTag } from '../ethers/block-tag';
import { BigNumber, BigNumberish } from '@ethersproject/bignumber';
import { Deferrable } from '@ethersproject/properties';
import { TransactionRequest } from '@ethersproject/abstract-provider/src.ts/index';
import { EventType, Listener } from '@ethersproject/abstract-provider';
import { FeeHistory } from '../ethers/fee-history';
import { TraceConfig, TraceResult } from '../interfaces/debug-traces';
/**
 * EIP-1898 support
 * https://eips.ethereum.org/EIPS/eip-1898
 */
declare module '@ethersproject/providers' {
    interface BaseProvider {
        getBalance(addressOrName: string | Promise<string>, blockTag?: BlockTag | Promise<BlockTag>): Promise<BigNumber>;
        getTransactionCount(addressOrName: string | Promise<string>, blockTag?: BlockTag | Promise<BlockTag>): Promise<number>;
        getCode(addressOrName: string | Promise<string>, blockTag?: BlockTag | Promise<BlockTag>): Promise<string>;
        getStorageAt(addressOrName: string | Promise<string>, position: BigNumberish | Promise<BigNumberish>, blockTag?: BlockTag | Promise<BlockTag>): Promise<string>;
        call(transaction: Deferrable<TransactionRequest>, blockTag?: BlockTag | Promise<BlockTag>): Promise<string>;
    }
    interface CallOverrides extends Omit<CallOverridesSource, 'blockTag'> {
        blockTag?: BlockTag;
    }
}
export declare class SimpleFallbackJsonRpcBatchProvider extends BaseProvider {
    protected config: SimpleFallbackProviderConfig;
    protected logger: LoggerService;
    protected fallbackProviders: [FallbackProvider];
    protected activeFallbackProviderIndex: number;
    protected detectNetworkFirstRun: boolean;
    protected resetTimer: ReturnType<typeof setTimeout> | null;
    protected lastPerformError: Error | null | unknown;
    protected lastError: Error | null | unknown;
    constructor(config: SimpleFallbackProviderConfig, logger: LoggerService);
    static _formatter: Formatter | null;
    static getFormatter(): Formatter;
    on(eventName: EventType, listener: Listener): this;
    getFeeHistory(blockCount: number, newestBlock?: string | null | number, rewardPercentiles?: number[]): Promise<FeeHistory>;
    getDebugTraceBlockByHash(blockHash: string, traceConfig: Partial<TraceConfig>): Promise<TraceResult[]>;
    protected get provider(): FallbackProvider;
    protected switchToNextProvider(): void;
    protected isNonRetryableError(error: Error | unknown): boolean;
    perform(method: string, params: {
        [name: string]: unknown;
    }): Promise<unknown>;
    detectNetwork(): Promise<Network>;
    protected resetFallbacks(): void;
    protected networksEqual(networkA: Network, networkB: Network): boolean;
    get activeProviderIndex(): number;
}
