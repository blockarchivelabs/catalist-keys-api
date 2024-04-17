import { z } from 'zod';
export declare const ConsensusMeta: z.ZodObject<{
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
}>;
export declare type ConsensusMeta = z.infer<typeof ConsensusMeta>;
