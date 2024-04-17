import { z } from 'zod';
/**
 * Root (hex-string)
 * Possible values: 0x0...0 ... 0xF...F (64 digits)
 */
export declare const RootHex: z.ZodEffects<z.ZodString, string, string>;
/**
 * Hash32 (hex-string)
 * Possible values: 0x0...0 ... 0xF...F (64 digits)
 */
export declare const Hash32Hex: z.ZodEffects<z.ZodString, string, string>;
/**
 * BLSPubkey (hex-string)
 * Possible values: 0x0...0 ... 0xF...F (96 digits)
 */
export declare const BLSPubkeyHex: z.ZodEffects<z.ZodString, string, string>;
export declare type BLSPubkeyHex = z.infer<typeof BLSPubkeyHex>;
/**
 * Non-negative Integer (JS Number)
 * Possible values: 0...N (2^53-1)
 */
export declare const IntegerNonNegative: z.ZodNumber;
export declare type IntegerNonNegative = z.infer<typeof IntegerNonNegative>;
/**
 * Non-negative Integer (will be transformed from string to JS Number)
 * Possible values: '0'...'N' (2^53-1)
 */
export declare const IntegerFromStringNonNegative: z.ZodEffects<z.ZodString, number, string>;
export declare type IntegerFromStringNonNegative = z.infer<typeof IntegerFromStringNonNegative>;
/**
 * Slot (JS Number)
 * Possible values: 0...N (2^53-1)
 */
export declare const Slot: z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodString, number, string>]>;
export declare type Slot = z.infer<typeof Slot>;
/**
 * Epoch (JS Number)
 * Possible values: 0...N (2^53-1)
 */
export declare const Epoch: z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodString, number, string>]>;
export declare type Epoch = z.infer<typeof Epoch>;
/**
 * Block Index (JS Number)
 * Possible values: 0...N (2^53-1)
 */
export declare const BlockNumber: z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodString, number, string>]>;
export declare type BlockNumber = z.infer<typeof BlockNumber>;
/**
 * Validator Index (JS Number)
 * Possible values: 0...N (2^53-1)
 */
export declare const ValidatorIndex: z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodString, number, string>]>;
export declare type ValidatorIndex = z.infer<typeof ValidatorIndex>;
/**
 * Block Timestamp (JS Number)
 * Possible values: 0...N (2^53-1)
 */
export declare const BlockTimestamp: z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodString, number, string>]>;
export declare type BlockTimestamp = z.infer<typeof BlockTimestamp>;
