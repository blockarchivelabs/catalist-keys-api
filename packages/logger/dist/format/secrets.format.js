'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var winston = require('winston');
var traverse = require('traverse');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

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
var traverse__default = /*#__PURE__*/_interopDefaultLegacy(traverse);

const SECRET_REPLACER = '<removed>';
const regExpEscape = (str) => {
    return str.replace(/[-[\]{}()*+?./\\^$|\s,]/g, '\\$&');
};
const cleanSecrets = winston__namespace.format((info, opts) => {
    var _a, _b;
    const secrets = (_a = opts.secrets) !== null && _a !== void 0 ? _a : [];
    const regex = (_b = opts.regex) !== null && _b !== void 0 ? _b : [];
    return replace(secrets, regex, info);
});
const replace = (secrets, regex, message, traversal = true) => {
    if (typeof message === 'string') {
        const withCleanedSecrets = secrets.reduce((result, secret) => {
            const re = new RegExp(regExpEscape(secret), 'g');
            return secret ? result.replace(re, SECRET_REPLACER) : result;
        }, message);
        const withCleanedRegexes = regex.reduce((result, regex) => {
            const re = new RegExp(regex, 'g');
            return result.replace(re, SECRET_REPLACER);
        }, withCleanedSecrets);
        return withCleanedRegexes;
    }
    // Arrays are handled here as well
    if (typeof message === 'object' && message !== null && traversal === true) {
        return traverse__default["default"](message).map(function (node) {
            if (this.level >= 10) {
                this.update('Maximum secret sanitizing depth reached.');
                this.stop();
                return;
            }
            // IMPORTANT: Specify no traversing on recursive reads
            this.update(replace(secrets, regex, node, false));
        });
    }
    return message;
};

exports.SECRET_REPLACER = SECRET_REPLACER;
exports.cleanSecrets = cleanSecrets;
exports.regExpEscape = regExpEscape;
