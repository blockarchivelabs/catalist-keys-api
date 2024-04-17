import { KeyValidatorExecutorInterface, KeyValidatorInterface, Key } from '../interfaces';
export declare class KeyValidator implements KeyValidatorInterface {
    private readonly executor;
    constructor(executor: KeyValidatorExecutorInterface);
    validateKey<T>(key: Key & T): Promise<boolean>;
    validateKeys<T>(keys: (Key & T)[]): Promise<[Key & T, boolean][]>;
}
