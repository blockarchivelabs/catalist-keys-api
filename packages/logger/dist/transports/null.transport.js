'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var winston = require('winston');

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

/* eslint-disable @typescript-eslint/no-explicit-any */
class NullTransport extends winston__namespace.transports.Console {
    constructor(opts) {
        super(opts);
        this.name = 'NullTransport';
    }
    log(...args) {
        const callback = args[args.length - 1];
        callback();
        return this;
    }
}
const nullTransport = () => {
    return new NullTransport();
};

exports.nullTransport = nullTransport;
