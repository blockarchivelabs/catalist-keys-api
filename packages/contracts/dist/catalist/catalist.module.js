'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var common = require('@nestjs/common');
var catalist_constants = require('./catalist.constants.js');
var contract_module = require('../contract.module.js');
var Catalist__factory = require('../generated/factories/Catalist__factory.js');

var CatalistContractModule_1;
exports.CatalistContractModule = CatalistContractModule_1 = class CatalistContractModule extends contract_module.ContractModule {
};
exports.CatalistContractModule.module = CatalistContractModule_1;
exports.CatalistContractModule.contractFactory = Catalist__factory.Catalist__factory;
exports.CatalistContractModule.contractToken = catalist_constants.CATALIST_CONTRACT_TOKEN;
exports.CatalistContractModule.defaultAddresses = catalist_constants.CATALIST_CONTRACT_ADDRESSES;
exports.CatalistContractModule = CatalistContractModule_1 = tslib.__decorate([
    common.Module({})
], exports.CatalistContractModule);
