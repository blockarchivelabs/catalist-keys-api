'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var common = require('@nestjs/common');
var oracle_constants = require('./oracle.constants.js');
var contract_module = require('../contract.module.js');
var Oracle__factory = require('../generated/factories/Oracle__factory.js');

var OracleContractModule_1;
exports.OracleContractModule = OracleContractModule_1 = class OracleContractModule extends contract_module.ContractModule {
};
exports.OracleContractModule.module = OracleContractModule_1;
exports.OracleContractModule.contractFactory = Oracle__factory.Oracle__factory;
exports.OracleContractModule.contractToken = oracle_constants.ORACLE_CONTRACT_TOKEN;
exports.OracleContractModule.defaultAddresses = oracle_constants.ORACLE_CONTRACT_ADDRESSES;
exports.OracleContractModule = OracleContractModule_1 = tslib.__decorate([
    common.Module({})
], exports.OracleContractModule);
