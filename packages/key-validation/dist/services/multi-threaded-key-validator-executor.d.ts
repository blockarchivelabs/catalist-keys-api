import { Key, KeyValidatorExecutorInterface } from '../interfaces';
export declare class MultiThreadedKeyValidatorExecutor implements KeyValidatorExecutorInterface {
    validateKey<T = never>(key: Key & T): Promise<boolean>;
    validateKeys<T = never>(keys: (Key & T)[]): Promise<[Key & T, boolean][]>;
}
