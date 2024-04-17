'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var common = require('@nestjs/common');
var validatorsExitBusOracleHashConsensus_constants = require('./validators-exit-bus-oracle-hash-consensus.constants.js');
var contract_module = require('../contract.module.js');
var HashConsensus__factory = require('../generated/factories/HashConsensus__factory.js');

var ValidatorsExitBusOracleHashConsensusModule_1;
exports.ValidatorsExitBusOracleHashConsensusModule = ValidatorsExitBusOracleHashConsensusModule_1 = class ValidatorsExitBusOracleHashConsensusModule extends contract_module.ContractModule {
};
exports.ValidatorsExitBusOracleHashConsensusModule.module = ValidatorsExitBusOracleHashConsensusModule_1;
exports.ValidatorsExitBusOracleHashConsensusModule.contractFactory = HashConsensus__factory.HashConsensus__factory;
exports.ValidatorsExitBusOracleHashConsensusModule.contractToken = validatorsExitBusOracleHashConsensus_constants.VALIDATORS_EXIT_BUS_ORACLE_HASH_CONSENSUS_TOKEN;
exports.ValidatorsExitBusOracleHashConsensusModule.defaultAddresses = validatorsExitBusOracleHashConsensus_constants.VALIDATORS_EXIT_BUS_ORACLE_HASH_CONSENSUS_ADDRESSES;
exports.ValidatorsExitBusOracleHashConsensusModule = ValidatorsExitBusOracleHashConsensusModule_1 = tslib.__decorate([
    common.Module({})
], exports.ValidatorsExitBusOracleHashConsensusModule);
