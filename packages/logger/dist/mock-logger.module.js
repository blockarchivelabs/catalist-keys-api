'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var common = require('@nestjs/common');
var createMockLogger = require('./mock/create-mock-logger.js');

exports.MockLoggerModule = class MockLoggerModule {
    static forRoot(options) {
        return createMockLogger.createMockLogger(options);
    }
    static forRootAsync(options) {
        return createMockLogger.createMockLogger(options);
    }
};
exports.MockLoggerModule = tslib.__decorate([
    common.Global(),
    common.Module({})
], exports.MockLoggerModule);
