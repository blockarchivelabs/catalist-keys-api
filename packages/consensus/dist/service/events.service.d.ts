import { ConsensusMethodResult } from '../interfaces/consensus.interface';
import { ConsensusBaseService } from './base.service';
export declare class ConsensusEventsService extends ConsensusBaseService {
    /** Provides endpoint to subscribe to beacon node Consensus-Sent-Events stream. */
    eventstream(): ConsensusMethodResult<'eventstream'>;
}
