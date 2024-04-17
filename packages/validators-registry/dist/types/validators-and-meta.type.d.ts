import { z } from 'zod';
export declare const ConsensusValidatorsAndMetadata: z.ZodObject<{
    validators: z.ZodArray<z.ZodObject<{
        index: z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodString, number, string>]>;
        status: z.ZodNativeEnum<typeof import("./validator.type").ValidatorStatus>;
        pubkey: z.ZodEffects<z.ZodString, string, string>;
    }, "strip", z.ZodTypeAny, {
        status: import("./validator.type").ValidatorStatus;
        index: number;
        pubkey: string;
    }, {
        status: import("./validator.type").ValidatorStatus;
        index: string | number;
        pubkey: string;
    }>, "many">;
    meta: z.ZodUnion<[z.ZodObject<{
        epoch: z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodString, number, string>]>;
        slot: z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodString, number, string>]>;
        slotStateRoot: z.ZodEffects<z.ZodString, string, string>;
        timestamp: z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodString, number, string>]>;
        blockNumber: z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodString, number, string>]>;
        blockHash: z.ZodEffects<z.ZodString, string, string>;
    }, "strip", z.ZodTypeAny, {
        epoch: number;
        slot: number;
        slotStateRoot: string;
        timestamp: number;
        blockNumber: number;
        blockHash: string;
    }, {
        epoch: string | number;
        slot: string | number;
        slotStateRoot: string;
        timestamp: string | number;
        blockNumber: string | number;
        blockHash: string;
    }>, z.ZodNull]>;
}, "strip", z.ZodTypeAny, {
    validators: {
        status: import("./validator.type").ValidatorStatus;
        index: number;
        pubkey: string;
    }[];
    meta: {
        epoch: number;
        slot: number;
        slotStateRoot: string;
        timestamp: number;
        blockNumber: number;
        blockHash: string;
    } | null;
}, {
    validators: {
        status: import("./validator.type").ValidatorStatus;
        index: string | number;
        pubkey: string;
    }[];
    meta: {
        epoch: string | number;
        slot: string | number;
        slotStateRoot: string;
        timestamp: string | number;
        blockNumber: string | number;
        blockHash: string;
    } | null;
}>;
export declare type ConsensusValidatorsAndMetadata = z.infer<typeof ConsensusValidatorsAndMetadata>;
