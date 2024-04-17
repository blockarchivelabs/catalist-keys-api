'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var base_service = require('./base.service.js');

class ConsensusConfigService extends base_service.ConsensusBaseService {
    /** Retrieve all forks, past present and future, of which this node is aware. */
    async getForkSchedule(args) {
        const { options } = args || {};
        return await this.fetch(`/eth/v1/config/fork_schedule`, options);
    }
    /** Retrieve specification configuration used on this node. */
    async getSpec(args) {
        const { options } = args || {};
        return await this.fetch(`/eth/v1/config/spec`, options);
    }
    /** Retrieve Eth1 deposit contract address and chain ID. */
    async getDepositContract(args) {
        const { options } = args || {};
        return await this.fetch(`/eth/v1/config/deposit_contract`, options);
    }
}

exports.ConsensusConfigService = ConsensusConfigService;
