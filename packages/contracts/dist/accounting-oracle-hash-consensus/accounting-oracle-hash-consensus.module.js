'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var common = require('@nestjs/common');
var accountingOracleHashConsensus_constants = require('./accounting-oracle-hash-consensus.constants.js');
var contract_module = require('../contract.module.js');
var HashConsensus__factory = require('../generated/factories/HashConsensus__factory.js');

var AccountingOracleHashConsensusModule_1;
exports.AccountingOracleHashConsensusModule = AccountingOracleHashConsensusModule_1 = class AccountingOracleHashConsensusModule extends contract_module.ContractModule {
};
exports.AccountingOracleHashConsensusModule.module = AccountingOracleHashConsensusModule_1;
exports.AccountingOracleHashConsensusModule.contractFactory = HashConsensus__factory.HashConsensus__factory;
exports.AccountingOracleHashConsensusModule.contractToken = accountingOracleHashConsensus_constants.ACCOUNTING_ORACLE_HASH_CONSENSUS_TOKEN;
exports.AccountingOracleHashConsensusModule.defaultAddresses = accountingOracleHashConsensus_constants.ACCOUNTING_ORACLE_HASH_CONSENSUS_ADDRESSES;
exports.AccountingOracleHashConsensusModule = AccountingOracleHashConsensusModule_1 = tslib.__decorate([
    common.Module({})
], exports.AccountingOracleHashConsensusModule);
