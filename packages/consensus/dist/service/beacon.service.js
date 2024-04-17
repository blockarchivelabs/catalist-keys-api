'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var base_service = require('./base.service.js');

class ConsensusBeaconService extends base_service.ConsensusBaseService {
    /** Retrieve details of the chain's genesis which can be used to identify chain. */
    async getGenesis(args) {
        const { options } = args || {};
        return await this.fetch(`/eth/v1/beacon/genesis`, options);
    }
    /** Calculates HashTreeRoot for state with given 'stateId'. If stateId is root, same value will be returned. */
    async getStateRoot(args) {
        const { stateId, options } = args;
        return await this.fetch(`/eth/v1/beacon/states/${stateId}/root`, options);
    }
    /** Returns Fork object for state with given 'stateId'. */
    async getStateFork(args) {
        const { stateId, options } = args;
        return await this.fetch(`/eth/v1/beacon/states/${stateId}/fork`, options);
    }
    /**
     * Returns finality checkpoints for state with given 'stateId'.
     * In case finality is not yet achieved, checkpoint should return epoch 0 and ZERO_HASH as root.
     */
    async getStateFinalityCheckpoints(args) {
        const { stateId, options } = args;
        return await this.fetch(`/eth/v1/beacon/states/${stateId}/finality_checkpoints`, options);
    }
    /** Returns filterable list of validators with their balance, status and index. */
    async getStateValidators(args) {
        const { stateId, id, status, options } = args;
        const search = this.getSearchString({ id, status });
        return await this.fetch(`/eth/v1/beacon/states/${stateId}/validators${search}`, options);
    }
    /** Returns filterable stream of validators with their balance, status and index. */
    async getStateValidatorsStream(args) {
        const { stateId, id, status, options } = args;
        const search = this.getSearchString({ id, status });
        return await this.fetchStream(`/eth/v1/beacon/states/${stateId}/validators${search}`, options);
    }
    /** Returns validator specified by state and id or public key along with status and balance. */
    async getStateValidator(args) {
        const { stateId, validatorId, options } = args;
        return await this.fetch(`/eth/v1/beacon/states/${stateId}/validators/${validatorId}`, options);
    }
    /** Returns filterable list of validators balances. */
    async getStateValidatorBalances(args) {
        const { stateId, id, options } = args;
        const search = this.getSearchString({ id });
        return await this.fetch(`/eth/v1/beacon/states/${stateId}/validator_balances${search}`, options);
    }
    /** Retrieves the committees for the given state. */
    async getEpochCommittees(args) {
        const { stateId, epoch, index, slot, options } = args;
        const search = this.getSearchString({ epoch, index, slot });
        return await this.fetch(`/eth/v1/beacon/states/${stateId}/committees${search}`, options);
    }
    /** Retrieves the sync committees for the given state. */
    async getEpochSyncCommittees(args) {
        const { stateId, epoch, options } = args;
        const search = this.getSearchString({ epoch });
        return await this.fetch(`/eth/v1/beacon/states/${stateId}/sync_committees${search}`, options);
    }
    /** Retrieves block headers matching given query. By default it will fetch current head slot blocks. */
    async getBlockHeaders(args) {
        const { options, slot, parentRoot } = args || {};
        const search = this.getSearchString({ slot, parentRoot });
        return await this.fetch(`/eth/v1/beacon/headers${search}`, options);
    }
    /** Retrieves block header for given block id. */
    async getBlockHeader(args) {
        const { blockId, options } = args;
        return await this.fetch(`/eth/v1/beacon/headers/${blockId}`, options);
    }
    /**
     * Instructs the beacon node to broadcast a newly signed beacon block to the beacon network,
     * to be included in the beacon chain.
     */
    async publishBlock() {
        throw new Error('Method is not implemented');
    }
    /**
     * Instructs the beacon node to use the components of the `SignedBlindedBeaconBlock` to construct and publish a
     * `SignedBeaconBlock` by swapping out the `transactions_root` for the corresponding full list of `transactions`.
     */
    async publishBlindedBlock() {
        throw new Error('Method is not implemented');
    }
    /** Returns the complete `SignedBeaconBlock` for a given block id. */
    async getBlock(args) {
        const { blockId, options } = args;
        return await this.fetch(`/eth/v1/beacon/blocks/${blockId}`, options);
    }
    /** Retrieves block details for given block id. */
    async getBlockV2(args) {
        const { blockId, options } = args;
        return await this.fetch(`/eth/v2/beacon/blocks/${blockId}`, options);
    }
    /** Retrieves hashTreeRoot of BeaconBlock/BeaconBlockHeader */
    async getBlockRoot(args) {
        const { blockId, options } = args;
        return await this.fetch(`/eth/v1/beacon/blocks/${blockId}/root`, options);
    }
    /** Retrieves attestation included in requested block. */
    async getBlockAttestations(args) {
        const { blockId, options } = args;
        return await this.fetch(`/eth/v1/beacon/blocks/${blockId}/attestations`, options);
    }
    /** Retrieves attestations known by the node but not necessarily incorporated into any block */
    async getPoolAttestations(args) {
        const { options, slot, committeeIndex } = args || {};
        const search = this.getSearchString({ slot, committeeIndex });
        return await this.fetch(`/eth/v1/beacon/pool/attestations${search}`, options);
    }
    /** Submits Attestation objects to the node. Each attestation in the request body is processed individually. */
    async submitPoolAttestations() {
        throw new Error('Method is not implemented');
    }
    /** Retrieves attester slashings known by the node but not necessarily incorporated into any block */
    async getPoolAttesterSlashings(args) {
        const { options } = args || {};
        return await this.fetch(`/eth/v1/beacon/pool/attester_slashings`, options);
    }
    /** Submits AttesterSlashing object to node's pool and if passes validation node MUST broadcast it to network. */
    async submitPoolAttesterSlashings() {
        throw new Error('Method is not implemented');
    }
    /** Retrieves proposer slashings known by the node but not necessarily incorporated into any block */
    async getPoolProposerSlashings(args) {
        const { options } = args || {};
        return await this.fetch(`/eth/v1/beacon/pool/proposer_slashings`, options);
    }
    /** Submits ProposerSlashing object to node's pool and if passes validation  node MUST broadcast it to network. */
    async submitPoolProposerSlashings() {
        throw new Error('Method is not implemented');
    }
    /** Submits sync committee signature objects to the node. */
    async submitPoolSyncCommitteeSignatures() {
        throw new Error('Method is not implemented');
    }
    /** Retrieves voluntary exits known by the node but not necessarily incorporated into any block */
    async getPoolVoluntaryExits(args) {
        const { options } = args || {};
        return await this.fetch(`/eth/v1/beacon/pool/voluntary_exits`, options);
    }
    /** Submits SignedVoluntaryExit object to node's pool and if passes validation node MUST broadcast it to network. */
    async submitPoolVoluntaryExit() {
        throw new Error('Method is not implemented');
    }
}

exports.ConsensusBeaconService = ConsensusBeaconService;
