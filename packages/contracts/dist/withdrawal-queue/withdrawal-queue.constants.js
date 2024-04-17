'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var constants = require('@catalist-nestjs/constants');

const WITHDRAWAL_QUEUE_CONTRACT_TOKEN = Symbol('withdrawalQueueContract');
const WITHDRAWAL_QUEUE_CONTRACT_ADDRESSES = {
    [constants.CHAINS.Mainnet]: '0x889edC2eDab5f40e902b864aD4d7AdE8E412F9B1',
    [constants.CHAINS.Goerli]: '0xCF117961421cA9e546cD7f50bC73abCdB3039533',
    [constants.CHAINS.Holesky]: '0xc7cc160b58F8Bb0baC94b80847E2CF2800565C50',
    [constants.CHAINS.Sepolia]: '0x1583C7b3f4C3B008720E6BcE5726336b0aB25fdd',
    [constants.CHAINS.EnduranceDevnet]: '0x86c0c0b392c71c954F92eE02E63413A145B70A31',
    [constants.CHAINS.EnduranceMainnet]: '0x9B6C9256f63a855f761A1ffEC792376346855406',
};

exports.WITHDRAWAL_QUEUE_CONTRACT_ADDRESSES = WITHDRAWAL_QUEUE_CONTRACT_ADDRESSES;
exports.WITHDRAWAL_QUEUE_CONTRACT_TOKEN = WITHDRAWAL_QUEUE_CONTRACT_TOKEN;
