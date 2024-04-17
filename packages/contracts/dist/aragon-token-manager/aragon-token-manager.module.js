'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var common = require('@nestjs/common');
var aragonTokenManager_constants = require('./aragon-token-manager.constants.js');
var contract_module = require('../contract.module.js');
var AragonTokenManager__factory = require('../generated/factories/AragonTokenManager__factory.js');

var AragonTokenManagerContractModule_1;
exports.AragonTokenManagerContractModule = AragonTokenManagerContractModule_1 = class AragonTokenManagerContractModule extends contract_module.ContractModule {
};
exports.AragonTokenManagerContractModule.module = AragonTokenManagerContractModule_1;
exports.AragonTokenManagerContractModule.contractFactory = AragonTokenManager__factory.AragonTokenManager__factory;
exports.AragonTokenManagerContractModule.contractToken = aragonTokenManager_constants.ARAGON_TOKEN_MANAGER_CONTRACT_TOKEN;
exports.AragonTokenManagerContractModule.defaultAddresses = aragonTokenManager_constants.ARAGON_TOKEN_MANAGER_CONTRACT_ADDRESSES;
exports.AragonTokenManagerContractModule = AragonTokenManagerContractModule_1 = tslib.__decorate([
    common.Module({})
], exports.AragonTokenManagerContractModule);
