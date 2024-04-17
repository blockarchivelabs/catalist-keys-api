'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var constants = require('@catalist-nestjs/constants');

const LDO_CONTRACT_TOKEN = Symbol('ldoContract');
const LDO_CONTRACT_ADDRESSES = {
    [constants.CHAINS.Mainnet]: '0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32',
    [constants.CHAINS.Goerli]: '0x56340274fB5a72af1A3C6609061c451De7961Bd4',
    [constants.CHAINS.Holesky]: '0x14ae7daeecdf57034f3E9db8564e46Dba8D97344',
    [constants.CHAINS.Sepolia]: '0xd06dF83b8ad6D89C86a187fba4Eae918d497BdCB',
};

exports.LDO_CONTRACT_ADDRESSES = LDO_CONTRACT_ADDRESSES;
exports.LDO_CONTRACT_TOKEN = LDO_CONTRACT_TOKEN;
