import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface OracleInterface extends utils.Interface {
    contractName: "Oracle";
    functions: {
        "hasInitialized()": FunctionFragment;
        "getVersion()": FunctionFragment;
        "getEVMScriptExecutor(bytes)": FunctionFragment;
        "getRecoveryVault()": FunctionFragment;
        "initialize(address,address)": FunctionFragment;
        "finalizeUpgrade_v4(address)": FunctionFragment;
        "getLastCompletedReportDelta()": FunctionFragment;
        "getCatalist()": FunctionFragment;
        "getCurrentFrame()": FunctionFragment;
        "allowRecoverability(address)": FunctionFragment;
        "appId()": FunctionFragment;
        "handlePostTokenRebase(uint256,uint256,uint256,uint256,uint256,uint256,uint256)": FunctionFragment;
        "getLastCompletedEpochId()": FunctionFragment;
        "getContractVersion()": FunctionFragment;
        "getInitializationBlock()": FunctionFragment;
        "handleConsensusLayerReport(uint256,uint256,uint256)": FunctionFragment;
        "transferToVault(address)": FunctionFragment;
        "getAccountingOracle()": FunctionFragment;
        "canPerform(address,bytes32,uint256[])": FunctionFragment;
        "getCurrentEpochId()": FunctionFragment;
        "getEVMScriptRegistry()": FunctionFragment;
        "kernel()": FunctionFragment;
        "isPetrified()": FunctionFragment;
        "getBeaconSpec()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "hasInitialized", values?: undefined): string;
    encodeFunctionData(functionFragment: "getVersion", values?: undefined): string;
    encodeFunctionData(functionFragment: "getEVMScriptExecutor", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getRecoveryVault", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string]): string;
    encodeFunctionData(functionFragment: "finalizeUpgrade_v4", values: [string]): string;
    encodeFunctionData(functionFragment: "getLastCompletedReportDelta", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCatalist", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCurrentFrame", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowRecoverability", values: [string]): string;
    encodeFunctionData(functionFragment: "appId", values?: undefined): string;
    encodeFunctionData(functionFragment: "handlePostTokenRebase", values: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "getLastCompletedEpochId", values?: undefined): string;
    encodeFunctionData(functionFragment: "getContractVersion", values?: undefined): string;
    encodeFunctionData(functionFragment: "getInitializationBlock", values?: undefined): string;
    encodeFunctionData(functionFragment: "handleConsensusLayerReport", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferToVault", values: [string]): string;
    encodeFunctionData(functionFragment: "getAccountingOracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "canPerform", values: [string, BytesLike, BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "getCurrentEpochId", values?: undefined): string;
    encodeFunctionData(functionFragment: "getEVMScriptRegistry", values?: undefined): string;
    encodeFunctionData(functionFragment: "kernel", values?: undefined): string;
    encodeFunctionData(functionFragment: "isPetrified", values?: undefined): string;
    encodeFunctionData(functionFragment: "getBeaconSpec", values?: undefined): string;
    decodeFunctionResult(functionFragment: "hasInitialized", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEVMScriptExecutor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRecoveryVault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "finalizeUpgrade_v4", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLastCompletedReportDelta", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCatalist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCurrentFrame", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowRecoverability", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "appId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "handlePostTokenRebase", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLastCompletedEpochId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getContractVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getInitializationBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "handleConsensusLayerReport", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferToVault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccountingOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "canPerform", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCurrentEpochId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEVMScriptRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "kernel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPetrified", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBeaconSpec", data: BytesLike): Result;
    events: {
        "Completed(uint256,uint128,uint128)": EventFragment;
        "PostTotalShares(uint256,uint256,uint256,uint256)": EventFragment;
        "ScriptResult(address,bytes,bytes,bytes)": EventFragment;
        "RecoverToVault(address,address,uint256)": EventFragment;
        "ContractVersionSet(uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Completed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PostTotalShares"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ScriptResult"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RecoverToVault"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ContractVersionSet"): EventFragment;
}
export declare type CompletedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber
], {
    epochId: BigNumber;
    beaconBalance: BigNumber;
    beaconValidators: BigNumber;
}>;
export declare type CompletedEventFilter = TypedEventFilter<CompletedEvent>;
export declare type PostTotalSharesEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], {
    postTotalPooledAce: BigNumber;
    preTotalPooledAce: BigNumber;
    timeElapsed: BigNumber;
    totalShares: BigNumber;
}>;
export declare type PostTotalSharesEventFilter = TypedEventFilter<PostTotalSharesEvent>;
export declare type ScriptResultEvent = TypedEvent<[
    string,
    string,
    string,
    string
], {
    executor: string;
    script: string;
    input: string;
    returnData: string;
}>;
export declare type ScriptResultEventFilter = TypedEventFilter<ScriptResultEvent>;
export declare type RecoverToVaultEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    vault: string;
    token: string;
    amount: BigNumber;
}>;
export declare type RecoverToVaultEventFilter = TypedEventFilter<RecoverToVaultEvent>;
export declare type ContractVersionSetEvent = TypedEvent<[
    BigNumber
], {
    version: BigNumber;
}>;
export declare type ContractVersionSetEventFilter = TypedEventFilter<ContractVersionSetEvent>;
export interface Oracle extends BaseContract {
    contractName: "Oracle";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: OracleInterface;
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
        hasInitialized(overrides?: CallOverrides): Promise<[boolean]>;
        getVersion(overrides?: CallOverrides): Promise<[BigNumber]>;
        getEVMScriptExecutor(_script: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getRecoveryVault(overrides?: CallOverrides): Promise<[string]>;
        initialize(_catalistLocator: string, _accountingOracleConsensusContract: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        finalizeUpgrade_v4(_accountingOracle: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getLastCompletedReportDelta(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            postTotalPooledAce: BigNumber;
            preTotalPooledAce: BigNumber;
            timeElapsed: BigNumber;
        }>;
        getCatalist(overrides?: CallOverrides): Promise<[string]>;
        getCurrentFrame(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            frameEpochId: BigNumber;
            frameStartTime: BigNumber;
            frameEndTime: BigNumber;
        }>;
        allowRecoverability(token: string, overrides?: CallOverrides): Promise<[boolean]>;
        appId(overrides?: CallOverrides): Promise<[string]>;
        handlePostTokenRebase(arg0: BigNumberish, timeElapsed: BigNumberish, arg2: BigNumberish, preTotalAce: BigNumberish, postTotalShares: BigNumberish, postTotalAce: BigNumberish, arg6: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getLastCompletedEpochId(overrides?: CallOverrides): Promise<[BigNumber]>;
        getContractVersion(overrides?: CallOverrides): Promise<[BigNumber]>;
        getInitializationBlock(overrides?: CallOverrides): Promise<[BigNumber]>;
        handleConsensusLayerReport(_refSlot: BigNumberish, _clBalance: BigNumberish, _clValidators: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferToVault(_token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getAccountingOracle(overrides?: CallOverrides): Promise<[string]>;
        canPerform(_sender: string, _role: BytesLike, _params: BigNumberish[], overrides?: CallOverrides): Promise<[boolean]>;
        getCurrentEpochId(overrides?: CallOverrides): Promise<[BigNumber]>;
        getEVMScriptRegistry(overrides?: CallOverrides): Promise<[string]>;
        kernel(overrides?: CallOverrides): Promise<[string]>;
        isPetrified(overrides?: CallOverrides): Promise<[boolean]>;
        getBeaconSpec(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            epochsPerFrame: BigNumber;
            slotsPerEpoch: BigNumber;
            secondsPerSlot: BigNumber;
            genesisTime: BigNumber;
        }>;
    };
    hasInitialized(overrides?: CallOverrides): Promise<boolean>;
    getVersion(overrides?: CallOverrides): Promise<BigNumber>;
    getEVMScriptExecutor(_script: BytesLike, overrides?: CallOverrides): Promise<string>;
    getRecoveryVault(overrides?: CallOverrides): Promise<string>;
    initialize(_catalistLocator: string, _accountingOracleConsensusContract: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    finalizeUpgrade_v4(_accountingOracle: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getLastCompletedReportDelta(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        postTotalPooledAce: BigNumber;
        preTotalPooledAce: BigNumber;
        timeElapsed: BigNumber;
    }>;
    getCatalist(overrides?: CallOverrides): Promise<string>;
    getCurrentFrame(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        frameEpochId: BigNumber;
        frameStartTime: BigNumber;
        frameEndTime: BigNumber;
    }>;
    allowRecoverability(token: string, overrides?: CallOverrides): Promise<boolean>;
    appId(overrides?: CallOverrides): Promise<string>;
    handlePostTokenRebase(arg0: BigNumberish, timeElapsed: BigNumberish, arg2: BigNumberish, preTotalAce: BigNumberish, postTotalShares: BigNumberish, postTotalAce: BigNumberish, arg6: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getLastCompletedEpochId(overrides?: CallOverrides): Promise<BigNumber>;
    getContractVersion(overrides?: CallOverrides): Promise<BigNumber>;
    getInitializationBlock(overrides?: CallOverrides): Promise<BigNumber>;
    handleConsensusLayerReport(_refSlot: BigNumberish, _clBalance: BigNumberish, _clValidators: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferToVault(_token: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getAccountingOracle(overrides?: CallOverrides): Promise<string>;
    canPerform(_sender: string, _role: BytesLike, _params: BigNumberish[], overrides?: CallOverrides): Promise<boolean>;
    getCurrentEpochId(overrides?: CallOverrides): Promise<BigNumber>;
    getEVMScriptRegistry(overrides?: CallOverrides): Promise<string>;
    kernel(overrides?: CallOverrides): Promise<string>;
    isPetrified(overrides?: CallOverrides): Promise<boolean>;
    getBeaconSpec(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        epochsPerFrame: BigNumber;
        slotsPerEpoch: BigNumber;
        secondsPerSlot: BigNumber;
        genesisTime: BigNumber;
    }>;
    callStatic: {
        hasInitialized(overrides?: CallOverrides): Promise<boolean>;
        getVersion(overrides?: CallOverrides): Promise<BigNumber>;
        getEVMScriptExecutor(_script: BytesLike, overrides?: CallOverrides): Promise<string>;
        getRecoveryVault(overrides?: CallOverrides): Promise<string>;
        initialize(_catalistLocator: string, _accountingOracleConsensusContract: string, overrides?: CallOverrides): Promise<void>;
        finalizeUpgrade_v4(_accountingOracle: string, overrides?: CallOverrides): Promise<void>;
        getLastCompletedReportDelta(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            postTotalPooledAce: BigNumber;
            preTotalPooledAce: BigNumber;
            timeElapsed: BigNumber;
        }>;
        getCatalist(overrides?: CallOverrides): Promise<string>;
        getCurrentFrame(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            frameEpochId: BigNumber;
            frameStartTime: BigNumber;
            frameEndTime: BigNumber;
        }>;
        allowRecoverability(token: string, overrides?: CallOverrides): Promise<boolean>;
        appId(overrides?: CallOverrides): Promise<string>;
        handlePostTokenRebase(arg0: BigNumberish, timeElapsed: BigNumberish, arg2: BigNumberish, preTotalAce: BigNumberish, postTotalShares: BigNumberish, postTotalAce: BigNumberish, arg6: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getLastCompletedEpochId(overrides?: CallOverrides): Promise<BigNumber>;
        getContractVersion(overrides?: CallOverrides): Promise<BigNumber>;
        getInitializationBlock(overrides?: CallOverrides): Promise<BigNumber>;
        handleConsensusLayerReport(_refSlot: BigNumberish, _clBalance: BigNumberish, _clValidators: BigNumberish, overrides?: CallOverrides): Promise<void>;
        transferToVault(_token: string, overrides?: CallOverrides): Promise<void>;
        getAccountingOracle(overrides?: CallOverrides): Promise<string>;
        canPerform(_sender: string, _role: BytesLike, _params: BigNumberish[], overrides?: CallOverrides): Promise<boolean>;
        getCurrentEpochId(overrides?: CallOverrides): Promise<BigNumber>;
        getEVMScriptRegistry(overrides?: CallOverrides): Promise<string>;
        kernel(overrides?: CallOverrides): Promise<string>;
        isPetrified(overrides?: CallOverrides): Promise<boolean>;
        getBeaconSpec(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            epochsPerFrame: BigNumber;
            slotsPerEpoch: BigNumber;
            secondsPerSlot: BigNumber;
            genesisTime: BigNumber;
        }>;
    };
    filters: {
        "Completed(uint256,uint128,uint128)"(epochId?: null, beaconBalance?: null, beaconValidators?: null): CompletedEventFilter;
        Completed(epochId?: null, beaconBalance?: null, beaconValidators?: null): CompletedEventFilter;
        "PostTotalShares(uint256,uint256,uint256,uint256)"(postTotalPooledAce?: null, preTotalPooledAce?: null, timeElapsed?: null, totalShares?: null): PostTotalSharesEventFilter;
        PostTotalShares(postTotalPooledAce?: null, preTotalPooledAce?: null, timeElapsed?: null, totalShares?: null): PostTotalSharesEventFilter;
        "ScriptResult(address,bytes,bytes,bytes)"(executor?: string | null, script?: null, input?: null, returnData?: null): ScriptResultEventFilter;
        ScriptResult(executor?: string | null, script?: null, input?: null, returnData?: null): ScriptResultEventFilter;
        "RecoverToVault(address,address,uint256)"(vault?: string | null, token?: string | null, amount?: null): RecoverToVaultEventFilter;
        RecoverToVault(vault?: string | null, token?: string | null, amount?: null): RecoverToVaultEventFilter;
        "ContractVersionSet(uint256)"(version?: null): ContractVersionSetEventFilter;
        ContractVersionSet(version?: null): ContractVersionSetEventFilter;
    };
    estimateGas: {
        hasInitialized(overrides?: CallOverrides): Promise<BigNumber>;
        getVersion(overrides?: CallOverrides): Promise<BigNumber>;
        getEVMScriptExecutor(_script: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getRecoveryVault(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_catalistLocator: string, _accountingOracleConsensusContract: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        finalizeUpgrade_v4(_accountingOracle: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getLastCompletedReportDelta(overrides?: CallOverrides): Promise<BigNumber>;
        getCatalist(overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentFrame(overrides?: CallOverrides): Promise<BigNumber>;
        allowRecoverability(token: string, overrides?: CallOverrides): Promise<BigNumber>;
        appId(overrides?: CallOverrides): Promise<BigNumber>;
        handlePostTokenRebase(arg0: BigNumberish, timeElapsed: BigNumberish, arg2: BigNumberish, preTotalAce: BigNumberish, postTotalShares: BigNumberish, postTotalAce: BigNumberish, arg6: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getLastCompletedEpochId(overrides?: CallOverrides): Promise<BigNumber>;
        getContractVersion(overrides?: CallOverrides): Promise<BigNumber>;
        getInitializationBlock(overrides?: CallOverrides): Promise<BigNumber>;
        handleConsensusLayerReport(_refSlot: BigNumberish, _clBalance: BigNumberish, _clValidators: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferToVault(_token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getAccountingOracle(overrides?: CallOverrides): Promise<BigNumber>;
        canPerform(_sender: string, _role: BytesLike, _params: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentEpochId(overrides?: CallOverrides): Promise<BigNumber>;
        getEVMScriptRegistry(overrides?: CallOverrides): Promise<BigNumber>;
        kernel(overrides?: CallOverrides): Promise<BigNumber>;
        isPetrified(overrides?: CallOverrides): Promise<BigNumber>;
        getBeaconSpec(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        hasInitialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getEVMScriptExecutor(_script: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRecoveryVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_catalistLocator: string, _accountingOracleConsensusContract: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        finalizeUpgrade_v4(_accountingOracle: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getLastCompletedReportDelta(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCatalist(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCurrentFrame(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowRecoverability(token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        appId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        handlePostTokenRebase(arg0: BigNumberish, timeElapsed: BigNumberish, arg2: BigNumberish, preTotalAce: BigNumberish, postTotalShares: BigNumberish, postTotalAce: BigNumberish, arg6: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getLastCompletedEpochId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getContractVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getInitializationBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        handleConsensusLayerReport(_refSlot: BigNumberish, _clBalance: BigNumberish, _clValidators: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferToVault(_token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getAccountingOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        canPerform(_sender: string, _role: BytesLike, _params: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCurrentEpochId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getEVMScriptRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        kernel(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isPetrified(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBeaconSpec(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
