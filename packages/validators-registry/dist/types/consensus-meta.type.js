'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var zod = require('zod');
var primitives = require('./primitives.js');

const ConsensusMeta = zod.z.object({
    // consensus layer data
    epoch: primitives.Epoch,
    slot: primitives.Slot,
    slotStateRoot: primitives.RootHex,
    timestamp: primitives.BlockTimestamp,
    // execution layer data
    blockNumber: primitives.BlockNumber,
    blockHash: primitives.Hash32Hex,
}, { description: 'Consensus meta' });

exports.ConsensusMeta = ConsensusMeta;
