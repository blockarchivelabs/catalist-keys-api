'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const bufferFromHexString = (x) => Buffer.from(x.replace(/^0x/, ''), 'hex');

exports.bufferFromHexString = bufferFromHexString;
