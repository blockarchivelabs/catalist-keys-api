'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isClass = (val) => {
    var _a;
    return typeof val === 'function'
        ? val.prototype
            ? /* istanbul ignore next */ ((_a = Object.getOwnPropertyDescriptor(val, 'prototype')) === null || _a === void 0 ? void 0 : _a.writable)
                ? false
                : true
            : false
        : false;
};

exports.isClass = isClass;
