'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var constants = require('@catalist-nestjs/constants');

const DEPOSIT_CONTRACT_TOKEN = Symbol('depositContract');
const DEPOSIT_CONTRACT_ADDRESSES = {
    [constants.CHAINS.Mainnet]: '0x00000000219ab540356cbb839cbe05303d7705fa',
    [constants.CHAINS.Goerli]: '0xff50ed3d0ec03ac01d4c79aad74928bff48a7b2b',
    [constants.CHAINS.Holesky]: '0x4242424242424242424242424242424242424242',
    [constants.CHAINS.Sepolia]: '0x80b5DC88C98E528bF9cb4B7F0f076aC41da24651',
    [constants.CHAINS.EnduranceDevnet]: '0x6f22fFbC56eFF051aECF839396DD1eD9aD6BBA9D',
    [constants.CHAINS.EnduranceMainnet]: '0xace0000000000000000000000000000000000aCe',
};

exports.DEPOSIT_CONTRACT_ADDRESSES = DEPOSIT_CONTRACT_ADDRESSES;
exports.DEPOSIT_CONTRACT_TOKEN = DEPOSIT_CONTRACT_TOKEN;
