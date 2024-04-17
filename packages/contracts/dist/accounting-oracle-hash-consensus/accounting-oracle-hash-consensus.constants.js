'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var constants = require('@catalist-nestjs/constants');

const ACCOUNTING_ORACLE_HASH_CONSENSUS_TOKEN = Symbol('accountingOracleHashConsensus');
const ACCOUNTING_ORACLE_HASH_CONSENSUS_ADDRESSES = {
    [constants.CHAINS.Mainnet]: '0xD624B08C83bAECF0807Dd2c6880C3154a5F0B288',
    [constants.CHAINS.Goerli]: '0x8d87A8BCF8d4e542fd396D1c50223301c164417b',
    [constants.CHAINS.Holesky]: '0xa067FC95c22D51c3bC35fd4BE37414Ee8cc890d2',
    [constants.CHAINS.Sepolia]: '0x758D8c3CE794b3Dfe3b3A3482B7eD33de2109D95',
    [constants.CHAINS.EnduranceDevnet]: '0x9A956d3b228C3e212D96480938003fc686f51380',
    [constants.CHAINS.EnduranceMainnet]: '0x23b1f732c9B20CC09b8046931407ED2A883Cca82',
};

exports.ACCOUNTING_ORACLE_HASH_CONSENSUS_ADDRESSES = ACCOUNTING_ORACLE_HASH_CONSENSUS_ADDRESSES;
exports.ACCOUNTING_ORACLE_HASH_CONSENSUS_TOKEN = ACCOUNTING_ORACLE_HASH_CONSENSUS_TOKEN;
