'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var common = require('@nestjs/common');
var wstace_constants = require('./wstace.constants.js');
var contract_module = require('../contract.module.js');
var Wstace__factory = require('../generated/factories/Wstace__factory.js');

var WstaceContractModule_1;
exports.WstaceContractModule = WstaceContractModule_1 = class WstaceContractModule extends contract_module.ContractModule {
};
exports.WstaceContractModule.module = WstaceContractModule_1;
exports.WstaceContractModule.contractFactory = Wstace__factory.Wstace__factory;
exports.WstaceContractModule.contractToken = wstace_constants.WSTACE_CONTRACT_TOKEN;
exports.WstaceContractModule.defaultAddresses = wstace_constants.WSTACE_CONTRACT_ADDRESSES;
exports.WstaceContractModule = WstaceContractModule_1 = tslib.__decorate([
    common.Module({})
], exports.WstaceContractModule);
