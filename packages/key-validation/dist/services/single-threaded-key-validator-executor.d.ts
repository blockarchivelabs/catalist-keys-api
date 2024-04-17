import { KeyValidatorExecutorInterface, Key } from '../interfaces';
export declare class SingleThreadedKeyValidatorExecutor implements KeyValidatorExecutorInterface {
    validateKey<T = never>(key: Key & T): Promise<boolean>;
    validateKeys<T = never>(keys: (Key & T)[]): Promise<[Key & T, boolean][]>;
}
