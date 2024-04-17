import { z } from 'zod';
import { ZodType } from 'zod/lib/types';
/**
 * Parse Zod Type. If parsing fails - onFail in executed.
 *
 * onFail must throw Error
 */
export declare const parseAsTypeOrFail: <Output, Def, Input>(type: z.ZodType<Output, Def, Input>, data: unknown, onFail: (error: z.ZodError) => never) => Output;
