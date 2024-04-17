'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

class FetchError extends Error {
    constructor(message) {
        super(message);
        this.name = 'FetchError';
        this.code = 0;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}

exports.FetchError = FetchError;
