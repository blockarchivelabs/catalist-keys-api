'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
require('reflect-metadata');
var common = require('@nestjs/common');
var di = require('@catalist-nestjs/di');
var contracts = require('@catalist-nestjs/contracts');
var constants = require('../constants/constants.js');
var bufferHex = require('../common/buffer-hex.js');
var utils = require('@catalist-nestjs/utils');
var withdrawalCredentials_extractor_interface = require('../interfaces/withdrawal-credentials.extractor.interface.js');

exports.WithdrawalCredentialsFetcher = class WithdrawalCredentialsFetcher {
    constructor(catalistContract) {
        this.catalistContract = catalistContract;
    }
    /**
     * The value of currentWC should always represent actual on-chain value
     */
    async getWithdrawalCredentials() {
        return this.catalistContract.getWithdrawalCredentials();
    }
    async getPossibleWithdrawalCredentials() {
        const currentWC = await this.getWithdrawalCredentials();
        return {
            currentWC: [currentWC, bufferHex.bufferFromHexString(currentWC)],
            previousWC: await this.getPreviousWithdrawalCredentials(),
        };
    }
    async getPreviousWithdrawalCredentials() {
        var _a;
        const chainId = await this.getChainId();
        const oldWC = (_a = constants.WITHDRAWAL_CREDENTIALS[chainId]) !== null && _a !== void 0 ? _a : [];
        return oldWC.map((wc) => [wc, bufferHex.bufferFromHexString(wc)]);
    }
    async getChainId() {
        const network = await this.catalistContract.provider.getNetwork();
        return network.chainId;
    }
};
tslib.__decorate([
    utils.MemoizeInFlightPromise(),
    tslib.__metadata("design:type", Function),
    tslib.__metadata("design:paramtypes", []),
    tslib.__metadata("design:returntype", Promise)
], exports.WithdrawalCredentialsFetcher.prototype, "getWithdrawalCredentials", null);
tslib.__decorate([
    utils.MemoizeInFlightPromise(),
    tslib.__metadata("design:type", Function),
    tslib.__metadata("design:paramtypes", []),
    tslib.__metadata("design:returntype", Promise)
], exports.WithdrawalCredentialsFetcher.prototype, "getPossibleWithdrawalCredentials", null);
tslib.__decorate([
    utils.MemoizeInFlightPromise(),
    tslib.__metadata("design:type", Function),
    tslib.__metadata("design:paramtypes", []),
    tslib.__metadata("design:returntype", Promise)
], exports.WithdrawalCredentialsFetcher.prototype, "getPreviousWithdrawalCredentials", null);
tslib.__decorate([
    utils.MemoizeInFlightPromise(),
    tslib.__metadata("design:type", Function),
    tslib.__metadata("design:paramtypes", []),
    tslib.__metadata("design:returntype", Promise)
], exports.WithdrawalCredentialsFetcher.prototype, "getChainId", null);
exports.WithdrawalCredentialsFetcher = tslib.__decorate([
    common.Injectable(),
    di.ImplementsAtRuntime(withdrawalCredentials_extractor_interface.WithdrawalCredentialsExtractorInterface),
    tslib.__param(0, common.Inject(contracts.CATALIST_CONTRACT_TOKEN)),
    tslib.__metadata("design:paramtypes", [Object])
], exports.WithdrawalCredentialsFetcher);
