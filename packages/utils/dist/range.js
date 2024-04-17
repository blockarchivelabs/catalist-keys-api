'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function* positiveIterator(start, end) {
    for (let i = start; i < end; i++)
        yield i;
}
function* negativeIterator(start, end) {
    for (let i = start; i > end; i--)
        yield i;
}
const range = (start, end) => {
    const delta = start - end;
    const iterator = delta < 0 ? positiveIterator : negativeIterator;
    return [...iterator(start, end)];
};

exports.range = range;
