'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

class NoNewBlocksWhilePollingError extends Error {
    constructor(message, latestObservedBlockNumber) {
        super(message);
        this.name = 'NoNewBlocksWhilePollingError';
        Object.setPrototypeOf(this, new.target.prototype);
        this.latestObservedBlockNumber = latestObservedBlockNumber;
    }
}

exports.NoNewBlocksWhilePollingError = NoNewBlocksWhilePollingError;
