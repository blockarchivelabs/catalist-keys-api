import { z } from 'zod';
export declare class ConsensusDataInvalidError extends Error {
    readonly zodError?: z.ZodError<any> | undefined;
    constructor(message: string, zodError?: z.ZodError<any> | undefined);
}
