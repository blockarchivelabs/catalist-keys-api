'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var middleware_constants = require('./middleware.constants.js');
var middleware_module = require('./middleware.module.js');
var middleware_service = require('./middleware.service.js');



exports.MIDDLEWARE_OPTIONS_TOKEN = middleware_constants.MIDDLEWARE_OPTIONS_TOKEN;
Object.defineProperty(exports, 'MiddlewareModule', {
	enumerable: true,
	get: function () { return middleware_module.MiddlewareModule; }
});
Object.defineProperty(exports, 'MiddlewareService', {
	enumerable: true,
	get: function () { return middleware_service.MiddlewareService; }
});
