'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var v8 = require('v8');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var v8__namespace = /*#__PURE__*/_interopNamespace(v8);

const serialize = (key) => {
    return v8__namespace.serialize(key).toString('hex');
};
const deserialize = (data) => {
    return v8__namespace.deserialize(Buffer.from(data, 'hex'));
};

exports.deserialize = deserialize;
exports.serialize = serialize;
