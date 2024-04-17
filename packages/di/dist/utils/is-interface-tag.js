'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isClass = require('./is-class.js');
var di_constants = require('../di.constants.js');

const isInterfaceTag = (val) => {
    return (isClass.isClass(val) &&
        val.interfaceTag === di_constants.INTERFACE_TAG &&
        typeof val.id === 'symbol');
};

exports.isInterfaceTag = isInterfaceTag;
