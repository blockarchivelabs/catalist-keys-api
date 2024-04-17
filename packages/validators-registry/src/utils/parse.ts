import { z } from 'zod';
import { ZodType } from 'zod/lib/types';

/**
 * Parse Zod Type. If parsing fails - onFail in executed.
 *
 * onFail must throw Error
 */
export const parseAsTypeOrFail = <Output, Def, Input>(
  type: ZodType<Output, Def, Input>,
  data: unknown,
  onFail: (error: z.ZodError) => never,
) => {
  const res = type.safeParse(data);
  if (res.success) {
    return res.data;
  }

  onFail(res.error);
};
