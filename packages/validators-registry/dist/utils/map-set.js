'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const mapSet = (s, fn) => {
    const res = new Set();
    s.forEach((v) => res.add(fn(v)));
    return res;
};

exports.mapSet = mapSet;
