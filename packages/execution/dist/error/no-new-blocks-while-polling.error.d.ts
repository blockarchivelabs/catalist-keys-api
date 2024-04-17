export declare class NoNewBlocksWhilePollingError extends Error {
    name: string;
    latestObservedBlockNumber: number;
    constructor(message: string, latestObservedBlockNumber: number);
}
