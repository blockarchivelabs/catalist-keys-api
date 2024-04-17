'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

class ConsensusDataInvalidError extends Error {
    constructor(message, zodError) {
        super(message);
        this.zodError = zodError;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}

exports.ConsensusDataInvalidError = ConsensusDataInvalidError;
