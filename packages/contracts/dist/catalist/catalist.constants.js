'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var constants = require('@catalist-nestjs/constants');

const CATALIST_CONTRACT_TOKEN = Symbol('catalistContract');
const CATALIST_CONTRACT_ADDRESSES = {
    [constants.CHAINS.Mainnet]: '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84',
    [constants.CHAINS.Goerli]: '0x1643E812aE58766192Cf7D2Cf9567dF2C37e9B7F',
    [constants.CHAINS.Holesky]: '0x3F1c547b21f65e10480dE3ad8E19fAAC46C95034',
    [constants.CHAINS.Sepolia]: '0x3e3FE7dBc6B4C189E7128855dD526361c49b40Af',
    [constants.CHAINS.EnduranceDevnet]: '0x72bB7806B8459337b231016e182348CD853E3106',
    [constants.CHAINS.EnduranceMainnet]: '0x23bBA284db799Ca49381bEA734F1A55f14692f5c',
};

exports.CATALIST_CONTRACT_ADDRESSES = CATALIST_CONTRACT_ADDRESSES;
exports.CATALIST_CONTRACT_TOKEN = CATALIST_CONTRACT_TOKEN;
