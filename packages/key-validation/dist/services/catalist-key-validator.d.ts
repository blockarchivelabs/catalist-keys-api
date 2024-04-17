/// <reference types="node" />
import { GenesisForkVersionServiceInterface, Key, KeyValidatorInterface, CatalistKey, CatalistKeyValidatorInterface, PossibleWC, WithdrawalCredentialsBuffer, WithdrawalCredentialsExtractorInterface } from '../interfaces';
export declare class CatalistKeyValidator implements CatalistKeyValidatorInterface {
    protected readonly keyValidator: KeyValidatorInterface;
    protected readonly wcExtractor: WithdrawalCredentialsExtractorInterface;
    protected readonly genesisForkVersionService: GenesisForkVersionServiceInterface;
    constructor(keyValidator: KeyValidatorInterface, wcExtractor: WithdrawalCredentialsExtractorInterface, genesisForkVersionService: GenesisForkVersionServiceInterface);
    validateKey<T>(catalistKey: CatalistKey & T): Promise<[Key & CatalistKey & T, boolean]>;
    validateKeys<T>(catalistKeys: (CatalistKey & T)[]): Promise<[Key & CatalistKey & T, boolean][]>;
    protected validateCatalistKeysForDifferentPossibleWC<T>(catalistKeys: (CatalistKey & T)[], possibleWC: PossibleWC): Promise<[Key & CatalistKey & T, boolean][]>;
    protected catalistKeyToBasicKey<T>(catalistKey: CatalistKey & T, withdrawalCredentials: WithdrawalCredentialsBuffer, genesisForkVersion: Buffer): Key & CatalistKey & T;
}
