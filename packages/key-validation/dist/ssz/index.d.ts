import { ContainerType, ValueOf } from '@chainsafe/ssz';
export declare const Fork: ContainerType<{
    previousVersion: import("@chainsafe/ssz").ByteVectorType;
    currentVersion: import("@chainsafe/ssz").ByteVectorType;
    epoch: import("@chainsafe/ssz").UintNumberType;
}>;
export declare const ForkData: ContainerType<{
    currentVersion: import("@chainsafe/ssz").ByteVectorType;
    genesisValidatorsRoot: import("@chainsafe/ssz").ByteVectorType;
}>;
export declare const SigningData: ContainerType<{
    objectRoot: import("@chainsafe/ssz").ByteVectorType;
    domain: import("@chainsafe/ssz").ByteVectorType;
}>;
export declare const DepositMessage: ContainerType<{
    pubkey: import("@chainsafe/ssz").ByteVectorType;
    withdrawalCredentials: import("@chainsafe/ssz").ByteVectorType;
    amount: import("@chainsafe/ssz").UintNumberType;
}>;
export declare type ForkData = ValueOf<typeof ForkData>;
export declare type DepositMessage = ValueOf<typeof DepositMessage>;
export declare type Fork = ValueOf<typeof Fork>;
export declare type SigningData = ValueOf<typeof SigningData>;
