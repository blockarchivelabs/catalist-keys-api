'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var zod = require('zod');

/**
 * Root (hex-string)
 * Possible values: 0x0...0 ... 0xF...F (64 digits)
 */
const RootHex = zod.z
    .string({ description: 'Root (hex-string) ' })
    .regex(/^0x[a-fA-F0-9]{64}$/)
    .transform((x) => x.toLocaleLowerCase());
/**
 * Hash32 (hex-string)
 * Possible values: 0x0...0 ... 0xF...F (64 digits)
 */
const Hash32Hex = zod.z
    .string({ description: 'Hash32 (hex-string) ' })
    .regex(/^0x[a-fA-F0-9]{64}$/)
    .transform((x) => x.toLocaleLowerCase());
/**
 * BLSPubkey (hex-string)
 * Possible values: 0x0...0 ... 0xF...F (96 digits)
 */
const BLSPubkeyHex = zod.z
    .string({ description: 'BLSPubkey (hex-string) ' })
    .regex(/^0x[a-fA-F0-9]{96}$/)
    .transform((x) => x.toLocaleLowerCase());
/**
 * Non-negative Integer (JS Number)
 * Possible values: 0...N (2^53-1)
 */
const IntegerNonNegative = zod.z
    .number({ description: 'Integer (non-negative)' })
    .int()
    .min(0)
    .max(Number.MAX_SAFE_INTEGER);
/**
 * Non-negative Integer (will be transformed from string to JS Number)
 * Possible values: '0'...'N' (2^53-1)
 */
const IntegerFromStringNonNegative = zod.z
    .string()
    .regex(/^\d+$/)
    .transform((x, ctx) => {
    const value = parseInt(x, 10);
    const res = IntegerNonNegative.safeParse(value);
    if (!res.success) {
        res.error.issues.map((i) => ctx.addIssue(i));
        return zod.z.NEVER;
    }
    return res.data;
});
/**
 * Slot (JS Number)
 * Possible values: 0...N (2^53-1)
 */
const Slot = zod.z.union([IntegerNonNegative, IntegerFromStringNonNegative], {
    description: 'Slot',
});
/**
 * Epoch (JS Number)
 * Possible values: 0...N (2^53-1)
 */
const Epoch = zod.z.union([IntegerNonNegative, IntegerFromStringNonNegative], {
    description: 'Epoch',
});
/**
 * Block Index (JS Number)
 * Possible values: 0...N (2^53-1)
 */
const BlockNumber = zod.z.union([IntegerNonNegative, IntegerFromStringNonNegative], {
    description: 'BlockNumber',
});
/**
 * Validator Index (JS Number)
 * Possible values: 0...N (2^53-1)
 */
const ValidatorIndex = zod.z.union([IntegerNonNegative, IntegerFromStringNonNegative], {
    description: 'ValidatorIndex',
});
/**
 * Block Timestamp (JS Number)
 * Possible values: 0...N (2^53-1)
 */
const BlockTimestamp = zod.z.union([IntegerNonNegative, IntegerFromStringNonNegative], {
    description: 'BlockTimestamp',
});

exports.BLSPubkeyHex = BLSPubkeyHex;
exports.BlockNumber = BlockNumber;
exports.BlockTimestamp = BlockTimestamp;
exports.Epoch = Epoch;
exports.Hash32Hex = Hash32Hex;
exports.IntegerFromStringNonNegative = IntegerFromStringNonNegative;
exports.IntegerNonNegative = IntegerNonNegative;
exports.RootHex = RootHex;
exports.Slot = Slot;
exports.ValidatorIndex = ValidatorIndex;
