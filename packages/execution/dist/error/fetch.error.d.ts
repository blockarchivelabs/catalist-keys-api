export declare class FetchError extends Error {
    name: string;
    code: string | number;
    data: unknown;
    constructor(message: string);
}
