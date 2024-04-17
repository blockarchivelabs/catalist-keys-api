import { Key, CatalistKey } from './common';
export declare const CatalistKeyValidatorInterface: import("@catalist-nestjs/di").InterfaceTag<CatalistKeyValidatorInterface>;
export interface CatalistKeyValidatorInterface {
    validateKey<T>(key: CatalistKey & T): Promise<[Key & CatalistKey & T, boolean]>;
    validateKeys<T>(keys: (CatalistKey & T)[]): Promise<[Key & CatalistKey & T, boolean][]>;
}
