'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var common = require('@nestjs/common');
var allowedList_constants = require('./allowed-list.constants.js');
var contract_module = require('../contract.module.js');
var AllowedList__factory = require('../generated/factories/AllowedList__factory.js');

var AllowedListContractModule_1;
exports.AllowedListContractModule = AllowedListContractModule_1 = class AllowedListContractModule extends contract_module.ContractModule {
};
exports.AllowedListContractModule.module = AllowedListContractModule_1;
exports.AllowedListContractModule.contractFactory = AllowedList__factory.AllowedList__factory;
exports.AllowedListContractModule.contractToken = allowedList_constants.ALLOWED_LIST_CONTRACT_TOKEN;
exports.AllowedListContractModule.defaultAddresses = allowedList_constants.ALLOWED_LIST_CONTRACT_ADDRESSES;
exports.AllowedListContractModule = AllowedListContractModule_1 = tslib.__decorate([
    common.Module({})
], exports.AllowedListContractModule);
