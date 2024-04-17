'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var logger_module = require('./logger.module.js');
var mockLogger_module = require('./mock-logger.module.js');
var nestWinston = require('nest-winston');
var json_format = require('./format/json.format.js');
var secrets_format = require('./format/secrets.format.js');
var simple_format = require('./format/simple.format.js');
var json_transport = require('./transports/json.transport.js');
var null_transport = require('./transports/null.transport.js');
var simple_transport = require('./transports/simple.transport.js');



exports.LoggerModule = logger_module.LoggerModule;
Object.defineProperty(exports, 'MockLoggerModule', {
	enumerable: true,
	get: function () { return mockLogger_module.MockLoggerModule; }
});
Object.defineProperty(exports, 'LOGGER_OPTIONS', {
	enumerable: true,
	get: function () { return nestWinston.WINSTON_MODULE_OPTIONS; }
});
Object.defineProperty(exports, 'LOGGER_PROVIDER', {
	enumerable: true,
	get: function () { return nestWinston.WINSTON_MODULE_NEST_PROVIDER; }
});
exports.json = json_format.json;
exports.SECRET_REPLACER = secrets_format.SECRET_REPLACER;
exports.cleanSecrets = secrets_format.cleanSecrets;
exports.regExpEscape = secrets_format.regExpEscape;
exports.simple = simple_format.simple;
exports.jsonTransport = json_transport.jsonTransport;
exports.nullTransport = null_transport.nullTransport;
exports.simpleTransport = simple_transport.simpleTransport;
