'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var base_service = require('./base.service.js');

class ConsensusDebugService extends base_service.ConsensusBaseService {
    /** Returns full BeaconState object for given stateId. */
    async getState(args) {
        const { stateId, options } = args;
        return await this.fetch(`/eth/v1/debug/beacon/states/${stateId}`, options);
    }
    /** Returns full BeaconState object for given stateId. */
    async getStateV2(args) {
        const { stateId, options } = args;
        return await this.fetch(`/eth/v2/debug/beacon/states/${stateId}`, options);
    }
    /** Retrieves all possible chain heads (leaves of fork choice tree). */
    async getDebugChainHeads(args) {
        const { options } = args || {};
        return await this.fetch(`/eth/v1/debug/beacon/heads`, options);
    }
    /** Retrieves all possible chain heads (leaves of fork choice tree). */
    async getDebugChainHeadsV2(args) {
        const { options } = args || {};
        return await this.fetch(`/eth/v2/debug/beacon/heads`, options);
    }
}

exports.ConsensusDebugService = ConsensusDebugService;
