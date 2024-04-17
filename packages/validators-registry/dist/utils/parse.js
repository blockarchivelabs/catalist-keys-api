'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Parse Zod Type. If parsing fails - onFail in executed.
 *
 * onFail must throw Error
 */
const parseAsTypeOrFail = (type, data, onFail) => {
    const res = type.safeParse(data);
    if (res.success) {
        return res.data;
    }
    onFail(res.error);
};

exports.parseAsTypeOrFail = parseAsTypeOrFail;
