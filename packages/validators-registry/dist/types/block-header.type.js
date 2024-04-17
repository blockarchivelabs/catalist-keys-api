'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var zod = require('zod');
var primitives = require('./primitives.js');

const BlockHeader = zod.z.object({
    root: primitives.RootHex,
    slot: primitives.Slot,
}, { description: 'BlockHeader' });

exports.BlockHeader = BlockHeader;
