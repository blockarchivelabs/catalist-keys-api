import { Key } from './common';
export declare const KeyValidatorExecutorInterface: import("@catalist-nestjs/di").InterfaceTag<KeyValidatorExecutorInterface>;
/**
 * Executor that actually performs key-validation.
 * Does not store any state or data.
 */
export interface KeyValidatorExecutorInterface {
    validateKey<T = never>(key: Key & T): Promise<boolean>;
    validateKeys<T = never>(keys: (Key & T)[]): Promise<[Key & T, boolean][]>;
}
