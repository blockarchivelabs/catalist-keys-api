'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('./utils.js');

function isKeySignPairArray(value) {
    if (!Array.isArray(value)) {
        return false;
    }
    return value.every((v) => isKeySignPair(v));
}
const isKeySignPair = (value) => {
    return (utils.hasAttributes(value, ['key', 'sign']) &&
        typeof value.key === 'string' &&
        typeof value.sign === 'string');
};

exports.isKeySignPair = isKeySignPair;
exports.isKeySignPairArray = isKeySignPairArray;
