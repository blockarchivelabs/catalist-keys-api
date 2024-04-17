'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('reflect-metadata');
var di_constants = require('../di.constants.js');
var isClass = require('./is-class.js');

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Checks that target implements specific interface tag
 */
const doesImplement = (target, interfaceTag) => {
    if (typeof target === 'undefined' || target === null) {
        return false;
    }
    if (Reflect.hasMetadata(di_constants.DESIGN_IMPLEMENTS, target.constructor)) {
        const tags = Reflect.getMetadata(di_constants.DESIGN_IMPLEMENTS, target.constructor);
        let tag;
        if (isClass.isClass(interfaceTag) && interfaceTag.interfaceTag === di_constants.INTERFACE_TAG) {
            tag = interfaceTag.id;
        }
        else {
            return false;
        }
        return tags.indexOf(tag) >= 0;
    }
    return false;
};

exports.doesImplement = doesImplement;
