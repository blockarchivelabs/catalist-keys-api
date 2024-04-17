'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('../ssz/index.js');

const computeSigningRoot = (type, sszObject, domain) => {
    const domainWrappedObject = {
        objectRoot: type.hashTreeRoot(sszObject),
        domain,
    };
    return index.SigningData.hashTreeRoot(domainWrappedObject);
};

exports.computeSigningRoot = computeSigningRoot;
