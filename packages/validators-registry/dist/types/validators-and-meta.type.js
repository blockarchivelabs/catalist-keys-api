'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var validator_type = require('./validator.type.js');
var consensusMeta_type = require('./consensus-meta.type.js');
var zod = require('zod');

const ConsensusValidatorsAndMetadata = zod.z.object({
    validators: zod.z.array(validator_type.Validator),
    meta: zod.z.union([consensusMeta_type.ConsensusMeta, zod.z.null()]),
}, { description: 'ConsensusValidatorsAndMetadata' });

exports.ConsensusValidatorsAndMetadata = ConsensusValidatorsAndMetadata;
