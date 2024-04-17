import { BigNumber } from '@ethersproject/bignumber';
import { ExtendedJsonRpcBatchProvider } from '../provider/extended-json-rpc-batch-provider';
import { SimpleFallbackJsonRpcBatchProvider } from '../provider/simple-fallback-json-rpc-batch-provider';
export declare const MIN_BLOCKCOUNT = 1;
export declare const MAX_BLOCKCOUNT = 1024;
export interface FeeHistory {
    oldestBlock: number;
    baseFeePerGas: BigNumber[];
    gasUsedRatio: number[];
    reward: BigNumber[][];
}
export declare function getFeeHistory(this: ExtendedJsonRpcBatchProvider | SimpleFallbackJsonRpcBatchProvider, blockCount: number, newestBlock?: string | null | number, rewardPercentiles?: number[]): Promise<FeeHistory>;
