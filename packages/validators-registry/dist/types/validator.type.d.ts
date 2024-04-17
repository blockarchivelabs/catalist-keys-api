import { z } from 'zod';
export declare enum ValidatorStatus {
    PENDING_INITIALIZED = "pending_initialized",
    PENDING_QUEUED = "pending_queued",
    ACTIVE_ONGOING = "active_ongoing",
    ACTIVE_EXITING = "active_exiting",
    ACTIVE_SLASHED = "active_slashed",
    EXITED_UNSLASHED = "exited_unslashed",
    EXITED_SLASHED = "exited_slashed",
    WITHDRAWAL_POSSIBLE = "withdrawal_possible",
    WITHDRAWAL_DONE = "withdrawal_done"
}
export declare const ValidatorStatusType: z.ZodNativeEnum<typeof ValidatorStatus>;
export declare type ValidatorStatusType = z.infer<typeof ValidatorStatusType>;
export declare const Validator: z.ZodObject<{
    index: z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodString, number, string>]>;
    status: z.ZodNativeEnum<typeof ValidatorStatus>;
    pubkey: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    status: ValidatorStatus;
    index: number;
    pubkey: string;
}, {
    status: ValidatorStatus;
    index: string | number;
    pubkey: string;
}>;
export declare type Validator = z.infer<typeof Validator>;
export declare const Validators: z.ZodArray<z.ZodObject<{
    index: z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodString, number, string>]>;
    status: z.ZodNativeEnum<typeof ValidatorStatus>;
    pubkey: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    status: ValidatorStatus;
    index: number;
    pubkey: string;
}, {
    status: ValidatorStatus;
    index: string | number;
    pubkey: string;
}>, "many">;
