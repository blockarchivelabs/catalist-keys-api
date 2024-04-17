'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var common = require('@nestjs/common');
var ldo_constants = require('./ldo.constants.js');
var contract_module = require('../contract.module.js');
var Ldo__factory = require('../generated/factories/Ldo__factory.js');

var LdoContractModule_1;
exports.LdoContractModule = LdoContractModule_1 = class LdoContractModule extends contract_module.ContractModule {
};
exports.LdoContractModule.module = LdoContractModule_1;
exports.LdoContractModule.contractFactory = Ldo__factory.Ldo__factory;
exports.LdoContractModule.contractToken = ldo_constants.LDO_CONTRACT_TOKEN;
exports.LdoContractModule.defaultAddresses = ldo_constants.LDO_CONTRACT_ADDRESSES;
exports.LdoContractModule = LdoContractModule_1 = tslib.__decorate([
    common.Module({})
], exports.LdoContractModule);
