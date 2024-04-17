'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const compareMeta = (metaOne, metaTwo) => {
    if (metaOne == null)
        return false;
    if (metaTwo == null)
        return false;
    const keysOpIndexOne = metaOne.keysOpIndex;
    const keysOpIndexTwo = metaTwo.keysOpIndex;
    return keysOpIndexOne === keysOpIndexTwo;
};

exports.compareMeta = compareMeta;
