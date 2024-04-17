'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const hasAttributes = (element, attributes) => {
    if (element === undefined || element === null) {
        return false;
    }
    return attributes.every((attribute) => Object.prototype.hasOwnProperty.call(element, attribute));
};

exports.hasAttributes = hasAttributes;
