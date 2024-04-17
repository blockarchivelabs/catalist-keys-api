export interface LimitFunction {
    readonly activeCount: number;
    readonly pendingCount: number;
    clearQueue: () => void;
    <Arguments extends unknown[], ReturnType>(fn: (...args: Arguments) => PromiseLike<ReturnType> | ReturnType, ...args: Arguments): Promise<ReturnType>;
}
export default function pLimit(concurrency: number): LimitFunction;
