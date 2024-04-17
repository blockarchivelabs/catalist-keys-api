'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var nestWinston = require('nest-winston');

const createMockLogger = (logger) => {
    const providers = [
        {
            provide: nestWinston.WINSTON_MODULE_NEST_PROVIDER,
            useFactory: () => logger,
        },
    ];
    return {
        module: nestWinston.WinstonModule,
        providers: providers,
        exports: providers,
    };
};

exports.createMockLogger = createMockLogger;
