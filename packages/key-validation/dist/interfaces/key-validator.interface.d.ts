import { Key } from './common';
export declare const KeyValidatorInterface: import("@catalist-nestjs/di").InterfaceTag<KeyValidatorInterface>;
/**
 * Basic key validator.
 * Does not store any state or data.
 */
export interface KeyValidatorInterface {
    /**
     * Validates one key.
     *
     * It's possible to provide extra data with the key
     */
    validateKey<T>(key: Key & T): Promise<boolean>;
    /**
     * Validates array of keys.
     *
     * It's possible to provide extra data with each key,
     * the same data will be returned with the result
     */
    validateKeys<T>(keys: (Key & T)[]): Promise<[Key & T, boolean][]>;
}
