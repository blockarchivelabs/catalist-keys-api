'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Slits array into partitions (chunks) with maxChunkSize and maxParts arguments.
 * Does not modify existing array.
 */
const partition = (arr, maxParts, minChunkSize) => {
    const parts = Math.floor(maxParts);
    const calculatedChunkSize = arr.length >= parts ? Math.floor(arr.length / parts) : arr.length;
    const chunkSize = calculatedChunkSize < minChunkSize ? minChunkSize : calculatedChunkSize;
    const acc = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        acc.push(arr.slice(i, i + chunkSize));
    }
    return acc;
};

exports.partition = partition;
