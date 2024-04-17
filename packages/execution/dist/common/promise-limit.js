'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var queue = require('./queue.js');

/* eslint-disable @typescript-eslint/ban-types */
function pLimit(concurrency) {
    if (!((Number.isInteger(concurrency) ||
        concurrency === Number.POSITIVE_INFINITY) &&
        concurrency > 0)) {
        throw new TypeError('Expected `concurrency` to be positive integer');
    }
    const queue$1 = new queue.Queue();
    let activeCount = 0;
    const next = () => {
        activeCount--;
        if (queue$1.length > 0) {
            const item = queue$1.dequeue();
            item && item();
        }
    };
    const run = async (fn, resolve, args) => {
        activeCount++;
        const result = (async () => fn(...args))();
        resolve(result);
        try {
            await result;
        }
        catch (_a) {
            // should not catch exceptions here
            // exceptions should be caught in above handlers
        }
        next();
    };
    const enqueue = (fn, resolve, args) => {
        queue$1.enqueue(run.bind(undefined, fn, resolve, args));
        (async () => {
            await Promise.resolve();
            if (activeCount < concurrency && queue$1.length > 0) {
                const item = queue$1.dequeue();
                item && item();
            }
        })();
    };
    const generator = (fn, ...args) => new Promise((resolve) => {
        enqueue(fn, resolve, args);
    });
    Object.defineProperties(generator, {
        activeCount: {
            get: () => activeCount,
        },
        pendingCount: {
            get: () => queue$1.length,
        },
        clearQueue: {
            value: () => {
                queue$1.clear();
            },
        },
    });
    return generator;
}

exports["default"] = pLimit;
