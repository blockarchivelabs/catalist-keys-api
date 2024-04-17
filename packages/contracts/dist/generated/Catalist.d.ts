import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface CatalistInterface extends utils.Interface {
    contractName: "Catalist";
    functions: {
        "resume()": FunctionFragment;
        "name()": FunctionFragment;
        "stop()": FunctionFragment;
        "hasInitialized()": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "STAKING_CONTROL_ROLE()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "getSharesByPooledAce(uint256)": FunctionFragment;
        "isStakingPaused()": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "getEVMScriptExecutor(bytes)": FunctionFragment;
        "setStakingLimit(uint256,uint256)": FunctionFragment;
        "RESUME_ROLE()": FunctionFragment;
        "finalizeUpgrade_v2(address,address)": FunctionFragment;
        "decimals()": FunctionFragment;
        "getRecoveryVault()": FunctionFragment;
        "DOMAIN_SEPARATOR()": FunctionFragment;
        "getTotalPooledAce()": FunctionFragment;
        "unsafeChangeDepositedValidators(uint256)": FunctionFragment;
        "PAUSE_ROLE()": FunctionFragment;
        "increaseAllowance(address,uint256)": FunctionFragment;
        "getTreasury()": FunctionFragment;
        "isStopped()": FunctionFragment;
        "getBufferedAce()": FunctionFragment;
        "initialize(address,address)": FunctionFragment;
        "receiveELRewards()": FunctionFragment;
        "getWithdrawalCredentials()": FunctionFragment;
        "getCurrentStakeLimit()": FunctionFragment;
        "getStakeLimitFullInfo()": FunctionFragment;
        "transferSharesFrom(address,address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "resumeStaking()": FunctionFragment;
        "getFeeDistribution()": FunctionFragment;
        "receiveWithdrawals()": FunctionFragment;
        "getPooledAceByShares(uint256)": FunctionFragment;
        "allowRecoverability(address)": FunctionFragment;
        "nonces(address)": FunctionFragment;
        "appId()": FunctionFragment;
        "getOracle()": FunctionFragment;
        "eip712Domain()": FunctionFragment;
        "getContractVersion()": FunctionFragment;
        "getInitializationBlock()": FunctionFragment;
        "transferShares(address,uint256)": FunctionFragment;
        "symbol()": FunctionFragment;
        "getEIP712StACE()": FunctionFragment;
        "transferToVault(address)": FunctionFragment;
        "canPerform(address,bytes32,uint256[])": FunctionFragment;
        "submit(address)": FunctionFragment;
        "decreaseAllowance(address,uint256)": FunctionFragment;
        "getEVMScriptRegistry()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "deposit(uint256,uint256,bytes)": FunctionFragment;
        "UNSAFE_CHANGE_DEPOSITED_VALIDATORS_ROLE()": FunctionFragment;
        "getBeaconStat()": FunctionFragment;
        "removeStakingLimit()": FunctionFragment;
        "handleOracleReport(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256[],uint256)": FunctionFragment;
        "getFee()": FunctionFragment;
        "kernel()": FunctionFragment;
        "getTotalShares()": FunctionFragment;
        "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "isPetrified()": FunctionFragment;
        "getCatalistLocator()": FunctionFragment;
        "canDeposit()": FunctionFragment;
        "STAKING_PAUSE_ROLE()": FunctionFragment;
        "getDepositableAce()": FunctionFragment;
        "sharesOf(address)": FunctionFragment;
        "pauseStaking()": FunctionFragment;
        "getTotalELRewardsCollected()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "resume", values?: undefined): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "stop", values?: undefined): string;
    encodeFunctionData(functionFragment: "hasInitialized", values?: undefined): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "STAKING_CONTROL_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "getSharesByPooledAce", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "isStakingPaused", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getEVMScriptExecutor", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "setStakingLimit", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "RESUME_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "finalizeUpgrade_v2", values: [string, string]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRecoveryVault", values?: undefined): string;
    encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTotalPooledAce", values?: undefined): string;
    encodeFunctionData(functionFragment: "unsafeChangeDepositedValidators", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "PAUSE_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "increaseAllowance", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getTreasury", values?: undefined): string;
    encodeFunctionData(functionFragment: "isStopped", values?: undefined): string;
    encodeFunctionData(functionFragment: "getBufferedAce", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string]): string;
    encodeFunctionData(functionFragment: "receiveELRewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "getWithdrawalCredentials", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCurrentStakeLimit", values?: undefined): string;
    encodeFunctionData(functionFragment: "getStakeLimitFullInfo", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferSharesFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "resumeStaking", values?: undefined): string;
    encodeFunctionData(functionFragment: "getFeeDistribution", values?: undefined): string;
    encodeFunctionData(functionFragment: "receiveWithdrawals", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPooledAceByShares", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "allowRecoverability", values: [string]): string;
    encodeFunctionData(functionFragment: "nonces", values: [string]): string;
    encodeFunctionData(functionFragment: "appId", values?: undefined): string;
    encodeFunctionData(functionFragment: "getOracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "eip712Domain", values?: undefined): string;
    encodeFunctionData(functionFragment: "getContractVersion", values?: undefined): string;
    encodeFunctionData(functionFragment: "getInitializationBlock", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferShares", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "getEIP712StACE", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferToVault", values: [string]): string;
    encodeFunctionData(functionFragment: "canPerform", values: [string, BytesLike, BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "submit", values: [string]): string;
    encodeFunctionData(functionFragment: "decreaseAllowance", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getEVMScriptRegistry", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "deposit", values: [BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "UNSAFE_CHANGE_DEPOSITED_VALIDATORS_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "getBeaconStat", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeStakingLimit", values?: undefined): string;
    encodeFunctionData(functionFragment: "handleOracleReport", values: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish[],
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "getFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "kernel", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTotalShares", values?: undefined): string;
    encodeFunctionData(functionFragment: "permit", values: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "allowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "isPetrified", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCatalistLocator", values?: undefined): string;
    encodeFunctionData(functionFragment: "canDeposit", values?: undefined): string;
    encodeFunctionData(functionFragment: "STAKING_PAUSE_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "getDepositableAce", values?: undefined): string;
    encodeFunctionData(functionFragment: "sharesOf", values: [string]): string;
    encodeFunctionData(functionFragment: "pauseStaking", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTotalELRewardsCollected", values?: undefined): string;
    decodeFunctionResult(functionFragment: "resume", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stop", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasInitialized", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "STAKING_CONTROL_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSharesByPooledAce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isStakingPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEVMScriptExecutor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setStakingLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "RESUME_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "finalizeUpgrade_v2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRecoveryVault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTotalPooledAce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unsafeChangeDepositedValidators", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PAUSE_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTreasury", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isStopped", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBufferedAce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveELRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getWithdrawalCredentials", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCurrentStakeLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStakeLimitFullInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferSharesFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resumeStaking", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFeeDistribution", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveWithdrawals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPooledAceByShares", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowRecoverability", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "appId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "eip712Domain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getContractVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getInitializationBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferShares", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEIP712StACE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferToVault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "canPerform", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "submit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEVMScriptRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "UNSAFE_CHANGE_DEPOSITED_VALIDATORS_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBeaconStat", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeStakingLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "handleOracleReport", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "kernel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTotalShares", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPetrified", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCatalistLocator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "canDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "STAKING_PAUSE_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDepositableAce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sharesOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pauseStaking", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTotalELRewardsCollected", data: BytesLike): Result;
    events: {
        "StakingPaused()": EventFragment;
        "StakingResumed()": EventFragment;
        "StakingLimitSet(uint256,uint256)": EventFragment;
        "StakingLimitRemoved()": EventFragment;
        "CLValidatorsUpdated(uint256,uint256,uint256)": EventFragment;
        "DepositedValidatorsChanged(uint256)": EventFragment;
        "ACEDistributed(uint256,uint256,uint256,uint256,uint256,uint256)": EventFragment;
        "TokenRebased(uint256,uint256,uint256,uint256,uint256,uint256,uint256)": EventFragment;
        "CatalistLocatorSet(address)": EventFragment;
        "ELRewardsReceived(uint256)": EventFragment;
        "WithdrawalsReceived(uint256)": EventFragment;
        "Submitted(address,uint256,address)": EventFragment;
        "Unbuffered(uint256)": EventFragment;
        "ScriptResult(address,bytes,bytes,bytes)": EventFragment;
        "RecoverToVault(address,address,uint256)": EventFragment;
        "EIP712StACEInitialized(address)": EventFragment;
        "TransferShares(address,address,uint256)": EventFragment;
        "SharesBurnt(address,uint256,uint256,uint256)": EventFragment;
        "Stopped()": EventFragment;
        "Resumed()": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
        "Approval(address,address,uint256)": EventFragment;
        "ContractVersionSet(uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "StakingPaused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StakingResumed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StakingLimitSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StakingLimitRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CLValidatorsUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DepositedValidatorsChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ACEDistributed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenRebased"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CatalistLocatorSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ELRewardsReceived"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WithdrawalsReceived"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Submitted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unbuffered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ScriptResult"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RecoverToVault"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EIP712StACEInitialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferShares"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SharesBurnt"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Stopped"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Resumed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ContractVersionSet"): EventFragment;
}
export declare type StakingPausedEvent = TypedEvent<[], {}>;
export declare type StakingPausedEventFilter = TypedEventFilter<StakingPausedEvent>;
export declare type StakingResumedEvent = TypedEvent<[], {}>;
export declare type StakingResumedEventFilter = TypedEventFilter<StakingResumedEvent>;
export declare type StakingLimitSetEvent = TypedEvent<[
    BigNumber,
    BigNumber
], {
    maxStakeLimit: BigNumber;
    stakeLimitIncreasePerBlock: BigNumber;
}>;
export declare type StakingLimitSetEventFilter = TypedEventFilter<StakingLimitSetEvent>;
export declare type StakingLimitRemovedEvent = TypedEvent<[], {}>;
export declare type StakingLimitRemovedEventFilter = TypedEventFilter<StakingLimitRemovedEvent>;
export declare type CLValidatorsUpdatedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber
], {
    reportTimestamp: BigNumber;
    preCLValidators: BigNumber;
    postCLValidators: BigNumber;
}>;
export declare type CLValidatorsUpdatedEventFilter = TypedEventFilter<CLValidatorsUpdatedEvent>;
export declare type DepositedValidatorsChangedEvent = TypedEvent<[
    BigNumber
], {
    depositedValidators: BigNumber;
}>;
export declare type DepositedValidatorsChangedEventFilter = TypedEventFilter<DepositedValidatorsChangedEvent>;
export declare type ACEDistributedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], {
    reportTimestamp: BigNumber;
    preCLBalance: BigNumber;
    postCLBalance: BigNumber;
    withdrawalsWithdrawn: BigNumber;
    executionLayerRewardsWithdrawn: BigNumber;
    postBufferedAce: BigNumber;
}>;
export declare type ACEDistributedEventFilter = TypedEventFilter<ACEDistributedEvent>;
export declare type TokenRebasedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], {
    reportTimestamp: BigNumber;
    timeElapsed: BigNumber;
    preTotalShares: BigNumber;
    preTotalAce: BigNumber;
    postTotalShares: BigNumber;
    postTotalAce: BigNumber;
    sharesMintedAsFees: BigNumber;
}>;
export declare type TokenRebasedEventFilter = TypedEventFilter<TokenRebasedEvent>;
export declare type CatalistLocatorSetEvent = TypedEvent<[
    string
], {
    catalistLocator: string;
}>;
export declare type CatalistLocatorSetEventFilter = TypedEventFilter<CatalistLocatorSetEvent>;
export declare type ELRewardsReceivedEvent = TypedEvent<[
    BigNumber
], {
    amount: BigNumber;
}>;
export declare type ELRewardsReceivedEventFilter = TypedEventFilter<ELRewardsReceivedEvent>;
export declare type WithdrawalsReceivedEvent = TypedEvent<[
    BigNumber
], {
    amount: BigNumber;
}>;
export declare type WithdrawalsReceivedEventFilter = TypedEventFilter<WithdrawalsReceivedEvent>;
export declare type SubmittedEvent = TypedEvent<[
    string,
    BigNumber,
    string
], {
    sender: string;
    amount: BigNumber;
    referral: string;
}>;
export declare type SubmittedEventFilter = TypedEventFilter<SubmittedEvent>;
export declare type UnbufferedEvent = TypedEvent<[BigNumber], {
    amount: BigNumber;
}>;
export declare type UnbufferedEventFilter = TypedEventFilter<UnbufferedEvent>;
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
export declare type EIP712StACEInitializedEvent = TypedEvent<[
    string
], {
    eip712StACE: string;
}>;
export declare type EIP712StACEInitializedEventFilter = TypedEventFilter<EIP712StACEInitializedEvent>;
export declare type TransferSharesEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    from: string;
    to: string;
    sharesValue: BigNumber;
}>;
export declare type TransferSharesEventFilter = TypedEventFilter<TransferSharesEvent>;
export declare type SharesBurntEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber
], {
    account: string;
    preRebaseTokenAmount: BigNumber;
    postRebaseTokenAmount: BigNumber;
    sharesAmount: BigNumber;
}>;
export declare type SharesBurntEventFilter = TypedEventFilter<SharesBurntEvent>;
export declare type StoppedEvent = TypedEvent<[], {}>;
export declare type StoppedEventFilter = TypedEventFilter<StoppedEvent>;
export declare type ResumedEvent = TypedEvent<[], {}>;
export declare type ResumedEventFilter = TypedEventFilter<ResumedEvent>;
export declare type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    from: string;
    to: string;
    value: BigNumber;
}>;
export declare type TransferEventFilter = TypedEventFilter<TransferEvent>;
export declare type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    owner: string;
    spender: string;
    value: BigNumber;
}>;
export declare type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export declare type ContractVersionSetEvent = TypedEvent<[
    BigNumber
], {
    version: BigNumber;
}>;
export declare type ContractVersionSetEventFilter = TypedEventFilter<ContractVersionSetEvent>;
export interface Catalist extends BaseContract {
    contractName: "Catalist";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CatalistInterface;
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
        resume(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        hasInitialized(overrides?: CallOverrides): Promise<[boolean]>;
        approve(_spender: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        STAKING_CONTROL_ROLE(overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        getSharesByPooledAce(_aceAmount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        isStakingPaused(overrides?: CallOverrides): Promise<[boolean]>;
        transferFrom(_sender: string, _recipient: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getEVMScriptExecutor(_script: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        setStakingLimit(_maxStakeLimit: BigNumberish, _stakeLimitIncreasePerBlock: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        RESUME_ROLE(overrides?: CallOverrides): Promise<[string]>;
        finalizeUpgrade_v2(_catalistLocator: string, _eip712StACE: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        getRecoveryVault(overrides?: CallOverrides): Promise<[string]>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;
        getTotalPooledAce(overrides?: CallOverrides): Promise<[BigNumber]>;
        unsafeChangeDepositedValidators(_newDepositedValidators: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        PAUSE_ROLE(overrides?: CallOverrides): Promise<[string]>;
        increaseAllowance(_spender: string, _addedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getTreasury(overrides?: CallOverrides): Promise<[string]>;
        isStopped(overrides?: CallOverrides): Promise<[boolean]>;
        getBufferedAce(overrides?: CallOverrides): Promise<[BigNumber]>;
        initialize(_catalistLocator: string, _eip712StACE: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        receiveELRewards(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getWithdrawalCredentials(overrides?: CallOverrides): Promise<[string]>;
        getCurrentStakeLimit(overrides?: CallOverrides): Promise<[BigNumber]>;
        getStakeLimitFullInfo(overrides?: CallOverrides): Promise<[
            boolean,
            boolean,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            isStakingPaused: boolean;
            isStakingLimitSet: boolean;
            currentStakeLimit: BigNumber;
            maxStakeLimit: BigNumber;
            maxStakeLimitGrowthBlocks: BigNumber;
            prevStakeLimit: BigNumber;
            prevStakeBlockNumber: BigNumber;
        }>;
        transferSharesFrom(_sender: string, _recipient: string, _sharesAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        balanceOf(_account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        resumeStaking(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getFeeDistribution(overrides?: CallOverrides): Promise<[
            number,
            number,
            number
        ] & {
            treasuryFeeBasisPoints: number;
            insuranceFeeBasisPoints: number;
            operatorsFeeBasisPoints: number;
        }>;
        receiveWithdrawals(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getPooledAceByShares(_sharesAmount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        allowRecoverability(token: string, overrides?: CallOverrides): Promise<[boolean]>;
        nonces(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        appId(overrides?: CallOverrides): Promise<[string]>;
        getOracle(overrides?: CallOverrides): Promise<[string]>;
        eip712Domain(overrides?: CallOverrides): Promise<[
            string,
            string,
            BigNumber,
            string
        ] & {
            name: string;
            version: string;
            chainId: BigNumber;
            verifyingContract: string;
        }>;
        getContractVersion(overrides?: CallOverrides): Promise<[BigNumber]>;
        getInitializationBlock(overrides?: CallOverrides): Promise<[BigNumber]>;
        transferShares(_recipient: string, _sharesAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        getEIP712StACE(overrides?: CallOverrides): Promise<[string]>;
        transferToVault(arg0: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        canPerform(_sender: string, _role: BytesLike, _params: BigNumberish[], overrides?: CallOverrides): Promise<[boolean]>;
        submit(_referral: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        decreaseAllowance(_spender: string, _subtractedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getEVMScriptRegistry(overrides?: CallOverrides): Promise<[string]>;
        transfer(_recipient: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        deposit(_maxDepositsCount: BigNumberish, _stakingModuleId: BigNumberish, _depositCalldata: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        UNSAFE_CHANGE_DEPOSITED_VALIDATORS_ROLE(overrides?: CallOverrides): Promise<[string]>;
        getBeaconStat(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            depositedValidators: BigNumber;
            beaconValidators: BigNumber;
            beaconBalance: BigNumber;
        }>;
        removeStakingLimit(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        handleOracleReport(_reportTimestamp: BigNumberish, _timeElapsed: BigNumberish, _clValidators: BigNumberish, _clBalance: BigNumberish, _withdrawalVaultBalance: BigNumberish, _elRewardsVaultBalance: BigNumberish, _sharesRequestedToBurn: BigNumberish, _withdrawalFinalizationBatches: BigNumberish[], _simulatedShareRate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getFee(overrides?: CallOverrides): Promise<[number] & {
            totalFee: number;
        }>;
        kernel(overrides?: CallOverrides): Promise<[string]>;
        getTotalShares(overrides?: CallOverrides): Promise<[BigNumber]>;
        permit(_owner: string, _spender: string, _value: BigNumberish, _deadline: BigNumberish, _v: BigNumberish, _r: BytesLike, _s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        allowance(_owner: string, _spender: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        isPetrified(overrides?: CallOverrides): Promise<[boolean]>;
        getCatalistLocator(overrides?: CallOverrides): Promise<[string]>;
        canDeposit(overrides?: CallOverrides): Promise<[boolean]>;
        STAKING_PAUSE_ROLE(overrides?: CallOverrides): Promise<[string]>;
        getDepositableAce(overrides?: CallOverrides): Promise<[BigNumber]>;
        sharesOf(_account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        pauseStaking(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getTotalELRewardsCollected(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    resume(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    stop(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    hasInitialized(overrides?: CallOverrides): Promise<boolean>;
    approve(_spender: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    STAKING_CONTROL_ROLE(overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    getSharesByPooledAce(_aceAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    isStakingPaused(overrides?: CallOverrides): Promise<boolean>;
    transferFrom(_sender: string, _recipient: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getEVMScriptExecutor(_script: BytesLike, overrides?: CallOverrides): Promise<string>;
    setStakingLimit(_maxStakeLimit: BigNumberish, _stakeLimitIncreasePerBlock: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    RESUME_ROLE(overrides?: CallOverrides): Promise<string>;
    finalizeUpgrade_v2(_catalistLocator: string, _eip712StACE: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    decimals(overrides?: CallOverrides): Promise<number>;
    getRecoveryVault(overrides?: CallOverrides): Promise<string>;
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
    getTotalPooledAce(overrides?: CallOverrides): Promise<BigNumber>;
    unsafeChangeDepositedValidators(_newDepositedValidators: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    PAUSE_ROLE(overrides?: CallOverrides): Promise<string>;
    increaseAllowance(_spender: string, _addedValue: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getTreasury(overrides?: CallOverrides): Promise<string>;
    isStopped(overrides?: CallOverrides): Promise<boolean>;
    getBufferedAce(overrides?: CallOverrides): Promise<BigNumber>;
    initialize(_catalistLocator: string, _eip712StACE: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    receiveELRewards(overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getWithdrawalCredentials(overrides?: CallOverrides): Promise<string>;
    getCurrentStakeLimit(overrides?: CallOverrides): Promise<BigNumber>;
    getStakeLimitFullInfo(overrides?: CallOverrides): Promise<[
        boolean,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        isStakingPaused: boolean;
        isStakingLimitSet: boolean;
        currentStakeLimit: BigNumber;
        maxStakeLimit: BigNumber;
        maxStakeLimitGrowthBlocks: BigNumber;
        prevStakeLimit: BigNumber;
        prevStakeBlockNumber: BigNumber;
    }>;
    transferSharesFrom(_sender: string, _recipient: string, _sharesAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    balanceOf(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
    resumeStaking(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getFeeDistribution(overrides?: CallOverrides): Promise<[
        number,
        number,
        number
    ] & {
        treasuryFeeBasisPoints: number;
        insuranceFeeBasisPoints: number;
        operatorsFeeBasisPoints: number;
    }>;
    receiveWithdrawals(overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getPooledAceByShares(_sharesAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    allowRecoverability(token: string, overrides?: CallOverrides): Promise<boolean>;
    nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    appId(overrides?: CallOverrides): Promise<string>;
    getOracle(overrides?: CallOverrides): Promise<string>;
    eip712Domain(overrides?: CallOverrides): Promise<[
        string,
        string,
        BigNumber,
        string
    ] & {
        name: string;
        version: string;
        chainId: BigNumber;
        verifyingContract: string;
    }>;
    getContractVersion(overrides?: CallOverrides): Promise<BigNumber>;
    getInitializationBlock(overrides?: CallOverrides): Promise<BigNumber>;
    transferShares(_recipient: string, _sharesAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    symbol(overrides?: CallOverrides): Promise<string>;
    getEIP712StACE(overrides?: CallOverrides): Promise<string>;
    transferToVault(arg0: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    canPerform(_sender: string, _role: BytesLike, _params: BigNumberish[], overrides?: CallOverrides): Promise<boolean>;
    submit(_referral: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    decreaseAllowance(_spender: string, _subtractedValue: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getEVMScriptRegistry(overrides?: CallOverrides): Promise<string>;
    transfer(_recipient: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    deposit(_maxDepositsCount: BigNumberish, _stakingModuleId: BigNumberish, _depositCalldata: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    UNSAFE_CHANGE_DEPOSITED_VALIDATORS_ROLE(overrides?: CallOverrides): Promise<string>;
    getBeaconStat(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        depositedValidators: BigNumber;
        beaconValidators: BigNumber;
        beaconBalance: BigNumber;
    }>;
    removeStakingLimit(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    handleOracleReport(_reportTimestamp: BigNumberish, _timeElapsed: BigNumberish, _clValidators: BigNumberish, _clBalance: BigNumberish, _withdrawalVaultBalance: BigNumberish, _elRewardsVaultBalance: BigNumberish, _sharesRequestedToBurn: BigNumberish, _withdrawalFinalizationBatches: BigNumberish[], _simulatedShareRate: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getFee(overrides?: CallOverrides): Promise<number>;
    kernel(overrides?: CallOverrides): Promise<string>;
    getTotalShares(overrides?: CallOverrides): Promise<BigNumber>;
    permit(_owner: string, _spender: string, _value: BigNumberish, _deadline: BigNumberish, _v: BigNumberish, _r: BytesLike, _s: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    allowance(_owner: string, _spender: string, overrides?: CallOverrides): Promise<BigNumber>;
    isPetrified(overrides?: CallOverrides): Promise<boolean>;
    getCatalistLocator(overrides?: CallOverrides): Promise<string>;
    canDeposit(overrides?: CallOverrides): Promise<boolean>;
    STAKING_PAUSE_ROLE(overrides?: CallOverrides): Promise<string>;
    getDepositableAce(overrides?: CallOverrides): Promise<BigNumber>;
    sharesOf(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
    pauseStaking(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getTotalELRewardsCollected(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        resume(overrides?: CallOverrides): Promise<void>;
        name(overrides?: CallOverrides): Promise<string>;
        stop(overrides?: CallOverrides): Promise<void>;
        hasInitialized(overrides?: CallOverrides): Promise<boolean>;
        approve(_spender: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        STAKING_CONTROL_ROLE(overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        getSharesByPooledAce(_aceAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        isStakingPaused(overrides?: CallOverrides): Promise<boolean>;
        transferFrom(_sender: string, _recipient: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        getEVMScriptExecutor(_script: BytesLike, overrides?: CallOverrides): Promise<string>;
        setStakingLimit(_maxStakeLimit: BigNumberish, _stakeLimitIncreasePerBlock: BigNumberish, overrides?: CallOverrides): Promise<void>;
        RESUME_ROLE(overrides?: CallOverrides): Promise<string>;
        finalizeUpgrade_v2(_catalistLocator: string, _eip712StACE: string, overrides?: CallOverrides): Promise<void>;
        decimals(overrides?: CallOverrides): Promise<number>;
        getRecoveryVault(overrides?: CallOverrides): Promise<string>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
        getTotalPooledAce(overrides?: CallOverrides): Promise<BigNumber>;
        unsafeChangeDepositedValidators(_newDepositedValidators: BigNumberish, overrides?: CallOverrides): Promise<void>;
        PAUSE_ROLE(overrides?: CallOverrides): Promise<string>;
        increaseAllowance(_spender: string, _addedValue: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        getTreasury(overrides?: CallOverrides): Promise<string>;
        isStopped(overrides?: CallOverrides): Promise<boolean>;
        getBufferedAce(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_catalistLocator: string, _eip712StACE: string, overrides?: CallOverrides): Promise<void>;
        receiveELRewards(overrides?: CallOverrides): Promise<void>;
        getWithdrawalCredentials(overrides?: CallOverrides): Promise<string>;
        getCurrentStakeLimit(overrides?: CallOverrides): Promise<BigNumber>;
        getStakeLimitFullInfo(overrides?: CallOverrides): Promise<[
            boolean,
            boolean,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            isStakingPaused: boolean;
            isStakingLimitSet: boolean;
            currentStakeLimit: BigNumber;
            maxStakeLimit: BigNumber;
            maxStakeLimitGrowthBlocks: BigNumber;
            prevStakeLimit: BigNumber;
            prevStakeBlockNumber: BigNumber;
        }>;
        transferSharesFrom(_sender: string, _recipient: string, _sharesAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        resumeStaking(overrides?: CallOverrides): Promise<void>;
        getFeeDistribution(overrides?: CallOverrides): Promise<[
            number,
            number,
            number
        ] & {
            treasuryFeeBasisPoints: number;
            insuranceFeeBasisPoints: number;
            operatorsFeeBasisPoints: number;
        }>;
        receiveWithdrawals(overrides?: CallOverrides): Promise<void>;
        getPooledAceByShares(_sharesAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        allowRecoverability(token: string, overrides?: CallOverrides): Promise<boolean>;
        nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        appId(overrides?: CallOverrides): Promise<string>;
        getOracle(overrides?: CallOverrides): Promise<string>;
        eip712Domain(overrides?: CallOverrides): Promise<[
            string,
            string,
            BigNumber,
            string
        ] & {
            name: string;
            version: string;
            chainId: BigNumber;
            verifyingContract: string;
        }>;
        getContractVersion(overrides?: CallOverrides): Promise<BigNumber>;
        getInitializationBlock(overrides?: CallOverrides): Promise<BigNumber>;
        transferShares(_recipient: string, _sharesAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<string>;
        getEIP712StACE(overrides?: CallOverrides): Promise<string>;
        transferToVault(arg0: string, overrides?: CallOverrides): Promise<void>;
        canPerform(_sender: string, _role: BytesLike, _params: BigNumberish[], overrides?: CallOverrides): Promise<boolean>;
        submit(_referral: string, overrides?: CallOverrides): Promise<BigNumber>;
        decreaseAllowance(_spender: string, _subtractedValue: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        getEVMScriptRegistry(overrides?: CallOverrides): Promise<string>;
        transfer(_recipient: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        deposit(_maxDepositsCount: BigNumberish, _stakingModuleId: BigNumberish, _depositCalldata: BytesLike, overrides?: CallOverrides): Promise<void>;
        UNSAFE_CHANGE_DEPOSITED_VALIDATORS_ROLE(overrides?: CallOverrides): Promise<string>;
        getBeaconStat(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            depositedValidators: BigNumber;
            beaconValidators: BigNumber;
            beaconBalance: BigNumber;
        }>;
        removeStakingLimit(overrides?: CallOverrides): Promise<void>;
        handleOracleReport(_reportTimestamp: BigNumberish, _timeElapsed: BigNumberish, _clValidators: BigNumberish, _clBalance: BigNumberish, _withdrawalVaultBalance: BigNumberish, _elRewardsVaultBalance: BigNumberish, _sharesRequestedToBurn: BigNumberish, _withdrawalFinalizationBatches: BigNumberish[], _simulatedShareRate: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
        getFee(overrides?: CallOverrides): Promise<number>;
        kernel(overrides?: CallOverrides): Promise<string>;
        getTotalShares(overrides?: CallOverrides): Promise<BigNumber>;
        permit(_owner: string, _spender: string, _value: BigNumberish, _deadline: BigNumberish, _v: BigNumberish, _r: BytesLike, _s: BytesLike, overrides?: CallOverrides): Promise<void>;
        allowance(_owner: string, _spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        isPetrified(overrides?: CallOverrides): Promise<boolean>;
        getCatalistLocator(overrides?: CallOverrides): Promise<string>;
        canDeposit(overrides?: CallOverrides): Promise<boolean>;
        STAKING_PAUSE_ROLE(overrides?: CallOverrides): Promise<string>;
        getDepositableAce(overrides?: CallOverrides): Promise<BigNumber>;
        sharesOf(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        pauseStaking(overrides?: CallOverrides): Promise<void>;
        getTotalELRewardsCollected(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "StakingPaused()"(): StakingPausedEventFilter;
        StakingPaused(): StakingPausedEventFilter;
        "StakingResumed()"(): StakingResumedEventFilter;
        StakingResumed(): StakingResumedEventFilter;
        "StakingLimitSet(uint256,uint256)"(maxStakeLimit?: null, stakeLimitIncreasePerBlock?: null): StakingLimitSetEventFilter;
        StakingLimitSet(maxStakeLimit?: null, stakeLimitIncreasePerBlock?: null): StakingLimitSetEventFilter;
        "StakingLimitRemoved()"(): StakingLimitRemovedEventFilter;
        StakingLimitRemoved(): StakingLimitRemovedEventFilter;
        "CLValidatorsUpdated(uint256,uint256,uint256)"(reportTimestamp?: BigNumberish | null, preCLValidators?: null, postCLValidators?: null): CLValidatorsUpdatedEventFilter;
        CLValidatorsUpdated(reportTimestamp?: BigNumberish | null, preCLValidators?: null, postCLValidators?: null): CLValidatorsUpdatedEventFilter;
        "DepositedValidatorsChanged(uint256)"(depositedValidators?: null): DepositedValidatorsChangedEventFilter;
        DepositedValidatorsChanged(depositedValidators?: null): DepositedValidatorsChangedEventFilter;
        "ACEDistributed(uint256,uint256,uint256,uint256,uint256,uint256)"(reportTimestamp?: BigNumberish | null, preCLBalance?: null, postCLBalance?: null, withdrawalsWithdrawn?: null, executionLayerRewardsWithdrawn?: null, postBufferedAce?: null): ACEDistributedEventFilter;
        ACEDistributed(reportTimestamp?: BigNumberish | null, preCLBalance?: null, postCLBalance?: null, withdrawalsWithdrawn?: null, executionLayerRewardsWithdrawn?: null, postBufferedAce?: null): ACEDistributedEventFilter;
        "TokenRebased(uint256,uint256,uint256,uint256,uint256,uint256,uint256)"(reportTimestamp?: BigNumberish | null, timeElapsed?: null, preTotalShares?: null, preTotalAce?: null, postTotalShares?: null, postTotalAce?: null, sharesMintedAsFees?: null): TokenRebasedEventFilter;
        TokenRebased(reportTimestamp?: BigNumberish | null, timeElapsed?: null, preTotalShares?: null, preTotalAce?: null, postTotalShares?: null, postTotalAce?: null, sharesMintedAsFees?: null): TokenRebasedEventFilter;
        "CatalistLocatorSet(address)"(catalistLocator?: null): CatalistLocatorSetEventFilter;
        CatalistLocatorSet(catalistLocator?: null): CatalistLocatorSetEventFilter;
        "ELRewardsReceived(uint256)"(amount?: null): ELRewardsReceivedEventFilter;
        ELRewardsReceived(amount?: null): ELRewardsReceivedEventFilter;
        "WithdrawalsReceived(uint256)"(amount?: null): WithdrawalsReceivedEventFilter;
        WithdrawalsReceived(amount?: null): WithdrawalsReceivedEventFilter;
        "Submitted(address,uint256,address)"(sender?: string | null, amount?: null, referral?: null): SubmittedEventFilter;
        Submitted(sender?: string | null, amount?: null, referral?: null): SubmittedEventFilter;
        "Unbuffered(uint256)"(amount?: null): UnbufferedEventFilter;
        Unbuffered(amount?: null): UnbufferedEventFilter;
        "ScriptResult(address,bytes,bytes,bytes)"(executor?: string | null, script?: null, input?: null, returnData?: null): ScriptResultEventFilter;
        ScriptResult(executor?: string | null, script?: null, input?: null, returnData?: null): ScriptResultEventFilter;
        "RecoverToVault(address,address,uint256)"(vault?: string | null, token?: string | null, amount?: null): RecoverToVaultEventFilter;
        RecoverToVault(vault?: string | null, token?: string | null, amount?: null): RecoverToVaultEventFilter;
        "EIP712StACEInitialized(address)"(eip712StACE?: null): EIP712StACEInitializedEventFilter;
        EIP712StACEInitialized(eip712StACE?: null): EIP712StACEInitializedEventFilter;
        "TransferShares(address,address,uint256)"(from?: string | null, to?: string | null, sharesValue?: null): TransferSharesEventFilter;
        TransferShares(from?: string | null, to?: string | null, sharesValue?: null): TransferSharesEventFilter;
        "SharesBurnt(address,uint256,uint256,uint256)"(account?: string | null, preRebaseTokenAmount?: null, postRebaseTokenAmount?: null, sharesAmount?: null): SharesBurntEventFilter;
        SharesBurnt(account?: string | null, preRebaseTokenAmount?: null, postRebaseTokenAmount?: null, sharesAmount?: null): SharesBurntEventFilter;
        "Stopped()"(): StoppedEventFilter;
        Stopped(): StoppedEventFilter;
        "Resumed()"(): ResumedEventFilter;
        Resumed(): ResumedEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        "Approval(address,address,uint256)"(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        Approval(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        "ContractVersionSet(uint256)"(version?: null): ContractVersionSetEventFilter;
        ContractVersionSet(version?: null): ContractVersionSetEventFilter;
    };
    estimateGas: {
        resume(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        hasInitialized(overrides?: CallOverrides): Promise<BigNumber>;
        approve(_spender: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        STAKING_CONTROL_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        getSharesByPooledAce(_aceAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        isStakingPaused(overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(_sender: string, _recipient: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getEVMScriptExecutor(_script: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        setStakingLimit(_maxStakeLimit: BigNumberish, _stakeLimitIncreasePerBlock: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        RESUME_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        finalizeUpgrade_v2(_catalistLocator: string, _eip712StACE: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        getRecoveryVault(overrides?: CallOverrides): Promise<BigNumber>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;
        getTotalPooledAce(overrides?: CallOverrides): Promise<BigNumber>;
        unsafeChangeDepositedValidators(_newDepositedValidators: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        PAUSE_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        increaseAllowance(_spender: string, _addedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getTreasury(overrides?: CallOverrides): Promise<BigNumber>;
        isStopped(overrides?: CallOverrides): Promise<BigNumber>;
        getBufferedAce(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_catalistLocator: string, _eip712StACE: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        receiveELRewards(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getWithdrawalCredentials(overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentStakeLimit(overrides?: CallOverrides): Promise<BigNumber>;
        getStakeLimitFullInfo(overrides?: CallOverrides): Promise<BigNumber>;
        transferSharesFrom(_sender: string, _recipient: string, _sharesAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        balanceOf(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        resumeStaking(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getFeeDistribution(overrides?: CallOverrides): Promise<BigNumber>;
        receiveWithdrawals(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getPooledAceByShares(_sharesAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        allowRecoverability(token: string, overrides?: CallOverrides): Promise<BigNumber>;
        nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        appId(overrides?: CallOverrides): Promise<BigNumber>;
        getOracle(overrides?: CallOverrides): Promise<BigNumber>;
        eip712Domain(overrides?: CallOverrides): Promise<BigNumber>;
        getContractVersion(overrides?: CallOverrides): Promise<BigNumber>;
        getInitializationBlock(overrides?: CallOverrides): Promise<BigNumber>;
        transferShares(_recipient: string, _sharesAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        getEIP712StACE(overrides?: CallOverrides): Promise<BigNumber>;
        transferToVault(arg0: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        canPerform(_sender: string, _role: BytesLike, _params: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        submit(_referral: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        decreaseAllowance(_spender: string, _subtractedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getEVMScriptRegistry(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(_recipient: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        deposit(_maxDepositsCount: BigNumberish, _stakingModuleId: BigNumberish, _depositCalldata: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        UNSAFE_CHANGE_DEPOSITED_VALIDATORS_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        getBeaconStat(overrides?: CallOverrides): Promise<BigNumber>;
        removeStakingLimit(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        handleOracleReport(_reportTimestamp: BigNumberish, _timeElapsed: BigNumberish, _clValidators: BigNumberish, _clBalance: BigNumberish, _withdrawalVaultBalance: BigNumberish, _elRewardsVaultBalance: BigNumberish, _sharesRequestedToBurn: BigNumberish, _withdrawalFinalizationBatches: BigNumberish[], _simulatedShareRate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getFee(overrides?: CallOverrides): Promise<BigNumber>;
        kernel(overrides?: CallOverrides): Promise<BigNumber>;
        getTotalShares(overrides?: CallOverrides): Promise<BigNumber>;
        permit(_owner: string, _spender: string, _value: BigNumberish, _deadline: BigNumberish, _v: BigNumberish, _r: BytesLike, _s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        allowance(_owner: string, _spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        isPetrified(overrides?: CallOverrides): Promise<BigNumber>;
        getCatalistLocator(overrides?: CallOverrides): Promise<BigNumber>;
        canDeposit(overrides?: CallOverrides): Promise<BigNumber>;
        STAKING_PAUSE_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        getDepositableAce(overrides?: CallOverrides): Promise<BigNumber>;
        sharesOf(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        pauseStaking(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getTotalELRewardsCollected(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        resume(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        hasInitialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(_spender: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        STAKING_CONTROL_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSharesByPooledAce(_aceAmount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isStakingPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferFrom(_sender: string, _recipient: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getEVMScriptExecutor(_script: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setStakingLimit(_maxStakeLimit: BigNumberish, _stakeLimitIncreasePerBlock: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        RESUME_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        finalizeUpgrade_v2(_catalistLocator: string, _eip712StACE: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRecoveryVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTotalPooledAce(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unsafeChangeDepositedValidators(_newDepositedValidators: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        PAUSE_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseAllowance(_spender: string, _addedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getTreasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isStopped(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBufferedAce(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_catalistLocator: string, _eip712StACE: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        receiveELRewards(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getWithdrawalCredentials(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCurrentStakeLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStakeLimitFullInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferSharesFrom(_sender: string, _recipient: string, _sharesAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        resumeStaking(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getFeeDistribution(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        receiveWithdrawals(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getPooledAceByShares(_sharesAmount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowRecoverability(token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nonces(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        appId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        eip712Domain(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getContractVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getInitializationBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferShares(_recipient: string, _sharesAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getEIP712StACE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferToVault(arg0: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        canPerform(_sender: string, _role: BytesLike, _params: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        submit(_referral: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        decreaseAllowance(_spender: string, _subtractedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getEVMScriptRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(_recipient: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        deposit(_maxDepositsCount: BigNumberish, _stakingModuleId: BigNumberish, _depositCalldata: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        UNSAFE_CHANGE_DEPOSITED_VALIDATORS_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBeaconStat(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeStakingLimit(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        handleOracleReport(_reportTimestamp: BigNumberish, _timeElapsed: BigNumberish, _clValidators: BigNumberish, _clBalance: BigNumberish, _withdrawalVaultBalance: BigNumberish, _elRewardsVaultBalance: BigNumberish, _sharesRequestedToBurn: BigNumberish, _withdrawalFinalizationBatches: BigNumberish[], _simulatedShareRate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        kernel(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTotalShares(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        permit(_owner: string, _spender: string, _value: BigNumberish, _deadline: BigNumberish, _v: BigNumberish, _r: BytesLike, _s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        allowance(_owner: string, _spender: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isPetrified(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCatalistLocator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        canDeposit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        STAKING_PAUSE_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDepositableAce(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sharesOf(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pauseStaking(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getTotalELRewardsCollected(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
