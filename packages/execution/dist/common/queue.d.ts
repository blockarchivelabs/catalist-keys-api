export declare class Queue<T> {
    private _store;
    enqueue(val: T): void;
    dequeue(): T | undefined;
    get length(): number;
    clear(): void;
    dequeueMultiple(batch: number): T[];
}
