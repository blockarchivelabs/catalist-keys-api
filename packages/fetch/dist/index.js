'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fetch_constants = require('./fetch.constants.js');
var fetch_module = require('./fetch.module.js');
var fetch_service = require('./fetch.service.js');



exports.FETCH_GLOBAL_OPTIONS_TOKEN = fetch_constants.FETCH_GLOBAL_OPTIONS_TOKEN;
exports.FETCH_GLOBAL_RETRY_DEFAULT_ATTEMPTS = fetch_constants.FETCH_GLOBAL_RETRY_DEFAULT_ATTEMPTS;
exports.FETCH_GLOBAL_RETRY_DEFAULT_BASE_URLS = fetch_constants.FETCH_GLOBAL_RETRY_DEFAULT_BASE_URLS;
exports.FETCH_GLOBAL_RETRY_DEFAULT_DELAY = fetch_constants.FETCH_GLOBAL_RETRY_DEFAULT_DELAY;
Object.defineProperty(exports, 'FetchModule', {
	enumerable: true,
	get: function () { return fetch_module.FetchModule; }
});
Object.defineProperty(exports, 'FetchService', {
	enumerable: true,
	get: function () { return fetch_service.FetchService; }
});
