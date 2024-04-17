import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace EasyTrack {
    type MotionStruct = {
        id: BigNumberish;
        evmScriptFactory: string;
        creator: string;
        duration: BigNumberish;
        startDate: BigNumberish;
        snapshotBlock: BigNumberish;
        objectionsThreshold: BigNumberish;
        objectionsAmount: BigNumberish;
        evmScriptHash: BytesLike;
    };
    type MotionStructOutput = [
        BigNumber,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string
    ] & {
        id: BigNumber;
        evmScriptFactory: string;
        creator: string;
        duration: BigNumber;
        startDate: BigNumber;
        snapshotBlock: BigNumber;
        objectionsThreshold: BigNumber;
        objectionsAmount: BigNumber;
        evmScriptHash: string;
    };
}
export interface EasytrackInterface extends utils.Interface {
    contractName: "Easytrack";
    functions: {
        "CANCEL_ROLE()": FunctionFragment;
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "MAX_MOTIONS_LIMIT()": FunctionFragment;
        "MAX_OBJECTIONS_THRESHOLD()": FunctionFragment;
        "MIN_MOTION_DURATION()": FunctionFragment;
        "PAUSE_ROLE()": FunctionFragment;
        "UNPAUSE_ROLE()": FunctionFragment;
        "addEVMScriptFactory(address,bytes)": FunctionFragment;
        "canObjectToMotion(uint256,address)": FunctionFragment;
        "cancelAllMotions()": FunctionFragment;
        "cancelMotion(uint256)": FunctionFragment;
        "cancelMotions(uint256[])": FunctionFragment;
        "createMotion(address,bytes)": FunctionFragment;
        "enactMotion(uint256,bytes)": FunctionFragment;
        "evmScriptExecutor()": FunctionFragment;
        "evmScriptFactories(uint256)": FunctionFragment;
        "evmScriptFactoryPermissions(address)": FunctionFragment;
        "getEVMScriptFactories()": FunctionFragment;
        "getMotion(uint256)": FunctionFragment;
        "getMotions()": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "governanceToken()": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "isEVMScriptFactory(address)": FunctionFragment;
        "motionDuration()": FunctionFragment;
        "motions(uint256)": FunctionFragment;
        "motionsCountLimit()": FunctionFragment;
        "objectToMotion(uint256)": FunctionFragment;
        "objections(uint256,address)": FunctionFragment;
        "objectionsThreshold()": FunctionFragment;
        "pause()": FunctionFragment;
        "paused()": FunctionFragment;
        "removeEVMScriptFactory(address)": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "setEVMScriptExecutor(address)": FunctionFragment;
        "setMotionDuration(uint256)": FunctionFragment;
        "setMotionsCountLimit(uint256)": FunctionFragment;
        "setObjectionsThreshold(uint256)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "unpause()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "CANCEL_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_MOTIONS_LIMIT", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_OBJECTIONS_THRESHOLD", values?: undefined): string;
    encodeFunctionData(functionFragment: "MIN_MOTION_DURATION", values?: undefined): string;
    encodeFunctionData(functionFragment: "PAUSE_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "UNPAUSE_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "addEVMScriptFactory", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "canObjectToMotion", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "cancelAllMotions", values?: undefined): string;
    encodeFunctionData(functionFragment: "cancelMotion", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "cancelMotions", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "createMotion", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "enactMotion", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "evmScriptExecutor", values?: undefined): string;
    encodeFunctionData(functionFragment: "evmScriptFactories", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "evmScriptFactoryPermissions", values: [string]): string;
    encodeFunctionData(functionFragment: "getEVMScriptFactories", values?: undefined): string;
    encodeFunctionData(functionFragment: "getMotion", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getMotions", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "governanceToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "isEVMScriptFactory", values: [string]): string;
    encodeFunctionData(functionFragment: "motionDuration", values?: undefined): string;
    encodeFunctionData(functionFragment: "motions", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "motionsCountLimit", values?: undefined): string;
    encodeFunctionData(functionFragment: "objectToMotion", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "objections", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "objectionsThreshold", values?: undefined): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeEVMScriptFactory", values: [string]): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "setEVMScriptExecutor", values: [string]): string;
    encodeFunctionData(functionFragment: "setMotionDuration", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setMotionsCountLimit", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setObjectionsThreshold", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    decodeFunctionResult(functionFragment: "CANCEL_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_MOTIONS_LIMIT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_OBJECTIONS_THRESHOLD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MIN_MOTION_DURATION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PAUSE_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "UNPAUSE_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addEVMScriptFactory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "canObjectToMotion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelAllMotions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelMotion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelMotions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createMotion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enactMotion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "evmScriptExecutor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "evmScriptFactories", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "evmScriptFactoryPermissions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEVMScriptFactories", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMotion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMotions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governanceToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isEVMScriptFactory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "motionDuration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "motions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "motionsCountLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "objectToMotion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "objections", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "objectionsThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeEVMScriptFactory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setEVMScriptExecutor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMotionDuration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMotionsCountLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setObjectionsThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    events: {
        "EVMScriptExecutorChanged(address)": EventFragment;
        "EVMScriptFactoryAdded(address,bytes)": EventFragment;
        "EVMScriptFactoryRemoved(address)": EventFragment;
        "MotionCanceled(uint256)": EventFragment;
        "MotionCreated(uint256,address,address,bytes,bytes)": EventFragment;
        "MotionDurationChanged(uint256)": EventFragment;
        "MotionEnacted(uint256)": EventFragment;
        "MotionObjected(uint256,address,uint256,uint256,uint256)": EventFragment;
        "MotionRejected(uint256)": EventFragment;
        "MotionsCountLimitChanged(uint256)": EventFragment;
        "ObjectionsThresholdChanged(uint256)": EventFragment;
        "Paused(address)": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
        "Unpaused(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "EVMScriptExecutorChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EVMScriptFactoryAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EVMScriptFactoryRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MotionCanceled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MotionCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MotionDurationChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MotionEnacted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MotionObjected"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MotionRejected"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MotionsCountLimitChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ObjectionsThresholdChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}
export declare type EVMScriptExecutorChangedEvent = TypedEvent<[
    string
], {
    _evmScriptExecutor: string;
}>;
export declare type EVMScriptExecutorChangedEventFilter = TypedEventFilter<EVMScriptExecutorChangedEvent>;
export declare type EVMScriptFactoryAddedEvent = TypedEvent<[
    string,
    string
], {
    _evmScriptFactory: string;
    _permissions: string;
}>;
export declare type EVMScriptFactoryAddedEventFilter = TypedEventFilter<EVMScriptFactoryAddedEvent>;
export declare type EVMScriptFactoryRemovedEvent = TypedEvent<[
    string
], {
    _evmScriptFactory: string;
}>;
export declare type EVMScriptFactoryRemovedEventFilter = TypedEventFilter<EVMScriptFactoryRemovedEvent>;
export declare type MotionCanceledEvent = TypedEvent<[
    BigNumber
], {
    _motionId: BigNumber;
}>;
export declare type MotionCanceledEventFilter = TypedEventFilter<MotionCanceledEvent>;
export declare type MotionCreatedEvent = TypedEvent<[
    BigNumber,
    string,
    string,
    string,
    string
], {
    _motionId: BigNumber;
    _creator: string;
    _evmScriptFactory: string;
    _evmScriptCallData: string;
    _evmScript: string;
}>;
export declare type MotionCreatedEventFilter = TypedEventFilter<MotionCreatedEvent>;
export declare type MotionDurationChangedEvent = TypedEvent<[
    BigNumber
], {
    _motionDuration: BigNumber;
}>;
export declare type MotionDurationChangedEventFilter = TypedEventFilter<MotionDurationChangedEvent>;
export declare type MotionEnactedEvent = TypedEvent<[
    BigNumber
], {
    _motionId: BigNumber;
}>;
export declare type MotionEnactedEventFilter = TypedEventFilter<MotionEnactedEvent>;
export declare type MotionObjectedEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber
], {
    _motionId: BigNumber;
    _objector: string;
    _weight: BigNumber;
    _newObjectionsAmount: BigNumber;
    _newObjectionsAmountPct: BigNumber;
}>;
export declare type MotionObjectedEventFilter = TypedEventFilter<MotionObjectedEvent>;
export declare type MotionRejectedEvent = TypedEvent<[
    BigNumber
], {
    _motionId: BigNumber;
}>;
export declare type MotionRejectedEventFilter = TypedEventFilter<MotionRejectedEvent>;
export declare type MotionsCountLimitChangedEvent = TypedEvent<[
    BigNumber
], {
    _newMotionsCountLimit: BigNumber;
}>;
export declare type MotionsCountLimitChangedEventFilter = TypedEventFilter<MotionsCountLimitChangedEvent>;
export declare type ObjectionsThresholdChangedEvent = TypedEvent<[
    BigNumber
], {
    _newThreshold: BigNumber;
}>;
export declare type ObjectionsThresholdChangedEventFilter = TypedEventFilter<ObjectionsThresholdChangedEvent>;
export declare type PausedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type PausedEventFilter = TypedEventFilter<PausedEvent>;
export declare type RoleAdminChangedEvent = TypedEvent<[
    string,
    string,
    string
], {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
}>;
export declare type RoleAdminChangedEventFilter = TypedEventFilter<RoleAdminChangedEvent>;
export declare type RoleGrantedEvent = TypedEvent<[
    string,
    string,
    string
], {
    role: string;
    account: string;
    sender: string;
}>;
export declare type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;
export declare type RoleRevokedEvent = TypedEvent<[
    string,
    string,
    string
], {
    role: string;
    account: string;
    sender: string;
}>;
export declare type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;
export declare type UnpausedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
export interface Easytrack extends BaseContract {
    contractName: "Easytrack";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: EasytrackInterface;
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
        CANCEL_ROLE(overrides?: CallOverrides): Promise<[string]>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;
        MAX_MOTIONS_LIMIT(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_OBJECTIONS_THRESHOLD(overrides?: CallOverrides): Promise<[BigNumber]>;
        MIN_MOTION_DURATION(overrides?: CallOverrides): Promise<[BigNumber]>;
        PAUSE_ROLE(overrides?: CallOverrides): Promise<[string]>;
        UNPAUSE_ROLE(overrides?: CallOverrides): Promise<[string]>;
        addEVMScriptFactory(_evmScriptFactory: string, _permissions: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        canObjectToMotion(_motionId: BigNumberish, _objector: string, overrides?: CallOverrides): Promise<[boolean]>;
        cancelAllMotions(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        cancelMotion(_motionId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        cancelMotions(_motionIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        createMotion(_evmScriptFactory: string, _evmScriptCallData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        enactMotion(_motionId: BigNumberish, _evmScriptCallData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        evmScriptExecutor(overrides?: CallOverrides): Promise<[string]>;
        evmScriptFactories(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        evmScriptFactoryPermissions(arg0: string, overrides?: CallOverrides): Promise<[string]>;
        getEVMScriptFactories(overrides?: CallOverrides): Promise<[string[]]>;
        getMotion(_motionId: BigNumberish, overrides?: CallOverrides): Promise<[EasyTrack.MotionStructOutput]>;
        getMotions(overrides?: CallOverrides): Promise<[EasyTrack.MotionStructOutput[]]>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        governanceToken(overrides?: CallOverrides): Promise<[string]>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<[boolean]>;
        isEVMScriptFactory(_maybeEVMScriptFactory: string, overrides?: CallOverrides): Promise<[boolean]>;
        motionDuration(overrides?: CallOverrides): Promise<[BigNumber]>;
        motions(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            string,
            string,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            string
        ] & {
            id: BigNumber;
            evmScriptFactory: string;
            creator: string;
            duration: BigNumber;
            startDate: BigNumber;
            snapshotBlock: BigNumber;
            objectionsThreshold: BigNumber;
            objectionsAmount: BigNumber;
            evmScriptHash: string;
        }>;
        motionsCountLimit(overrides?: CallOverrides): Promise<[BigNumber]>;
        objectToMotion(_motionId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        objections(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<[boolean]>;
        objectionsThreshold(overrides?: CallOverrides): Promise<[BigNumber]>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        removeEVMScriptFactory(_evmScriptFactory: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setEVMScriptExecutor(_evmScriptExecutor: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMotionDuration(_motionDuration: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMotionsCountLimit(_motionsCountLimit: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setObjectionsThreshold(_objectionsThreshold: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    CANCEL_ROLE(overrides?: CallOverrides): Promise<string>;
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    MAX_MOTIONS_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_OBJECTIONS_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>;
    MIN_MOTION_DURATION(overrides?: CallOverrides): Promise<BigNumber>;
    PAUSE_ROLE(overrides?: CallOverrides): Promise<string>;
    UNPAUSE_ROLE(overrides?: CallOverrides): Promise<string>;
    addEVMScriptFactory(_evmScriptFactory: string, _permissions: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    canObjectToMotion(_motionId: BigNumberish, _objector: string, overrides?: CallOverrides): Promise<boolean>;
    cancelAllMotions(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    cancelMotion(_motionId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    cancelMotions(_motionIds: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    createMotion(_evmScriptFactory: string, _evmScriptCallData: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    enactMotion(_motionId: BigNumberish, _evmScriptCallData: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    evmScriptExecutor(overrides?: CallOverrides): Promise<string>;
    evmScriptFactories(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    evmScriptFactoryPermissions(arg0: string, overrides?: CallOverrides): Promise<string>;
    getEVMScriptFactories(overrides?: CallOverrides): Promise<string[]>;
    getMotion(_motionId: BigNumberish, overrides?: CallOverrides): Promise<EasyTrack.MotionStructOutput>;
    getMotions(overrides?: CallOverrides): Promise<EasyTrack.MotionStructOutput[]>;
    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
    governanceToken(overrides?: CallOverrides): Promise<string>;
    grantRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
    isEVMScriptFactory(_maybeEVMScriptFactory: string, overrides?: CallOverrides): Promise<boolean>;
    motionDuration(overrides?: CallOverrides): Promise<BigNumber>;
    motions(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string
    ] & {
        id: BigNumber;
        evmScriptFactory: string;
        creator: string;
        duration: BigNumber;
        startDate: BigNumber;
        snapshotBlock: BigNumber;
        objectionsThreshold: BigNumber;
        objectionsAmount: BigNumber;
        evmScriptHash: string;
    }>;
    motionsCountLimit(overrides?: CallOverrides): Promise<BigNumber>;
    objectToMotion(_motionId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    objections(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<boolean>;
    objectionsThreshold(overrides?: CallOverrides): Promise<BigNumber>;
    pause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    removeEVMScriptFactory(_evmScriptFactory: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setEVMScriptExecutor(_evmScriptExecutor: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMotionDuration(_motionDuration: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMotionsCountLimit(_motionsCountLimit: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setObjectionsThreshold(_objectionsThreshold: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    unpause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        CANCEL_ROLE(overrides?: CallOverrides): Promise<string>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        MAX_MOTIONS_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_OBJECTIONS_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_MOTION_DURATION(overrides?: CallOverrides): Promise<BigNumber>;
        PAUSE_ROLE(overrides?: CallOverrides): Promise<string>;
        UNPAUSE_ROLE(overrides?: CallOverrides): Promise<string>;
        addEVMScriptFactory(_evmScriptFactory: string, _permissions: BytesLike, overrides?: CallOverrides): Promise<void>;
        canObjectToMotion(_motionId: BigNumberish, _objector: string, overrides?: CallOverrides): Promise<boolean>;
        cancelAllMotions(overrides?: CallOverrides): Promise<void>;
        cancelMotion(_motionId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        cancelMotions(_motionIds: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        createMotion(_evmScriptFactory: string, _evmScriptCallData: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        enactMotion(_motionId: BigNumberish, _evmScriptCallData: BytesLike, overrides?: CallOverrides): Promise<void>;
        evmScriptExecutor(overrides?: CallOverrides): Promise<string>;
        evmScriptFactories(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        evmScriptFactoryPermissions(arg0: string, overrides?: CallOverrides): Promise<string>;
        getEVMScriptFactories(overrides?: CallOverrides): Promise<string[]>;
        getMotion(_motionId: BigNumberish, overrides?: CallOverrides): Promise<EasyTrack.MotionStructOutput>;
        getMotions(overrides?: CallOverrides): Promise<EasyTrack.MotionStructOutput[]>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
        governanceToken(overrides?: CallOverrides): Promise<string>;
        grantRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
        isEVMScriptFactory(_maybeEVMScriptFactory: string, overrides?: CallOverrides): Promise<boolean>;
        motionDuration(overrides?: CallOverrides): Promise<BigNumber>;
        motions(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            string,
            string,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            string
        ] & {
            id: BigNumber;
            evmScriptFactory: string;
            creator: string;
            duration: BigNumber;
            startDate: BigNumber;
            snapshotBlock: BigNumber;
            objectionsThreshold: BigNumber;
            objectionsAmount: BigNumber;
            evmScriptHash: string;
        }>;
        motionsCountLimit(overrides?: CallOverrides): Promise<BigNumber>;
        objectToMotion(_motionId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        objections(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<boolean>;
        objectionsThreshold(overrides?: CallOverrides): Promise<BigNumber>;
        pause(overrides?: CallOverrides): Promise<void>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        removeEVMScriptFactory(_evmScriptFactory: string, overrides?: CallOverrides): Promise<void>;
        renounceRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        revokeRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        setEVMScriptExecutor(_evmScriptExecutor: string, overrides?: CallOverrides): Promise<void>;
        setMotionDuration(_motionDuration: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setMotionsCountLimit(_motionsCountLimit: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setObjectionsThreshold(_objectionsThreshold: BigNumberish, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        unpause(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "EVMScriptExecutorChanged(address)"(_evmScriptExecutor?: string | null): EVMScriptExecutorChangedEventFilter;
        EVMScriptExecutorChanged(_evmScriptExecutor?: string | null): EVMScriptExecutorChangedEventFilter;
        "EVMScriptFactoryAdded(address,bytes)"(_evmScriptFactory?: string | null, _permissions?: null): EVMScriptFactoryAddedEventFilter;
        EVMScriptFactoryAdded(_evmScriptFactory?: string | null, _permissions?: null): EVMScriptFactoryAddedEventFilter;
        "EVMScriptFactoryRemoved(address)"(_evmScriptFactory?: string | null): EVMScriptFactoryRemovedEventFilter;
        EVMScriptFactoryRemoved(_evmScriptFactory?: string | null): EVMScriptFactoryRemovedEventFilter;
        "MotionCanceled(uint256)"(_motionId?: BigNumberish | null): MotionCanceledEventFilter;
        MotionCanceled(_motionId?: BigNumberish | null): MotionCanceledEventFilter;
        "MotionCreated(uint256,address,address,bytes,bytes)"(_motionId?: BigNumberish | null, _creator?: null, _evmScriptFactory?: string | null, _evmScriptCallData?: null, _evmScript?: null): MotionCreatedEventFilter;
        MotionCreated(_motionId?: BigNumberish | null, _creator?: null, _evmScriptFactory?: string | null, _evmScriptCallData?: null, _evmScript?: null): MotionCreatedEventFilter;
        "MotionDurationChanged(uint256)"(_motionDuration?: null): MotionDurationChangedEventFilter;
        MotionDurationChanged(_motionDuration?: null): MotionDurationChangedEventFilter;
        "MotionEnacted(uint256)"(_motionId?: BigNumberish | null): MotionEnactedEventFilter;
        MotionEnacted(_motionId?: BigNumberish | null): MotionEnactedEventFilter;
        "MotionObjected(uint256,address,uint256,uint256,uint256)"(_motionId?: BigNumberish | null, _objector?: string | null, _weight?: null, _newObjectionsAmount?: null, _newObjectionsAmountPct?: null): MotionObjectedEventFilter;
        MotionObjected(_motionId?: BigNumberish | null, _objector?: string | null, _weight?: null, _newObjectionsAmount?: null, _newObjectionsAmountPct?: null): MotionObjectedEventFilter;
        "MotionRejected(uint256)"(_motionId?: BigNumberish | null): MotionRejectedEventFilter;
        MotionRejected(_motionId?: BigNumberish | null): MotionRejectedEventFilter;
        "MotionsCountLimitChanged(uint256)"(_newMotionsCountLimit?: null): MotionsCountLimitChangedEventFilter;
        MotionsCountLimitChanged(_newMotionsCountLimit?: null): MotionsCountLimitChangedEventFilter;
        "ObjectionsThresholdChanged(uint256)"(_newThreshold?: null): ObjectionsThresholdChangedEventFilter;
        ObjectionsThresholdChanged(_newThreshold?: null): ObjectionsThresholdChangedEventFilter;
        "Paused(address)"(account?: null): PausedEventFilter;
        Paused(account?: null): PausedEventFilter;
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        RoleAdminChanged(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        "RoleGranted(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        RoleGranted(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        "RoleRevoked(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
        RoleRevoked(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
    };
    estimateGas: {
        CANCEL_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_MOTIONS_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_OBJECTIONS_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_MOTION_DURATION(overrides?: CallOverrides): Promise<BigNumber>;
        PAUSE_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        UNPAUSE_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        addEVMScriptFactory(_evmScriptFactory: string, _permissions: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        canObjectToMotion(_motionId: BigNumberish, _objector: string, overrides?: CallOverrides): Promise<BigNumber>;
        cancelAllMotions(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        cancelMotion(_motionId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        cancelMotions(_motionIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        createMotion(_evmScriptFactory: string, _evmScriptCallData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        enactMotion(_motionId: BigNumberish, _evmScriptCallData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        evmScriptExecutor(overrides?: CallOverrides): Promise<BigNumber>;
        evmScriptFactories(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        evmScriptFactoryPermissions(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        getEVMScriptFactories(overrides?: CallOverrides): Promise<BigNumber>;
        getMotion(_motionId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getMotions(overrides?: CallOverrides): Promise<BigNumber>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        governanceToken(overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        isEVMScriptFactory(_maybeEVMScriptFactory: string, overrides?: CallOverrides): Promise<BigNumber>;
        motionDuration(overrides?: CallOverrides): Promise<BigNumber>;
        motions(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        motionsCountLimit(overrides?: CallOverrides): Promise<BigNumber>;
        objectToMotion(_motionId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        objections(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        objectionsThreshold(overrides?: CallOverrides): Promise<BigNumber>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        removeEVMScriptFactory(_evmScriptFactory: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setEVMScriptExecutor(_evmScriptExecutor: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMotionDuration(_motionDuration: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMotionsCountLimit(_motionsCountLimit: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setObjectionsThreshold(_objectionsThreshold: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        CANCEL_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_MOTIONS_LIMIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_OBJECTIONS_THRESHOLD(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MIN_MOTION_DURATION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PAUSE_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        UNPAUSE_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addEVMScriptFactory(_evmScriptFactory: string, _permissions: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        canObjectToMotion(_motionId: BigNumberish, _objector: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cancelAllMotions(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        cancelMotion(_motionId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        cancelMotions(_motionIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        createMotion(_evmScriptFactory: string, _evmScriptCallData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        enactMotion(_motionId: BigNumberish, _evmScriptCallData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        evmScriptExecutor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        evmScriptFactories(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        evmScriptFactoryPermissions(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getEVMScriptFactories(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMotion(_motionId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMotions(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        governanceToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isEVMScriptFactory(_maybeEVMScriptFactory: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        motionDuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        motions(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        motionsCountLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        objectToMotion(_motionId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        objections(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        objectionsThreshold(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeEVMScriptFactory(_evmScriptFactory: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setEVMScriptExecutor(_evmScriptExecutor: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMotionDuration(_motionDuration: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMotionsCountLimit(_motionsCountLimit: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setObjectionsThreshold(_objectionsThreshold: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
