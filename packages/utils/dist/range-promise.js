'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var range = require('./range.js');

const rangePromise = async (callback, from, to, batchSize = 20) => {
    if (to < from)
        throw new Error('From should be less than to');
    if (batchSize <= 0)
        throw new Error('batchSize should be greater than 0');
    const batchFrom = 0;
    const batchTo = Math.ceil((to - from) / batchSize);
    let result = [];
    for (let batch = batchFrom; batch < batchTo; batch++) {
        const batchSlotFrom = from + batch * batchSize;
        const batchSlotTo = Math.min(batchSlotFrom + batchSize, to);
        const batchResult = await Promise.all(range.range(batchSlotFrom, batchSlotTo).map((step) => callback(step)));
        result = result.concat(batchResult);
    }
    return result;
};

exports.rangePromise = rangePromise;
