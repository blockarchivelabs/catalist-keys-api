export declare const rangePromise: <T>(callback: (step: number) => Promise<T>, from: number, to: number, batchSize?: number) => Promise<T[]>;
