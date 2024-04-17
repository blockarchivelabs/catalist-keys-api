import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace DepositSecurityModule {
    type SignatureStruct = {
        r: BytesLike;
        vs: BytesLike;
    };
    type SignatureStructOutput = [string, string] & {
        r: string;
        vs: string;
    };
}
export interface SecurityInterface extends utils.Interface {
    contractName: "Security";
    functions: {
        "ATTEST_MESSAGE_PREFIX()": FunctionFragment;
        "DEPOSIT_CONTRACT()": FunctionFragment;
        "CATALIST()": FunctionFragment;
        "PAUSE_MESSAGE_PREFIX()": FunctionFragment;
        "STAKING_ROUTER()": FunctionFragment;
        "addGuardian(address,uint256)": FunctionFragment;
        "addGuardians(address[],uint256)": FunctionFragment;
        "canDeposit(uint256)": FunctionFragment;
        "depositBufferedAce(uint256,bytes32,bytes32,uint256,uint256,bytes,(bytes32,bytes32)[])": FunctionFragment;
        "getGuardianIndex(address)": FunctionFragment;
        "getGuardianQuorum()": FunctionFragment;
        "getGuardians()": FunctionFragment;
        "getMaxDeposits()": FunctionFragment;
        "getMinDepositBlockDistance()": FunctionFragment;
        "getOwner()": FunctionFragment;
        "getPauseIntentValidityPeriodBlocks()": FunctionFragment;
        "isGuardian(address)": FunctionFragment;
        "pauseDeposits(uint256,uint256,(bytes32,bytes32))": FunctionFragment;
        "removeGuardian(address,uint256)": FunctionFragment;
        "setGuardianQuorum(uint256)": FunctionFragment;
        "setMaxDeposits(uint256)": FunctionFragment;
        "setMinDepositBlockDistance(uint256)": FunctionFragment;
        "setOwner(address)": FunctionFragment;
        "setPauseIntentValidityPeriodBlocks(uint256)": FunctionFragment;
        "unpauseDeposits(uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "ATTEST_MESSAGE_PREFIX", values?: undefined): string;
    encodeFunctionData(functionFragment: "DEPOSIT_CONTRACT", values?: undefined): string;
    encodeFunctionData(functionFragment: "CATALIST", values?: undefined): string;
    encodeFunctionData(functionFragment: "PAUSE_MESSAGE_PREFIX", values?: undefined): string;
    encodeFunctionData(functionFragment: "STAKING_ROUTER", values?: undefined): string;
    encodeFunctionData(functionFragment: "addGuardian", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "addGuardians", values: [string[], BigNumberish]): string;
    encodeFunctionData(functionFragment: "canDeposit", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "depositBufferedAce", values: [
        BigNumberish,
        BytesLike,
        BytesLike,
        BigNumberish,
        BigNumberish,
        BytesLike,
        DepositSecurityModule.SignatureStruct[]
    ]): string;
    encodeFunctionData(functionFragment: "getGuardianIndex", values: [string]): string;
    encodeFunctionData(functionFragment: "getGuardianQuorum", values?: undefined): string;
    encodeFunctionData(functionFragment: "getGuardians", values?: undefined): string;
    encodeFunctionData(functionFragment: "getMaxDeposits", values?: undefined): string;
    encodeFunctionData(functionFragment: "getMinDepositBlockDistance", values?: undefined): string;
    encodeFunctionData(functionFragment: "getOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPauseIntentValidityPeriodBlocks", values?: undefined): string;
    encodeFunctionData(functionFragment: "isGuardian", values: [string]): string;
    encodeFunctionData(functionFragment: "pauseDeposits", values: [BigNumberish, BigNumberish, DepositSecurityModule.SignatureStruct]): string;
    encodeFunctionData(functionFragment: "removeGuardian", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setGuardianQuorum", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setMaxDeposits", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setMinDepositBlockDistance", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
    encodeFunctionData(functionFragment: "setPauseIntentValidityPeriodBlocks", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "unpauseDeposits", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "ATTEST_MESSAGE_PREFIX", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DEPOSIT_CONTRACT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "CATALIST", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PAUSE_MESSAGE_PREFIX", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "STAKING_ROUTER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addGuardian", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addGuardians", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "canDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositBufferedAce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGuardianIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGuardianQuorum", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGuardians", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMaxDeposits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMinDepositBlockDistance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPauseIntentValidityPeriodBlocks", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isGuardian", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pauseDeposits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeGuardian", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGuardianQuorum", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxDeposits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMinDepositBlockDistance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPauseIntentValidityPeriodBlocks", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpauseDeposits", data: BytesLike): Result;
    events: {
        "DepositsPaused(address,uint24)": EventFragment;
        "DepositsUnpaused(uint24)": EventFragment;
        "GuardianAdded(address)": EventFragment;
        "GuardianQuorumChanged(uint256)": EventFragment;
        "GuardianRemoved(address)": EventFragment;
        "MaxDepositsChanged(uint256)": EventFragment;
        "MinDepositBlockDistanceChanged(uint256)": EventFragment;
        "OwnerChanged(address)": EventFragment;
        "PauseIntentValidityPeriodBlocksChanged(uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "DepositsPaused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DepositsUnpaused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GuardianAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GuardianQuorumChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GuardianRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MaxDepositsChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MinDepositBlockDistanceChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnerChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PauseIntentValidityPeriodBlocksChanged"): EventFragment;
}
export declare type DepositsPausedEvent = TypedEvent<[
    string,
    number
], {
    guardian: string;
    stakingModuleId: number;
}>;
export declare type DepositsPausedEventFilter = TypedEventFilter<DepositsPausedEvent>;
export declare type DepositsUnpausedEvent = TypedEvent<[
    number
], {
    stakingModuleId: number;
}>;
export declare type DepositsUnpausedEventFilter = TypedEventFilter<DepositsUnpausedEvent>;
export declare type GuardianAddedEvent = TypedEvent<[string], {
    guardian: string;
}>;
export declare type GuardianAddedEventFilter = TypedEventFilter<GuardianAddedEvent>;
export declare type GuardianQuorumChangedEvent = TypedEvent<[
    BigNumber
], {
    newValue: BigNumber;
}>;
export declare type GuardianQuorumChangedEventFilter = TypedEventFilter<GuardianQuorumChangedEvent>;
export declare type GuardianRemovedEvent = TypedEvent<[string], {
    guardian: string;
}>;
export declare type GuardianRemovedEventFilter = TypedEventFilter<GuardianRemovedEvent>;
export declare type MaxDepositsChangedEvent = TypedEvent<[
    BigNumber
], {
    newValue: BigNumber;
}>;
export declare type MaxDepositsChangedEventFilter = TypedEventFilter<MaxDepositsChangedEvent>;
export declare type MinDepositBlockDistanceChangedEvent = TypedEvent<[
    BigNumber
], {
    newValue: BigNumber;
}>;
export declare type MinDepositBlockDistanceChangedEventFilter = TypedEventFilter<MinDepositBlockDistanceChangedEvent>;
export declare type OwnerChangedEvent = TypedEvent<[string], {
    newValue: string;
}>;
export declare type OwnerChangedEventFilter = TypedEventFilter<OwnerChangedEvent>;
export declare type PauseIntentValidityPeriodBlocksChangedEvent = TypedEvent<[
    BigNumber
], {
    newValue: BigNumber;
}>;
export declare type PauseIntentValidityPeriodBlocksChangedEventFilter = TypedEventFilter<PauseIntentValidityPeriodBlocksChangedEvent>;
export interface Security extends BaseContract {
    contractName: "Security";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SecurityInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        ATTEST_MESSAGE_PREFIX(overrides?: CallOverrides): Promise<[string]>;
        DEPOSIT_CONTRACT(overrides?: CallOverrides): Promise<[string]>;
        CATALIST(overrides?: CallOverrides): Promise<[string]>;
        PAUSE_MESSAGE_PREFIX(overrides?: CallOverrides): Promise<[string]>;
        STAKING_ROUTER(overrides?: CallOverrides): Promise<[string]>;
        addGuardian(addr: string, newQuorum: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addGuardians(addresses: string[], newQuorum: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        canDeposit(stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        depositBufferedAce(blockNumber: BigNumberish, blockHash: BytesLike, depositRoot: BytesLike, stakingModuleId: BigNumberish, nonce: BigNumberish, depositCalldata: BytesLike, sortedGuardianSignatures: DepositSecurityModule.SignatureStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getGuardianIndex(addr: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getGuardianQuorum(overrides?: CallOverrides): Promise<[BigNumber]>;
        getGuardians(overrides?: CallOverrides): Promise<[string[]]>;
        getMaxDeposits(overrides?: CallOverrides): Promise<[BigNumber]>;
        getMinDepositBlockDistance(overrides?: CallOverrides): Promise<[BigNumber]>;
        getOwner(overrides?: CallOverrides): Promise<[string]>;
        getPauseIntentValidityPeriodBlocks(overrides?: CallOverrides): Promise<[BigNumber]>;
        isGuardian(addr: string, overrides?: CallOverrides): Promise<[boolean]>;
        pauseDeposits(blockNumber: BigNumberish, stakingModuleId: BigNumberish, sig: DepositSecurityModule.SignatureStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        removeGuardian(addr: string, newQuorum: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setGuardianQuorum(newValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMaxDeposits(newValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMinDepositBlockDistance(newValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setOwner(newValue: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPauseIntentValidityPeriodBlocks(newValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        unpauseDeposits(stakingModuleId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    ATTEST_MESSAGE_PREFIX(overrides?: CallOverrides): Promise<string>;
    DEPOSIT_CONTRACT(overrides?: CallOverrides): Promise<string>;
    CATALIST(overrides?: CallOverrides): Promise<string>;
    PAUSE_MESSAGE_PREFIX(overrides?: CallOverrides): Promise<string>;
    STAKING_ROUTER(overrides?: CallOverrides): Promise<string>;
    addGuardian(addr: string, newQuorum: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addGuardians(addresses: string[], newQuorum: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    canDeposit(stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    depositBufferedAce(blockNumber: BigNumberish, blockHash: BytesLike, depositRoot: BytesLike, stakingModuleId: BigNumberish, nonce: BigNumberish, depositCalldata: BytesLike, sortedGuardianSignatures: DepositSecurityModule.SignatureStruct[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getGuardianIndex(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
    getGuardianQuorum(overrides?: CallOverrides): Promise<BigNumber>;
    getGuardians(overrides?: CallOverrides): Promise<string[]>;
    getMaxDeposits(overrides?: CallOverrides): Promise<BigNumber>;
    getMinDepositBlockDistance(overrides?: CallOverrides): Promise<BigNumber>;
    getOwner(overrides?: CallOverrides): Promise<string>;
    getPauseIntentValidityPeriodBlocks(overrides?: CallOverrides): Promise<BigNumber>;
    isGuardian(addr: string, overrides?: CallOverrides): Promise<boolean>;
    pauseDeposits(blockNumber: BigNumberish, stakingModuleId: BigNumberish, sig: DepositSecurityModule.SignatureStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    removeGuardian(addr: string, newQuorum: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setGuardianQuorum(newValue: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMaxDeposits(newValue: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMinDepositBlockDistance(newValue: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setOwner(newValue: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPauseIntentValidityPeriodBlocks(newValue: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    unpauseDeposits(stakingModuleId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        ATTEST_MESSAGE_PREFIX(overrides?: CallOverrides): Promise<string>;
        DEPOSIT_CONTRACT(overrides?: CallOverrides): Promise<string>;
        CATALIST(overrides?: CallOverrides): Promise<string>;
        PAUSE_MESSAGE_PREFIX(overrides?: CallOverrides): Promise<string>;
        STAKING_ROUTER(overrides?: CallOverrides): Promise<string>;
        addGuardian(addr: string, newQuorum: BigNumberish, overrides?: CallOverrides): Promise<void>;
        addGuardians(addresses: string[], newQuorum: BigNumberish, overrides?: CallOverrides): Promise<void>;
        canDeposit(stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        depositBufferedAce(blockNumber: BigNumberish, blockHash: BytesLike, depositRoot: BytesLike, stakingModuleId: BigNumberish, nonce: BigNumberish, depositCalldata: BytesLike, sortedGuardianSignatures: DepositSecurityModule.SignatureStruct[], overrides?: CallOverrides): Promise<void>;
        getGuardianIndex(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
        getGuardianQuorum(overrides?: CallOverrides): Promise<BigNumber>;
        getGuardians(overrides?: CallOverrides): Promise<string[]>;
        getMaxDeposits(overrides?: CallOverrides): Promise<BigNumber>;
        getMinDepositBlockDistance(overrides?: CallOverrides): Promise<BigNumber>;
        getOwner(overrides?: CallOverrides): Promise<string>;
        getPauseIntentValidityPeriodBlocks(overrides?: CallOverrides): Promise<BigNumber>;
        isGuardian(addr: string, overrides?: CallOverrides): Promise<boolean>;
        pauseDeposits(blockNumber: BigNumberish, stakingModuleId: BigNumberish, sig: DepositSecurityModule.SignatureStruct, overrides?: CallOverrides): Promise<void>;
        removeGuardian(addr: string, newQuorum: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setGuardianQuorum(newValue: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setMaxDeposits(newValue: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setMinDepositBlockDistance(newValue: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setOwner(newValue: string, overrides?: CallOverrides): Promise<void>;
        setPauseIntentValidityPeriodBlocks(newValue: BigNumberish, overrides?: CallOverrides): Promise<void>;
        unpauseDeposits(stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "DepositsPaused(address,uint24)"(guardian?: string | null, stakingModuleId?: BigNumberish | null): DepositsPausedEventFilter;
        DepositsPaused(guardian?: string | null, stakingModuleId?: BigNumberish | null): DepositsPausedEventFilter;
        "DepositsUnpaused(uint24)"(stakingModuleId?: BigNumberish | null): DepositsUnpausedEventFilter;
        DepositsUnpaused(stakingModuleId?: BigNumberish | null): DepositsUnpausedEventFilter;
        "GuardianAdded(address)"(guardian?: null): GuardianAddedEventFilter;
        GuardianAdded(guardian?: null): GuardianAddedEventFilter;
        "GuardianQuorumChanged(uint256)"(newValue?: null): GuardianQuorumChangedEventFilter;
        GuardianQuorumChanged(newValue?: null): GuardianQuorumChangedEventFilter;
        "GuardianRemoved(address)"(guardian?: null): GuardianRemovedEventFilter;
        GuardianRemoved(guardian?: null): GuardianRemovedEventFilter;
        "MaxDepositsChanged(uint256)"(newValue?: null): MaxDepositsChangedEventFilter;
        MaxDepositsChanged(newValue?: null): MaxDepositsChangedEventFilter;
        "MinDepositBlockDistanceChanged(uint256)"(newValue?: null): MinDepositBlockDistanceChangedEventFilter;
        MinDepositBlockDistanceChanged(newValue?: null): MinDepositBlockDistanceChangedEventFilter;
        "OwnerChanged(address)"(newValue?: null): OwnerChangedEventFilter;
        OwnerChanged(newValue?: null): OwnerChangedEventFilter;
        "PauseIntentValidityPeriodBlocksChanged(uint256)"(newValue?: null): PauseIntentValidityPeriodBlocksChangedEventFilter;
        PauseIntentValidityPeriodBlocksChanged(newValue?: null): PauseIntentValidityPeriodBlocksChangedEventFilter;
    };
    estimateGas: {
        ATTEST_MESSAGE_PREFIX(overrides?: CallOverrides): Promise<BigNumber>;
        DEPOSIT_CONTRACT(overrides?: CallOverrides): Promise<BigNumber>;
        CATALIST(overrides?: CallOverrides): Promise<BigNumber>;
        PAUSE_MESSAGE_PREFIX(overrides?: CallOverrides): Promise<BigNumber>;
        STAKING_ROUTER(overrides?: CallOverrides): Promise<BigNumber>;
        addGuardian(addr: string, newQuorum: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addGuardians(addresses: string[], newQuorum: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        canDeposit(stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        depositBufferedAce(blockNumber: BigNumberish, blockHash: BytesLike, depositRoot: BytesLike, stakingModuleId: BigNumberish, nonce: BigNumberish, depositCalldata: BytesLike, sortedGuardianSignatures: DepositSecurityModule.SignatureStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getGuardianIndex(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
        getGuardianQuorum(overrides?: CallOverrides): Promise<BigNumber>;
        getGuardians(overrides?: CallOverrides): Promise<BigNumber>;
        getMaxDeposits(overrides?: CallOverrides): Promise<BigNumber>;
        getMinDepositBlockDistance(overrides?: CallOverrides): Promise<BigNumber>;
        getOwner(overrides?: CallOverrides): Promise<BigNumber>;
        getPauseIntentValidityPeriodBlocks(overrides?: CallOverrides): Promise<BigNumber>;
        isGuardian(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
        pauseDeposits(blockNumber: BigNumberish, stakingModuleId: BigNumberish, sig: DepositSecurityModule.SignatureStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        removeGuardian(addr: string, newQuorum: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setGuardianQuorum(newValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMaxDeposits(newValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMinDepositBlockDistance(newValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setOwner(newValue: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPauseIntentValidityPeriodBlocks(newValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        unpauseDeposits(stakingModuleId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        ATTEST_MESSAGE_PREFIX(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DEPOSIT_CONTRACT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        CATALIST(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PAUSE_MESSAGE_PREFIX(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        STAKING_ROUTER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addGuardian(addr: string, newQuorum: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addGuardians(addresses: string[], newQuorum: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        canDeposit(stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        depositBufferedAce(blockNumber: BigNumberish, blockHash: BytesLike, depositRoot: BytesLike, stakingModuleId: BigNumberish, nonce: BigNumberish, depositCalldata: BytesLike, sortedGuardianSignatures: DepositSecurityModule.SignatureStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getGuardianIndex(addr: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGuardianQuorum(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGuardians(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMaxDeposits(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMinDepositBlockDistance(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPauseIntentValidityPeriodBlocks(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isGuardian(addr: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pauseDeposits(blockNumber: BigNumberish, stakingModuleId: BigNumberish, sig: DepositSecurityModule.SignatureStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        removeGuardian(addr: string, newQuorum: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setGuardianQuorum(newValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMaxDeposits(newValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMinDepositBlockDistance(newValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setOwner(newValue: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPauseIntentValidityPeriodBlocks(newValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        unpauseDeposits(stakingModuleId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
