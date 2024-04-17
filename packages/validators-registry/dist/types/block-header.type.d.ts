import { z } from 'zod';
export declare const BlockHeader: z.ZodObject<{
    root: z.ZodEffects<z.ZodString, string, string>;
    slot: z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodString, number, string>]>;
}, "strip", z.ZodTypeAny, {
    root: string;
    slot: number;
}, {
    root: string;
    slot: string | number;
}>;
export declare type BlockHeader = z.infer<typeof BlockHeader>;
