'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var bytes = require('@ethersproject/bytes');

const formatBlockNumber = (blockNumber) => {
    if (blockNumber === 'latest' ||
        blockNumber === 'earliest' ||
        blockNumber === 'pending') {
        return blockNumber;
    }
    else if (blockNumber !== null &&
        typeof blockNumber !== 'undefined' &&
        (typeof blockNumber === 'number' || bytes.isHexString(blockNumber))) {
        return bytes.hexValue(blockNumber);
    }
    return 'latest';
};

exports.formatBlockNumber = formatBlockNumber;
