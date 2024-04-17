'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var common = require('@nestjs/common');
var executionRewardsVault_constants = require('./execution-rewards-vault.constants.js');
var contract_module = require('../contract.module.js');
var ExecutionRewardsVault__factory = require('../generated/factories/ExecutionRewardsVault__factory.js');

var ExecutionRewardsVaultContractModule_1;
exports.ExecutionRewardsVaultContractModule = ExecutionRewardsVaultContractModule_1 = class ExecutionRewardsVaultContractModule extends contract_module.ContractModule {
};
exports.ExecutionRewardsVaultContractModule.module = ExecutionRewardsVaultContractModule_1;
exports.ExecutionRewardsVaultContractModule.contractFactory = ExecutionRewardsVault__factory.ExecutionRewardsVault__factory;
exports.ExecutionRewardsVaultContractModule.contractToken = executionRewardsVault_constants.EXECUTION_REWARDS_VAULT_CONTRACT_TOKEN;
exports.ExecutionRewardsVaultContractModule.defaultAddresses = executionRewardsVault_constants.EXECUTION_REWARDS_VAULT_CONTRACT_ADDRESSES;
exports.ExecutionRewardsVaultContractModule = ExecutionRewardsVaultContractModule_1 = tslib.__decorate([
    common.Module({})
], exports.ExecutionRewardsVaultContractModule);
