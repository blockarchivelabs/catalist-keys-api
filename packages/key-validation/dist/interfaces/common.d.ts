/// <reference types="node" />
export declare type Int = number;
export declare type WithdrawalCredentialsHex = string;
export declare type WithdrawalCredentialsBuffer = Buffer;
export declare type Pubkey = string;
export interface Key {
    key: Pubkey;
    depositSignature: string;
    withdrawalCredentials: WithdrawalCredentialsBuffer;
    genesisForkVersion: Buffer;
    amount?: number;
    domainDeposit?: Buffer;
    zeroHash?: Buffer;
}
export interface CatalistKey {
    index?: Int;
    key: Pubkey;
    depositSignature: string;
    used: boolean;
}
export interface DepositMessageData {
    pubkey: Buffer;
    withdrawalCredentials: Buffer;
    amount: number;
}
export declare type PossibleWC = {
    currentWC: [WithdrawalCredentialsHex, WithdrawalCredentialsBuffer];
    previousWC: [WithdrawalCredentialsHex, WithdrawalCredentialsBuffer][];
};
export declare type Promisified<T extends (...args: any) => any> = (...args: Parameters<T>) => Promise<ReturnType<T>>;
export declare type PromisifiedMethods<T> = {
    [P in keyof T]: T[P] extends (...args: any) => any ? Promisified<T[P]> : T[P];
};
