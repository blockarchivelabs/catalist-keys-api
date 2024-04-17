'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var consensus_constants = require('./consensus.constants.js');
var consensus_module = require('./consensus.module.js');
var consensus_service = require('./service/consensus.service.js');



exports.CONSENSUS_DEFAULT_POOL_INTERVAL = consensus_constants.CONSENSUS_DEFAULT_POOL_INTERVAL;
exports.CONSENSUS_DEFAULT_SLOT_NUMBER = consensus_constants.CONSENSUS_DEFAULT_SLOT_NUMBER;
exports.CONSENSUS_OPTIONS_TOKEN = consensus_constants.CONSENSUS_OPTIONS_TOKEN;
Object.defineProperty(exports, 'ConsensusModule', {
	enumerable: true,
	get: function () { return consensus_module.ConsensusModule; }
});
Object.defineProperty(exports, 'ConsensusService', {
	enumerable: true,
	get: function () { return consensus_service.ConsensusService; }
});
