'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var common = require('@nestjs/common');
var withdrawalQueue_constants = require('./withdrawal-queue.constants.js');
var contract_module = require('../contract.module.js');
var WithdrawalQueue__factory = require('../generated/factories/WithdrawalQueue__factory.js');

var WithdrawalQueueContractModule_1;
exports.WithdrawalQueueContractModule = WithdrawalQueueContractModule_1 = class WithdrawalQueueContractModule extends contract_module.ContractModule {
};
exports.WithdrawalQueueContractModule.module = WithdrawalQueueContractModule_1;
exports.WithdrawalQueueContractModule.contractFactory = WithdrawalQueue__factory.WithdrawalQueue__factory;
exports.WithdrawalQueueContractModule.contractToken = withdrawalQueue_constants.WITHDRAWAL_QUEUE_CONTRACT_TOKEN;
exports.WithdrawalQueueContractModule.defaultAddresses = withdrawalQueue_constants.WITHDRAWAL_QUEUE_CONTRACT_ADDRESSES;
exports.WithdrawalQueueContractModule = WithdrawalQueueContractModule_1 = tslib.__decorate([
    common.Module({})
], exports.WithdrawalQueueContractModule);
