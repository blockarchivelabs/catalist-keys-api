'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const chunk = (array, chunkSize) => {
    if (chunkSize <= 0)
        return [];
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
};

exports.chunk = chunk;
