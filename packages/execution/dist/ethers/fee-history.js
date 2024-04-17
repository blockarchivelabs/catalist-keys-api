'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var bignumber = require('@ethersproject/bignumber');
var bytes = require('@ethersproject/bytes');
var formatBlockNumber = require('./format-block-number.js');
var logger$1 = require('@ethersproject/logger');

/* eslint-disable @typescript-eslint/no-explicit-any */
const logger = new logger$1.Logger('packages/execution');
const MIN_BLOCKCOUNT = 1;
const MAX_BLOCKCOUNT = 1024;
async function getFeeHistory(blockCount, newestBlock, rewardPercentiles) {
    var _a;
    await this.getNetwork();
    if (blockCount < MIN_BLOCKCOUNT || blockCount > MAX_BLOCKCOUNT) {
        logger.throwArgumentError('Invalid blockCount for `getFeeHistory`. Should be between 1 and 1024.', 'blockCount', blockCount);
    }
    const params = {
        blockCount: bytes.hexValue(blockCount),
        newestBlock: formatBlockNumber.formatBlockNumber(newestBlock),
        rewardPercentiles,
    };
    const result = await this.perform('getFeeHistory', params);
    return {
        baseFeePerGas: result.baseFeePerGas.map((x) => bignumber.BigNumber.from(x)),
        gasUsedRatio: result.gasUsedRatio,
        oldestBlock: bignumber.BigNumber.from(result.oldestBlock).toNumber(),
        reward: ((_a = result.reward) !== null && _a !== void 0 ? _a : []).map((x) => x.map((y) => bignumber.BigNumber.from(y))),
    };
}

exports.MAX_BLOCKCOUNT = MAX_BLOCKCOUNT;
exports.MIN_BLOCKCOUNT = MIN_BLOCKCOUNT;
exports.getFeeHistory = getFeeHistory;
