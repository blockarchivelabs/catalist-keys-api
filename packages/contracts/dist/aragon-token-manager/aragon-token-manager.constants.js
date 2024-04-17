'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var constants = require('@catalist-nestjs/constants');

const ARAGON_TOKEN_MANAGER_CONTRACT_TOKEN = Symbol('aragonTokenManagerContract');
const ARAGON_TOKEN_MANAGER_CONTRACT_ADDRESSES = {
    [constants.CHAINS.Mainnet]: '0xf73a1260d222f447210581DDf212D915c09a3249',
    [constants.CHAINS.Goerli]: '0xDfe76d11b365f5e0023343A367f0b311701B3bc1',
    [constants.CHAINS.Holesky]: '0xFaa1692c6eea8eeF534e7819749aD93a1420379A',
    [constants.CHAINS.Sepolia]: '0xC73cd4B2A7c1CBC5BF046eB4A7019365558ABF66',
    [constants.CHAINS.EnduranceDevnet]: '0x483df9ae9564FfB7C891975CF03a33EB9973c6A8',
    [constants.CHAINS.EnduranceMainnet]: '0xc9A334E2337f5274CA801Bc1B1f896396bBa0033',
};

exports.ARAGON_TOKEN_MANAGER_CONTRACT_ADDRESSES = ARAGON_TOKEN_MANAGER_CONTRACT_ADDRESSES;
exports.ARAGON_TOKEN_MANAGER_CONTRACT_TOKEN = ARAGON_TOKEN_MANAGER_CONTRACT_TOKEN;
