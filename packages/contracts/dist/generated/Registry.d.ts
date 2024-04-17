import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface RegistryInterface extends utils.Interface {
    contractName: "Registry";
    functions: {
        "hasInitialized()": FunctionFragment;
        "addSigningKeys(uint256,uint256,bytes,bytes)": FunctionFragment;
        "getType()": FunctionFragment;
        "getEVMScriptExecutor(bytes)": FunctionFragment;
        "clearNodeOperatorPenalty(uint256)": FunctionFragment;
        "getRecoveryVault()": FunctionFragment;
        "getNodeOperatorIds(uint256,uint256)": FunctionFragment;
        "getSigningKeys(uint256,uint256,uint256)": FunctionFragment;
        "removeSigningKeysOperatorBH(uint256,uint256,uint256)": FunctionFragment;
        "getNodeOperatorIsActive(uint256)": FunctionFragment;
        "setNodeOperatorName(uint256,string)": FunctionFragment;
        "getRewardsDistribution(uint256)": FunctionFragment;
        "invalidateReadyToDepositKeysRange(uint256,uint256)": FunctionFragment;
        "initialize(address,bytes32,uint256)": FunctionFragment;
        "setStuckPenaltyDelay(uint256)": FunctionFragment;
        "getStuckPenaltyDelay()": FunctionFragment;
        "removeSigningKey(uint256,uint256)": FunctionFragment;
        "removeSigningKeys(uint256,uint256,uint256)": FunctionFragment;
        "isOperatorPenalized(uint256)": FunctionFragment;
        "deactivateNodeOperator(uint256)": FunctionFragment;
        "allowRecoverability(address)": FunctionFragment;
        "STAKING_ROUTER_ROLE()": FunctionFragment;
        "addSigningKeysOperatorBH(uint256,uint256,bytes,bytes)": FunctionFragment;
        "appId()": FunctionFragment;
        "getActiveNodeOperatorsCount()": FunctionFragment;
        "addNodeOperator(string,address)": FunctionFragment;
        "getContractVersion()": FunctionFragment;
        "getInitializationBlock()": FunctionFragment;
        "getUnusedSigningKeyCount(uint256)": FunctionFragment;
        "onRewardsMinted(uint256)": FunctionFragment;
        "MANAGE_NODE_OPERATOR_ROLE()": FunctionFragment;
        "onWithdrawalCredentialsChanged()": FunctionFragment;
        "activateNodeOperator(uint256)": FunctionFragment;
        "setNodeOperatorRewardAddress(uint256,address)": FunctionFragment;
        "getNodeOperator(uint256,bool)": FunctionFragment;
        "finalizeUpgrade_v2(address,bytes32,uint256)": FunctionFragment;
        "getStakingModuleSummary()": FunctionFragment;
        "updateExitedValidatorsCount(bytes,bytes)": FunctionFragment;
        "updateStuckValidatorsCount(bytes,bytes)": FunctionFragment;
        "transferToVault(address)": FunctionFragment;
        "canPerform(address,bytes32,uint256[])": FunctionFragment;
        "updateRefundedValidatorsCount(uint256,uint256)": FunctionFragment;
        "getEVMScriptRegistry()": FunctionFragment;
        "getNodeOperatorsCount()": FunctionFragment;
        "updateTargetValidatorsLimits(uint256,bool,uint256)": FunctionFragment;
        "setNodeOperatorStakingLimit(uint256,uint64)": FunctionFragment;
        "getNodeOperatorSummary(uint256)": FunctionFragment;
        "getSigningKey(uint256,uint256)": FunctionFragment;
        "MAX_NODE_OPERATOR_NAME_LENGTH()": FunctionFragment;
        "obtainDepositData(uint256,bytes)": FunctionFragment;
        "getKeysOpIndex()": FunctionFragment;
        "getNonce()": FunctionFragment;
        "kernel()": FunctionFragment;
        "getLocator()": FunctionFragment;
        "SET_NODE_OPERATOR_LIMIT_ROLE()": FunctionFragment;
        "getTotalSigningKeyCount(uint256)": FunctionFragment;
        "isPetrified()": FunctionFragment;
        "MAX_STUCK_PENALTY_DELAY()": FunctionFragment;
        "onExitedAndStuckValidatorsCountsUpdated()": FunctionFragment;
        "MAX_NODE_OPERATORS_COUNT()": FunctionFragment;
        "removeSigningKeyOperatorBH(uint256,uint256)": FunctionFragment;
        "unsafeUpdateValidatorsCount(uint256,uint256,uint256)": FunctionFragment;
        "MANAGE_SIGNING_KEYS()": FunctionFragment;
        "isOperatorPenaltyCleared(uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "hasInitialized", values?: undefined): string;
    encodeFunctionData(functionFragment: "addSigningKeys", values: [BigNumberish, BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "getType", values?: undefined): string;
    encodeFunctionData(functionFragment: "getEVMScriptExecutor", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "clearNodeOperatorPenalty", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRecoveryVault", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNodeOperatorIds", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getSigningKeys", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "removeSigningKeysOperatorBH", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getNodeOperatorIsActive", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setNodeOperatorName", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "getRewardsDistribution", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "invalidateReadyToDepositKeysRange", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setStuckPenaltyDelay", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getStuckPenaltyDelay", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeSigningKey", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "removeSigningKeys", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "isOperatorPenalized", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "deactivateNodeOperator", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "allowRecoverability", values: [string]): string;
    encodeFunctionData(functionFragment: "STAKING_ROUTER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "addSigningKeysOperatorBH", values: [BigNumberish, BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "appId", values?: undefined): string;
    encodeFunctionData(functionFragment: "getActiveNodeOperatorsCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "addNodeOperator", values: [string, string]): string;
    encodeFunctionData(functionFragment: "getContractVersion", values?: undefined): string;
    encodeFunctionData(functionFragment: "getInitializationBlock", values?: undefined): string;
    encodeFunctionData(functionFragment: "getUnusedSigningKeyCount", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "onRewardsMinted", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "MANAGE_NODE_OPERATOR_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "onWithdrawalCredentialsChanged", values?: undefined): string;
    encodeFunctionData(functionFragment: "activateNodeOperator", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setNodeOperatorRewardAddress", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "getNodeOperator", values: [BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "finalizeUpgrade_v2", values: [string, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getStakingModuleSummary", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateExitedValidatorsCount", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "updateStuckValidatorsCount", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "transferToVault", values: [string]): string;
    encodeFunctionData(functionFragment: "canPerform", values: [string, BytesLike, BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "updateRefundedValidatorsCount", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getEVMScriptRegistry", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNodeOperatorsCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateTargetValidatorsLimits", values: [BigNumberish, boolean, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setNodeOperatorStakingLimit", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getNodeOperatorSummary", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getSigningKey", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "MAX_NODE_OPERATOR_NAME_LENGTH", values?: undefined): string;
    encodeFunctionData(functionFragment: "obtainDepositData", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "getKeysOpIndex", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNonce", values?: undefined): string;
    encodeFunctionData(functionFragment: "kernel", values?: undefined): string;
    encodeFunctionData(functionFragment: "getLocator", values?: undefined): string;
    encodeFunctionData(functionFragment: "SET_NODE_OPERATOR_LIMIT_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTotalSigningKeyCount", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "isPetrified", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_STUCK_PENALTY_DELAY", values?: undefined): string;
    encodeFunctionData(functionFragment: "onExitedAndStuckValidatorsCountsUpdated", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_NODE_OPERATORS_COUNT", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeSigningKeyOperatorBH", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "unsafeUpdateValidatorsCount", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "MANAGE_SIGNING_KEYS", values?: undefined): string;
    encodeFunctionData(functionFragment: "isOperatorPenaltyCleared", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "hasInitialized", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addSigningKeys", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEVMScriptExecutor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "clearNodeOperatorPenalty", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRecoveryVault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNodeOperatorIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSigningKeys", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeSigningKeysOperatorBH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNodeOperatorIsActive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setNodeOperatorName", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRewardsDistribution", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "invalidateReadyToDepositKeysRange", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setStuckPenaltyDelay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStuckPenaltyDelay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeSigningKey", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeSigningKeys", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isOperatorPenalized", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deactivateNodeOperator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowRecoverability", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "STAKING_ROUTER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addSigningKeysOperatorBH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "appId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getActiveNodeOperatorsCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addNodeOperator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getContractVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getInitializationBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUnusedSigningKeyCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onRewardsMinted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MANAGE_NODE_OPERATOR_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onWithdrawalCredentialsChanged", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "activateNodeOperator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setNodeOperatorRewardAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNodeOperator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "finalizeUpgrade_v2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStakingModuleSummary", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateExitedValidatorsCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateStuckValidatorsCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferToVault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "canPerform", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateRefundedValidatorsCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEVMScriptRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNodeOperatorsCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateTargetValidatorsLimits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setNodeOperatorStakingLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNodeOperatorSummary", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSigningKey", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_NODE_OPERATOR_NAME_LENGTH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "obtainDepositData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getKeysOpIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "kernel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLocator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SET_NODE_OPERATOR_LIMIT_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTotalSigningKeyCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPetrified", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_STUCK_PENALTY_DELAY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onExitedAndStuckValidatorsCountsUpdated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_NODE_OPERATORS_COUNT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeSigningKeyOperatorBH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unsafeUpdateValidatorsCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MANAGE_SIGNING_KEYS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isOperatorPenaltyCleared", data: BytesLike): Result;
    events: {
        "NodeOperatorAdded(uint256,string,address,uint64)": EventFragment;
        "NodeOperatorActiveSet(uint256,bool)": EventFragment;
        "NodeOperatorNameSet(uint256,string)": EventFragment;
        "NodeOperatorRewardAddressSet(uint256,address)": EventFragment;
        "NodeOperatorTotalKeysTrimmed(uint256,uint64)": EventFragment;
        "KeysOpIndexSet(uint256)": EventFragment;
        "StakingModuleTypeSet(bytes32)": EventFragment;
        "RewardsDistributed(address,uint256)": EventFragment;
        "LocatorContractSet(address)": EventFragment;
        "VettedSigningKeysCountChanged(uint256,uint256)": EventFragment;
        "DepositedSigningKeysCountChanged(uint256,uint256)": EventFragment;
        "ExitedSigningKeysCountChanged(uint256,uint256)": EventFragment;
        "TotalSigningKeysCountChanged(uint256,uint256)": EventFragment;
        "NonceChanged(uint256)": EventFragment;
        "StuckPenaltyDelayChanged(uint256)": EventFragment;
        "StuckPenaltyStateChanged(uint256,uint256,uint256,uint256)": EventFragment;
        "TargetValidatorsCountChanged(uint256,uint256)": EventFragment;
        "NodeOperatorPenalized(address,uint256)": EventFragment;
        "ContractVersionSet(uint256)": EventFragment;
        "ScriptResult(address,bytes,bytes,bytes)": EventFragment;
        "RecoverToVault(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "NodeOperatorAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NodeOperatorActiveSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NodeOperatorNameSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NodeOperatorRewardAddressSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NodeOperatorTotalKeysTrimmed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "KeysOpIndexSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StakingModuleTypeSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RewardsDistributed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LocatorContractSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VettedSigningKeysCountChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DepositedSigningKeysCountChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExitedSigningKeysCountChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TotalSigningKeysCountChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NonceChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StuckPenaltyDelayChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StuckPenaltyStateChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TargetValidatorsCountChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NodeOperatorPenalized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ContractVersionSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ScriptResult"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RecoverToVault"): EventFragment;
}
export declare type NodeOperatorAddedEvent = TypedEvent<[
    BigNumber,
    string,
    string,
    BigNumber
], {
    nodeOperatorId: BigNumber;
    name: string;
    rewardAddress: string;
    stakingLimit: BigNumber;
}>;
export declare type NodeOperatorAddedEventFilter = TypedEventFilter<NodeOperatorAddedEvent>;
export declare type NodeOperatorActiveSetEvent = TypedEvent<[
    BigNumber,
    boolean
], {
    nodeOperatorId: BigNumber;
    active: boolean;
}>;
export declare type NodeOperatorActiveSetEventFilter = TypedEventFilter<NodeOperatorActiveSetEvent>;
export declare type NodeOperatorNameSetEvent = TypedEvent<[
    BigNumber,
    string
], {
    nodeOperatorId: BigNumber;
    name: string;
}>;
export declare type NodeOperatorNameSetEventFilter = TypedEventFilter<NodeOperatorNameSetEvent>;
export declare type NodeOperatorRewardAddressSetEvent = TypedEvent<[
    BigNumber,
    string
], {
    nodeOperatorId: BigNumber;
    rewardAddress: string;
}>;
export declare type NodeOperatorRewardAddressSetEventFilter = TypedEventFilter<NodeOperatorRewardAddressSetEvent>;
export declare type NodeOperatorTotalKeysTrimmedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], {
    nodeOperatorId: BigNumber;
    totalKeysTrimmed: BigNumber;
}>;
export declare type NodeOperatorTotalKeysTrimmedEventFilter = TypedEventFilter<NodeOperatorTotalKeysTrimmedEvent>;
export declare type KeysOpIndexSetEvent = TypedEvent<[
    BigNumber
], {
    keysOpIndex: BigNumber;
}>;
export declare type KeysOpIndexSetEventFilter = TypedEventFilter<KeysOpIndexSetEvent>;
export declare type StakingModuleTypeSetEvent = TypedEvent<[
    string
], {
    moduleType: string;
}>;
export declare type StakingModuleTypeSetEventFilter = TypedEventFilter<StakingModuleTypeSetEvent>;
export declare type RewardsDistributedEvent = TypedEvent<[
    string,
    BigNumber
], {
    rewardAddress: string;
    sharesAmount: BigNumber;
}>;
export declare type RewardsDistributedEventFilter = TypedEventFilter<RewardsDistributedEvent>;
export declare type LocatorContractSetEvent = TypedEvent<[
    string
], {
    locatorAddress: string;
}>;
export declare type LocatorContractSetEventFilter = TypedEventFilter<LocatorContractSetEvent>;
export declare type VettedSigningKeysCountChangedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], {
    nodeOperatorId: BigNumber;
    approvedValidatorsCount: BigNumber;
}>;
export declare type VettedSigningKeysCountChangedEventFilter = TypedEventFilter<VettedSigningKeysCountChangedEvent>;
export declare type DepositedSigningKeysCountChangedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], {
    nodeOperatorId: BigNumber;
    depositedValidatorsCount: BigNumber;
}>;
export declare type DepositedSigningKeysCountChangedEventFilter = TypedEventFilter<DepositedSigningKeysCountChangedEvent>;
export declare type ExitedSigningKeysCountChangedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], {
    nodeOperatorId: BigNumber;
    exitedValidatorsCount: BigNumber;
}>;
export declare type ExitedSigningKeysCountChangedEventFilter = TypedEventFilter<ExitedSigningKeysCountChangedEvent>;
export declare type TotalSigningKeysCountChangedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], {
    nodeOperatorId: BigNumber;
    totalValidatorsCount: BigNumber;
}>;
export declare type TotalSigningKeysCountChangedEventFilter = TypedEventFilter<TotalSigningKeysCountChangedEvent>;
export declare type NonceChangedEvent = TypedEvent<[BigNumber], {
    nonce: BigNumber;
}>;
export declare type NonceChangedEventFilter = TypedEventFilter<NonceChangedEvent>;
export declare type StuckPenaltyDelayChangedEvent = TypedEvent<[
    BigNumber
], {
    stuckPenaltyDelay: BigNumber;
}>;
export declare type StuckPenaltyDelayChangedEventFilter = TypedEventFilter<StuckPenaltyDelayChangedEvent>;
export declare type StuckPenaltyStateChangedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], {
    nodeOperatorId: BigNumber;
    stuckValidatorsCount: BigNumber;
    refundedValidatorsCount: BigNumber;
    stuckPenaltyEndTimestamp: BigNumber;
}>;
export declare type StuckPenaltyStateChangedEventFilter = TypedEventFilter<StuckPenaltyStateChangedEvent>;
export declare type TargetValidatorsCountChangedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], {
    nodeOperatorId: BigNumber;
    targetValidatorsCount: BigNumber;
}>;
export declare type TargetValidatorsCountChangedEventFilter = TypedEventFilter<TargetValidatorsCountChangedEvent>;
export declare type NodeOperatorPenalizedEvent = TypedEvent<[
    string,
    BigNumber
], {
    recipientAddress: string;
    sharesPenalizedAmount: BigNumber;
}>;
export declare type NodeOperatorPenalizedEventFilter = TypedEventFilter<NodeOperatorPenalizedEvent>;
export declare type ContractVersionSetEvent = TypedEvent<[
    BigNumber
], {
    version: BigNumber;
}>;
export declare type ContractVersionSetEventFilter = TypedEventFilter<ContractVersionSetEvent>;
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
export interface Registry extends BaseContract {
    contractName: "Registry";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RegistryInterface;
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
        addSigningKeys(_nodeOperatorId: BigNumberish, _keysCount: BigNumberish, _publicKeys: BytesLike, _signatures: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getType(overrides?: CallOverrides): Promise<[string]>;
        getEVMScriptExecutor(_script: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        clearNodeOperatorPenalty(_nodeOperatorId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getRecoveryVault(overrides?: CallOverrides): Promise<[string]>;
        getNodeOperatorIds(_offset: BigNumberish, _limit: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber[]] & {
            nodeOperatorIds: BigNumber[];
        }>;
        getSigningKeys(_nodeOperatorId: BigNumberish, _offset: BigNumberish, _limit: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            string,
            boolean[]
        ] & {
            pubkeys: string;
            signatures: string;
            used: boolean[];
        }>;
        removeSigningKeysOperatorBH(_nodeOperatorId: BigNumberish, _fromIndex: BigNumberish, _keysCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getNodeOperatorIsActive(_nodeOperatorId: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        setNodeOperatorName(_nodeOperatorId: BigNumberish, _name: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getRewardsDistribution(_totalRewardShares: BigNumberish, overrides?: CallOverrides): Promise<[
            string[],
            BigNumber[],
            boolean[]
        ] & {
            recipients: string[];
            shares: BigNumber[];
            penalized: boolean[];
        }>;
        invalidateReadyToDepositKeysRange(_indexFrom: BigNumberish, _indexTo: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initialize(_locator: string, _type: BytesLike, _stuckPenaltyDelay: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setStuckPenaltyDelay(_delay: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getStuckPenaltyDelay(overrides?: CallOverrides): Promise<[BigNumber]>;
        removeSigningKey(_nodeOperatorId: BigNumberish, _index: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        removeSigningKeys(_nodeOperatorId: BigNumberish, _fromIndex: BigNumberish, _keysCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isOperatorPenalized(_nodeOperatorId: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        deactivateNodeOperator(_nodeOperatorId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        allowRecoverability(token: string, overrides?: CallOverrides): Promise<[boolean]>;
        STAKING_ROUTER_ROLE(overrides?: CallOverrides): Promise<[string]>;
        addSigningKeysOperatorBH(_nodeOperatorId: BigNumberish, _keysCount: BigNumberish, _publicKeys: BytesLike, _signatures: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        appId(overrides?: CallOverrides): Promise<[string]>;
        getActiveNodeOperatorsCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        addNodeOperator(_name: string, _rewardAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getContractVersion(overrides?: CallOverrides): Promise<[BigNumber]>;
        getInitializationBlock(overrides?: CallOverrides): Promise<[BigNumber]>;
        getUnusedSigningKeyCount(_nodeOperatorId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        onRewardsMinted(arg0: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        MANAGE_NODE_OPERATOR_ROLE(overrides?: CallOverrides): Promise<[string]>;
        onWithdrawalCredentialsChanged(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        activateNodeOperator(_nodeOperatorId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setNodeOperatorRewardAddress(_nodeOperatorId: BigNumberish, _rewardAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getNodeOperator(_nodeOperatorId: BigNumberish, _fullInfo: boolean, overrides?: CallOverrides): Promise<[
            boolean,
            string,
            string,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            active: boolean;
            name: string;
            rewardAddress: string;
            totalVettedValidators: BigNumber;
            totalExitedValidators: BigNumber;
            totalAddedValidators: BigNumber;
            totalDepositedValidators: BigNumber;
        }>;
        finalizeUpgrade_v2(_locator: string, _type: BytesLike, _stuckPenaltyDelay: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getStakingModuleSummary(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            totalExitedValidators: BigNumber;
            totalDepositedValidators: BigNumber;
            depositableValidatorsCount: BigNumber;
        }>;
        updateExitedValidatorsCount(_nodeOperatorIds: BytesLike, _exitedValidatorsCounts: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateStuckValidatorsCount(_nodeOperatorIds: BytesLike, _stuckValidatorsCounts: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferToVault(_token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        canPerform(_sender: string, _role: BytesLike, _params: BigNumberish[], overrides?: CallOverrides): Promise<[boolean]>;
        updateRefundedValidatorsCount(_nodeOperatorId: BigNumberish, _refundedValidatorsCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getEVMScriptRegistry(overrides?: CallOverrides): Promise<[string]>;
        getNodeOperatorsCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        updateTargetValidatorsLimits(_nodeOperatorId: BigNumberish, _isTargetLimitActive: boolean, _targetLimit: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setNodeOperatorStakingLimit(_nodeOperatorId: BigNumberish, _vettedSigningKeysCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getNodeOperatorSummary(_nodeOperatorId: BigNumberish, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            isTargetLimitActive: boolean;
            targetValidatorsCount: BigNumber;
            stuckValidatorsCount: BigNumber;
            refundedValidatorsCount: BigNumber;
            stuckPenaltyEndTimestamp: BigNumber;
            totalExitedValidators: BigNumber;
            totalDepositedValidators: BigNumber;
            depositableValidatorsCount: BigNumber;
        }>;
        getSigningKey(_nodeOperatorId: BigNumberish, _index: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            string,
            boolean
        ] & {
            key: string;
            depositSignature: string;
            used: boolean;
        }>;
        MAX_NODE_OPERATOR_NAME_LENGTH(overrides?: CallOverrides): Promise<[BigNumber]>;
        obtainDepositData(_depositsCount: BigNumberish, arg1: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getKeysOpIndex(overrides?: CallOverrides): Promise<[BigNumber]>;
        getNonce(overrides?: CallOverrides): Promise<[BigNumber]>;
        kernel(overrides?: CallOverrides): Promise<[string]>;
        getLocator(overrides?: CallOverrides): Promise<[string]>;
        SET_NODE_OPERATOR_LIMIT_ROLE(overrides?: CallOverrides): Promise<[string]>;
        getTotalSigningKeyCount(_nodeOperatorId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        isPetrified(overrides?: CallOverrides): Promise<[boolean]>;
        MAX_STUCK_PENALTY_DELAY(overrides?: CallOverrides): Promise<[BigNumber]>;
        onExitedAndStuckValidatorsCountsUpdated(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        MAX_NODE_OPERATORS_COUNT(overrides?: CallOverrides): Promise<[BigNumber]>;
        removeSigningKeyOperatorBH(_nodeOperatorId: BigNumberish, _index: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        unsafeUpdateValidatorsCount(_nodeOperatorId: BigNumberish, _exitedValidatorsCount: BigNumberish, _stuckValidatorsCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        MANAGE_SIGNING_KEYS(overrides?: CallOverrides): Promise<[string]>;
        isOperatorPenaltyCleared(_nodeOperatorId: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
    };
    hasInitialized(overrides?: CallOverrides): Promise<boolean>;
    addSigningKeys(_nodeOperatorId: BigNumberish, _keysCount: BigNumberish, _publicKeys: BytesLike, _signatures: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getType(overrides?: CallOverrides): Promise<string>;
    getEVMScriptExecutor(_script: BytesLike, overrides?: CallOverrides): Promise<string>;
    clearNodeOperatorPenalty(_nodeOperatorId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getRecoveryVault(overrides?: CallOverrides): Promise<string>;
    getNodeOperatorIds(_offset: BigNumberish, _limit: BigNumberish, overrides?: CallOverrides): Promise<BigNumber[]>;
    getSigningKeys(_nodeOperatorId: BigNumberish, _offset: BigNumberish, _limit: BigNumberish, overrides?: CallOverrides): Promise<[
        string,
        string,
        boolean[]
    ] & {
        pubkeys: string;
        signatures: string;
        used: boolean[];
    }>;
    removeSigningKeysOperatorBH(_nodeOperatorId: BigNumberish, _fromIndex: BigNumberish, _keysCount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getNodeOperatorIsActive(_nodeOperatorId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    setNodeOperatorName(_nodeOperatorId: BigNumberish, _name: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getRewardsDistribution(_totalRewardShares: BigNumberish, overrides?: CallOverrides): Promise<[
        string[],
        BigNumber[],
        boolean[]
    ] & {
        recipients: string[];
        shares: BigNumber[];
        penalized: boolean[];
    }>;
    invalidateReadyToDepositKeysRange(_indexFrom: BigNumberish, _indexTo: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initialize(_locator: string, _type: BytesLike, _stuckPenaltyDelay: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setStuckPenaltyDelay(_delay: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getStuckPenaltyDelay(overrides?: CallOverrides): Promise<BigNumber>;
    removeSigningKey(_nodeOperatorId: BigNumberish, _index: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    removeSigningKeys(_nodeOperatorId: BigNumberish, _fromIndex: BigNumberish, _keysCount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isOperatorPenalized(_nodeOperatorId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    deactivateNodeOperator(_nodeOperatorId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    allowRecoverability(token: string, overrides?: CallOverrides): Promise<boolean>;
    STAKING_ROUTER_ROLE(overrides?: CallOverrides): Promise<string>;
    addSigningKeysOperatorBH(_nodeOperatorId: BigNumberish, _keysCount: BigNumberish, _publicKeys: BytesLike, _signatures: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    appId(overrides?: CallOverrides): Promise<string>;
    getActiveNodeOperatorsCount(overrides?: CallOverrides): Promise<BigNumber>;
    addNodeOperator(_name: string, _rewardAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getContractVersion(overrides?: CallOverrides): Promise<BigNumber>;
    getInitializationBlock(overrides?: CallOverrides): Promise<BigNumber>;
    getUnusedSigningKeyCount(_nodeOperatorId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    onRewardsMinted(arg0: BigNumberish, overrides?: CallOverrides): Promise<void>;
    MANAGE_NODE_OPERATOR_ROLE(overrides?: CallOverrides): Promise<string>;
    onWithdrawalCredentialsChanged(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    activateNodeOperator(_nodeOperatorId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setNodeOperatorRewardAddress(_nodeOperatorId: BigNumberish, _rewardAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getNodeOperator(_nodeOperatorId: BigNumberish, _fullInfo: boolean, overrides?: CallOverrides): Promise<[
        boolean,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        active: boolean;
        name: string;
        rewardAddress: string;
        totalVettedValidators: BigNumber;
        totalExitedValidators: BigNumber;
        totalAddedValidators: BigNumber;
        totalDepositedValidators: BigNumber;
    }>;
    finalizeUpgrade_v2(_locator: string, _type: BytesLike, _stuckPenaltyDelay: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getStakingModuleSummary(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        totalExitedValidators: BigNumber;
        totalDepositedValidators: BigNumber;
        depositableValidatorsCount: BigNumber;
    }>;
    updateExitedValidatorsCount(_nodeOperatorIds: BytesLike, _exitedValidatorsCounts: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateStuckValidatorsCount(_nodeOperatorIds: BytesLike, _stuckValidatorsCounts: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferToVault(_token: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    canPerform(_sender: string, _role: BytesLike, _params: BigNumberish[], overrides?: CallOverrides): Promise<boolean>;
    updateRefundedValidatorsCount(_nodeOperatorId: BigNumberish, _refundedValidatorsCount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getEVMScriptRegistry(overrides?: CallOverrides): Promise<string>;
    getNodeOperatorsCount(overrides?: CallOverrides): Promise<BigNumber>;
    updateTargetValidatorsLimits(_nodeOperatorId: BigNumberish, _isTargetLimitActive: boolean, _targetLimit: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setNodeOperatorStakingLimit(_nodeOperatorId: BigNumberish, _vettedSigningKeysCount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getNodeOperatorSummary(_nodeOperatorId: BigNumberish, overrides?: CallOverrides): Promise<[
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        isTargetLimitActive: boolean;
        targetValidatorsCount: BigNumber;
        stuckValidatorsCount: BigNumber;
        refundedValidatorsCount: BigNumber;
        stuckPenaltyEndTimestamp: BigNumber;
        totalExitedValidators: BigNumber;
        totalDepositedValidators: BigNumber;
        depositableValidatorsCount: BigNumber;
    }>;
    getSigningKey(_nodeOperatorId: BigNumberish, _index: BigNumberish, overrides?: CallOverrides): Promise<[
        string,
        string,
        boolean
    ] & {
        key: string;
        depositSignature: string;
        used: boolean;
    }>;
    MAX_NODE_OPERATOR_NAME_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;
    obtainDepositData(_depositsCount: BigNumberish, arg1: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getKeysOpIndex(overrides?: CallOverrides): Promise<BigNumber>;
    getNonce(overrides?: CallOverrides): Promise<BigNumber>;
    kernel(overrides?: CallOverrides): Promise<string>;
    getLocator(overrides?: CallOverrides): Promise<string>;
    SET_NODE_OPERATOR_LIMIT_ROLE(overrides?: CallOverrides): Promise<string>;
    getTotalSigningKeyCount(_nodeOperatorId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    isPetrified(overrides?: CallOverrides): Promise<boolean>;
    MAX_STUCK_PENALTY_DELAY(overrides?: CallOverrides): Promise<BigNumber>;
    onExitedAndStuckValidatorsCountsUpdated(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    MAX_NODE_OPERATORS_COUNT(overrides?: CallOverrides): Promise<BigNumber>;
    removeSigningKeyOperatorBH(_nodeOperatorId: BigNumberish, _index: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    unsafeUpdateValidatorsCount(_nodeOperatorId: BigNumberish, _exitedValidatorsCount: BigNumberish, _stuckValidatorsCount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    MANAGE_SIGNING_KEYS(overrides?: CallOverrides): Promise<string>;
    isOperatorPenaltyCleared(_nodeOperatorId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        hasInitialized(overrides?: CallOverrides): Promise<boolean>;
        addSigningKeys(_nodeOperatorId: BigNumberish, _keysCount: BigNumberish, _publicKeys: BytesLike, _signatures: BytesLike, overrides?: CallOverrides): Promise<void>;
        getType(overrides?: CallOverrides): Promise<string>;
        getEVMScriptExecutor(_script: BytesLike, overrides?: CallOverrides): Promise<string>;
        clearNodeOperatorPenalty(_nodeOperatorId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        getRecoveryVault(overrides?: CallOverrides): Promise<string>;
        getNodeOperatorIds(_offset: BigNumberish, _limit: BigNumberish, overrides?: CallOverrides): Promise<BigNumber[]>;
        getSigningKeys(_nodeOperatorId: BigNumberish, _offset: BigNumberish, _limit: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            string,
            boolean[]
        ] & {
            pubkeys: string;
            signatures: string;
            used: boolean[];
        }>;
        removeSigningKeysOperatorBH(_nodeOperatorId: BigNumberish, _fromIndex: BigNumberish, _keysCount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getNodeOperatorIsActive(_nodeOperatorId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        setNodeOperatorName(_nodeOperatorId: BigNumberish, _name: string, overrides?: CallOverrides): Promise<void>;
        getRewardsDistribution(_totalRewardShares: BigNumberish, overrides?: CallOverrides): Promise<[
            string[],
            BigNumber[],
            boolean[]
        ] & {
            recipients: string[];
            shares: BigNumber[];
            penalized: boolean[];
        }>;
        invalidateReadyToDepositKeysRange(_indexFrom: BigNumberish, _indexTo: BigNumberish, overrides?: CallOverrides): Promise<void>;
        initialize(_locator: string, _type: BytesLike, _stuckPenaltyDelay: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setStuckPenaltyDelay(_delay: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getStuckPenaltyDelay(overrides?: CallOverrides): Promise<BigNumber>;
        removeSigningKey(_nodeOperatorId: BigNumberish, _index: BigNumberish, overrides?: CallOverrides): Promise<void>;
        removeSigningKeys(_nodeOperatorId: BigNumberish, _fromIndex: BigNumberish, _keysCount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        isOperatorPenalized(_nodeOperatorId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        deactivateNodeOperator(_nodeOperatorId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        allowRecoverability(token: string, overrides?: CallOverrides): Promise<boolean>;
        STAKING_ROUTER_ROLE(overrides?: CallOverrides): Promise<string>;
        addSigningKeysOperatorBH(_nodeOperatorId: BigNumberish, _keysCount: BigNumberish, _publicKeys: BytesLike, _signatures: BytesLike, overrides?: CallOverrides): Promise<void>;
        appId(overrides?: CallOverrides): Promise<string>;
        getActiveNodeOperatorsCount(overrides?: CallOverrides): Promise<BigNumber>;
        addNodeOperator(_name: string, _rewardAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
        getContractVersion(overrides?: CallOverrides): Promise<BigNumber>;
        getInitializationBlock(overrides?: CallOverrides): Promise<BigNumber>;
        getUnusedSigningKeyCount(_nodeOperatorId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        onRewardsMinted(arg0: BigNumberish, overrides?: CallOverrides): Promise<void>;
        MANAGE_NODE_OPERATOR_ROLE(overrides?: CallOverrides): Promise<string>;
        onWithdrawalCredentialsChanged(overrides?: CallOverrides): Promise<void>;
        activateNodeOperator(_nodeOperatorId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setNodeOperatorRewardAddress(_nodeOperatorId: BigNumberish, _rewardAddress: string, overrides?: CallOverrides): Promise<void>;
        getNodeOperator(_nodeOperatorId: BigNumberish, _fullInfo: boolean, overrides?: CallOverrides): Promise<[
            boolean,
            string,
            string,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            active: boolean;
            name: string;
            rewardAddress: string;
            totalVettedValidators: BigNumber;
            totalExitedValidators: BigNumber;
            totalAddedValidators: BigNumber;
            totalDepositedValidators: BigNumber;
        }>;
        finalizeUpgrade_v2(_locator: string, _type: BytesLike, _stuckPenaltyDelay: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getStakingModuleSummary(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            totalExitedValidators: BigNumber;
            totalDepositedValidators: BigNumber;
            depositableValidatorsCount: BigNumber;
        }>;
        updateExitedValidatorsCount(_nodeOperatorIds: BytesLike, _exitedValidatorsCounts: BytesLike, overrides?: CallOverrides): Promise<void>;
        updateStuckValidatorsCount(_nodeOperatorIds: BytesLike, _stuckValidatorsCounts: BytesLike, overrides?: CallOverrides): Promise<void>;
        transferToVault(_token: string, overrides?: CallOverrides): Promise<void>;
        canPerform(_sender: string, _role: BytesLike, _params: BigNumberish[], overrides?: CallOverrides): Promise<boolean>;
        updateRefundedValidatorsCount(_nodeOperatorId: BigNumberish, _refundedValidatorsCount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getEVMScriptRegistry(overrides?: CallOverrides): Promise<string>;
        getNodeOperatorsCount(overrides?: CallOverrides): Promise<BigNumber>;
        updateTargetValidatorsLimits(_nodeOperatorId: BigNumberish, _isTargetLimitActive: boolean, _targetLimit: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setNodeOperatorStakingLimit(_nodeOperatorId: BigNumberish, _vettedSigningKeysCount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getNodeOperatorSummary(_nodeOperatorId: BigNumberish, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            isTargetLimitActive: boolean;
            targetValidatorsCount: BigNumber;
            stuckValidatorsCount: BigNumber;
            refundedValidatorsCount: BigNumber;
            stuckPenaltyEndTimestamp: BigNumber;
            totalExitedValidators: BigNumber;
            totalDepositedValidators: BigNumber;
            depositableValidatorsCount: BigNumber;
        }>;
        getSigningKey(_nodeOperatorId: BigNumberish, _index: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            string,
            boolean
        ] & {
            key: string;
            depositSignature: string;
            used: boolean;
        }>;
        MAX_NODE_OPERATOR_NAME_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;
        obtainDepositData(_depositsCount: BigNumberish, arg1: BytesLike, overrides?: CallOverrides): Promise<[string, string] & {
            publicKeys: string;
            signatures: string;
        }>;
        getKeysOpIndex(overrides?: CallOverrides): Promise<BigNumber>;
        getNonce(overrides?: CallOverrides): Promise<BigNumber>;
        kernel(overrides?: CallOverrides): Promise<string>;
        getLocator(overrides?: CallOverrides): Promise<string>;
        SET_NODE_OPERATOR_LIMIT_ROLE(overrides?: CallOverrides): Promise<string>;
        getTotalSigningKeyCount(_nodeOperatorId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        isPetrified(overrides?: CallOverrides): Promise<boolean>;
        MAX_STUCK_PENALTY_DELAY(overrides?: CallOverrides): Promise<BigNumber>;
        onExitedAndStuckValidatorsCountsUpdated(overrides?: CallOverrides): Promise<void>;
        MAX_NODE_OPERATORS_COUNT(overrides?: CallOverrides): Promise<BigNumber>;
        removeSigningKeyOperatorBH(_nodeOperatorId: BigNumberish, _index: BigNumberish, overrides?: CallOverrides): Promise<void>;
        unsafeUpdateValidatorsCount(_nodeOperatorId: BigNumberish, _exitedValidatorsCount: BigNumberish, _stuckValidatorsCount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        MANAGE_SIGNING_KEYS(overrides?: CallOverrides): Promise<string>;
        isOperatorPenaltyCleared(_nodeOperatorId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "NodeOperatorAdded(uint256,string,address,uint64)"(nodeOperatorId?: null, name?: null, rewardAddress?: null, stakingLimit?: null): NodeOperatorAddedEventFilter;
        NodeOperatorAdded(nodeOperatorId?: null, name?: null, rewardAddress?: null, stakingLimit?: null): NodeOperatorAddedEventFilter;
        "NodeOperatorActiveSet(uint256,bool)"(nodeOperatorId?: BigNumberish | null, active?: null): NodeOperatorActiveSetEventFilter;
        NodeOperatorActiveSet(nodeOperatorId?: BigNumberish | null, active?: null): NodeOperatorActiveSetEventFilter;
        "NodeOperatorNameSet(uint256,string)"(nodeOperatorId?: BigNumberish | null, name?: null): NodeOperatorNameSetEventFilter;
        NodeOperatorNameSet(nodeOperatorId?: BigNumberish | null, name?: null): NodeOperatorNameSetEventFilter;
        "NodeOperatorRewardAddressSet(uint256,address)"(nodeOperatorId?: BigNumberish | null, rewardAddress?: null): NodeOperatorRewardAddressSetEventFilter;
        NodeOperatorRewardAddressSet(nodeOperatorId?: BigNumberish | null, rewardAddress?: null): NodeOperatorRewardAddressSetEventFilter;
        "NodeOperatorTotalKeysTrimmed(uint256,uint64)"(nodeOperatorId?: BigNumberish | null, totalKeysTrimmed?: null): NodeOperatorTotalKeysTrimmedEventFilter;
        NodeOperatorTotalKeysTrimmed(nodeOperatorId?: BigNumberish | null, totalKeysTrimmed?: null): NodeOperatorTotalKeysTrimmedEventFilter;
        "KeysOpIndexSet(uint256)"(keysOpIndex?: null): KeysOpIndexSetEventFilter;
        KeysOpIndexSet(keysOpIndex?: null): KeysOpIndexSetEventFilter;
        "StakingModuleTypeSet(bytes32)"(moduleType?: null): StakingModuleTypeSetEventFilter;
        StakingModuleTypeSet(moduleType?: null): StakingModuleTypeSetEventFilter;
        "RewardsDistributed(address,uint256)"(rewardAddress?: string | null, sharesAmount?: null): RewardsDistributedEventFilter;
        RewardsDistributed(rewardAddress?: string | null, sharesAmount?: null): RewardsDistributedEventFilter;
        "LocatorContractSet(address)"(locatorAddress?: null): LocatorContractSetEventFilter;
        LocatorContractSet(locatorAddress?: null): LocatorContractSetEventFilter;
        "VettedSigningKeysCountChanged(uint256,uint256)"(nodeOperatorId?: BigNumberish | null, approvedValidatorsCount?: null): VettedSigningKeysCountChangedEventFilter;
        VettedSigningKeysCountChanged(nodeOperatorId?: BigNumberish | null, approvedValidatorsCount?: null): VettedSigningKeysCountChangedEventFilter;
        "DepositedSigningKeysCountChanged(uint256,uint256)"(nodeOperatorId?: BigNumberish | null, depositedValidatorsCount?: null): DepositedSigningKeysCountChangedEventFilter;
        DepositedSigningKeysCountChanged(nodeOperatorId?: BigNumberish | null, depositedValidatorsCount?: null): DepositedSigningKeysCountChangedEventFilter;
        "ExitedSigningKeysCountChanged(uint256,uint256)"(nodeOperatorId?: BigNumberish | null, exitedValidatorsCount?: null): ExitedSigningKeysCountChangedEventFilter;
        ExitedSigningKeysCountChanged(nodeOperatorId?: BigNumberish | null, exitedValidatorsCount?: null): ExitedSigningKeysCountChangedEventFilter;
        "TotalSigningKeysCountChanged(uint256,uint256)"(nodeOperatorId?: BigNumberish | null, totalValidatorsCount?: null): TotalSigningKeysCountChangedEventFilter;
        TotalSigningKeysCountChanged(nodeOperatorId?: BigNumberish | null, totalValidatorsCount?: null): TotalSigningKeysCountChangedEventFilter;
        "NonceChanged(uint256)"(nonce?: null): NonceChangedEventFilter;
        NonceChanged(nonce?: null): NonceChangedEventFilter;
        "StuckPenaltyDelayChanged(uint256)"(stuckPenaltyDelay?: null): StuckPenaltyDelayChangedEventFilter;
        StuckPenaltyDelayChanged(stuckPenaltyDelay?: null): StuckPenaltyDelayChangedEventFilter;
        "StuckPenaltyStateChanged(uint256,uint256,uint256,uint256)"(nodeOperatorId?: BigNumberish | null, stuckValidatorsCount?: null, refundedValidatorsCount?: null, stuckPenaltyEndTimestamp?: null): StuckPenaltyStateChangedEventFilter;
        StuckPenaltyStateChanged(nodeOperatorId?: BigNumberish | null, stuckValidatorsCount?: null, refundedValidatorsCount?: null, stuckPenaltyEndTimestamp?: null): StuckPenaltyStateChangedEventFilter;
        "TargetValidatorsCountChanged(uint256,uint256)"(nodeOperatorId?: BigNumberish | null, targetValidatorsCount?: null): TargetValidatorsCountChangedEventFilter;
        TargetValidatorsCountChanged(nodeOperatorId?: BigNumberish | null, targetValidatorsCount?: null): TargetValidatorsCountChangedEventFilter;
        "NodeOperatorPenalized(address,uint256)"(recipientAddress?: string | null, sharesPenalizedAmount?: null): NodeOperatorPenalizedEventFilter;
        NodeOperatorPenalized(recipientAddress?: string | null, sharesPenalizedAmount?: null): NodeOperatorPenalizedEventFilter;
        "ContractVersionSet(uint256)"(version?: null): ContractVersionSetEventFilter;
        ContractVersionSet(version?: null): ContractVersionSetEventFilter;
        "ScriptResult(address,bytes,bytes,bytes)"(executor?: string | null, script?: null, input?: null, returnData?: null): ScriptResultEventFilter;
        ScriptResult(executor?: string | null, script?: null, input?: null, returnData?: null): ScriptResultEventFilter;
        "RecoverToVault(address,address,uint256)"(vault?: string | null, token?: string | null, amount?: null): RecoverToVaultEventFilter;
        RecoverToVault(vault?: string | null, token?: string | null, amount?: null): RecoverToVaultEventFilter;
    };
    estimateGas: {
        hasInitialized(overrides?: CallOverrides): Promise<BigNumber>;
        addSigningKeys(_nodeOperatorId: BigNumberish, _keysCount: BigNumberish, _publicKeys: BytesLike, _signatures: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getType(overrides?: CallOverrides): Promise<BigNumber>;
        getEVMScriptExecutor(_script: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        clearNodeOperatorPenalty(_nodeOperatorId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getRecoveryVault(overrides?: CallOverrides): Promise<BigNumber>;
        getNodeOperatorIds(_offset: BigNumberish, _limit: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getSigningKeys(_nodeOperatorId: BigNumberish, _offset: BigNumberish, _limit: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        removeSigningKeysOperatorBH(_nodeOperatorId: BigNumberish, _fromIndex: BigNumberish, _keysCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getNodeOperatorIsActive(_nodeOperatorId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        setNodeOperatorName(_nodeOperatorId: BigNumberish, _name: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getRewardsDistribution(_totalRewardShares: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        invalidateReadyToDepositKeysRange(_indexFrom: BigNumberish, _indexTo: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initialize(_locator: string, _type: BytesLike, _stuckPenaltyDelay: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setStuckPenaltyDelay(_delay: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getStuckPenaltyDelay(overrides?: CallOverrides): Promise<BigNumber>;
        removeSigningKey(_nodeOperatorId: BigNumberish, _index: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        removeSigningKeys(_nodeOperatorId: BigNumberish, _fromIndex: BigNumberish, _keysCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isOperatorPenalized(_nodeOperatorId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        deactivateNodeOperator(_nodeOperatorId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        allowRecoverability(token: string, overrides?: CallOverrides): Promise<BigNumber>;
        STAKING_ROUTER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        addSigningKeysOperatorBH(_nodeOperatorId: BigNumberish, _keysCount: BigNumberish, _publicKeys: BytesLike, _signatures: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        appId(overrides?: CallOverrides): Promise<BigNumber>;
        getActiveNodeOperatorsCount(overrides?: CallOverrides): Promise<BigNumber>;
        addNodeOperator(_name: string, _rewardAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getContractVersion(overrides?: CallOverrides): Promise<BigNumber>;
        getInitializationBlock(overrides?: CallOverrides): Promise<BigNumber>;
        getUnusedSigningKeyCount(_nodeOperatorId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        onRewardsMinted(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        MANAGE_NODE_OPERATOR_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        onWithdrawalCredentialsChanged(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        activateNodeOperator(_nodeOperatorId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setNodeOperatorRewardAddress(_nodeOperatorId: BigNumberish, _rewardAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getNodeOperator(_nodeOperatorId: BigNumberish, _fullInfo: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        finalizeUpgrade_v2(_locator: string, _type: BytesLike, _stuckPenaltyDelay: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getStakingModuleSummary(overrides?: CallOverrides): Promise<BigNumber>;
        updateExitedValidatorsCount(_nodeOperatorIds: BytesLike, _exitedValidatorsCounts: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateStuckValidatorsCount(_nodeOperatorIds: BytesLike, _stuckValidatorsCounts: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferToVault(_token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        canPerform(_sender: string, _role: BytesLike, _params: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        updateRefundedValidatorsCount(_nodeOperatorId: BigNumberish, _refundedValidatorsCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getEVMScriptRegistry(overrides?: CallOverrides): Promise<BigNumber>;
        getNodeOperatorsCount(overrides?: CallOverrides): Promise<BigNumber>;
        updateTargetValidatorsLimits(_nodeOperatorId: BigNumberish, _isTargetLimitActive: boolean, _targetLimit: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setNodeOperatorStakingLimit(_nodeOperatorId: BigNumberish, _vettedSigningKeysCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getNodeOperatorSummary(_nodeOperatorId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getSigningKey(_nodeOperatorId: BigNumberish, _index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        MAX_NODE_OPERATOR_NAME_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;
        obtainDepositData(_depositsCount: BigNumberish, arg1: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getKeysOpIndex(overrides?: CallOverrides): Promise<BigNumber>;
        getNonce(overrides?: CallOverrides): Promise<BigNumber>;
        kernel(overrides?: CallOverrides): Promise<BigNumber>;
        getLocator(overrides?: CallOverrides): Promise<BigNumber>;
        SET_NODE_OPERATOR_LIMIT_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        getTotalSigningKeyCount(_nodeOperatorId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        isPetrified(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_STUCK_PENALTY_DELAY(overrides?: CallOverrides): Promise<BigNumber>;
        onExitedAndStuckValidatorsCountsUpdated(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        MAX_NODE_OPERATORS_COUNT(overrides?: CallOverrides): Promise<BigNumber>;
        removeSigningKeyOperatorBH(_nodeOperatorId: BigNumberish, _index: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        unsafeUpdateValidatorsCount(_nodeOperatorId: BigNumberish, _exitedValidatorsCount: BigNumberish, _stuckValidatorsCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        MANAGE_SIGNING_KEYS(overrides?: CallOverrides): Promise<BigNumber>;
        isOperatorPenaltyCleared(_nodeOperatorId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        hasInitialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addSigningKeys(_nodeOperatorId: BigNumberish, _keysCount: BigNumberish, _publicKeys: BytesLike, _signatures: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getType(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getEVMScriptExecutor(_script: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        clearNodeOperatorPenalty(_nodeOperatorId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getRecoveryVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNodeOperatorIds(_offset: BigNumberish, _limit: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSigningKeys(_nodeOperatorId: BigNumberish, _offset: BigNumberish, _limit: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeSigningKeysOperatorBH(_nodeOperatorId: BigNumberish, _fromIndex: BigNumberish, _keysCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getNodeOperatorIsActive(_nodeOperatorId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setNodeOperatorName(_nodeOperatorId: BigNumberish, _name: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getRewardsDistribution(_totalRewardShares: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        invalidateReadyToDepositKeysRange(_indexFrom: BigNumberish, _indexTo: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initialize(_locator: string, _type: BytesLike, _stuckPenaltyDelay: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setStuckPenaltyDelay(_delay: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getStuckPenaltyDelay(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeSigningKey(_nodeOperatorId: BigNumberish, _index: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        removeSigningKeys(_nodeOperatorId: BigNumberish, _fromIndex: BigNumberish, _keysCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isOperatorPenalized(_nodeOperatorId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deactivateNodeOperator(_nodeOperatorId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        allowRecoverability(token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        STAKING_ROUTER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addSigningKeysOperatorBH(_nodeOperatorId: BigNumberish, _keysCount: BigNumberish, _publicKeys: BytesLike, _signatures: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        appId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getActiveNodeOperatorsCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addNodeOperator(_name: string, _rewardAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getContractVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getInitializationBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUnusedSigningKeyCount(_nodeOperatorId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onRewardsMinted(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MANAGE_NODE_OPERATOR_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onWithdrawalCredentialsChanged(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        activateNodeOperator(_nodeOperatorId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setNodeOperatorRewardAddress(_nodeOperatorId: BigNumberish, _rewardAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getNodeOperator(_nodeOperatorId: BigNumberish, _fullInfo: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        finalizeUpgrade_v2(_locator: string, _type: BytesLike, _stuckPenaltyDelay: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getStakingModuleSummary(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updateExitedValidatorsCount(_nodeOperatorIds: BytesLike, _exitedValidatorsCounts: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateStuckValidatorsCount(_nodeOperatorIds: BytesLike, _stuckValidatorsCounts: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferToVault(_token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        canPerform(_sender: string, _role: BytesLike, _params: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updateRefundedValidatorsCount(_nodeOperatorId: BigNumberish, _refundedValidatorsCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getEVMScriptRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNodeOperatorsCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updateTargetValidatorsLimits(_nodeOperatorId: BigNumberish, _isTargetLimitActive: boolean, _targetLimit: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setNodeOperatorStakingLimit(_nodeOperatorId: BigNumberish, _vettedSigningKeysCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getNodeOperatorSummary(_nodeOperatorId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSigningKey(_nodeOperatorId: BigNumberish, _index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_NODE_OPERATOR_NAME_LENGTH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        obtainDepositData(_depositsCount: BigNumberish, arg1: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getKeysOpIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        kernel(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLocator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        SET_NODE_OPERATOR_LIMIT_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTotalSigningKeyCount(_nodeOperatorId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isPetrified(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_STUCK_PENALTY_DELAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onExitedAndStuckValidatorsCountsUpdated(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        MAX_NODE_OPERATORS_COUNT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeSigningKeyOperatorBH(_nodeOperatorId: BigNumberish, _index: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        unsafeUpdateValidatorsCount(_nodeOperatorId: BigNumberish, _exitedValidatorsCount: BigNumberish, _stuckValidatorsCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        MANAGE_SIGNING_KEYS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isOperatorPenaltyCleared(_nodeOperatorId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
