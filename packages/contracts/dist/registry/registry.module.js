'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var common = require('@nestjs/common');
var registry_constants = require('./registry.constants.js');
var contract_module = require('../contract.module.js');
var Registry__factory = require('../generated/factories/Registry__factory.js');

var RegistryContractModule_1;
exports.RegistryContractModule = RegistryContractModule_1 = class RegistryContractModule extends contract_module.ContractModule {
};
exports.RegistryContractModule.module = RegistryContractModule_1;
exports.RegistryContractModule.contractFactory = Registry__factory.Registry__factory;
exports.RegistryContractModule.contractToken = registry_constants.REGISTRY_CONTRACT_TOKEN;
exports.RegistryContractModule.defaultAddresses = registry_constants.REGISTRY_CONTRACT_ADDRESSES;
exports.RegistryContractModule = RegistryContractModule_1 = tslib.__decorate([
    common.Module({})
], exports.RegistryContractModule);
