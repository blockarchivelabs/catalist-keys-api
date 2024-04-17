/**
 * Slits array into partitions (chunks) with maxChunkSize and maxParts arguments.
 * Does not modify existing array.
 */
export declare const partition: <T>(arr: T[], maxParts: number, minChunkSize: number) => T[][];
