'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

class AllProvidersFailedError extends Error {
    constructor(message) {
        super(message);
        this.name = 'AllProvidersFailedError';
        this.code = 0;
        Object.setPrototypeOf(this, new.target.prototype);
    }
    // for backward-compatibility
    get originalError() {
        return this.cause;
    }
}

exports.AllProvidersFailedError = AllProvidersFailedError;
