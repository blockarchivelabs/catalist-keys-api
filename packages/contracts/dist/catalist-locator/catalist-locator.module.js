'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var common = require('@nestjs/common');
var catalistLocator_constants = require('./catalist-locator.constants.js');
var contract_module = require('../contract.module.js');
var CatalistLocator__factory = require('../generated/factories/CatalistLocator__factory.js');

var CatalistLocatorContractModule_1;
exports.CatalistLocatorContractModule = CatalistLocatorContractModule_1 = class CatalistLocatorContractModule extends contract_module.ContractModule {
};
exports.CatalistLocatorContractModule.module = CatalistLocatorContractModule_1;
exports.CatalistLocatorContractModule.contractFactory = CatalistLocator__factory.CatalistLocator__factory;
exports.CatalistLocatorContractModule.contractToken = catalistLocator_constants.CATALIST_LOCATOR_CONTRACT_TOKEN;
exports.CatalistLocatorContractModule.defaultAddresses = catalistLocator_constants.CATALIST_LOCATOR_CONTRACT_ADDRESSES;
exports.CatalistLocatorContractModule = CatalistLocatorContractModule_1 = tslib.__decorate([
    common.Module({})
], exports.CatalistLocatorContractModule);
