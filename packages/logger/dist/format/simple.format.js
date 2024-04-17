'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var winston = require('winston');
var secrets_format = require('./secrets.format.js');

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

const colorizer = winston__namespace.format.colorize();
const getMeta = (fieldColors, log) => {
    const fieldNames = Object.keys(fieldColors);
    const metaString = fieldNames
        .map((key) => [key, log[key]])
        .filter(([, value]) => value != null)
        .map(([key, value]) => colorizer.colorize(key, value))
        .join(' ');
    return metaString ? `[${metaString}]` : null;
};
const simple = (options = {}) => {
    const { secrets, regex, fieldColors = {} } = options;
    winston__namespace.addColors(fieldColors);
    return winston__namespace.format.combine(winston__namespace.format.colorize({ all: true }), secrets_format.cleanSecrets({ secrets, regex }), winston__namespace.format.simple(), winston__namespace.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), winston__namespace.format.printf((log) => {
        const { timestamp, level, message, context, stack } = log, rest = tslib.__rest(log, ["timestamp", "level", "message", "context", "stack"]);
        const extra = context ? JSON.stringify(context) : '';
        const meta = getMeta(fieldColors, log);
        // If there are extra keys, then an array or an object was logged
        const text = !Object.keys(rest).length ? message : JSON.stringify(rest);
        return [timestamp, meta, `${level}:`, text, stack, extra]
            .filter((v) => v !== null && v !== '')
            .join(' ');
    }));
};

exports.simple = simple;
