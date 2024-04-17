'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var constants = require('@catalist-nestjs/constants');

const ORACLE_CONTRACT_TOKEN = Symbol('oracleContract');
const ORACLE_CONTRACT_ADDRESSES = {
    [constants.CHAINS.Mainnet]: '0x442af784A788A5bd6F42A01Ebe9F287a871243fb',
    [constants.CHAINS.Goerli]: '0x24d8451BC07e7aF4Ba94F69aCDD9ad3c6579D9FB',
    [constants.CHAINS.Holesky]: '0x072f72BE3AcFE2c52715829F2CD9061A6C8fF019',
    [constants.CHAINS.Sepolia]: '0x3483c140EF7F2716460198Ff831a8e53F05F1606',
    [constants.CHAINS.EnduranceDevnet]: '0x342B3AA29a7425bcd0dB61d7c8Ca2D1D66AE7CED',
    [constants.CHAINS.EnduranceMainnet]: '0x53e585ae2aa7789cd8B7190a352A0d4c291ab179',
};

exports.ORACLE_CONTRACT_ADDRESSES = ORACLE_CONTRACT_ADDRESSES;
exports.ORACLE_CONTRACT_TOKEN = ORACLE_CONTRACT_TOKEN;
