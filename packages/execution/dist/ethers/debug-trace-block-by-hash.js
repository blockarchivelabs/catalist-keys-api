'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

async function getDebugTraceBlockByHash(blockHash, traceConfig) {
    await this.getNetwork();
    return (await this.perform('getDebugTraceBlockByHash', {
        blockHash,
        traceConfig,
    }));
}

exports.getDebugTraceBlockByHash = getDebugTraceBlockByHash;
