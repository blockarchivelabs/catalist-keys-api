'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var common = require('@nestjs/common');
var deposit_constants = require('./deposit.constants.js');
var contract_module = require('../contract.module.js');
var Deposit__factory = require('../generated/factories/Deposit__factory.js');

var DepositContractModule_1;
exports.DepositContractModule = DepositContractModule_1 = class DepositContractModule extends contract_module.ContractModule {
};
exports.DepositContractModule.module = DepositContractModule_1;
exports.DepositContractModule.contractFactory = Deposit__factory.Deposit__factory;
exports.DepositContractModule.contractToken = deposit_constants.DEPOSIT_CONTRACT_TOKEN;
exports.DepositContractModule.defaultAddresses = deposit_constants.DEPOSIT_CONTRACT_ADDRESSES;
exports.DepositContractModule = DepositContractModule_1 = tslib.__decorate([
    common.Module({})
], exports.DepositContractModule);
