import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace StakingRouter {
    type NodeOperatorSummaryStruct = {
        isTargetLimitActive: boolean;
        targetValidatorsCount: BigNumberish;
        stuckValidatorsCount: BigNumberish;
        refundedValidatorsCount: BigNumberish;
        stuckPenaltyEndTimestamp: BigNumberish;
        totalExitedValidators: BigNumberish;
        totalDepositedValidators: BigNumberish;
        depositableValidatorsCount: BigNumberish;
    };
    type NodeOperatorSummaryStructOutput = [
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
    };
    type NodeOperatorDigestStruct = {
        id: BigNumberish;
        isActive: boolean;
        summary: StakingRouter.NodeOperatorSummaryStruct;
    };
    type NodeOperatorDigestStructOutput = [
        BigNumber,
        boolean,
        StakingRouter.NodeOperatorSummaryStructOutput
    ] & {
        id: BigNumber;
        isActive: boolean;
        summary: StakingRouter.NodeOperatorSummaryStructOutput;
    };
    type StakingModuleStruct = {
        id: BigNumberish;
        stakingModuleAddress: string;
        stakingModuleFee: BigNumberish;
        treasuryFee: BigNumberish;
        targetShare: BigNumberish;
        status: BigNumberish;
        name: string;
        lastDepositAt: BigNumberish;
        lastDepositBlock: BigNumberish;
        exitedValidatorsCount: BigNumberish;
    };
    type StakingModuleStructOutput = [
        number,
        string,
        number,
        number,
        number,
        number,
        string,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        id: number;
        stakingModuleAddress: string;
        stakingModuleFee: number;
        treasuryFee: number;
        targetShare: number;
        status: number;
        name: string;
        lastDepositAt: BigNumber;
        lastDepositBlock: BigNumber;
        exitedValidatorsCount: BigNumber;
    };
    type StakingModuleSummaryStruct = {
        totalExitedValidators: BigNumberish;
        totalDepositedValidators: BigNumberish;
        depositableValidatorsCount: BigNumberish;
    };
    type StakingModuleSummaryStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        totalExitedValidators: BigNumber;
        totalDepositedValidators: BigNumber;
        depositableValidatorsCount: BigNumber;
    };
    type StakingModuleDigestStruct = {
        nodeOperatorsCount: BigNumberish;
        activeNodeOperatorsCount: BigNumberish;
        state: StakingRouter.StakingModuleStruct;
        summary: StakingRouter.StakingModuleSummaryStruct;
    };
    type StakingModuleDigestStructOutput = [
        BigNumber,
        BigNumber,
        StakingRouter.StakingModuleStructOutput,
        StakingRouter.StakingModuleSummaryStructOutput
    ] & {
        nodeOperatorsCount: BigNumber;
        activeNodeOperatorsCount: BigNumber;
        state: StakingRouter.StakingModuleStructOutput;
        summary: StakingRouter.StakingModuleSummaryStructOutput;
    };
    type ValidatorsCountsCorrectionStruct = {
        currentModuleExitedValidatorsCount: BigNumberish;
        currentNodeOperatorExitedValidatorsCount: BigNumberish;
        currentNodeOperatorStuckValidatorsCount: BigNumberish;
        newModuleExitedValidatorsCount: BigNumberish;
        newNodeOperatorExitedValidatorsCount: BigNumberish;
        newNodeOperatorStuckValidatorsCount: BigNumberish;
    };
    type ValidatorsCountsCorrectionStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        currentModuleExitedValidatorsCount: BigNumber;
        currentNodeOperatorExitedValidatorsCount: BigNumber;
        currentNodeOperatorStuckValidatorsCount: BigNumber;
        newModuleExitedValidatorsCount: BigNumber;
        newNodeOperatorExitedValidatorsCount: BigNumber;
        newNodeOperatorStuckValidatorsCount: BigNumber;
    };
}
export interface StakingRouterInterface extends utils.Interface {
    contractName: "StakingRouter";
    functions: {
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "DEPOSIT_CONTRACT()": FunctionFragment;
        "FEE_PRECISION_POINTS()": FunctionFragment;
        "MANAGE_WITHDRAWAL_CREDENTIALS_ROLE()": FunctionFragment;
        "MAX_STAKING_MODULES_COUNT()": FunctionFragment;
        "MAX_STAKING_MODULE_NAME_LENGTH()": FunctionFragment;
        "REPORT_EXITED_VALIDATORS_ROLE()": FunctionFragment;
        "REPORT_REWARDS_MINTED_ROLE()": FunctionFragment;
        "STAKING_MODULE_MANAGE_ROLE()": FunctionFragment;
        "STAKING_MODULE_PAUSE_ROLE()": FunctionFragment;
        "STAKING_MODULE_RESUME_ROLE()": FunctionFragment;
        "TOTAL_BASIS_POINTS()": FunctionFragment;
        "UNSAFE_SET_EXITED_VALIDATORS_ROLE()": FunctionFragment;
        "addStakingModule(string,address,uint256,uint256,uint256)": FunctionFragment;
        "deposit(uint256,uint256,bytes)": FunctionFragment;
        "getAllNodeOperatorDigests(uint256)": FunctionFragment;
        "getAllStakingModuleDigests()": FunctionFragment;
        "getContractVersion()": FunctionFragment;
        "getDepositsAllocation(uint256)": FunctionFragment;
        "getCatalist()": FunctionFragment;
        "getNodeOperatorDigests(uint256,uint256[])": FunctionFragment;
        "getNodeOperatorSummary(uint256,uint256)": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "getRoleMember(bytes32,uint256)": FunctionFragment;
        "getRoleMemberCount(bytes32)": FunctionFragment;
        "getStakingFeeAggregateDistribution()": FunctionFragment;
        "getStakingFeeAggregateDistributionE4Precision()": FunctionFragment;
        "getStakingModule(uint256)": FunctionFragment;
        "getStakingModuleActiveValidatorsCount(uint256)": FunctionFragment;
        "getStakingModuleDigests(uint256[])": FunctionFragment;
        "getStakingModuleIds()": FunctionFragment;
        "getStakingModuleIsActive(uint256)": FunctionFragment;
        "getStakingModuleIsDepositsPaused(uint256)": FunctionFragment;
        "getStakingModuleIsStopped(uint256)": FunctionFragment;
        "getStakingModuleLastDepositBlock(uint256)": FunctionFragment;
        "getStakingModuleMaxDepositsCount(uint256,uint256)": FunctionFragment;
        "getStakingModuleNonce(uint256)": FunctionFragment;
        "getStakingModuleStatus(uint256)": FunctionFragment;
        "getStakingModuleSummary(uint256)": FunctionFragment;
        "getStakingModules()": FunctionFragment;
        "getStakingModulesCount()": FunctionFragment;
        "getStakingRewardsDistribution()": FunctionFragment;
        "getTotalFeeE4Precision()": FunctionFragment;
        "getWithdrawalCredentials()": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "hasStakingModule(uint256)": FunctionFragment;
        "initialize(address,address,bytes32)": FunctionFragment;
        "onValidatorsCountsByNodeOperatorReportingFinished()": FunctionFragment;
        "pauseStakingModule(uint256)": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "reportRewardsMinted(uint256[],uint256[])": FunctionFragment;
        "reportStakingModuleExitedValidatorsCountByNodeOperator(uint256,bytes,bytes)": FunctionFragment;
        "reportStakingModuleStuckValidatorsCountByNodeOperator(uint256,bytes,bytes)": FunctionFragment;
        "resumeStakingModule(uint256)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "setStakingModuleStatus(uint256,uint8)": FunctionFragment;
        "setWithdrawalCredentials(bytes32)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "unsafeSetExitedValidatorsCount(uint256,uint256,bool,(uint256,uint256,uint256,uint256,uint256,uint256))": FunctionFragment;
        "updateExitedValidatorsCountByStakingModule(uint256[],uint256[])": FunctionFragment;
        "updateRefundedValidatorsCount(uint256,uint256,uint256)": FunctionFragment;
        "updateStakingModule(uint256,uint256,uint256,uint256)": FunctionFragment;
        "updateTargetValidatorsLimits(uint256,uint256,bool,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "DEPOSIT_CONTRACT", values?: undefined): string;
    encodeFunctionData(functionFragment: "FEE_PRECISION_POINTS", values?: undefined): string;
    encodeFunctionData(functionFragment: "MANAGE_WITHDRAWAL_CREDENTIALS_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_STAKING_MODULES_COUNT", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_STAKING_MODULE_NAME_LENGTH", values?: undefined): string;
    encodeFunctionData(functionFragment: "REPORT_EXITED_VALIDATORS_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "REPORT_REWARDS_MINTED_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "STAKING_MODULE_MANAGE_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "STAKING_MODULE_PAUSE_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "STAKING_MODULE_RESUME_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "TOTAL_BASIS_POINTS", values?: undefined): string;
    encodeFunctionData(functionFragment: "UNSAFE_SET_EXITED_VALIDATORS_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "addStakingModule", values: [string, string, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "deposit", values: [BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "getAllNodeOperatorDigests", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getAllStakingModuleDigests", values?: undefined): string;
    encodeFunctionData(functionFragment: "getContractVersion", values?: undefined): string;
    encodeFunctionData(functionFragment: "getDepositsAllocation", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getCatalist", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNodeOperatorDigests", values: [BigNumberish, BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "getNodeOperatorSummary", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getRoleMember", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRoleMemberCount", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getStakingFeeAggregateDistribution", values?: undefined): string;
    encodeFunctionData(functionFragment: "getStakingFeeAggregateDistributionE4Precision", values?: undefined): string;
    encodeFunctionData(functionFragment: "getStakingModule", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getStakingModuleActiveValidatorsCount", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getStakingModuleDigests", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "getStakingModuleIds", values?: undefined): string;
    encodeFunctionData(functionFragment: "getStakingModuleIsActive", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getStakingModuleIsDepositsPaused", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getStakingModuleIsStopped", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getStakingModuleLastDepositBlock", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getStakingModuleMaxDepositsCount", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getStakingModuleNonce", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getStakingModuleStatus", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getStakingModuleSummary", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getStakingModules", values?: undefined): string;
    encodeFunctionData(functionFragment: "getStakingModulesCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getStakingRewardsDistribution", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTotalFeeE4Precision", values?: undefined): string;
    encodeFunctionData(functionFragment: "getWithdrawalCredentials", values?: undefined): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "hasStakingModule", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "onValidatorsCountsByNodeOperatorReportingFinished", values?: undefined): string;
    encodeFunctionData(functionFragment: "pauseStakingModule", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "reportRewardsMinted", values: [BigNumberish[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "reportStakingModuleExitedValidatorsCountByNodeOperator", values: [BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "reportStakingModuleStuckValidatorsCountByNodeOperator", values: [BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "resumeStakingModule", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "setStakingModuleStatus", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setWithdrawalCredentials", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "unsafeSetExitedValidatorsCount", values: [
        BigNumberish,
        BigNumberish,
        boolean,
        StakingRouter.ValidatorsCountsCorrectionStruct
    ]): string;
    encodeFunctionData(functionFragment: "updateExitedValidatorsCountByStakingModule", values: [BigNumberish[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "updateRefundedValidatorsCount", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateStakingModule", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateTargetValidatorsLimits", values: [BigNumberish, BigNumberish, boolean, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DEPOSIT_CONTRACT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "FEE_PRECISION_POINTS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MANAGE_WITHDRAWAL_CREDENTIALS_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_STAKING_MODULES_COUNT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_STAKING_MODULE_NAME_LENGTH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "REPORT_EXITED_VALIDATORS_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "REPORT_REWARDS_MINTED_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "STAKING_MODULE_MANAGE_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "STAKING_MODULE_PAUSE_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "STAKING_MODULE_RESUME_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "TOTAL_BASIS_POINTS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "UNSAFE_SET_EXITED_VALIDATORS_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addStakingModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllNodeOperatorDigests", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllStakingModuleDigests", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getContractVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDepositsAllocation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCatalist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNodeOperatorDigests", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNodeOperatorSummary", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMemberCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStakingFeeAggregateDistribution", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStakingFeeAggregateDistributionE4Precision", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStakingModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStakingModuleActiveValidatorsCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStakingModuleDigests", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStakingModuleIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStakingModuleIsActive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStakingModuleIsDepositsPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStakingModuleIsStopped", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStakingModuleLastDepositBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStakingModuleMaxDepositsCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStakingModuleNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStakingModuleStatus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStakingModuleSummary", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStakingModules", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStakingModulesCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStakingRewardsDistribution", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTotalFeeE4Precision", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getWithdrawalCredentials", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasStakingModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onValidatorsCountsByNodeOperatorReportingFinished", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pauseStakingModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reportRewardsMinted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reportStakingModuleExitedValidatorsCountByNodeOperator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reportStakingModuleStuckValidatorsCountByNodeOperator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resumeStakingModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setStakingModuleStatus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWithdrawalCredentials", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unsafeSetExitedValidatorsCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateExitedValidatorsCountByStakingModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateRefundedValidatorsCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateStakingModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateTargetValidatorsLimits", data: BytesLike): Result;
    events: {
        "ContractVersionSet(uint256)": EventFragment;
        "ExitedAndStuckValidatorsCountsUpdateFailed(uint256,bytes)": EventFragment;
        "RewardsMintedReportFailed(uint256,bytes)": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
        "StakingModuleAdded(uint256,address,string,address)": EventFragment;
        "StakingModuleExitedValidatorsIncompleteReporting(uint256,uint256)": EventFragment;
        "StakingModuleFeesSet(uint256,uint256,uint256,address)": EventFragment;
        "StakingModuleStatusSet(uint256,uint8,address)": EventFragment;
        "StakingModuleTargetShareSet(uint256,uint256,address)": EventFragment;
        "StakingRouterACEDeposited(uint256,uint256)": EventFragment;
        "WithdrawalCredentialsSet(bytes32,address)": EventFragment;
        "WithdrawalsCredentialsChangeFailed(uint256,bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ContractVersionSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExitedAndStuckValidatorsCountsUpdateFailed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RewardsMintedReportFailed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StakingModuleAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StakingModuleExitedValidatorsIncompleteReporting"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StakingModuleFeesSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StakingModuleStatusSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StakingModuleTargetShareSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StakingRouterACEDeposited"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WithdrawalCredentialsSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WithdrawalsCredentialsChangeFailed"): EventFragment;
}
export declare type ContractVersionSetEvent = TypedEvent<[
    BigNumber
], {
    version: BigNumber;
}>;
export declare type ContractVersionSetEventFilter = TypedEventFilter<ContractVersionSetEvent>;
export declare type ExitedAndStuckValidatorsCountsUpdateFailedEvent = TypedEvent<[
    BigNumber,
    string
], {
    stakingModuleId: BigNumber;
    lowLevelRevertData: string;
}>;
export declare type ExitedAndStuckValidatorsCountsUpdateFailedEventFilter = TypedEventFilter<ExitedAndStuckValidatorsCountsUpdateFailedEvent>;
export declare type RewardsMintedReportFailedEvent = TypedEvent<[
    BigNumber,
    string
], {
    stakingModuleId: BigNumber;
    lowLevelRevertData: string;
}>;
export declare type RewardsMintedReportFailedEventFilter = TypedEventFilter<RewardsMintedReportFailedEvent>;
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
export declare type StakingModuleAddedEvent = TypedEvent<[
    BigNumber,
    string,
    string,
    string
], {
    stakingModuleId: BigNumber;
    stakingModule: string;
    name: string;
    createdBy: string;
}>;
export declare type StakingModuleAddedEventFilter = TypedEventFilter<StakingModuleAddedEvent>;
export declare type StakingModuleExitedValidatorsIncompleteReportingEvent = TypedEvent<[
    BigNumber,
    BigNumber
], {
    stakingModuleId: BigNumber;
    unreportedExitedValidatorsCount: BigNumber;
}>;
export declare type StakingModuleExitedValidatorsIncompleteReportingEventFilter = TypedEventFilter<StakingModuleExitedValidatorsIncompleteReportingEvent>;
export declare type StakingModuleFeesSetEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    string
], {
    stakingModuleId: BigNumber;
    stakingModuleFee: BigNumber;
    treasuryFee: BigNumber;
    setBy: string;
}>;
export declare type StakingModuleFeesSetEventFilter = TypedEventFilter<StakingModuleFeesSetEvent>;
export declare type StakingModuleStatusSetEvent = TypedEvent<[
    BigNumber,
    number,
    string
], {
    stakingModuleId: BigNumber;
    status: number;
    setBy: string;
}>;
export declare type StakingModuleStatusSetEventFilter = TypedEventFilter<StakingModuleStatusSetEvent>;
export declare type StakingModuleTargetShareSetEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    string
], {
    stakingModuleId: BigNumber;
    targetShare: BigNumber;
    setBy: string;
}>;
export declare type StakingModuleTargetShareSetEventFilter = TypedEventFilter<StakingModuleTargetShareSetEvent>;
export declare type StakingRouterACEDepositedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], {
    stakingModuleId: BigNumber;
    amount: BigNumber;
}>;
export declare type StakingRouterACEDepositedEventFilter = TypedEventFilter<StakingRouterACEDepositedEvent>;
export declare type WithdrawalCredentialsSetEvent = TypedEvent<[
    string,
    string
], {
    withdrawalCredentials: string;
    setBy: string;
}>;
export declare type WithdrawalCredentialsSetEventFilter = TypedEventFilter<WithdrawalCredentialsSetEvent>;
export declare type WithdrawalsCredentialsChangeFailedEvent = TypedEvent<[
    BigNumber,
    string
], {
    stakingModuleId: BigNumber;
    lowLevelRevertData: string;
}>;
export declare type WithdrawalsCredentialsChangeFailedEventFilter = TypedEventFilter<WithdrawalsCredentialsChangeFailedEvent>;
export interface StakingRouter extends BaseContract {
    contractName: "StakingRouter";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: StakingRouterInterface;
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
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;
        DEPOSIT_CONTRACT(overrides?: CallOverrides): Promise<[string]>;
        FEE_PRECISION_POINTS(overrides?: CallOverrides): Promise<[BigNumber]>;
        MANAGE_WITHDRAWAL_CREDENTIALS_ROLE(overrides?: CallOverrides): Promise<[string]>;
        MAX_STAKING_MODULES_COUNT(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_STAKING_MODULE_NAME_LENGTH(overrides?: CallOverrides): Promise<[BigNumber]>;
        REPORT_EXITED_VALIDATORS_ROLE(overrides?: CallOverrides): Promise<[string]>;
        REPORT_REWARDS_MINTED_ROLE(overrides?: CallOverrides): Promise<[string]>;
        STAKING_MODULE_MANAGE_ROLE(overrides?: CallOverrides): Promise<[string]>;
        STAKING_MODULE_PAUSE_ROLE(overrides?: CallOverrides): Promise<[string]>;
        STAKING_MODULE_RESUME_ROLE(overrides?: CallOverrides): Promise<[string]>;
        TOTAL_BASIS_POINTS(overrides?: CallOverrides): Promise<[BigNumber]>;
        UNSAFE_SET_EXITED_VALIDATORS_ROLE(overrides?: CallOverrides): Promise<[string]>;
        addStakingModule(_name: string, _stakingModuleAddress: string, _targetShare: BigNumberish, _stakingModuleFee: BigNumberish, _treasuryFee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        deposit(_depositsCount: BigNumberish, _stakingModuleId: BigNumberish, _depositCalldata: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getAllNodeOperatorDigests(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<[StakingRouter.NodeOperatorDigestStructOutput[]]>;
        getAllStakingModuleDigests(overrides?: CallOverrides): Promise<[StakingRouter.StakingModuleDigestStructOutput[]]>;
        getContractVersion(overrides?: CallOverrides): Promise<[BigNumber]>;
        getDepositsAllocation(_depositsCount: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber[]
        ] & {
            allocated: BigNumber;
            allocations: BigNumber[];
        }>;
        getCatalist(overrides?: CallOverrides): Promise<[string]>;
        "getNodeOperatorDigests(uint256,uint256[])"(_stakingModuleId: BigNumberish, _nodeOperatorIds: BigNumberish[], overrides?: CallOverrides): Promise<[
            StakingRouter.NodeOperatorDigestStructOutput[]
        ] & {
            digests: StakingRouter.NodeOperatorDigestStructOutput[];
        }>;
        "getNodeOperatorDigests(uint256,uint256,uint256)"(_stakingModuleId: BigNumberish, _offset: BigNumberish, _limit: BigNumberish, overrides?: CallOverrides): Promise<[StakingRouter.NodeOperatorDigestStructOutput[]]>;
        getNodeOperatorSummary(_stakingModuleId: BigNumberish, _nodeOperatorId: BigNumberish, overrides?: CallOverrides): Promise<[
            StakingRouter.NodeOperatorSummaryStructOutput
        ] & {
            summary: StakingRouter.NodeOperatorSummaryStructOutput;
        }>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        getStakingFeeAggregateDistribution(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            modulesFee: BigNumber;
            treasuryFee: BigNumber;
            basePrecision: BigNumber;
        }>;
        getStakingFeeAggregateDistributionE4Precision(overrides?: CallOverrides): Promise<[number, number] & {
            modulesFee: number;
            treasuryFee: number;
        }>;
        getStakingModule(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<[StakingRouter.StakingModuleStructOutput]>;
        getStakingModuleActiveValidatorsCount(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            activeValidatorsCount: BigNumber;
        }>;
        getStakingModuleDigests(_stakingModuleIds: BigNumberish[], overrides?: CallOverrides): Promise<[
            StakingRouter.StakingModuleDigestStructOutput[]
        ] & {
            digests: StakingRouter.StakingModuleDigestStructOutput[];
        }>;
        getStakingModuleIds(overrides?: CallOverrides): Promise<[BigNumber[]] & {
            stakingModuleIds: BigNumber[];
        }>;
        getStakingModuleIsActive(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        getStakingModuleIsDepositsPaused(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        getStakingModuleIsStopped(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        getStakingModuleLastDepositBlock(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getStakingModuleMaxDepositsCount(_stakingModuleId: BigNumberish, _maxDepositsValue: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getStakingModuleNonce(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getStakingModuleStatus(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<[number]>;
        getStakingModuleSummary(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<[
            StakingRouter.StakingModuleSummaryStructOutput
        ] & {
            summary: StakingRouter.StakingModuleSummaryStructOutput;
        }>;
        getStakingModules(overrides?: CallOverrides): Promise<[
            StakingRouter.StakingModuleStructOutput[]
        ] & {
            res: StakingRouter.StakingModuleStructOutput[];
        }>;
        getStakingModulesCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        getStakingRewardsDistribution(overrides?: CallOverrides): Promise<[
            string[],
            BigNumber[],
            BigNumber[],
            BigNumber,
            BigNumber
        ] & {
            recipients: string[];
            stakingModuleIds: BigNumber[];
            stakingModuleFees: BigNumber[];
            totalFee: BigNumber;
            precisionPoints: BigNumber;
        }>;
        getTotalFeeE4Precision(overrides?: CallOverrides): Promise<[number] & {
            totalFee: number;
        }>;
        getWithdrawalCredentials(overrides?: CallOverrides): Promise<[string]>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<[boolean]>;
        hasStakingModule(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        initialize(_admin: string, _catalist: string, _withdrawalCredentials: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        onValidatorsCountsByNodeOperatorReportingFinished(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        pauseStakingModule(_stakingModuleId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        reportRewardsMinted(_stakingModuleIds: BigNumberish[], _totalShares: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        reportStakingModuleExitedValidatorsCountByNodeOperator(_stakingModuleId: BigNumberish, _nodeOperatorIds: BytesLike, _exitedValidatorsCounts: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        reportStakingModuleStuckValidatorsCountByNodeOperator(_stakingModuleId: BigNumberish, _nodeOperatorIds: BytesLike, _stuckValidatorsCounts: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        resumeStakingModule(_stakingModuleId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setStakingModuleStatus(_stakingModuleId: BigNumberish, _status: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setWithdrawalCredentials(_withdrawalCredentials: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        unsafeSetExitedValidatorsCount(_stakingModuleId: BigNumberish, _nodeOperatorId: BigNumberish, _triggerUpdateFinish: boolean, _correction: StakingRouter.ValidatorsCountsCorrectionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateExitedValidatorsCountByStakingModule(_stakingModuleIds: BigNumberish[], _exitedValidatorsCounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateRefundedValidatorsCount(_stakingModuleId: BigNumberish, _nodeOperatorId: BigNumberish, _refundedValidatorsCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateStakingModule(_stakingModuleId: BigNumberish, _targetShare: BigNumberish, _stakingModuleFee: BigNumberish, _treasuryFee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateTargetValidatorsLimits(_stakingModuleId: BigNumberish, _nodeOperatorId: BigNumberish, _isTargetLimitActive: boolean, _targetLimit: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    DEPOSIT_CONTRACT(overrides?: CallOverrides): Promise<string>;
    FEE_PRECISION_POINTS(overrides?: CallOverrides): Promise<BigNumber>;
    MANAGE_WITHDRAWAL_CREDENTIALS_ROLE(overrides?: CallOverrides): Promise<string>;
    MAX_STAKING_MODULES_COUNT(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_STAKING_MODULE_NAME_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;
    REPORT_EXITED_VALIDATORS_ROLE(overrides?: CallOverrides): Promise<string>;
    REPORT_REWARDS_MINTED_ROLE(overrides?: CallOverrides): Promise<string>;
    STAKING_MODULE_MANAGE_ROLE(overrides?: CallOverrides): Promise<string>;
    STAKING_MODULE_PAUSE_ROLE(overrides?: CallOverrides): Promise<string>;
    STAKING_MODULE_RESUME_ROLE(overrides?: CallOverrides): Promise<string>;
    TOTAL_BASIS_POINTS(overrides?: CallOverrides): Promise<BigNumber>;
    UNSAFE_SET_EXITED_VALIDATORS_ROLE(overrides?: CallOverrides): Promise<string>;
    addStakingModule(_name: string, _stakingModuleAddress: string, _targetShare: BigNumberish, _stakingModuleFee: BigNumberish, _treasuryFee: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    deposit(_depositsCount: BigNumberish, _stakingModuleId: BigNumberish, _depositCalldata: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getAllNodeOperatorDigests(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<StakingRouter.NodeOperatorDigestStructOutput[]>;
    getAllStakingModuleDigests(overrides?: CallOverrides): Promise<StakingRouter.StakingModuleDigestStructOutput[]>;
    getContractVersion(overrides?: CallOverrides): Promise<BigNumber>;
    getDepositsAllocation(_depositsCount: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber[]
    ] & {
        allocated: BigNumber;
        allocations: BigNumber[];
    }>;
    getCatalist(overrides?: CallOverrides): Promise<string>;
    "getNodeOperatorDigests(uint256,uint256[])"(_stakingModuleId: BigNumberish, _nodeOperatorIds: BigNumberish[], overrides?: CallOverrides): Promise<StakingRouter.NodeOperatorDigestStructOutput[]>;
    "getNodeOperatorDigests(uint256,uint256,uint256)"(_stakingModuleId: BigNumberish, _offset: BigNumberish, _limit: BigNumberish, overrides?: CallOverrides): Promise<StakingRouter.NodeOperatorDigestStructOutput[]>;
    getNodeOperatorSummary(_stakingModuleId: BigNumberish, _nodeOperatorId: BigNumberish, overrides?: CallOverrides): Promise<StakingRouter.NodeOperatorSummaryStructOutput>;
    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
    getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    getStakingFeeAggregateDistribution(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        modulesFee: BigNumber;
        treasuryFee: BigNumber;
        basePrecision: BigNumber;
    }>;
    getStakingFeeAggregateDistributionE4Precision(overrides?: CallOverrides): Promise<[number, number] & {
        modulesFee: number;
        treasuryFee: number;
    }>;
    getStakingModule(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<StakingRouter.StakingModuleStructOutput>;
    getStakingModuleActiveValidatorsCount(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getStakingModuleDigests(_stakingModuleIds: BigNumberish[], overrides?: CallOverrides): Promise<StakingRouter.StakingModuleDigestStructOutput[]>;
    getStakingModuleIds(overrides?: CallOverrides): Promise<BigNumber[]>;
    getStakingModuleIsActive(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    getStakingModuleIsDepositsPaused(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    getStakingModuleIsStopped(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    getStakingModuleLastDepositBlock(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getStakingModuleMaxDepositsCount(_stakingModuleId: BigNumberish, _maxDepositsValue: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getStakingModuleNonce(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getStakingModuleStatus(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<number>;
    getStakingModuleSummary(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<StakingRouter.StakingModuleSummaryStructOutput>;
    getStakingModules(overrides?: CallOverrides): Promise<StakingRouter.StakingModuleStructOutput[]>;
    getStakingModulesCount(overrides?: CallOverrides): Promise<BigNumber>;
    getStakingRewardsDistribution(overrides?: CallOverrides): Promise<[
        string[],
        BigNumber[],
        BigNumber[],
        BigNumber,
        BigNumber
    ] & {
        recipients: string[];
        stakingModuleIds: BigNumber[];
        stakingModuleFees: BigNumber[];
        totalFee: BigNumber;
        precisionPoints: BigNumber;
    }>;
    getTotalFeeE4Precision(overrides?: CallOverrides): Promise<number>;
    getWithdrawalCredentials(overrides?: CallOverrides): Promise<string>;
    grantRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
    hasStakingModule(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    initialize(_admin: string, _catalist: string, _withdrawalCredentials: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    onValidatorsCountsByNodeOperatorReportingFinished(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    pauseStakingModule(_stakingModuleId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    reportRewardsMinted(_stakingModuleIds: BigNumberish[], _totalShares: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    reportStakingModuleExitedValidatorsCountByNodeOperator(_stakingModuleId: BigNumberish, _nodeOperatorIds: BytesLike, _exitedValidatorsCounts: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    reportStakingModuleStuckValidatorsCountByNodeOperator(_stakingModuleId: BigNumberish, _nodeOperatorIds: BytesLike, _stuckValidatorsCounts: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    resumeStakingModule(_stakingModuleId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setStakingModuleStatus(_stakingModuleId: BigNumberish, _status: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setWithdrawalCredentials(_withdrawalCredentials: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    unsafeSetExitedValidatorsCount(_stakingModuleId: BigNumberish, _nodeOperatorId: BigNumberish, _triggerUpdateFinish: boolean, _correction: StakingRouter.ValidatorsCountsCorrectionStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateExitedValidatorsCountByStakingModule(_stakingModuleIds: BigNumberish[], _exitedValidatorsCounts: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateRefundedValidatorsCount(_stakingModuleId: BigNumberish, _nodeOperatorId: BigNumberish, _refundedValidatorsCount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateStakingModule(_stakingModuleId: BigNumberish, _targetShare: BigNumberish, _stakingModuleFee: BigNumberish, _treasuryFee: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateTargetValidatorsLimits(_stakingModuleId: BigNumberish, _nodeOperatorId: BigNumberish, _isTargetLimitActive: boolean, _targetLimit: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        DEPOSIT_CONTRACT(overrides?: CallOverrides): Promise<string>;
        FEE_PRECISION_POINTS(overrides?: CallOverrides): Promise<BigNumber>;
        MANAGE_WITHDRAWAL_CREDENTIALS_ROLE(overrides?: CallOverrides): Promise<string>;
        MAX_STAKING_MODULES_COUNT(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_STAKING_MODULE_NAME_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;
        REPORT_EXITED_VALIDATORS_ROLE(overrides?: CallOverrides): Promise<string>;
        REPORT_REWARDS_MINTED_ROLE(overrides?: CallOverrides): Promise<string>;
        STAKING_MODULE_MANAGE_ROLE(overrides?: CallOverrides): Promise<string>;
        STAKING_MODULE_PAUSE_ROLE(overrides?: CallOverrides): Promise<string>;
        STAKING_MODULE_RESUME_ROLE(overrides?: CallOverrides): Promise<string>;
        TOTAL_BASIS_POINTS(overrides?: CallOverrides): Promise<BigNumber>;
        UNSAFE_SET_EXITED_VALIDATORS_ROLE(overrides?: CallOverrides): Promise<string>;
        addStakingModule(_name: string, _stakingModuleAddress: string, _targetShare: BigNumberish, _stakingModuleFee: BigNumberish, _treasuryFee: BigNumberish, overrides?: CallOverrides): Promise<void>;
        deposit(_depositsCount: BigNumberish, _stakingModuleId: BigNumberish, _depositCalldata: BytesLike, overrides?: CallOverrides): Promise<void>;
        getAllNodeOperatorDigests(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<StakingRouter.NodeOperatorDigestStructOutput[]>;
        getAllStakingModuleDigests(overrides?: CallOverrides): Promise<StakingRouter.StakingModuleDigestStructOutput[]>;
        getContractVersion(overrides?: CallOverrides): Promise<BigNumber>;
        getDepositsAllocation(_depositsCount: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber[]
        ] & {
            allocated: BigNumber;
            allocations: BigNumber[];
        }>;
        getCatalist(overrides?: CallOverrides): Promise<string>;
        "getNodeOperatorDigests(uint256,uint256[])"(_stakingModuleId: BigNumberish, _nodeOperatorIds: BigNumberish[], overrides?: CallOverrides): Promise<StakingRouter.NodeOperatorDigestStructOutput[]>;
        "getNodeOperatorDigests(uint256,uint256,uint256)"(_stakingModuleId: BigNumberish, _offset: BigNumberish, _limit: BigNumberish, overrides?: CallOverrides): Promise<StakingRouter.NodeOperatorDigestStructOutput[]>;
        getNodeOperatorSummary(_stakingModuleId: BigNumberish, _nodeOperatorId: BigNumberish, overrides?: CallOverrides): Promise<StakingRouter.NodeOperatorSummaryStructOutput>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getStakingFeeAggregateDistribution(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            modulesFee: BigNumber;
            treasuryFee: BigNumber;
            basePrecision: BigNumber;
        }>;
        getStakingFeeAggregateDistributionE4Precision(overrides?: CallOverrides): Promise<[number, number] & {
            modulesFee: number;
            treasuryFee: number;
        }>;
        getStakingModule(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<StakingRouter.StakingModuleStructOutput>;
        getStakingModuleActiveValidatorsCount(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getStakingModuleDigests(_stakingModuleIds: BigNumberish[], overrides?: CallOverrides): Promise<StakingRouter.StakingModuleDigestStructOutput[]>;
        getStakingModuleIds(overrides?: CallOverrides): Promise<BigNumber[]>;
        getStakingModuleIsActive(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        getStakingModuleIsDepositsPaused(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        getStakingModuleIsStopped(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        getStakingModuleLastDepositBlock(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getStakingModuleMaxDepositsCount(_stakingModuleId: BigNumberish, _maxDepositsValue: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getStakingModuleNonce(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getStakingModuleStatus(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<number>;
        getStakingModuleSummary(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<StakingRouter.StakingModuleSummaryStructOutput>;
        getStakingModules(overrides?: CallOverrides): Promise<StakingRouter.StakingModuleStructOutput[]>;
        getStakingModulesCount(overrides?: CallOverrides): Promise<BigNumber>;
        getStakingRewardsDistribution(overrides?: CallOverrides): Promise<[
            string[],
            BigNumber[],
            BigNumber[],
            BigNumber,
            BigNumber
        ] & {
            recipients: string[];
            stakingModuleIds: BigNumber[];
            stakingModuleFees: BigNumber[];
            totalFee: BigNumber;
            precisionPoints: BigNumber;
        }>;
        getTotalFeeE4Precision(overrides?: CallOverrides): Promise<number>;
        getWithdrawalCredentials(overrides?: CallOverrides): Promise<string>;
        grantRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
        hasStakingModule(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        initialize(_admin: string, _catalist: string, _withdrawalCredentials: BytesLike, overrides?: CallOverrides): Promise<void>;
        onValidatorsCountsByNodeOperatorReportingFinished(overrides?: CallOverrides): Promise<void>;
        pauseStakingModule(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        renounceRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        reportRewardsMinted(_stakingModuleIds: BigNumberish[], _totalShares: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        reportStakingModuleExitedValidatorsCountByNodeOperator(_stakingModuleId: BigNumberish, _nodeOperatorIds: BytesLike, _exitedValidatorsCounts: BytesLike, overrides?: CallOverrides): Promise<void>;
        reportStakingModuleStuckValidatorsCountByNodeOperator(_stakingModuleId: BigNumberish, _nodeOperatorIds: BytesLike, _stuckValidatorsCounts: BytesLike, overrides?: CallOverrides): Promise<void>;
        resumeStakingModule(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        revokeRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        setStakingModuleStatus(_stakingModuleId: BigNumberish, _status: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setWithdrawalCredentials(_withdrawalCredentials: BytesLike, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        unsafeSetExitedValidatorsCount(_stakingModuleId: BigNumberish, _nodeOperatorId: BigNumberish, _triggerUpdateFinish: boolean, _correction: StakingRouter.ValidatorsCountsCorrectionStruct, overrides?: CallOverrides): Promise<void>;
        updateExitedValidatorsCountByStakingModule(_stakingModuleIds: BigNumberish[], _exitedValidatorsCounts: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        updateRefundedValidatorsCount(_stakingModuleId: BigNumberish, _nodeOperatorId: BigNumberish, _refundedValidatorsCount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        updateStakingModule(_stakingModuleId: BigNumberish, _targetShare: BigNumberish, _stakingModuleFee: BigNumberish, _treasuryFee: BigNumberish, overrides?: CallOverrides): Promise<void>;
        updateTargetValidatorsLimits(_stakingModuleId: BigNumberish, _nodeOperatorId: BigNumberish, _isTargetLimitActive: boolean, _targetLimit: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ContractVersionSet(uint256)"(version?: null): ContractVersionSetEventFilter;
        ContractVersionSet(version?: null): ContractVersionSetEventFilter;
        "ExitedAndStuckValidatorsCountsUpdateFailed(uint256,bytes)"(stakingModuleId?: BigNumberish | null, lowLevelRevertData?: null): ExitedAndStuckValidatorsCountsUpdateFailedEventFilter;
        ExitedAndStuckValidatorsCountsUpdateFailed(stakingModuleId?: BigNumberish | null, lowLevelRevertData?: null): ExitedAndStuckValidatorsCountsUpdateFailedEventFilter;
        "RewardsMintedReportFailed(uint256,bytes)"(stakingModuleId?: BigNumberish | null, lowLevelRevertData?: null): RewardsMintedReportFailedEventFilter;
        RewardsMintedReportFailed(stakingModuleId?: BigNumberish | null, lowLevelRevertData?: null): RewardsMintedReportFailedEventFilter;
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        RoleAdminChanged(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        "RoleGranted(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        RoleGranted(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        "RoleRevoked(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
        RoleRevoked(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
        "StakingModuleAdded(uint256,address,string,address)"(stakingModuleId?: BigNumberish | null, stakingModule?: null, name?: null, createdBy?: null): StakingModuleAddedEventFilter;
        StakingModuleAdded(stakingModuleId?: BigNumberish | null, stakingModule?: null, name?: null, createdBy?: null): StakingModuleAddedEventFilter;
        "StakingModuleExitedValidatorsIncompleteReporting(uint256,uint256)"(stakingModuleId?: BigNumberish | null, unreportedExitedValidatorsCount?: null): StakingModuleExitedValidatorsIncompleteReportingEventFilter;
        StakingModuleExitedValidatorsIncompleteReporting(stakingModuleId?: BigNumberish | null, unreportedExitedValidatorsCount?: null): StakingModuleExitedValidatorsIncompleteReportingEventFilter;
        "StakingModuleFeesSet(uint256,uint256,uint256,address)"(stakingModuleId?: BigNumberish | null, stakingModuleFee?: null, treasuryFee?: null, setBy?: null): StakingModuleFeesSetEventFilter;
        StakingModuleFeesSet(stakingModuleId?: BigNumberish | null, stakingModuleFee?: null, treasuryFee?: null, setBy?: null): StakingModuleFeesSetEventFilter;
        "StakingModuleStatusSet(uint256,uint8,address)"(stakingModuleId?: BigNumberish | null, status?: null, setBy?: null): StakingModuleStatusSetEventFilter;
        StakingModuleStatusSet(stakingModuleId?: BigNumberish | null, status?: null, setBy?: null): StakingModuleStatusSetEventFilter;
        "StakingModuleTargetShareSet(uint256,uint256,address)"(stakingModuleId?: BigNumberish | null, targetShare?: null, setBy?: null): StakingModuleTargetShareSetEventFilter;
        StakingModuleTargetShareSet(stakingModuleId?: BigNumberish | null, targetShare?: null, setBy?: null): StakingModuleTargetShareSetEventFilter;
        "StakingRouterACEDeposited(uint256,uint256)"(stakingModuleId?: BigNumberish | null, amount?: null): StakingRouterACEDepositedEventFilter;
        StakingRouterACEDeposited(stakingModuleId?: BigNumberish | null, amount?: null): StakingRouterACEDepositedEventFilter;
        "WithdrawalCredentialsSet(bytes32,address)"(withdrawalCredentials?: null, setBy?: null): WithdrawalCredentialsSetEventFilter;
        WithdrawalCredentialsSet(withdrawalCredentials?: null, setBy?: null): WithdrawalCredentialsSetEventFilter;
        "WithdrawalsCredentialsChangeFailed(uint256,bytes)"(stakingModuleId?: BigNumberish | null, lowLevelRevertData?: null): WithdrawalsCredentialsChangeFailedEventFilter;
        WithdrawalsCredentialsChangeFailed(stakingModuleId?: BigNumberish | null, lowLevelRevertData?: null): WithdrawalsCredentialsChangeFailedEventFilter;
    };
    estimateGas: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        DEPOSIT_CONTRACT(overrides?: CallOverrides): Promise<BigNumber>;
        FEE_PRECISION_POINTS(overrides?: CallOverrides): Promise<BigNumber>;
        MANAGE_WITHDRAWAL_CREDENTIALS_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_STAKING_MODULES_COUNT(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_STAKING_MODULE_NAME_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;
        REPORT_EXITED_VALIDATORS_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        REPORT_REWARDS_MINTED_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        STAKING_MODULE_MANAGE_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        STAKING_MODULE_PAUSE_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        STAKING_MODULE_RESUME_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        TOTAL_BASIS_POINTS(overrides?: CallOverrides): Promise<BigNumber>;
        UNSAFE_SET_EXITED_VALIDATORS_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        addStakingModule(_name: string, _stakingModuleAddress: string, _targetShare: BigNumberish, _stakingModuleFee: BigNumberish, _treasuryFee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        deposit(_depositsCount: BigNumberish, _stakingModuleId: BigNumberish, _depositCalldata: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getAllNodeOperatorDigests(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getAllStakingModuleDigests(overrides?: CallOverrides): Promise<BigNumber>;
        getContractVersion(overrides?: CallOverrides): Promise<BigNumber>;
        getDepositsAllocation(_depositsCount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getCatalist(overrides?: CallOverrides): Promise<BigNumber>;
        "getNodeOperatorDigests(uint256,uint256[])"(_stakingModuleId: BigNumberish, _nodeOperatorIds: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        "getNodeOperatorDigests(uint256,uint256,uint256)"(_stakingModuleId: BigNumberish, _offset: BigNumberish, _limit: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getNodeOperatorSummary(_stakingModuleId: BigNumberish, _nodeOperatorId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getStakingFeeAggregateDistribution(overrides?: CallOverrides): Promise<BigNumber>;
        getStakingFeeAggregateDistributionE4Precision(overrides?: CallOverrides): Promise<BigNumber>;
        getStakingModule(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getStakingModuleActiveValidatorsCount(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getStakingModuleDigests(_stakingModuleIds: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        getStakingModuleIds(overrides?: CallOverrides): Promise<BigNumber>;
        getStakingModuleIsActive(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getStakingModuleIsDepositsPaused(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getStakingModuleIsStopped(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getStakingModuleLastDepositBlock(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getStakingModuleMaxDepositsCount(_stakingModuleId: BigNumberish, _maxDepositsValue: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getStakingModuleNonce(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getStakingModuleStatus(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getStakingModuleSummary(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getStakingModules(overrides?: CallOverrides): Promise<BigNumber>;
        getStakingModulesCount(overrides?: CallOverrides): Promise<BigNumber>;
        getStakingRewardsDistribution(overrides?: CallOverrides): Promise<BigNumber>;
        getTotalFeeE4Precision(overrides?: CallOverrides): Promise<BigNumber>;
        getWithdrawalCredentials(overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        hasStakingModule(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_admin: string, _catalist: string, _withdrawalCredentials: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        onValidatorsCountsByNodeOperatorReportingFinished(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        pauseStakingModule(_stakingModuleId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        reportRewardsMinted(_stakingModuleIds: BigNumberish[], _totalShares: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        reportStakingModuleExitedValidatorsCountByNodeOperator(_stakingModuleId: BigNumberish, _nodeOperatorIds: BytesLike, _exitedValidatorsCounts: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        reportStakingModuleStuckValidatorsCountByNodeOperator(_stakingModuleId: BigNumberish, _nodeOperatorIds: BytesLike, _stuckValidatorsCounts: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        resumeStakingModule(_stakingModuleId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setStakingModuleStatus(_stakingModuleId: BigNumberish, _status: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setWithdrawalCredentials(_withdrawalCredentials: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        unsafeSetExitedValidatorsCount(_stakingModuleId: BigNumberish, _nodeOperatorId: BigNumberish, _triggerUpdateFinish: boolean, _correction: StakingRouter.ValidatorsCountsCorrectionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateExitedValidatorsCountByStakingModule(_stakingModuleIds: BigNumberish[], _exitedValidatorsCounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateRefundedValidatorsCount(_stakingModuleId: BigNumberish, _nodeOperatorId: BigNumberish, _refundedValidatorsCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateStakingModule(_stakingModuleId: BigNumberish, _targetShare: BigNumberish, _stakingModuleFee: BigNumberish, _treasuryFee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateTargetValidatorsLimits(_stakingModuleId: BigNumberish, _nodeOperatorId: BigNumberish, _isTargetLimitActive: boolean, _targetLimit: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DEPOSIT_CONTRACT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        FEE_PRECISION_POINTS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MANAGE_WITHDRAWAL_CREDENTIALS_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_STAKING_MODULES_COUNT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_STAKING_MODULE_NAME_LENGTH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        REPORT_EXITED_VALIDATORS_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        REPORT_REWARDS_MINTED_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        STAKING_MODULE_MANAGE_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        STAKING_MODULE_PAUSE_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        STAKING_MODULE_RESUME_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        TOTAL_BASIS_POINTS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        UNSAFE_SET_EXITED_VALIDATORS_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addStakingModule(_name: string, _stakingModuleAddress: string, _targetShare: BigNumberish, _stakingModuleFee: BigNumberish, _treasuryFee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        deposit(_depositsCount: BigNumberish, _stakingModuleId: BigNumberish, _depositCalldata: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getAllNodeOperatorDigests(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllStakingModuleDigests(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getContractVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDepositsAllocation(_depositsCount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCatalist(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "getNodeOperatorDigests(uint256,uint256[])"(_stakingModuleId: BigNumberish, _nodeOperatorIds: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "getNodeOperatorDigests(uint256,uint256,uint256)"(_stakingModuleId: BigNumberish, _offset: BigNumberish, _limit: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNodeOperatorSummary(_stakingModuleId: BigNumberish, _nodeOperatorId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStakingFeeAggregateDistribution(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStakingFeeAggregateDistributionE4Precision(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStakingModule(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStakingModuleActiveValidatorsCount(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStakingModuleDigests(_stakingModuleIds: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStakingModuleIds(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStakingModuleIsActive(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStakingModuleIsDepositsPaused(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStakingModuleIsStopped(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStakingModuleLastDepositBlock(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStakingModuleMaxDepositsCount(_stakingModuleId: BigNumberish, _maxDepositsValue: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStakingModuleNonce(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStakingModuleStatus(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStakingModuleSummary(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStakingModules(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStakingModulesCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStakingRewardsDistribution(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTotalFeeE4Precision(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getWithdrawalCredentials(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hasStakingModule(_stakingModuleId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_admin: string, _catalist: string, _withdrawalCredentials: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        onValidatorsCountsByNodeOperatorReportingFinished(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        pauseStakingModule(_stakingModuleId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        reportRewardsMinted(_stakingModuleIds: BigNumberish[], _totalShares: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        reportStakingModuleExitedValidatorsCountByNodeOperator(_stakingModuleId: BigNumberish, _nodeOperatorIds: BytesLike, _exitedValidatorsCounts: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        reportStakingModuleStuckValidatorsCountByNodeOperator(_stakingModuleId: BigNumberish, _nodeOperatorIds: BytesLike, _stuckValidatorsCounts: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        resumeStakingModule(_stakingModuleId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setStakingModuleStatus(_stakingModuleId: BigNumberish, _status: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setWithdrawalCredentials(_withdrawalCredentials: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unsafeSetExitedValidatorsCount(_stakingModuleId: BigNumberish, _nodeOperatorId: BigNumberish, _triggerUpdateFinish: boolean, _correction: StakingRouter.ValidatorsCountsCorrectionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateExitedValidatorsCountByStakingModule(_stakingModuleIds: BigNumberish[], _exitedValidatorsCounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateRefundedValidatorsCount(_stakingModuleId: BigNumberish, _nodeOperatorId: BigNumberish, _refundedValidatorsCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateStakingModule(_stakingModuleId: BigNumberish, _targetShare: BigNumberish, _stakingModuleFee: BigNumberish, _treasuryFee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateTargetValidatorsLimits(_stakingModuleId: BigNumberish, _nodeOperatorId: BigNumberish, _isTargetLimitActive: boolean, _targetLimit: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
