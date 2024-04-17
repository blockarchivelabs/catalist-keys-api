'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var base_service = require('./base.service.js');

class ConsensusEventsService extends base_service.ConsensusBaseService {
    /** Provides endpoint to subscribe to beacon node Consensus-Sent-Events stream. */
    async eventstream() {
        throw new Error('Method is not implemented');
    }
}

exports.ConsensusEventsService = ConsensusEventsService;
