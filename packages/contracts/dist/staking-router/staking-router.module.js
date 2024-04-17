'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var common = require('@nestjs/common');
var stakingRouter_constants = require('./staking-router.constants.js');
var contract_module = require('../contract.module.js');
var StakingRouter__factory = require('../generated/factories/StakingRouter__factory.js');

var StakingRouterContractModule_1;
exports.StakingRouterContractModule = StakingRouterContractModule_1 = class StakingRouterContractModule extends contract_module.ContractModule {
};
exports.StakingRouterContractModule.module = StakingRouterContractModule_1;
exports.StakingRouterContractModule.contractFactory = StakingRouter__factory.StakingRouter__factory;
exports.StakingRouterContractModule.contractToken = stakingRouter_constants.STAKING_ROUTER_CONTRACT_TOKEN;
exports.StakingRouterContractModule.defaultAddresses = stakingRouter_constants.STAKING_ROUTER_CONTRACT_ADDRESSES;
exports.StakingRouterContractModule = StakingRouterContractModule_1 = tslib.__decorate([
    common.Module({})
], exports.StakingRouterContractModule);
