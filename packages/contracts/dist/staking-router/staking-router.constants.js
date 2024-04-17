'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var constants = require('@catalist-nestjs/constants');

const STAKING_ROUTER_CONTRACT_TOKEN = Symbol('stakingRouterContract');
const STAKING_ROUTER_CONTRACT_ADDRESSES = {
    [constants.CHAINS.Mainnet]: '0xFdDf38947aFB03C621C71b06C9C70bce73f12999',
    [constants.CHAINS.Goerli]: '0xa3Dbd317E53D363176359E10948BA0b1c0A4c820',
    [constants.CHAINS.Holesky]: '0xd6EbF043D30A7fe46D1Db32BA90a0A51207FE229',
    [constants.CHAINS.Sepolia]: '0x4F36aAEb18Ab56A4e380241bea6ebF215b9cb12c',
    [constants.CHAINS.EnduranceDevnet]: '0x7b6d791175eB131f66d4E7ed732b8FE5686ED668',
    [constants.CHAINS.EnduranceMainnet]: '0x630941c45Cd3BC0B4FC843900C29c8432f4e935d',
};

exports.STAKING_ROUTER_CONTRACT_ADDRESSES = STAKING_ROUTER_CONTRACT_ADDRESSES;
exports.STAKING_ROUTER_CONTRACT_TOKEN = STAKING_ROUTER_CONTRACT_TOKEN;
