import { ConsensusMethodArgs, ConsensusMethodResult } from '../interfaces/consensus.interface';
import { ConsensusBaseService } from './base.service';
export declare class ConsensusNodeService extends ConsensusBaseService {
    /** Retrieves data about the node's network presence */
    getNetworkIdentity(args?: ConsensusMethodArgs<'getNetworkIdentity'>): ConsensusMethodResult<'getNetworkIdentity'>;
    /** Retrieves data about the node's network peers. By default this returns all peers. Multiple query params are combined using AND conditions */
    getPeers(args?: ConsensusMethodArgs<'getPeers'>): ConsensusMethodResult<'getPeers'>;
    /** Retrieves data about the given peer */
    getPeer(args: ConsensusMethodArgs<'getPeer'>): ConsensusMethodResult<'getPeer'>;
    /** Retrieves number of known peers. */
    getPeerCount(args?: ConsensusMethodArgs<'getPeerCount'>): ConsensusMethodResult<'getPeerCount'>;
    /** Requests that the beacon node identify information about its implementation in a format similar to a [HTTP User-Agent](https://tools.ietf.org/html/rfc7231#section-5.5.3) field. */
    getNodeVersion(args?: ConsensusMethodArgs<'getNodeVersion'>): ConsensusMethodResult<'getNodeVersion'>;
    /** Requests the beacon node to describe if it's currently syncing or not, and if it is, what block it is up to. */
    getSyncingStatus(args?: ConsensusMethodArgs<'getSyncingStatus'>): ConsensusMethodResult<'getSyncingStatus'>;
    /** Returns node health status in http status codes. Useful for load balancers. */
    getHealth(args?: ConsensusMethodArgs<'getHealth'>): ConsensusMethodResult<'getHealth'>;
}
