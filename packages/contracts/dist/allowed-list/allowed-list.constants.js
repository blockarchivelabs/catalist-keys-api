'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var constants = require('@catalist-nestjs/constants');

const ALLOWED_LIST_CONTRACT_TOKEN = Symbol('allowedListContract');
const ALLOWED_LIST_CONTRACT_ADDRESSES = {
    [constants.CHAINS.Mainnet]: '0xf95f069f9ad107938f6ba802a3da87892298610e',
    [constants.CHAINS.Holesky]: '0x2d86c5855581194a386941806e38ca119e50aea3',
    [constants.CHAINS.Goerli]: '0xeabe95ac5f3d64ae16acbb668ed0efcd81b721bc',
};

exports.ALLOWED_LIST_CONTRACT_ADDRESSES = ALLOWED_LIST_CONTRACT_ADDRESSES;
exports.ALLOWED_LIST_CONTRACT_TOKEN = ALLOWED_LIST_CONTRACT_TOKEN;
