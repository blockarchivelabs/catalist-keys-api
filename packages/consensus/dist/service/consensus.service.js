'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var common = require('@nestjs/common');
var fetch = require('@catalist-nestjs/fetch');
var base_service = require('./base.service.js');
var beacon_service = require('./beacon.service.js');
var debug_service = require('./debug.service.js');
var events_service = require('./events.service.js');
var node_service = require('./node.service.js');
var config_service = require('./config.service.js');
var validator_service = require('./validator.service.js');
var consensus_constants = require('../consensus.constants.js');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function applyMixins(derivedCtor, constructors) {
    constructors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            Object.defineProperty(derivedCtor.prototype, name, 
            /* istanbul ignore file */
            Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
                Object.create(null));
        });
    });
}
exports.ConsensusService = class ConsensusService {
    constructor(options, fetchService) {
        this.options = options;
        this.fetchService = fetchService;
    }
};
exports.ConsensusService = tslib.__decorate([
    common.Injectable(),
    tslib.__param(0, common.Optional()),
    tslib.__param(0, common.Inject(consensus_constants.CONSENSUS_OPTIONS_TOKEN)),
    tslib.__metadata("design:paramtypes", [Object, fetch.FetchService])
], exports.ConsensusService);
applyMixins(exports.ConsensusService, [
    base_service.ConsensusBaseService,
    beacon_service.ConsensusBeaconService,
    debug_service.ConsensusDebugService,
    events_service.ConsensusEventsService,
    node_service.ConsensusNodeService,
    config_service.ConsensusConfigService,
    validator_service.ConsensusValidatorService,
]);
