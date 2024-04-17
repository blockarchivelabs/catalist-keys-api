'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var common = require('@nestjs/common');
var easytrack_constants = require('./easytrack.constants.js');
var contract_module = require('../contract.module.js');
var Easytrack__factory = require('../generated/factories/Easytrack__factory.js');

var EasyTrackContractModule_1;
exports.EasyTrackContractModule = EasyTrackContractModule_1 = class EasyTrackContractModule extends contract_module.ContractModule {
};
exports.EasyTrackContractModule.module = EasyTrackContractModule_1;
exports.EasyTrackContractModule.contractFactory = Easytrack__factory.Easytrack__factory;
exports.EasyTrackContractModule.contractToken = easytrack_constants.EASYTRACK_CONTRACT_TOKEN;
exports.EasyTrackContractModule.defaultAddresses = easytrack_constants.EASYTRACK_CONTRACT_ADDRESSES;
exports.EasyTrackContractModule = EasyTrackContractModule_1 = tslib.__decorate([
    common.Module({})
], exports.EasyTrackContractModule);
