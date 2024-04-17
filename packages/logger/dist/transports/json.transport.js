'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var winston = require('winston');
var json_format = require('../format/json.format.js');

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

var winston__namespace = /*#__PURE__*/_interopNamespace(winston);

const jsonTransport = (...args) => {
    return new winston__namespace.transports.Console({ format: json_format.json(...args) });
};

exports.jsonTransport = jsonTransport;
