'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var base_service = require('./base.service.js');

class ConsensusValidatorService extends base_service.ConsensusBaseService {
    /** Requests the beacon node to provide a set of attestation duties, which should be performed by validators, for a particular epoch. */
    async getAttesterDuties() {
        throw new Error('Method is not implemented');
    }
    /** Request beacon node to provide all validators that are scheduled to propose a block in the given epoch. */
    async getProposerDuties(args) {
        const { epoch, options } = args;
        return await this.fetch(`/eth/v1/validator/duties/proposer/${epoch}`, options);
    }
    /** Requests the beacon node to provide a set of sync committee duties for a particular epoch. */
    async getSyncCommitteeDuties() {
        throw new Error('Method is not implemented');
    }
    /** Requests a beacon node to produce a valid block, which can then be signed by a validator. */
    async produceBlock(args) {
        const { slot, randaoReveal, graffiti, options } = args;
        const search = this.getSearchString({ randaoReveal, graffiti });
        return await this.fetch(`/eth/v1/validator/blocks/${slot}${search}`, options);
    }
    /** Requests a beacon node to produce a valid block, which can then be signed by a validator. */
    async produceBlockV2(args) {
        const { slot, randaoReveal, graffiti, options } = args;
        const search = this.getSearchString({ randaoReveal, graffiti });
        return await this.fetch(`/eth/v2/validator/blocks/${slot}${search}`, options);
    }
    /*** Requests a beacon node to produce a valid blinded block, which can then be signed by a validator. */
    async produceBlindedBlock(args) {
        const { slot, randaoReveal, graffiti, options } = args;
        const search = this.getSearchString({ randaoReveal, graffiti });
        return await this.fetch(`/eth/v1/validator/blinded_blocks/${slot}${search}`, options);
    }
    /** Requests that the beacon node produce an AttestationData. */
    async produceAttestationData(args) {
        const { slot, committeeIndex, options } = args;
        const search = this.getSearchString({ slot, committeeIndex });
        return await this.fetch(`/eth/v1/validator/attestation_data${search}`, options);
    }
    /** Aggregates all attestations matching given attestation data root and slot */
    async getAggregatedAttestation(args) {
        const { slot, attestationDataRoot, options } = args;
        const search = this.getSearchString({ slot, attestationDataRoot });
        return await this.fetch(`/eth/v1/validator/aggregate_attestation${search}`, options);
    }
    /** Verifies given aggregate and proofs and publishes them on appropriate gossipsub topic. */
    async publishAggregateAndProofs() {
        throw new Error('Method is not implemented');
    }
    /**
     * After beacon node receives this request, search using discv5 for peers related to this subnet
     * and replace current peers with those ones if necessary
     */
    async prepareBeaconCommitteeSubnet() {
        throw new Error('Method is not implemented');
    }
    /** Subscribe to a number of sync committee subnets */
    async prepareSyncCommitteeSubnets() {
        throw new Error('Method is not implemented');
    }
    /** Requests that the beacon node produce a sync committee contribution. */
    async produceSyncCommitteeContribution(args) {
        const { slot, subcommitteeIndex, beaconBlockRoot, options } = args;
        const search = this.getSearchString({
            slot,
            subcommitteeIndex,
            beaconBlockRoot,
        });
        return await this.fetch(`/eth/v1/validator/sync_committee_contribution${search}`, options);
    }
    /** Publish multiple signed sync committee contribution and proofs */
    async publishContributionAndProofs() {
        throw new Error('Method is not implemented');
    }
    /** Prepares the beacon node for potential proposers by supplying information required when proposing blocks for the given validators. */
    async prepareBeaconProposer() {
        throw new Error('Method is not implemented');
    }
    /** Prepares the beacon node for engaging with external builders. */
    async registerValidator() {
        throw new Error('Method is not implemented');
    }
}

exports.ConsensusValidatorService = ConsensusValidatorService;
