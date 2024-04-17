'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var constants = require('@catalist-nestjs/constants');

const EXECUTION_REWARDS_VAULT_CONTRACT_TOKEN = Symbol('registryContract');
const EXECUTION_REWARDS_VAULT_CONTRACT_ADDRESSES = {
    [constants.CHAINS.Mainnet]: '0x388C818CA8B9251b393131C08a736A67ccB19297',
    [constants.CHAINS.Goerli]: '0x94750381bE1AbA0504C666ee1DB118F68f0780D4',
    [constants.CHAINS.Holesky]: '0xE73a3602b99f1f913e72F8bdcBC235e206794Ac8',
    [constants.CHAINS.Sepolia]: '0x94B1B8e2680882f8652882e7F196169dE3d9a3B2',
    [constants.CHAINS.EnduranceDevnet]: '0x657ae3AB54339200CB31FefdEa29c734e333bBFe',
    [constants.CHAINS.EnduranceMainnet]: '0x03b6d55847692466aFe580Dcc9750874138d6204',
};

exports.EXECUTION_REWARDS_VAULT_CONTRACT_ADDRESSES = EXECUTION_REWARDS_VAULT_CONTRACT_ADDRESSES;
exports.EXECUTION_REWARDS_VAULT_CONTRACT_TOKEN = EXECUTION_REWARDS_VAULT_CONTRACT_TOKEN;
