import { ConsensusMethodResult } from './consensus.interface';
export interface ConsensusSubscribeCallback {
    (error: ConsensusSubscribeError, block: ConsensusSubscribeBlock): void;
}
export declare type ConsensusSubscribeError = unknown | null;
export declare type ConsensusSubscribeBlock = Awaited<ConsensusMethodResult<'getBlock'>>['data'] | null;
