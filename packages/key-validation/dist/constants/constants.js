'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var constants = require('@catalist-nestjs/constants');

const ZERO_HASH = Buffer.alloc(32, 0);
const EMPTY_SIGNATURE = Buffer.alloc(96, 0);
const DOMAIN_DEPOSIT = Buffer.from('03000000', 'hex');
const GENESIS_FORK_VERSION = {
    [constants.CHAINS.Mainnet]: Buffer.from('00000000', 'hex'),
    [constants.CHAINS.Goerli]: Buffer.from('00001020', 'hex'),
    [constants.CHAINS.Holesky]: Buffer.from('01017000', 'hex'),
};
const WITHDRAWAL_CREDENTIALS = {
    [constants.CHAINS.Mainnet]: [
        '0x009690e5d4472c7c0dbdf490425d89862535d2a52fb686333f3a0a9ff5d2125e',
    ],
    [constants.CHAINS.Goerli]: [
        '0x00040517ce98f81070cea20e35610a3ae23a45f0883b0b035afc5717cc2e833e',
    ],
    [constants.CHAINS.Holesky]: [],
};

exports.DOMAIN_DEPOSIT = DOMAIN_DEPOSIT;
exports.EMPTY_SIGNATURE = EMPTY_SIGNATURE;
exports.GENESIS_FORK_VERSION = GENESIS_FORK_VERSION;
exports.WITHDRAWAL_CREDENTIALS = WITHDRAWAL_CREDENTIALS;
exports.ZERO_HASH = ZERO_HASH;
