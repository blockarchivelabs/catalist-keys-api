/// <reference types="node" />
import { ConsensusMethodArgs, ConsensusMethodResult } from '../interfaces/consensus.interface';
import { ConsensusBaseService } from './base.service';
export declare class ConsensusBeaconService extends ConsensusBaseService {
    /** Retrieve details of the chain's genesis which can be used to identify chain. */
    getGenesis(args?: ConsensusMethodArgs<'getGenesis'>): ConsensusMethodResult<'getGenesis'>;
    /** Calculates HashTreeRoot for state with given 'stateId'. If stateId is root, same value will be returned. */
    getStateRoot(args: ConsensusMethodArgs<'getStateRoot'>): ConsensusMethodResult<'getStateRoot'>;
    /** Returns Fork object for state with given 'stateId'. */
    getStateFork(args: ConsensusMethodArgs<'getStateFork'>): ConsensusMethodResult<'getStateFork'>;
    /**
     * Returns finality checkpoints for state with given 'stateId'.
     * In case finality is not yet achieved, checkpoint should return epoch 0 and ZERO_HASH as root.
     */
    getStateFinalityCheckpoints(args: ConsensusMethodArgs<'getStateFinalityCheckpoints'>): ConsensusMethodResult<'getStateFinalityCheckpoints'>;
    /** Returns filterable list of validators with their balance, status and index. */
    getStateValidators(args: ConsensusMethodArgs<'getStateValidators'>): ConsensusMethodResult<'getStateValidators'>;
    /** Returns filterable stream of validators with their balance, status and index. */
    getStateValidatorsStream(args: ConsensusMethodArgs<'getStateValidators'>): Promise<NodeJS.ReadableStream>;
    /** Returns validator specified by state and id or public key along with status and balance. */
    getStateValidator(args: ConsensusMethodArgs<'getStateValidator'>): ConsensusMethodResult<'getStateValidator'>;
    /** Returns filterable list of validators balances. */
    getStateValidatorBalances(args: ConsensusMethodArgs<'getStateValidatorBalances'>): ConsensusMethodResult<'getStateValidatorBalances'>;
    /** Retrieves the committees for the given state. */
    getEpochCommittees(args: ConsensusMethodArgs<'getEpochCommittees'>): ConsensusMethodResult<'getEpochCommittees'>;
    /** Retrieves the sync committees for the given state. */
    getEpochSyncCommittees(args: ConsensusMethodArgs<'getEpochSyncCommittees'>): ConsensusMethodResult<'getEpochSyncCommittees'>;
    /** Retrieves block headers matching given query. By default it will fetch current head slot blocks. */
    getBlockHeaders(args?: ConsensusMethodArgs<'getBlockHeaders'>): ConsensusMethodResult<'getBlockHeaders'>;
    /** Retrieves block header for given block id. */
    getBlockHeader(args: ConsensusMethodArgs<'getBlockHeader'>): ConsensusMethodResult<'getBlockHeader'>;
    /**
     * Instructs the beacon node to broadcast a newly signed beacon block to the beacon network,
     * to be included in the beacon chain.
     */
    publishBlock(): ConsensusMethodResult<'publishBlock'>;
    /**
     * Instructs the beacon node to use the components of the `SignedBlindedBeaconBlock` to construct and publish a
     * `SignedBeaconBlock` by swapping out the `transactions_root` for the corresponding full list of `transactions`.
     */
    publishBlindedBlock(): ConsensusMethodResult<'publishBlindedBlock'>;
    /** Returns the complete `SignedBeaconBlock` for a given block id. */
    getBlock(args: ConsensusMethodArgs<'getBlock'>): ConsensusMethodResult<'getBlock'>;
    /** Retrieves block details for given block id. */
    getBlockV2(args: ConsensusMethodArgs<'getBlockV2'>): ConsensusMethodResult<'getBlockV2'>;
    /** Retrieves hashTreeRoot of BeaconBlock/BeaconBlockHeader */
    getBlockRoot(args: ConsensusMethodArgs<'getBlockRoot'>): ConsensusMethodResult<'getBlockRoot'>;
    /** Retrieves attestation included in requested block. */
    getBlockAttestations(args: ConsensusMethodArgs<'getBlockAttestations'>): ConsensusMethodResult<'getBlockAttestations'>;
    /** Retrieves attestations known by the node but not necessarily incorporated into any block */
    getPoolAttestations(args?: ConsensusMethodArgs<'getPoolAttestations'>): ConsensusMethodResult<'getPoolAttestations'>;
    /** Submits Attestation objects to the node. Each attestation in the request body is processed individually. */
    submitPoolAttestations(): ConsensusMethodResult<'submitPoolAttestations'>;
    /** Retrieves attester slashings known by the node but not necessarily incorporated into any block */
    getPoolAttesterSlashings(args?: ConsensusMethodArgs<'getPoolAttesterSlashings'>): ConsensusMethodResult<'getPoolAttesterSlashings'>;
    /** Submits AttesterSlashing object to node's pool and if passes validation node MUST broadcast it to network. */
    submitPoolAttesterSlashings(): ConsensusMethodResult<'submitPoolAttesterSlashings'>;
    /** Retrieves proposer slashings known by the node but not necessarily incorporated into any block */
    getPoolProposerSlashings(args?: ConsensusMethodArgs<'getPoolProposerSlashings'>): ConsensusMethodResult<'getPoolProposerSlashings'>;
    /** Submits ProposerSlashing object to node's pool and if passes validation  node MUST broadcast it to network. */
    submitPoolProposerSlashings(): ConsensusMethodResult<'submitPoolProposerSlashings'>;
    /** Submits sync committee signature objects to the node. */
    submitPoolSyncCommitteeSignatures(): ConsensusMethodResult<'submitPoolSyncCommitteeSignatures'>;
    /** Retrieves voluntary exits known by the node but not necessarily incorporated into any block */
    getPoolVoluntaryExits(args?: ConsensusMethodArgs<'getPoolVoluntaryExits'>): ConsensusMethodResult<'getPoolVoluntaryExits'>;
    /** Submits SignedVoluntaryExit object to node's pool and if passes validation node MUST broadcast it to network. */
    submitPoolVoluntaryExit(): ConsensusMethodResult<'submitPoolVoluntaryExit'>;
}
