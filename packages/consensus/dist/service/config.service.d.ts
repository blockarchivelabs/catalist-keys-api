import { ConsensusMethodArgs, ConsensusMethodResult } from '../interfaces/consensus.interface';
import { ConsensusBaseService } from './base.service';
export declare class ConsensusConfigService extends ConsensusBaseService {
    /** Retrieve all forks, past present and future, of which this node is aware. */
    getForkSchedule(args?: ConsensusMethodArgs<'getForkSchedule'>): ConsensusMethodResult<'getForkSchedule'>;
    /** Retrieve specification configuration used on this node. */
    getSpec(args?: ConsensusMethodArgs<'getSpec'>): ConsensusMethodResult<'getSpec'>;
    /** Retrieve Eth1 deposit contract address and chain ID. */
    getDepositContract(args?: ConsensusMethodArgs<'getDepositContract'>): ConsensusMethodResult<'getDepositContract'>;
}
