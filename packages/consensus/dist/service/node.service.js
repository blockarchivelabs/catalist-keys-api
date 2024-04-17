'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var base_service = require('./base.service.js');

class ConsensusNodeService extends base_service.ConsensusBaseService {
    /** Retrieves data about the node's network presence */
    async getNetworkIdentity(args) {
        const { options } = args || {};
        return await this.fetch(`/eth/v1/node/identity`, options);
    }
    /** Retrieves data about the node's network peers. By default this returns all peers. Multiple query params are combined using AND conditions */
    async getPeers(args) {
        const { options, state, direction } = args || {};
        const search = this.getSearchString({ state, direction });
        return await this.fetch(`/eth/v1/node/peers${search}`, options);
    }
    /** Retrieves data about the given peer */
    async getPeer(args) {
        const { peerId, options } = args;
        return await this.fetch(`/eth/v1/node/peers/${peerId}`, options);
    }
    /** Retrieves number of known peers. */
    async getPeerCount(args) {
        const { options } = args || {};
        return await this.fetch(`/eth/v1/node/peer_count`, options);
    }
    /** Requests that the beacon node identify information about its implementation in a format similar to a [HTTP User-Agent](https://tools.ietf.org/html/rfc7231#section-5.5.3) field. */
    async getNodeVersion(args) {
        const { options } = args || {};
        return await this.fetch(`/eth/v1/node/version`, options);
    }
    /** Requests the beacon node to describe if it's currently syncing or not, and if it is, what block it is up to. */
    async getSyncingStatus(args) {
        const { options } = args || {};
        return await this.fetch(`/eth/v1/node/syncing`, options);
    }
    /** Returns node health status in http status codes. Useful for load balancers. */
    async getHealth(args) {
        const { options } = args || {};
        return await this.fetch(`/eth/v1/node/health`, options);
    }
}

exports.ConsensusNodeService = ConsensusNodeService;
