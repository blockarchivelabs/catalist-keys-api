'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('./utils.js');

const isIpfsFileData = (value) => {
    return utils.hasAttributes(value, ['Hash']) && typeof value.Hash === 'string';
};

exports.isIpfsFileData = isIpfsFileData;
