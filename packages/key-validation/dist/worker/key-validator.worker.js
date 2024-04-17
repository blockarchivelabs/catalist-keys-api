'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var path = require('path');
var validateOneKey = require('../common/validate-one-key.js');
var serialize = require('./serialize.js');

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

var path__namespace = /*#__PURE__*/_interopNamespace(path);

const worker = (keysPartSerialized) => {
    const keysDataBatch = keysPartSerialized.map((data) => {
        return {
            index: data[1],
            key: serialize.deserialize(data[0]),
        };
    });
    return keysDataBatch.map((data) => {
        return [
            data.index,
            validateOneKey.validateOneKey(data.key.key, data.key.depositSignature, data.key.withdrawalCredentials, data.key.genesisForkVersion, data.key.amount, data.key.domainDeposit, data.key.zeroHash),
        ];
    });
};
/* istanbul ignore next */
worker.filename = process.env.TS_JEST
    ? path__namespace.resolve(__dirname, '../../dist/worker/key-validator.worker.js')
    : path__namespace.resolve(__dirname, '../worker/key-validator.worker.js');
var worker$1 = worker;

exports["default"] = worker$1;
