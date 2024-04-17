'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var common = require('@nestjs/common');
var security_constants = require('./security.constants.js');
var contract_module = require('../contract.module.js');
var Security__factory = require('../generated/factories/Security__factory.js');

var SecurityContractModule_1;
exports.SecurityContractModule = SecurityContractModule_1 = class SecurityContractModule extends contract_module.ContractModule {
};
exports.SecurityContractModule.module = SecurityContractModule_1;
exports.SecurityContractModule.contractFactory = Security__factory.Security__factory;
exports.SecurityContractModule.contractToken = security_constants.SECURITY_CONTRACT_TOKEN;
exports.SecurityContractModule.defaultAddresses = security_constants.SECURITY_CONTRACT_ADDRESSES;
exports.SecurityContractModule = SecurityContractModule_1 = tslib.__decorate([
    common.Module({})
], exports.SecurityContractModule);
