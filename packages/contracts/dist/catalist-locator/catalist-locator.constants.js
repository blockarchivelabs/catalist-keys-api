'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var constants = require('@catalist-nestjs/constants');

const CATALIST_LOCATOR_CONTRACT_TOKEN = Symbol('catalistLocatorContract');
const CATALIST_LOCATOR_CONTRACT_ADDRESSES = {
    [constants.CHAINS.Mainnet]: '0xC1d0b3DE6792Bf6b4b37EccdcC24e45978Cfd2Eb',
    [constants.CHAINS.Goerli]: '0x1eDf09b5023DC86737b59dE68a8130De878984f5',
    [constants.CHAINS.Holesky]: '0x28FAB2059C713A7F9D8c86Db49f9bb0e96Af1ef8',
    [constants.CHAINS.Sepolia]: '0x8f6254332f69557A72b0DA2D5F0Bc07d4CA991E7',
    [constants.CHAINS.EnduranceDevnet]: '0x2c39f9348354003b1300f45c1a45Dd8a365D9182',
    [constants.CHAINS.EnduranceMainnet]: '0xE39c3142efA4e8a37770731bC8397e3F3B87e7C7',
};

exports.CATALIST_LOCATOR_CONTRACT_ADDRESSES = CATALIST_LOCATOR_CONTRACT_ADDRESSES;
exports.CATALIST_LOCATOR_CONTRACT_TOKEN = CATALIST_LOCATOR_CONTRACT_TOKEN;
