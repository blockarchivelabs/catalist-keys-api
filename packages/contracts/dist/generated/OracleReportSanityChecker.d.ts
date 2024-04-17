import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type LimitsListStruct = {
    churnValidatorsPerDayLimit: BigNumberish;
    oneOffCLBalanceDecreaseBPLimit: BigNumberish;
    annualBalanceIncreaseBPLimit: BigNumberish;
    simulatedShareRateDeviationBPLimit: BigNumberish;
    maxValidatorExitRequestsPerReport: BigNumberish;
    maxAccountingExtraDataListItemsCount: BigNumberish;
    maxNodeOperatorsPerExtraDataItemCount: BigNumberish;
    requestTimestampMargin: BigNumberish;
    maxPositiveTokenRebase: BigNumberish;
};
export declare type LimitsListStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
] & {
    churnValidatorsPerDayLimit: BigNumber;
    oneOffCLBalanceDecreaseBPLimit: BigNumber;
    annualBalanceIncreaseBPLimit: BigNumber;
    simulatedShareRateDeviationBPLimit: BigNumber;
    maxValidatorExitRequestsPerReport: BigNumber;
    maxAccountingExtraDataListItemsCount: BigNumber;
    maxNodeOperatorsPerExtraDataItemCount: BigNumber;
    requestTimestampMargin: BigNumber;
    maxPositiveTokenRebase: BigNumber;
};
export declare namespace OracleReportSanityChecker {
    type ManagersRosterStruct = {
        allLimitsManagers: string[];
        churnValidatorsPerDayLimitManagers: string[];
        oneOffCLBalanceDecreaseLimitManagers: string[];
        annualBalanceIncreaseLimitManagers: string[];
        shareRateDeviationLimitManagers: string[];
        maxValidatorExitRequestsPerReportManagers: string[];
        maxAccountingExtraDataListItemsCountManagers: string[];
        maxNodeOperatorsPerExtraDataItemCountManagers: string[];
        requestTimestampMarginManagers: string[];
        maxPositiveTokenRebaseManagers: string[];
    };
    type ManagersRosterStructOutput = [
        string[],
        string[],
        string[],
        string[],
        string[],
        string[],
        string[],
        string[],
        string[],
        string[]
    ] & {
        allLimitsManagers: string[];
        churnValidatorsPerDayLimitManagers: string[];
        oneOffCLBalanceDecreaseLimitManagers: string[];
        annualBalanceIncreaseLimitManagers: string[];
        shareRateDeviationLimitManagers: string[];
        maxValidatorExitRequestsPerReportManagers: string[];
        maxAccountingExtraDataListItemsCountManagers: string[];
        maxNodeOperatorsPerExtraDataItemCountManagers: string[];
        requestTimestampMarginManagers: string[];
        maxPositiveTokenRebaseManagers: string[];
    };
}
export interface OracleReportSanityCheckerInterface extends utils.Interface {
    contractName: "OracleReportSanityChecker";
    functions: {
        "ALL_LIMITS_MANAGER_ROLE()": FunctionFragment;
        "ANNUAL_BALANCE_INCREASE_LIMIT_MANAGER_ROLE()": FunctionFragment;
        "CHURN_VALIDATORS_PER_DAY_LIMIT_MANAGER_ROLE()": FunctionFragment;
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "MAX_ACCOUNTING_EXTRA_DATA_LIST_ITEMS_COUNT_ROLE()": FunctionFragment;
        "MAX_NODE_OPERATORS_PER_EXTRA_DATA_ITEM_COUNT_ROLE()": FunctionFragment;
        "MAX_POSITIVE_TOKEN_REBASE_MANAGER_ROLE()": FunctionFragment;
        "MAX_VALIDATOR_EXIT_REQUESTS_PER_REPORT_ROLE()": FunctionFragment;
        "ONE_OFF_CL_BALANCE_DECREASE_LIMIT_MANAGER_ROLE()": FunctionFragment;
        "REQUEST_TIMESTAMP_MARGIN_MANAGER_ROLE()": FunctionFragment;
        "SHARE_RATE_DEVIATION_LIMIT_MANAGER_ROLE()": FunctionFragment;
        "checkAccountingExtraDataListItemsCount(uint256)": FunctionFragment;
        "checkAccountingOracleReport(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)": FunctionFragment;
        "checkExitBusOracleReport(uint256)": FunctionFragment;
        "checkExitedValidatorsRatePerDay(uint256)": FunctionFragment;
        "checkNodeOperatorsPerExtraDataItemCount(uint256,uint256)": FunctionFragment;
        "checkSimulatedShareRate(uint256,uint256,uint256,uint256,uint256)": FunctionFragment;
        "checkWithdrawalQueueOracleReport(uint256,uint256)": FunctionFragment;
        "getCatalistLocator()": FunctionFragment;
        "getMaxPositiveTokenRebase()": FunctionFragment;
        "getOracleReportLimits()": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "getRoleMember(bytes32,uint256)": FunctionFragment;
        "getRoleMemberCount(bytes32)": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "setAnnualBalanceIncreaseBPLimit(uint256)": FunctionFragment;
        "setChurnValidatorsPerDayLimit(uint256)": FunctionFragment;
        "setMaxAccountingExtraDataListItemsCount(uint256)": FunctionFragment;
        "setMaxExitRequestsPerOracleReport(uint256)": FunctionFragment;
        "setMaxNodeOperatorsPerExtraDataItemCount(uint256)": FunctionFragment;
        "setMaxPositiveTokenRebase(uint256)": FunctionFragment;
        "setOneOffCLBalanceDecreaseBPLimit(uint256)": FunctionFragment;
        "setOracleReportLimits((uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))": FunctionFragment;
        "setRequestTimestampMargin(uint256)": FunctionFragment;
        "setSimulatedShareRateDeviationBPLimit(uint256)": FunctionFragment;
        "smoothenTokenRebase(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "ALL_LIMITS_MANAGER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "ANNUAL_BALANCE_INCREASE_LIMIT_MANAGER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "CHURN_VALIDATORS_PER_DAY_LIMIT_MANAGER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_ACCOUNTING_EXTRA_DATA_LIST_ITEMS_COUNT_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_NODE_OPERATORS_PER_EXTRA_DATA_ITEM_COUNT_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_POSITIVE_TOKEN_REBASE_MANAGER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_VALIDATOR_EXIT_REQUESTS_PER_REPORT_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "ONE_OFF_CL_BALANCE_DECREASE_LIMIT_MANAGER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "REQUEST_TIMESTAMP_MARGIN_MANAGER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "SHARE_RATE_DEVIATION_LIMIT_MANAGER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "checkAccountingExtraDataListItemsCount", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "checkAccountingOracleReport", values: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "checkExitBusOracleReport", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "checkExitedValidatorsRatePerDay", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "checkNodeOperatorsPerExtraDataItemCount", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "checkSimulatedShareRate", values: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "checkWithdrawalQueueOracleReport", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getCatalistLocator", values?: undefined): string;
    encodeFunctionData(functionFragment: "getMaxPositiveTokenRebase", values?: undefined): string;
    encodeFunctionData(functionFragment: "getOracleReportLimits", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getRoleMember", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRoleMemberCount", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "setAnnualBalanceIncreaseBPLimit", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setChurnValidatorsPerDayLimit", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setMaxAccountingExtraDataListItemsCount", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setMaxExitRequestsPerOracleReport", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setMaxNodeOperatorsPerExtraDataItemCount", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setMaxPositiveTokenRebase", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setOneOffCLBalanceDecreaseBPLimit", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setOracleReportLimits", values: [LimitsListStruct]): string;
    encodeFunctionData(functionFragment: "setRequestTimestampMargin", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setSimulatedShareRateDeviationBPLimit", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "smoothenTokenRebase", values: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "ALL_LIMITS_MANAGER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ANNUAL_BALANCE_INCREASE_LIMIT_MANAGER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "CHURN_VALIDATORS_PER_DAY_LIMIT_MANAGER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_ACCOUNTING_EXTRA_DATA_LIST_ITEMS_COUNT_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_NODE_OPERATORS_PER_EXTRA_DATA_ITEM_COUNT_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_POSITIVE_TOKEN_REBASE_MANAGER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_VALIDATOR_EXIT_REQUESTS_PER_REPORT_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ONE_OFF_CL_BALANCE_DECREASE_LIMIT_MANAGER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "REQUEST_TIMESTAMP_MARGIN_MANAGER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SHARE_RATE_DEVIATION_LIMIT_MANAGER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkAccountingExtraDataListItemsCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkAccountingOracleReport", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkExitBusOracleReport", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkExitedValidatorsRatePerDay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkNodeOperatorsPerExtraDataItemCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkSimulatedShareRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkWithdrawalQueueOracleReport", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCatalistLocator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMaxPositiveTokenRebase", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOracleReportLimits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMemberCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAnnualBalanceIncreaseBPLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setChurnValidatorsPerDayLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxAccountingExtraDataListItemsCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxExitRequestsPerOracleReport", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxNodeOperatorsPerExtraDataItemCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxPositiveTokenRebase", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOneOffCLBalanceDecreaseBPLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOracleReportLimits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRequestTimestampMargin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSimulatedShareRateDeviationBPLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "smoothenTokenRebase", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    events: {
        "AnnualBalanceIncreaseBPLimitSet(uint256)": EventFragment;
        "ChurnValidatorsPerDayLimitSet(uint256)": EventFragment;
        "MaxAccountingExtraDataListItemsCountSet(uint256)": EventFragment;
        "MaxNodeOperatorsPerExtraDataItemCountSet(uint256)": EventFragment;
        "MaxPositiveTokenRebaseSet(uint256)": EventFragment;
        "MaxValidatorExitRequestsPerReportSet(uint256)": EventFragment;
        "OneOffCLBalanceDecreaseBPLimitSet(uint256)": EventFragment;
        "RequestTimestampMarginSet(uint256)": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
        "SimulatedShareRateDeviationBPLimitSet(uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AnnualBalanceIncreaseBPLimitSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ChurnValidatorsPerDayLimitSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MaxAccountingExtraDataListItemsCountSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MaxNodeOperatorsPerExtraDataItemCountSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MaxPositiveTokenRebaseSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MaxValidatorExitRequestsPerReportSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OneOffCLBalanceDecreaseBPLimitSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RequestTimestampMarginSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SimulatedShareRateDeviationBPLimitSet"): EventFragment;
}
export declare type AnnualBalanceIncreaseBPLimitSetEvent = TypedEvent<[
    BigNumber
], {
    annualBalanceIncreaseBPLimit: BigNumber;
}>;
export declare type AnnualBalanceIncreaseBPLimitSetEventFilter = TypedEventFilter<AnnualBalanceIncreaseBPLimitSetEvent>;
export declare type ChurnValidatorsPerDayLimitSetEvent = TypedEvent<[
    BigNumber
], {
    churnValidatorsPerDayLimit: BigNumber;
}>;
export declare type ChurnValidatorsPerDayLimitSetEventFilter = TypedEventFilter<ChurnValidatorsPerDayLimitSetEvent>;
export declare type MaxAccountingExtraDataListItemsCountSetEvent = TypedEvent<[
    BigNumber
], {
    maxAccountingExtraDataListItemsCount: BigNumber;
}>;
export declare type MaxAccountingExtraDataListItemsCountSetEventFilter = TypedEventFilter<MaxAccountingExtraDataListItemsCountSetEvent>;
export declare type MaxNodeOperatorsPerExtraDataItemCountSetEvent = TypedEvent<[
    BigNumber
], {
    maxNodeOperatorsPerExtraDataItemCount: BigNumber;
}>;
export declare type MaxNodeOperatorsPerExtraDataItemCountSetEventFilter = TypedEventFilter<MaxNodeOperatorsPerExtraDataItemCountSetEvent>;
export declare type MaxPositiveTokenRebaseSetEvent = TypedEvent<[
    BigNumber
], {
    maxPositiveTokenRebase: BigNumber;
}>;
export declare type MaxPositiveTokenRebaseSetEventFilter = TypedEventFilter<MaxPositiveTokenRebaseSetEvent>;
export declare type MaxValidatorExitRequestsPerReportSetEvent = TypedEvent<[
    BigNumber
], {
    maxValidatorExitRequestsPerReport: BigNumber;
}>;
export declare type MaxValidatorExitRequestsPerReportSetEventFilter = TypedEventFilter<MaxValidatorExitRequestsPerReportSetEvent>;
export declare type OneOffCLBalanceDecreaseBPLimitSetEvent = TypedEvent<[
    BigNumber
], {
    oneOffCLBalanceDecreaseBPLimit: BigNumber;
}>;
export declare type OneOffCLBalanceDecreaseBPLimitSetEventFilter = TypedEventFilter<OneOffCLBalanceDecreaseBPLimitSetEvent>;
export declare type RequestTimestampMarginSetEvent = TypedEvent<[
    BigNumber
], {
    requestTimestampMargin: BigNumber;
}>;
export declare type RequestTimestampMarginSetEventFilter = TypedEventFilter<RequestTimestampMarginSetEvent>;
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
export declare type SimulatedShareRateDeviationBPLimitSetEvent = TypedEvent<[
    BigNumber
], {
    simulatedShareRateDeviationBPLimit: BigNumber;
}>;
export declare type SimulatedShareRateDeviationBPLimitSetEventFilter = TypedEventFilter<SimulatedShareRateDeviationBPLimitSetEvent>;
export interface OracleReportSanityChecker extends BaseContract {
    contractName: "OracleReportSanityChecker";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: OracleReportSanityCheckerInterface;
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
        ALL_LIMITS_MANAGER_ROLE(overrides?: CallOverrides): Promise<[string]>;
        ANNUAL_BALANCE_INCREASE_LIMIT_MANAGER_ROLE(overrides?: CallOverrides): Promise<[string]>;
        CHURN_VALIDATORS_PER_DAY_LIMIT_MANAGER_ROLE(overrides?: CallOverrides): Promise<[string]>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;
        MAX_ACCOUNTING_EXTRA_DATA_LIST_ITEMS_COUNT_ROLE(overrides?: CallOverrides): Promise<[string]>;
        MAX_NODE_OPERATORS_PER_EXTRA_DATA_ITEM_COUNT_ROLE(overrides?: CallOverrides): Promise<[string]>;
        MAX_POSITIVE_TOKEN_REBASE_MANAGER_ROLE(overrides?: CallOverrides): Promise<[string]>;
        MAX_VALIDATOR_EXIT_REQUESTS_PER_REPORT_ROLE(overrides?: CallOverrides): Promise<[string]>;
        ONE_OFF_CL_BALANCE_DECREASE_LIMIT_MANAGER_ROLE(overrides?: CallOverrides): Promise<[string]>;
        REQUEST_TIMESTAMP_MARGIN_MANAGER_ROLE(overrides?: CallOverrides): Promise<[string]>;
        SHARE_RATE_DEVIATION_LIMIT_MANAGER_ROLE(overrides?: CallOverrides): Promise<[string]>;
        checkAccountingExtraDataListItemsCount(_extraDataListItemsCount: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        checkAccountingOracleReport(_timeElapsed: BigNumberish, _preCLBalance: BigNumberish, _postCLBalance: BigNumberish, _withdrawalVaultBalance: BigNumberish, _elRewardsVaultBalance: BigNumberish, _sharesRequestedToBurn: BigNumberish, _preCLValidators: BigNumberish, _postCLValidators: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        checkExitBusOracleReport(_exitRequestsCount: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        checkExitedValidatorsRatePerDay(_exitedValidatorsCount: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        checkNodeOperatorsPerExtraDataItemCount(_itemIndex: BigNumberish, _nodeOperatorsCount: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        checkSimulatedShareRate(_postTotalPooledAce: BigNumberish, _postTotalShares: BigNumberish, _aceLockedOnWithdrawalQueue: BigNumberish, _sharesBurntDueToWithdrawals: BigNumberish, _simulatedShareRate: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        checkWithdrawalQueueOracleReport(_lastFinalizableRequestId: BigNumberish, _reportTimestamp: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        getCatalistLocator(overrides?: CallOverrides): Promise<[string]>;
        getMaxPositiveTokenRebase(overrides?: CallOverrides): Promise<[BigNumber]>;
        getOracleReportLimits(overrides?: CallOverrides): Promise<[LimitsListStructOutput]>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<[boolean]>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setAnnualBalanceIncreaseBPLimit(_annualBalanceIncreaseBPLimit: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setChurnValidatorsPerDayLimit(_churnValidatorsPerDayLimit: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMaxAccountingExtraDataListItemsCount(_maxAccountingExtraDataListItemsCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMaxExitRequestsPerOracleReport(_maxValidatorExitRequestsPerReport: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMaxNodeOperatorsPerExtraDataItemCount(_maxNodeOperatorsPerExtraDataItemCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMaxPositiveTokenRebase(_maxPositiveTokenRebase: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setOneOffCLBalanceDecreaseBPLimit(_oneOffCLBalanceDecreaseBPLimit: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setOracleReportLimits(_limitsList: LimitsListStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setRequestTimestampMargin(_requestTimestampMargin: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setSimulatedShareRateDeviationBPLimit(_simulatedShareRateDeviationBPLimit: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        smoothenTokenRebase(_preTotalPooledAce: BigNumberish, _preTotalShares: BigNumberish, _preCLBalance: BigNumberish, _postCLBalance: BigNumberish, _withdrawalVaultBalance: BigNumberish, _elRewardsVaultBalance: BigNumberish, _sharesRequestedToBurn: BigNumberish, _aceToLockForWithdrawals: BigNumberish, _newSharesToBurnForWithdrawals: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            withdrawals: BigNumber;
            elRewards: BigNumber;
            simulatedSharesToBurn: BigNumber;
            sharesToBurn: BigNumber;
        }>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
    };
    ALL_LIMITS_MANAGER_ROLE(overrides?: CallOverrides): Promise<string>;
    ANNUAL_BALANCE_INCREASE_LIMIT_MANAGER_ROLE(overrides?: CallOverrides): Promise<string>;
    CHURN_VALIDATORS_PER_DAY_LIMIT_MANAGER_ROLE(overrides?: CallOverrides): Promise<string>;
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    MAX_ACCOUNTING_EXTRA_DATA_LIST_ITEMS_COUNT_ROLE(overrides?: CallOverrides): Promise<string>;
    MAX_NODE_OPERATORS_PER_EXTRA_DATA_ITEM_COUNT_ROLE(overrides?: CallOverrides): Promise<string>;
    MAX_POSITIVE_TOKEN_REBASE_MANAGER_ROLE(overrides?: CallOverrides): Promise<string>;
    MAX_VALIDATOR_EXIT_REQUESTS_PER_REPORT_ROLE(overrides?: CallOverrides): Promise<string>;
    ONE_OFF_CL_BALANCE_DECREASE_LIMIT_MANAGER_ROLE(overrides?: CallOverrides): Promise<string>;
    REQUEST_TIMESTAMP_MARGIN_MANAGER_ROLE(overrides?: CallOverrides): Promise<string>;
    SHARE_RATE_DEVIATION_LIMIT_MANAGER_ROLE(overrides?: CallOverrides): Promise<string>;
    checkAccountingExtraDataListItemsCount(_extraDataListItemsCount: BigNumberish, overrides?: CallOverrides): Promise<void>;
    checkAccountingOracleReport(_timeElapsed: BigNumberish, _preCLBalance: BigNumberish, _postCLBalance: BigNumberish, _withdrawalVaultBalance: BigNumberish, _elRewardsVaultBalance: BigNumberish, _sharesRequestedToBurn: BigNumberish, _preCLValidators: BigNumberish, _postCLValidators: BigNumberish, overrides?: CallOverrides): Promise<void>;
    checkExitBusOracleReport(_exitRequestsCount: BigNumberish, overrides?: CallOverrides): Promise<void>;
    checkExitedValidatorsRatePerDay(_exitedValidatorsCount: BigNumberish, overrides?: CallOverrides): Promise<void>;
    checkNodeOperatorsPerExtraDataItemCount(_itemIndex: BigNumberish, _nodeOperatorsCount: BigNumberish, overrides?: CallOverrides): Promise<void>;
    checkSimulatedShareRate(_postTotalPooledAce: BigNumberish, _postTotalShares: BigNumberish, _aceLockedOnWithdrawalQueue: BigNumberish, _sharesBurntDueToWithdrawals: BigNumberish, _simulatedShareRate: BigNumberish, overrides?: CallOverrides): Promise<void>;
    checkWithdrawalQueueOracleReport(_lastFinalizableRequestId: BigNumberish, _reportTimestamp: BigNumberish, overrides?: CallOverrides): Promise<void>;
    getCatalistLocator(overrides?: CallOverrides): Promise<string>;
    getMaxPositiveTokenRebase(overrides?: CallOverrides): Promise<BigNumber>;
    getOracleReportLimits(overrides?: CallOverrides): Promise<LimitsListStructOutput>;
    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
    getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    grantRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
    renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setAnnualBalanceIncreaseBPLimit(_annualBalanceIncreaseBPLimit: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setChurnValidatorsPerDayLimit(_churnValidatorsPerDayLimit: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMaxAccountingExtraDataListItemsCount(_maxAccountingExtraDataListItemsCount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMaxExitRequestsPerOracleReport(_maxValidatorExitRequestsPerReport: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMaxNodeOperatorsPerExtraDataItemCount(_maxNodeOperatorsPerExtraDataItemCount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMaxPositiveTokenRebase(_maxPositiveTokenRebase: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setOneOffCLBalanceDecreaseBPLimit(_oneOffCLBalanceDecreaseBPLimit: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setOracleReportLimits(_limitsList: LimitsListStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setRequestTimestampMargin(_requestTimestampMargin: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setSimulatedShareRateDeviationBPLimit(_simulatedShareRateDeviationBPLimit: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    smoothenTokenRebase(_preTotalPooledAce: BigNumberish, _preTotalShares: BigNumberish, _preCLBalance: BigNumberish, _postCLBalance: BigNumberish, _withdrawalVaultBalance: BigNumberish, _elRewardsVaultBalance: BigNumberish, _sharesRequestedToBurn: BigNumberish, _aceToLockForWithdrawals: BigNumberish, _newSharesToBurnForWithdrawals: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        withdrawals: BigNumber;
        elRewards: BigNumber;
        simulatedSharesToBurn: BigNumber;
        sharesToBurn: BigNumber;
    }>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        ALL_LIMITS_MANAGER_ROLE(overrides?: CallOverrides): Promise<string>;
        ANNUAL_BALANCE_INCREASE_LIMIT_MANAGER_ROLE(overrides?: CallOverrides): Promise<string>;
        CHURN_VALIDATORS_PER_DAY_LIMIT_MANAGER_ROLE(overrides?: CallOverrides): Promise<string>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        MAX_ACCOUNTING_EXTRA_DATA_LIST_ITEMS_COUNT_ROLE(overrides?: CallOverrides): Promise<string>;
        MAX_NODE_OPERATORS_PER_EXTRA_DATA_ITEM_COUNT_ROLE(overrides?: CallOverrides): Promise<string>;
        MAX_POSITIVE_TOKEN_REBASE_MANAGER_ROLE(overrides?: CallOverrides): Promise<string>;
        MAX_VALIDATOR_EXIT_REQUESTS_PER_REPORT_ROLE(overrides?: CallOverrides): Promise<string>;
        ONE_OFF_CL_BALANCE_DECREASE_LIMIT_MANAGER_ROLE(overrides?: CallOverrides): Promise<string>;
        REQUEST_TIMESTAMP_MARGIN_MANAGER_ROLE(overrides?: CallOverrides): Promise<string>;
        SHARE_RATE_DEVIATION_LIMIT_MANAGER_ROLE(overrides?: CallOverrides): Promise<string>;
        checkAccountingExtraDataListItemsCount(_extraDataListItemsCount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        checkAccountingOracleReport(_timeElapsed: BigNumberish, _preCLBalance: BigNumberish, _postCLBalance: BigNumberish, _withdrawalVaultBalance: BigNumberish, _elRewardsVaultBalance: BigNumberish, _sharesRequestedToBurn: BigNumberish, _preCLValidators: BigNumberish, _postCLValidators: BigNumberish, overrides?: CallOverrides): Promise<void>;
        checkExitBusOracleReport(_exitRequestsCount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        checkExitedValidatorsRatePerDay(_exitedValidatorsCount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        checkNodeOperatorsPerExtraDataItemCount(_itemIndex: BigNumberish, _nodeOperatorsCount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        checkSimulatedShareRate(_postTotalPooledAce: BigNumberish, _postTotalShares: BigNumberish, _aceLockedOnWithdrawalQueue: BigNumberish, _sharesBurntDueToWithdrawals: BigNumberish, _simulatedShareRate: BigNumberish, overrides?: CallOverrides): Promise<void>;
        checkWithdrawalQueueOracleReport(_lastFinalizableRequestId: BigNumberish, _reportTimestamp: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getCatalistLocator(overrides?: CallOverrides): Promise<string>;
        getMaxPositiveTokenRebase(overrides?: CallOverrides): Promise<BigNumber>;
        getOracleReportLimits(overrides?: CallOverrides): Promise<LimitsListStructOutput>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
        renounceRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        revokeRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        setAnnualBalanceIncreaseBPLimit(_annualBalanceIncreaseBPLimit: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setChurnValidatorsPerDayLimit(_churnValidatorsPerDayLimit: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setMaxAccountingExtraDataListItemsCount(_maxAccountingExtraDataListItemsCount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setMaxExitRequestsPerOracleReport(_maxValidatorExitRequestsPerReport: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setMaxNodeOperatorsPerExtraDataItemCount(_maxNodeOperatorsPerExtraDataItemCount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setMaxPositiveTokenRebase(_maxPositiveTokenRebase: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setOneOffCLBalanceDecreaseBPLimit(_oneOffCLBalanceDecreaseBPLimit: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setOracleReportLimits(_limitsList: LimitsListStruct, overrides?: CallOverrides): Promise<void>;
        setRequestTimestampMargin(_requestTimestampMargin: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setSimulatedShareRateDeviationBPLimit(_simulatedShareRateDeviationBPLimit: BigNumberish, overrides?: CallOverrides): Promise<void>;
        smoothenTokenRebase(_preTotalPooledAce: BigNumberish, _preTotalShares: BigNumberish, _preCLBalance: BigNumberish, _postCLBalance: BigNumberish, _withdrawalVaultBalance: BigNumberish, _elRewardsVaultBalance: BigNumberish, _sharesRequestedToBurn: BigNumberish, _aceToLockForWithdrawals: BigNumberish, _newSharesToBurnForWithdrawals: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            withdrawals: BigNumber;
            elRewards: BigNumber;
            simulatedSharesToBurn: BigNumber;
            sharesToBurn: BigNumber;
        }>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "AnnualBalanceIncreaseBPLimitSet(uint256)"(annualBalanceIncreaseBPLimit?: null): AnnualBalanceIncreaseBPLimitSetEventFilter;
        AnnualBalanceIncreaseBPLimitSet(annualBalanceIncreaseBPLimit?: null): AnnualBalanceIncreaseBPLimitSetEventFilter;
        "ChurnValidatorsPerDayLimitSet(uint256)"(churnValidatorsPerDayLimit?: null): ChurnValidatorsPerDayLimitSetEventFilter;
        ChurnValidatorsPerDayLimitSet(churnValidatorsPerDayLimit?: null): ChurnValidatorsPerDayLimitSetEventFilter;
        "MaxAccountingExtraDataListItemsCountSet(uint256)"(maxAccountingExtraDataListItemsCount?: null): MaxAccountingExtraDataListItemsCountSetEventFilter;
        MaxAccountingExtraDataListItemsCountSet(maxAccountingExtraDataListItemsCount?: null): MaxAccountingExtraDataListItemsCountSetEventFilter;
        "MaxNodeOperatorsPerExtraDataItemCountSet(uint256)"(maxNodeOperatorsPerExtraDataItemCount?: null): MaxNodeOperatorsPerExtraDataItemCountSetEventFilter;
        MaxNodeOperatorsPerExtraDataItemCountSet(maxNodeOperatorsPerExtraDataItemCount?: null): MaxNodeOperatorsPerExtraDataItemCountSetEventFilter;
        "MaxPositiveTokenRebaseSet(uint256)"(maxPositiveTokenRebase?: null): MaxPositiveTokenRebaseSetEventFilter;
        MaxPositiveTokenRebaseSet(maxPositiveTokenRebase?: null): MaxPositiveTokenRebaseSetEventFilter;
        "MaxValidatorExitRequestsPerReportSet(uint256)"(maxValidatorExitRequestsPerReport?: null): MaxValidatorExitRequestsPerReportSetEventFilter;
        MaxValidatorExitRequestsPerReportSet(maxValidatorExitRequestsPerReport?: null): MaxValidatorExitRequestsPerReportSetEventFilter;
        "OneOffCLBalanceDecreaseBPLimitSet(uint256)"(oneOffCLBalanceDecreaseBPLimit?: null): OneOffCLBalanceDecreaseBPLimitSetEventFilter;
        OneOffCLBalanceDecreaseBPLimitSet(oneOffCLBalanceDecreaseBPLimit?: null): OneOffCLBalanceDecreaseBPLimitSetEventFilter;
        "RequestTimestampMarginSet(uint256)"(requestTimestampMargin?: null): RequestTimestampMarginSetEventFilter;
        RequestTimestampMarginSet(requestTimestampMargin?: null): RequestTimestampMarginSetEventFilter;
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        RoleAdminChanged(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        "RoleGranted(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        RoleGranted(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        "RoleRevoked(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
        RoleRevoked(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
        "SimulatedShareRateDeviationBPLimitSet(uint256)"(simulatedShareRateDeviationBPLimit?: null): SimulatedShareRateDeviationBPLimitSetEventFilter;
        SimulatedShareRateDeviationBPLimitSet(simulatedShareRateDeviationBPLimit?: null): SimulatedShareRateDeviationBPLimitSetEventFilter;
    };
    estimateGas: {
        ALL_LIMITS_MANAGER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        ANNUAL_BALANCE_INCREASE_LIMIT_MANAGER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        CHURN_VALIDATORS_PER_DAY_LIMIT_MANAGER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_ACCOUNTING_EXTRA_DATA_LIST_ITEMS_COUNT_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_NODE_OPERATORS_PER_EXTRA_DATA_ITEM_COUNT_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_POSITIVE_TOKEN_REBASE_MANAGER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_VALIDATOR_EXIT_REQUESTS_PER_REPORT_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        ONE_OFF_CL_BALANCE_DECREASE_LIMIT_MANAGER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        REQUEST_TIMESTAMP_MARGIN_MANAGER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        SHARE_RATE_DEVIATION_LIMIT_MANAGER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        checkAccountingExtraDataListItemsCount(_extraDataListItemsCount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        checkAccountingOracleReport(_timeElapsed: BigNumberish, _preCLBalance: BigNumberish, _postCLBalance: BigNumberish, _withdrawalVaultBalance: BigNumberish, _elRewardsVaultBalance: BigNumberish, _sharesRequestedToBurn: BigNumberish, _preCLValidators: BigNumberish, _postCLValidators: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        checkExitBusOracleReport(_exitRequestsCount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        checkExitedValidatorsRatePerDay(_exitedValidatorsCount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        checkNodeOperatorsPerExtraDataItemCount(_itemIndex: BigNumberish, _nodeOperatorsCount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        checkSimulatedShareRate(_postTotalPooledAce: BigNumberish, _postTotalShares: BigNumberish, _aceLockedOnWithdrawalQueue: BigNumberish, _sharesBurntDueToWithdrawals: BigNumberish, _simulatedShareRate: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        checkWithdrawalQueueOracleReport(_lastFinalizableRequestId: BigNumberish, _reportTimestamp: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getCatalistLocator(overrides?: CallOverrides): Promise<BigNumber>;
        getMaxPositiveTokenRebase(overrides?: CallOverrides): Promise<BigNumber>;
        getOracleReportLimits(overrides?: CallOverrides): Promise<BigNumber>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setAnnualBalanceIncreaseBPLimit(_annualBalanceIncreaseBPLimit: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setChurnValidatorsPerDayLimit(_churnValidatorsPerDayLimit: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMaxAccountingExtraDataListItemsCount(_maxAccountingExtraDataListItemsCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMaxExitRequestsPerOracleReport(_maxValidatorExitRequestsPerReport: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMaxNodeOperatorsPerExtraDataItemCount(_maxNodeOperatorsPerExtraDataItemCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMaxPositiveTokenRebase(_maxPositiveTokenRebase: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setOneOffCLBalanceDecreaseBPLimit(_oneOffCLBalanceDecreaseBPLimit: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setOracleReportLimits(_limitsList: LimitsListStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setRequestTimestampMargin(_requestTimestampMargin: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setSimulatedShareRateDeviationBPLimit(_simulatedShareRateDeviationBPLimit: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        smoothenTokenRebase(_preTotalPooledAce: BigNumberish, _preTotalShares: BigNumberish, _preCLBalance: BigNumberish, _postCLBalance: BigNumberish, _withdrawalVaultBalance: BigNumberish, _elRewardsVaultBalance: BigNumberish, _sharesRequestedToBurn: BigNumberish, _aceToLockForWithdrawals: BigNumberish, _newSharesToBurnForWithdrawals: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        ALL_LIMITS_MANAGER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ANNUAL_BALANCE_INCREASE_LIMIT_MANAGER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        CHURN_VALIDATORS_PER_DAY_LIMIT_MANAGER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_ACCOUNTING_EXTRA_DATA_LIST_ITEMS_COUNT_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_NODE_OPERATORS_PER_EXTRA_DATA_ITEM_COUNT_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_POSITIVE_TOKEN_REBASE_MANAGER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_VALIDATOR_EXIT_REQUESTS_PER_REPORT_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ONE_OFF_CL_BALANCE_DECREASE_LIMIT_MANAGER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        REQUEST_TIMESTAMP_MARGIN_MANAGER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        SHARE_RATE_DEVIATION_LIMIT_MANAGER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        checkAccountingExtraDataListItemsCount(_extraDataListItemsCount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        checkAccountingOracleReport(_timeElapsed: BigNumberish, _preCLBalance: BigNumberish, _postCLBalance: BigNumberish, _withdrawalVaultBalance: BigNumberish, _elRewardsVaultBalance: BigNumberish, _sharesRequestedToBurn: BigNumberish, _preCLValidators: BigNumberish, _postCLValidators: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        checkExitBusOracleReport(_exitRequestsCount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        checkExitedValidatorsRatePerDay(_exitedValidatorsCount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        checkNodeOperatorsPerExtraDataItemCount(_itemIndex: BigNumberish, _nodeOperatorsCount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        checkSimulatedShareRate(_postTotalPooledAce: BigNumberish, _postTotalShares: BigNumberish, _aceLockedOnWithdrawalQueue: BigNumberish, _sharesBurntDueToWithdrawals: BigNumberish, _simulatedShareRate: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        checkWithdrawalQueueOracleReport(_lastFinalizableRequestId: BigNumberish, _reportTimestamp: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCatalistLocator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMaxPositiveTokenRebase(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getOracleReportLimits(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setAnnualBalanceIncreaseBPLimit(_annualBalanceIncreaseBPLimit: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setChurnValidatorsPerDayLimit(_churnValidatorsPerDayLimit: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMaxAccountingExtraDataListItemsCount(_maxAccountingExtraDataListItemsCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMaxExitRequestsPerOracleReport(_maxValidatorExitRequestsPerReport: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMaxNodeOperatorsPerExtraDataItemCount(_maxNodeOperatorsPerExtraDataItemCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMaxPositiveTokenRebase(_maxPositiveTokenRebase: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setOneOffCLBalanceDecreaseBPLimit(_oneOffCLBalanceDecreaseBPLimit: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setOracleReportLimits(_limitsList: LimitsListStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setRequestTimestampMargin(_requestTimestampMargin: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setSimulatedShareRateDeviationBPLimit(_simulatedShareRateDeviationBPLimit: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        smoothenTokenRebase(_preTotalPooledAce: BigNumberish, _preTotalShares: BigNumberish, _preCLBalance: BigNumberish, _postCLBalance: BigNumberish, _withdrawalVaultBalance: BigNumberish, _elRewardsVaultBalance: BigNumberish, _sharesRequestedToBurn: BigNumberish, _aceToLockForWithdrawals: BigNumberish, _newSharesToBurnForWithdrawals: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
