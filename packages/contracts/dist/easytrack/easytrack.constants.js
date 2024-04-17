'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var constants = require('@catalist-nestjs/constants');

const EASYTRACK_CONTRACT_TOKEN = Symbol('easyTrackContract');
// TODO: add holesky address
const EASYTRACK_CONTRACT_ADDRESSES = {
    [constants.CHAINS.Mainnet]: '0xF0211b7660680B49De1A7E9f25C65660F0a13Fea',
    [constants.CHAINS.Goerli]: '0xAf072C8D368E4DD4A9d4fF6A76693887d6ae92Af',
    [constants.CHAINS.Holesky]: '0x1763b9ED3586B08AE796c7787811a2E1bc16163a',
};

exports.EASYTRACK_CONTRACT_ADDRESSES = EASYTRACK_CONTRACT_ADDRESSES;
exports.EASYTRACK_CONTRACT_TOKEN = EASYTRACK_CONTRACT_TOKEN;
