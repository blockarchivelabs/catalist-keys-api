'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var providers = require('@ethersproject/providers');

/* eslint-disable @typescript-eslint/no-explicit-any */
class FormatterWithEIP1898 extends providers.Formatter {
    /**
     * blockTag formatter with EIP-1898 support
     * https://eips.ethereum.org/EIPS/eip-1898
     */
    blockTag(blockTag) {
        if (typeof blockTag === 'object' &&
            blockTag != null &&
            (blockTag.blockNumber || blockTag.blockHash)) {
            return blockTag;
        }
        return super.blockTag(blockTag);
    }
}

exports.FormatterWithEIP1898 = FormatterWithEIP1898;
