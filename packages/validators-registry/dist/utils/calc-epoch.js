'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('../constants/index.js');

const calcEpochBySlot = (slot) => Math.floor(slot / index.SLOTS_PER_EPOCH);

exports.calcEpochBySlot = calcEpochBySlot;
