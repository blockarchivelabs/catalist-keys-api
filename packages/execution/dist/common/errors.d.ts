export declare const nonRetryableErrors: (string | number)[];
export declare type ErrorWithCode = Error & {
    code: number | string;
};
export declare type HasErrorProperty = {
    error: object;
};
export declare type HasServerErrorProperty = {
    serverError: object;
};
export declare const isErrorHasCode: (error: unknown) => error is ErrorWithCode;
export declare const hasErrorProperty: (error: unknown) => error is HasErrorProperty;
export declare const hasServerErrorProperty: (error: unknown) => error is HasServerErrorProperty;
/**
 * Detect that ethers error is a server error.
 *
 * Note: Ethers v5 error management is not very clean,
 * and ethers error can be nested.
 *
 */
export declare const isEthersServerError: (error: unknown) => boolean;
