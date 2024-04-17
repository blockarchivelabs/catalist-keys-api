'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var constants = require('@catalist-nestjs/constants');

const ARAGON_VOTING_CONTRACT_TOKEN = Symbol('aragonVotingContract');
const ARAGON_VOTING_CONTRACT_ADDRESSES = {
    [constants.CHAINS.Mainnet]: '0x2e59A20f205bB85a89C53f1936454680651E618e',
    [constants.CHAINS.Goerli]: '0xbc0b67b4553f4cf52a913de9a6ed0057e2e758db',
    [constants.CHAINS.Holesky]: '0xdA7d2573Df555002503F29aA4003e398d28cc00f',
    [constants.CHAINS.Sepolia]: '0x39A0EbdEE54cB319f4F42141daaBDb6ba25D341A',
    [constants.CHAINS.EnduranceMainnet]: '0x827c8945359366A3909c34928EC498594659E4c2',
    [constants.CHAINS.EnduranceDevnet]: '0x27F7C63ee5492F614568b03e61d78D0f3d536488',
};

exports.ARAGON_VOTING_CONTRACT_ADDRESSES = ARAGON_VOTING_CONTRACT_ADDRESSES;
exports.ARAGON_VOTING_CONTRACT_TOKEN = ARAGON_VOTING_CONTRACT_TOKEN;
