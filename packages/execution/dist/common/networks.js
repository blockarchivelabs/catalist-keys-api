'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const networksEqual = (networkA, networkB) => {
    return (networkA.name === networkB.name &&
        networkA.chainId === networkB.chainId &&
        (networkA.ensAddress === networkB.ensAddress ||
            (!networkA.ensAddress && !networkB.ensAddress)));
};
const getNetworkChain = (networkish) => typeof networkish === 'object' && networkish != null
    ? networkish.chainId
    : networkish;
const networksChainsEqual = (networkA, networkB) => networkA.chainId === getNetworkChain(networkB);

exports.getNetworkChain = getNetworkChain;
exports.networksChainsEqual = networksChainsEqual;
exports.networksEqual = networksEqual;
