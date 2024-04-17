'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var common = require('@nestjs/common');
var aragonVoting_constants = require('./aragon-voting.constants.js');
var contract_module = require('../contract.module.js');
var AragonVoting__factory = require('../generated/factories/AragonVoting__factory.js');

var AragonVotingManagerContractModule_1;
exports.AragonVotingManagerContractModule = AragonVotingManagerContractModule_1 = class AragonVotingManagerContractModule extends contract_module.ContractModule {
};
exports.AragonVotingManagerContractModule.module = AragonVotingManagerContractModule_1;
exports.AragonVotingManagerContractModule.contractFactory = AragonVoting__factory.AragonVoting__factory;
exports.AragonVotingManagerContractModule.contractToken = aragonVoting_constants.ARAGON_VOTING_CONTRACT_TOKEN;
exports.AragonVotingManagerContractModule.defaultAddresses = aragonVoting_constants.ARAGON_VOTING_CONTRACT_ADDRESSES;
exports.AragonVotingManagerContractModule = AragonVotingManagerContractModule_1 = tslib.__decorate([
    common.Module({})
], exports.AragonVotingManagerContractModule);
