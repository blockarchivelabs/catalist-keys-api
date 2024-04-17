import { ConsensusMethodArgs, ConsensusMethodResult } from '../interfaces/consensus.interface';
import { ConsensusBaseService } from './base.service';
export declare class ConsensusValidatorService extends ConsensusBaseService {
    /** Requests the beacon node to provide a set of attestation duties, which should be performed by validators, for a particular epoch. */
    getAttesterDuties(): ConsensusMethodResult<'getAttesterDuties'>;
    /** Request beacon node to provide all validators that are scheduled to propose a block in the given epoch. */
    getProposerDuties(args: ConsensusMethodArgs<'getProposerDuties'>): ConsensusMethodResult<'getProposerDuties'>;
    /** Requests the beacon node to provide a set of sync committee duties for a particular epoch. */
    getSyncCommitteeDuties(): ConsensusMethodResult<'getSyncCommitteeDuties'>;
    /** Requests a beacon node to produce a valid block, which can then be signed by a validator. */
    produceBlock(args: ConsensusMethodArgs<'produceBlock'>): ConsensusMethodResult<'produceBlock'>;
    /** Requests a beacon node to produce a valid block, which can then be signed by a validator. */
    produceBlockV2(args: ConsensusMethodArgs<'produceBlockV2'>): ConsensusMethodResult<'produceBlockV2'>;
    /*** Requests a beacon node to produce a valid blinded block, which can then be signed by a validator. */
    produceBlindedBlock(args: ConsensusMethodArgs<'produceBlindedBlock'>): ConsensusMethodResult<'produceBlindedBlock'>;
    /** Requests that the beacon node produce an AttestationData. */
    produceAttestationData(args: ConsensusMethodArgs<'produceAttestationData'>): ConsensusMethodResult<'produceAttestationData'>;
    /** Aggregates all attestations matching given attestation data root and slot */
    getAggregatedAttestation(args: ConsensusMethodArgs<'getAggregatedAttestation'>): ConsensusMethodResult<'getAggregatedAttestation'>;
    /** Verifies given aggregate and proofs and publishes them on appropriate gossipsub topic. */
    publishAggregateAndProofs(): ConsensusMethodResult<'publishAggregateAndProofs'>;
    /**
     * After beacon node receives this request, search using discv5 for peers related to this subnet
     * and replace current peers with those ones if necessary
     */
    prepareBeaconCommitteeSubnet(): ConsensusMethodResult<'prepareBeaconCommitteeSubnet'>;
    /** Subscribe to a number of sync committee subnets */
    prepareSyncCommitteeSubnets(): ConsensusMethodResult<'prepareSyncCommitteeSubnets'>;
    /** Requests that the beacon node produce a sync committee contribution. */
    produceSyncCommitteeContribution(args: ConsensusMethodArgs<'produceSyncCommitteeContribution'>): ConsensusMethodResult<'produceSyncCommitteeContribution'>;
    /** Publish multiple signed sync committee contribution and proofs */
    publishContributionAndProofs(): ConsensusMethodResult<'publishContributionAndProofs'>;
    /** Prepares the beacon node for potential proposers by supplying information required when proposing blocks for the given validators. */
    prepareBeaconProposer(): ConsensusMethodResult<'prepareBeaconProposer'>;
    /** Prepares the beacon node for engaging with external builders. */
    registerValidator(): ConsensusMethodResult<'registerValidator'>;
}
