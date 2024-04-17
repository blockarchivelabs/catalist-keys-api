import { ConsensusMethodArgs, ConsensusMethodResult } from '../interfaces/consensus.interface';
import { ConsensusBaseService } from './base.service';
export declare class ConsensusDebugService extends ConsensusBaseService {
    /** Returns full BeaconState object for given stateId. */
    getState(args: ConsensusMethodArgs<'getState'>): ConsensusMethodResult<'getState'>;
    /** Returns full BeaconState object for given stateId. */
    getStateV2(args: ConsensusMethodArgs<'getStateV2'>): ConsensusMethodResult<'getStateV2'>;
    /** Retrieves all possible chain heads (leaves of fork choice tree). */
    getDebugChainHeads(args?: ConsensusMethodArgs<'getDebugChainHeads'>): ConsensusMethodResult<'getDebugChainHeads'>;
    /** Retrieves all possible chain heads (leaves of fork choice tree). */
    getDebugChainHeadsV2(args?: ConsensusMethodArgs<'getDebugChainHeadsV2'>): ConsensusMethodResult<'getDebugChainHeadsV2'>;
}
