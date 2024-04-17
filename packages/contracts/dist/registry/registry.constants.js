'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var constants = require('@catalist-nestjs/constants');

const REGISTRY_CONTRACT_TOKEN = Symbol('registryContract');
const REGISTRY_CONTRACT_ADDRESSES = {
    [constants.CHAINS.Mainnet]: '0x55032650b14df07b85bF18A3a3eC8E0Af2e028d5',
    [constants.CHAINS.Goerli]: '0x9D4AF1Ee19Dad8857db3a45B0374c81c8A1C6320',
    [constants.CHAINS.Holesky]: '0x595F64Ddc3856a3b5Ff4f4CC1d1fb4B46cFd2bAC',
    [constants.CHAINS.Sepolia]: '0x33d6E15047E8644F8DDf5CD05d202dfE587DA6E3',
    [constants.CHAINS.EnduranceDevnet]: '0x302908E8976d568147BcFD22A331ed9deBaAA7c8',
    [constants.CHAINS.EnduranceMainnet]: '0x1B731c8e3Cb936440F5298DBE548A7C9d765264C',
};

exports.REGISTRY_CONTRACT_ADDRESSES = REGISTRY_CONTRACT_ADDRESSES;
exports.REGISTRY_CONTRACT_TOKEN = REGISTRY_CONTRACT_TOKEN;
