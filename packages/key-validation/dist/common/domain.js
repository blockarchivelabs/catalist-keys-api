'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('../ssz/index.js');

/**
 * Used primarily in signature domains to avoid collisions across forks/chains.
 */
function computeForkDataRoot(currentVersion, genesisValidatorsRoot) {
    const forkData = {
        currentVersion,
        genesisValidatorsRoot,
    };
    return index.ForkData.hashTreeRoot(forkData);
}
function computeDomain(domainType, forkVersion, genesisValidatorRoot) {
    const forkDataRoot = computeForkDataRoot(forkVersion, genesisValidatorRoot);
    const domain = new Uint8Array(32);
    domain.set(domainType, 0);
    domain.set(forkDataRoot.slice(0, 28), 4);
    return domain;
}

exports.computeDomain = computeDomain;
exports.computeForkDataRoot = computeForkDataRoot;
