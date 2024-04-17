'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var constants = require('@catalist-nestjs/constants');

const SECURITY_CONTRACT_TOKEN = Symbol('securityContract');
const SECURITY_CONTRACT_ADDRESSES = {
    [constants.CHAINS.Mainnet]: '0xC77F8768774E1c9244BEed705C4354f2113CFc09',
    [constants.CHAINS.Goerli]: '0xe57025E250275cA56f92d76660DEcfc490C7E79A',
    [constants.CHAINS.Holesky]: '0x045dd46212A178428c088573A7d102B9d89a022A',
    [constants.CHAINS.Sepolia]: '0x6885E36BFcb68CB383DfE90023a462C03BCB2AE5',
    [constants.CHAINS.EnduranceDevnet]: '0x2A01eC7b698710CB22Ddfb2c95285E10f5ed31cB',
    [constants.CHAINS.EnduranceMainnet]: '0x72bB7806B8459337b231016e182348CD853E3106',
};

exports.SECURITY_CONTRACT_ADDRESSES = SECURITY_CONTRACT_ADDRESSES;
exports.SECURITY_CONTRACT_TOKEN = SECURITY_CONTRACT_TOKEN;
