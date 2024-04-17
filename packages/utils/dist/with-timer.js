'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var perf_hooks = require('perf_hooks');

const withTimer = async (callback) => {
    const timeStartMs = perf_hooks.performance.now();
    const result = await callback();
    const timeEndMs = perf_hooks.performance.now();
    const timeSeconds = Math.ceil(timeEndMs - timeStartMs) / 1000;
    return [result, timeSeconds];
};

exports.withTimer = withTimer;
