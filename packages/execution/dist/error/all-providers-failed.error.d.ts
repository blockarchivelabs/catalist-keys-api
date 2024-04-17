export declare class AllProvidersFailedError extends Error {
    name: string;
    code: number;
    cause: Error | unknown;
    get originalError(): Error | unknown;
    constructor(message: string);
}
