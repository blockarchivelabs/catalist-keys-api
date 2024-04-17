import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace WithdrawalQueueBase {
    type BatchesCalculationStateStruct = {
        remainingAceBudget: BigNumberish;
        finished: boolean;
        batches: BigNumberish[];
        batchesLength: BigNumberish;
    };
    type BatchesCalculationStateStructOutput = [
        BigNumber,
        boolean,
        BigNumber[],
        BigNumber
    ] & {
        remainingAceBudget: BigNumber;
        finished: boolean;
        batches: BigNumber[];
        batchesLength: BigNumber;
    };
    type WithdrawalRequestStatusStruct = {
        amountOfBACE: BigNumberish;
        amountOfShares: BigNumberish;
        owner: string;
        timestamp: BigNumberish;
        isFinalized: boolean;
        isClaimed: boolean;
    };
    type WithdrawalRequestStatusStructOutput = [
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        boolean,
        boolean
    ] & {
        amountOfBACE: BigNumber;
        amountOfShares: BigNumber;
        owner: string;
        timestamp: BigNumber;
        isFinalized: boolean;
        isClaimed: boolean;
    };
}
export declare namespace WithdrawalQueue {
    type PermitInputStruct = {
        value: BigNumberish;
        deadline: BigNumberish;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
    };
    type PermitInputStructOutput = [
        BigNumber,
        BigNumber,
        number,
        string,
        string
    ] & {
        value: BigNumber;
        deadline: BigNumber;
        v: number;
        r: string;
        s: string;
    };
}
export interface WithdrawalQueueInterface extends utils.Interface {
    contractName: "WithdrawalQueue";
    functions: {
        "BUNKER_MODE_DISABLED_TIMESTAMP()": FunctionFragment;
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "FINALIZE_ROLE()": FunctionFragment;
        "MANAGE_TOKEN_URI_ROLE()": FunctionFragment;
        "MAX_BATCHES_LENGTH()": FunctionFragment;
        "MAX_BACE_WITHDRAWAL_AMOUNT()": FunctionFragment;
        "MIN_BACE_WITHDRAWAL_AMOUNT()": FunctionFragment;
        "ORACLE_ROLE()": FunctionFragment;
        "PAUSE_INFINITELY()": FunctionFragment;
        "PAUSE_ROLE()": FunctionFragment;
        "RESUME_ROLE()": FunctionFragment;
        "BACE()": FunctionFragment;
        "WBACE()": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "bunkerModeSinceTimestamp()": FunctionFragment;
        "calculateFinalizationBatches(uint256,uint256,uint256,(uint256,bool,uint256[36],uint256))": FunctionFragment;
        "claimWithdrawal(uint256)": FunctionFragment;
        "claimWithdrawals(uint256[],uint256[])": FunctionFragment;
        "claimWithdrawalsTo(uint256[],uint256[],address)": FunctionFragment;
        "finalize(uint256[],uint256)": FunctionFragment;
        "findCheckpointHints(uint256[],uint256,uint256)": FunctionFragment;
        "getApproved(uint256)": FunctionFragment;
        "getBaseURI()": FunctionFragment;
        "getClaimableAce(uint256[],uint256[])": FunctionFragment;
        "getContractVersion()": FunctionFragment;
        "getLastCheckpointIndex()": FunctionFragment;
        "getLastFinalizedRequestId()": FunctionFragment;
        "getLastRequestId()": FunctionFragment;
        "getLockedAceAmount()": FunctionFragment;
        "getNFTDescriptorAddress()": FunctionFragment;
        "getResumeSinceTimestamp()": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "getRoleMember(bytes32,uint256)": FunctionFragment;
        "getRoleMemberCount(bytes32)": FunctionFragment;
        "getWithdrawalRequests(address)": FunctionFragment;
        "getWithdrawalStatus(uint256[])": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "initialize(address)": FunctionFragment;
        "isApprovedForAll(address,address)": FunctionFragment;
        "isBunkerModeActive()": FunctionFragment;
        "isPaused()": FunctionFragment;
        "name()": FunctionFragment;
        "onOracleReport(bool,uint256,uint256)": FunctionFragment;
        "ownerOf(uint256)": FunctionFragment;
        "pauseFor(uint256)": FunctionFragment;
        "pauseUntil(uint256)": FunctionFragment;
        "prefinalize(uint256[],uint256)": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "requestWithdrawals(uint256[],address)": FunctionFragment;
        "requestWithdrawalsWithPermit(uint256[],address,(uint256,uint256,uint8,bytes32,bytes32))": FunctionFragment;
        "requestWithdrawalsWbACE(uint256[],address)": FunctionFragment;
        "requestWithdrawalsWbACEWithPermit(uint256[],address,(uint256,uint256,uint8,bytes32,bytes32))": FunctionFragment;
        "resume()": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "safeTransferFrom(address,address,uint256)": FunctionFragment;
        "setApprovalForAll(address,bool)": FunctionFragment;
        "setBaseURI(string)": FunctionFragment;
        "setNFTDescriptorAddress(address)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "symbol()": FunctionFragment;
        "tokenURI(uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "unfinalizedRequestNumber()": FunctionFragment;
        "unfinalizedBACE()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "BUNKER_MODE_DISABLED_TIMESTAMP", values?: undefined): string;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "FINALIZE_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MANAGE_TOKEN_URI_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_BATCHES_LENGTH", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_BACE_WITHDRAWAL_AMOUNT", values?: undefined): string;
    encodeFunctionData(functionFragment: "MIN_BACE_WITHDRAWAL_AMOUNT", values?: undefined): string;
    encodeFunctionData(functionFragment: "ORACLE_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "PAUSE_INFINITELY", values?: undefined): string;
    encodeFunctionData(functionFragment: "PAUSE_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "RESUME_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "BACE", values?: undefined): string;
    encodeFunctionData(functionFragment: "WBACE", values?: undefined): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "bunkerModeSinceTimestamp", values?: undefined): string;
    encodeFunctionData(functionFragment: "calculateFinalizationBatches", values: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        WithdrawalQueueBase.BatchesCalculationStateStruct
    ]): string;
    encodeFunctionData(functionFragment: "claimWithdrawal", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "claimWithdrawals", values: [BigNumberish[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "claimWithdrawalsTo", values: [BigNumberish[], BigNumberish[], string]): string;
    encodeFunctionData(functionFragment: "finalize", values: [BigNumberish[], BigNumberish]): string;
    encodeFunctionData(functionFragment: "findCheckpointHints", values: [BigNumberish[], BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getApproved", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getBaseURI", values?: undefined): string;
    encodeFunctionData(functionFragment: "getClaimableAce", values: [BigNumberish[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "getContractVersion", values?: undefined): string;
    encodeFunctionData(functionFragment: "getLastCheckpointIndex", values?: undefined): string;
    encodeFunctionData(functionFragment: "getLastFinalizedRequestId", values?: undefined): string;
    encodeFunctionData(functionFragment: "getLastRequestId", values?: undefined): string;
    encodeFunctionData(functionFragment: "getLockedAceAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNFTDescriptorAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "getResumeSinceTimestamp", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getRoleMember", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRoleMemberCount", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getWithdrawalRequests", values: [string]): string;
    encodeFunctionData(functionFragment: "getWithdrawalStatus", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string]): string;
    encodeFunctionData(functionFragment: "isApprovedForAll", values: [string, string]): string;
    encodeFunctionData(functionFragment: "isBunkerModeActive", values?: undefined): string;
    encodeFunctionData(functionFragment: "isPaused", values?: undefined): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "onOracleReport", values: [boolean, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "ownerOf", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "pauseFor", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "pauseUntil", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "prefinalize", values: [BigNumberish[], BigNumberish]): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "requestWithdrawals", values: [BigNumberish[], string]): string;
    encodeFunctionData(functionFragment: "requestWithdrawalsWithPermit", values: [BigNumberish[], string, WithdrawalQueue.PermitInputStruct]): string;
    encodeFunctionData(functionFragment: "requestWithdrawalsWbACE", values: [BigNumberish[], string]): string;
    encodeFunctionData(functionFragment: "requestWithdrawalsWbACEWithPermit", values: [BigNumberish[], string, WithdrawalQueue.PermitInputStruct]): string;
    encodeFunctionData(functionFragment: "resume", values?: undefined): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setApprovalForAll", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "setBaseURI", values: [string]): string;
    encodeFunctionData(functionFragment: "setNFTDescriptorAddress", values: [string]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenURI", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "unfinalizedRequestNumber", values?: undefined): string;
    encodeFunctionData(functionFragment: "unfinalizedBACE", values?: undefined): string;
    decodeFunctionResult(functionFragment: "BUNKER_MODE_DISABLED_TIMESTAMP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "FINALIZE_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MANAGE_TOKEN_URI_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_BATCHES_LENGTH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_BACE_WITHDRAWAL_AMOUNT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MIN_BACE_WITHDRAWAL_AMOUNT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ORACLE_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PAUSE_INFINITELY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PAUSE_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "RESUME_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "BACE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "WBACE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bunkerModeSinceTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateFinalizationBatches", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimWithdrawal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimWithdrawals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimWithdrawalsTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "finalize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "findCheckpointHints", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getApproved", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBaseURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getClaimableAce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getContractVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLastCheckpointIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLastFinalizedRequestId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLastRequestId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLockedAceAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNFTDescriptorAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getResumeSinceTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMemberCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getWithdrawalRequests", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getWithdrawalStatus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isApprovedForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isBunkerModeActive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onOracleReport", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pauseFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pauseUntil", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "prefinalize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requestWithdrawals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requestWithdrawalsWithPermit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requestWithdrawalsWbACE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requestWithdrawalsWbACEWithPermit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resume", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBaseURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setNFTDescriptorAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unfinalizedRequestNumber", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unfinalizedBACE", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "ApprovalForAll(address,address,bool)": EventFragment;
        "BaseURISet(string)": EventFragment;
        "BunkerModeDisabled()": EventFragment;
        "BunkerModeEnabled(uint256)": EventFragment;
        "ContractVersionSet(uint256)": EventFragment;
        "InitializedV1(address)": EventFragment;
        "NftDescriptorAddressSet(address)": EventFragment;
        "Paused(uint256)": EventFragment;
        "Resumed()": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
        "WithdrawalClaimed(uint256,address,address,uint256)": EventFragment;
        "WithdrawalRequested(uint256,address,address,uint256,uint256)": EventFragment;
        "WithdrawalsFinalized(uint256,uint256,uint256,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BaseURISet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BunkerModeDisabled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BunkerModeEnabled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ContractVersionSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "InitializedV1"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NftDescriptorAddressSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Resumed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WithdrawalClaimed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WithdrawalRequested"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WithdrawalsFinalized"): EventFragment;
}
export declare type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    owner: string;
    approved: string;
    tokenId: BigNumber;
}>;
export declare type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export declare type ApprovalForAllEvent = TypedEvent<[
    string,
    string,
    boolean
], {
    owner: string;
    operator: string;
    approved: boolean;
}>;
export declare type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;
export declare type BaseURISetEvent = TypedEvent<[string], {
    baseURI: string;
}>;
export declare type BaseURISetEventFilter = TypedEventFilter<BaseURISetEvent>;
export declare type BunkerModeDisabledEvent = TypedEvent<[], {}>;
export declare type BunkerModeDisabledEventFilter = TypedEventFilter<BunkerModeDisabledEvent>;
export declare type BunkerModeEnabledEvent = TypedEvent<[
    BigNumber
], {
    _sinceTimestamp: BigNumber;
}>;
export declare type BunkerModeEnabledEventFilter = TypedEventFilter<BunkerModeEnabledEvent>;
export declare type ContractVersionSetEvent = TypedEvent<[
    BigNumber
], {
    version: BigNumber;
}>;
export declare type ContractVersionSetEventFilter = TypedEventFilter<ContractVersionSetEvent>;
export declare type InitializedV1Event = TypedEvent<[string], {
    _admin: string;
}>;
export declare type InitializedV1EventFilter = TypedEventFilter<InitializedV1Event>;
export declare type NftDescriptorAddressSetEvent = TypedEvent<[
    string
], {
    nftDescriptorAddress: string;
}>;
export declare type NftDescriptorAddressSetEventFilter = TypedEventFilter<NftDescriptorAddressSetEvent>;
export declare type PausedEvent = TypedEvent<[BigNumber], {
    duration: BigNumber;
}>;
export declare type PausedEventFilter = TypedEventFilter<PausedEvent>;
export declare type ResumedEvent = TypedEvent<[], {}>;
export declare type ResumedEventFilter = TypedEventFilter<ResumedEvent>;
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
export declare type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    from: string;
    to: string;
    tokenId: BigNumber;
}>;
export declare type TransferEventFilter = TypedEventFilter<TransferEvent>;
export declare type WithdrawalClaimedEvent = TypedEvent<[
    BigNumber,
    string,
    string,
    BigNumber
], {
    requestId: BigNumber;
    owner: string;
    receiver: string;
    amountOfACE: BigNumber;
}>;
export declare type WithdrawalClaimedEventFilter = TypedEventFilter<WithdrawalClaimedEvent>;
export declare type WithdrawalRequestedEvent = TypedEvent<[
    BigNumber,
    string,
    string,
    BigNumber,
    BigNumber
], {
    requestId: BigNumber;
    requestor: string;
    owner: string;
    amountOfBACE: BigNumber;
    amountOfShares: BigNumber;
}>;
export declare type WithdrawalRequestedEventFilter = TypedEventFilter<WithdrawalRequestedEvent>;
export declare type WithdrawalsFinalizedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], {
    from: BigNumber;
    to: BigNumber;
    amountOfACELocked: BigNumber;
    sharesToBurn: BigNumber;
    timestamp: BigNumber;
}>;
export declare type WithdrawalsFinalizedEventFilter = TypedEventFilter<WithdrawalsFinalizedEvent>;
export interface WithdrawalQueue extends BaseContract {
    contractName: "WithdrawalQueue";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: WithdrawalQueueInterface;
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
        BUNKER_MODE_DISABLED_TIMESTAMP(overrides?: CallOverrides): Promise<[BigNumber]>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;
        FINALIZE_ROLE(overrides?: CallOverrides): Promise<[string]>;
        MANAGE_TOKEN_URI_ROLE(overrides?: CallOverrides): Promise<[string]>;
        MAX_BATCHES_LENGTH(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_BACE_WITHDRAWAL_AMOUNT(overrides?: CallOverrides): Promise<[BigNumber]>;
        MIN_BACE_WITHDRAWAL_AMOUNT(overrides?: CallOverrides): Promise<[BigNumber]>;
        ORACLE_ROLE(overrides?: CallOverrides): Promise<[string]>;
        PAUSE_INFINITELY(overrides?: CallOverrides): Promise<[BigNumber]>;
        PAUSE_ROLE(overrides?: CallOverrides): Promise<[string]>;
        RESUME_ROLE(overrides?: CallOverrides): Promise<[string]>;
        BACE(overrides?: CallOverrides): Promise<[string]>;
        WBACE(overrides?: CallOverrides): Promise<[string]>;
        approve(_to: string, _requestId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        balanceOf(_owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        bunkerModeSinceTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;
        calculateFinalizationBatches(_maxShareRate: BigNumberish, _maxTimestamp: BigNumberish, _maxRequestsPerCall: BigNumberish, _state: WithdrawalQueueBase.BatchesCalculationStateStruct, overrides?: CallOverrides): Promise<[WithdrawalQueueBase.BatchesCalculationStateStructOutput]>;
        claimWithdrawal(_requestId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimWithdrawals(_requestIds: BigNumberish[], _hints: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimWithdrawalsTo(_requestIds: BigNumberish[], _hints: BigNumberish[], _recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        finalize(_batches: BigNumberish[], _maxShareRate: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        findCheckpointHints(_requestIds: BigNumberish[], _firstIndex: BigNumberish, _lastIndex: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber[]] & {
            hintIds: BigNumber[];
        }>;
        getApproved(_requestId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getBaseURI(overrides?: CallOverrides): Promise<[string]>;
        getClaimableAce(_requestIds: BigNumberish[], _hints: BigNumberish[], overrides?: CallOverrides): Promise<[BigNumber[]] & {
            claimableAceValues: BigNumber[];
        }>;
        getContractVersion(overrides?: CallOverrides): Promise<[BigNumber]>;
        getLastCheckpointIndex(overrides?: CallOverrides): Promise<[BigNumber]>;
        getLastFinalizedRequestId(overrides?: CallOverrides): Promise<[BigNumber]>;
        getLastRequestId(overrides?: CallOverrides): Promise<[BigNumber]>;
        getLockedAceAmount(overrides?: CallOverrides): Promise<[BigNumber]>;
        getNFTDescriptorAddress(overrides?: CallOverrides): Promise<[string]>;
        getResumeSinceTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        getWithdrawalRequests(_owner: string, overrides?: CallOverrides): Promise<[BigNumber[]] & {
            requestsIds: BigNumber[];
        }>;
        getWithdrawalStatus(_requestIds: BigNumberish[], overrides?: CallOverrides): Promise<[
            WithdrawalQueueBase.WithdrawalRequestStatusStructOutput[]
        ] & {
            statuses: WithdrawalQueueBase.WithdrawalRequestStatusStructOutput[];
        }>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<[boolean]>;
        initialize(_admin: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isApprovedForAll(_owner: string, _operator: string, overrides?: CallOverrides): Promise<[boolean]>;
        isBunkerModeActive(overrides?: CallOverrides): Promise<[boolean]>;
        isPaused(overrides?: CallOverrides): Promise<[boolean]>;
        name(overrides?: CallOverrides): Promise<[string]>;
        onOracleReport(_isBunkerModeNow: boolean, _bunkerStartTimestamp: BigNumberish, _currentReportTimestamp: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        ownerOf(_requestId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        pauseFor(_duration: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        pauseUntil(_pauseUntilInclusive: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        prefinalize(_batches: BigNumberish[], _maxShareRate: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            aceToLock: BigNumber;
            sharesToBurn: BigNumber;
        }>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        requestWithdrawals(amounts: BigNumberish[], _owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        requestWithdrawalsWithPermit(_amounts: BigNumberish[], _owner: string, _permit: WithdrawalQueue.PermitInputStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        requestWithdrawalsWbACE(amounts: BigNumberish[], _owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        requestWithdrawalsWbACEWithPermit(_amounts: BigNumberish[], _owner: string, _permit: WithdrawalQueue.PermitInputStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        resume(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "safeTransferFrom(address,address,uint256)"(_from: string, _to: string, _requestId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(_from: string, _to: string, _requestId: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setApprovalForAll(_operator: string, _approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setBaseURI(_baseURI: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setNFTDescriptorAddress(_nftDescriptorAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        tokenURI(_requestId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        transferFrom(_from: string, _to: string, _requestId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        unfinalizedRequestNumber(overrides?: CallOverrides): Promise<[BigNumber]>;
        unfinalizedBACE(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    BUNKER_MODE_DISABLED_TIMESTAMP(overrides?: CallOverrides): Promise<BigNumber>;
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    FINALIZE_ROLE(overrides?: CallOverrides): Promise<string>;
    MANAGE_TOKEN_URI_ROLE(overrides?: CallOverrides): Promise<string>;
    MAX_BATCHES_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_BACE_WITHDRAWAL_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;
    MIN_BACE_WITHDRAWAL_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;
    ORACLE_ROLE(overrides?: CallOverrides): Promise<string>;
    PAUSE_INFINITELY(overrides?: CallOverrides): Promise<BigNumber>;
    PAUSE_ROLE(overrides?: CallOverrides): Promise<string>;
    RESUME_ROLE(overrides?: CallOverrides): Promise<string>;
    BACE(overrides?: CallOverrides): Promise<string>;
    WBACE(overrides?: CallOverrides): Promise<string>;
    approve(_to: string, _requestId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    balanceOf(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    bunkerModeSinceTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
    calculateFinalizationBatches(_maxShareRate: BigNumberish, _maxTimestamp: BigNumberish, _maxRequestsPerCall: BigNumberish, _state: WithdrawalQueueBase.BatchesCalculationStateStruct, overrides?: CallOverrides): Promise<WithdrawalQueueBase.BatchesCalculationStateStructOutput>;
    claimWithdrawal(_requestId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimWithdrawals(_requestIds: BigNumberish[], _hints: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimWithdrawalsTo(_requestIds: BigNumberish[], _hints: BigNumberish[], _recipient: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    finalize(_batches: BigNumberish[], _maxShareRate: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    findCheckpointHints(_requestIds: BigNumberish[], _firstIndex: BigNumberish, _lastIndex: BigNumberish, overrides?: CallOverrides): Promise<BigNumber[]>;
    getApproved(_requestId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getBaseURI(overrides?: CallOverrides): Promise<string>;
    getClaimableAce(_requestIds: BigNumberish[], _hints: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber[]>;
    getContractVersion(overrides?: CallOverrides): Promise<BigNumber>;
    getLastCheckpointIndex(overrides?: CallOverrides): Promise<BigNumber>;
    getLastFinalizedRequestId(overrides?: CallOverrides): Promise<BigNumber>;
    getLastRequestId(overrides?: CallOverrides): Promise<BigNumber>;
    getLockedAceAmount(overrides?: CallOverrides): Promise<BigNumber>;
    getNFTDescriptorAddress(overrides?: CallOverrides): Promise<string>;
    getResumeSinceTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
    getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    getWithdrawalRequests(_owner: string, overrides?: CallOverrides): Promise<BigNumber[]>;
    getWithdrawalStatus(_requestIds: BigNumberish[], overrides?: CallOverrides): Promise<WithdrawalQueueBase.WithdrawalRequestStatusStructOutput[]>;
    grantRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
    initialize(_admin: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isApprovedForAll(_owner: string, _operator: string, overrides?: CallOverrides): Promise<boolean>;
    isBunkerModeActive(overrides?: CallOverrides): Promise<boolean>;
    isPaused(overrides?: CallOverrides): Promise<boolean>;
    name(overrides?: CallOverrides): Promise<string>;
    onOracleReport(_isBunkerModeNow: boolean, _bunkerStartTimestamp: BigNumberish, _currentReportTimestamp: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    ownerOf(_requestId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    pauseFor(_duration: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    pauseUntil(_pauseUntilInclusive: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    prefinalize(_batches: BigNumberish[], _maxShareRate: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        aceToLock: BigNumber;
        sharesToBurn: BigNumber;
    }>;
    renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    requestWithdrawals(amounts: BigNumberish[], _owner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    requestWithdrawalsWithPermit(_amounts: BigNumberish[], _owner: string, _permit: WithdrawalQueue.PermitInputStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    requestWithdrawalsWbACE(amounts: BigNumberish[], _owner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    requestWithdrawalsWbACEWithPermit(_amounts: BigNumberish[], _owner: string, _permit: WithdrawalQueue.PermitInputStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    resume(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "safeTransferFrom(address,address,uint256)"(_from: string, _to: string, _requestId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "safeTransferFrom(address,address,uint256,bytes)"(_from: string, _to: string, _requestId: BigNumberish, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setApprovalForAll(_operator: string, _approved: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setBaseURI(_baseURI: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setNFTDescriptorAddress(_nftDescriptorAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    symbol(overrides?: CallOverrides): Promise<string>;
    tokenURI(_requestId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    transferFrom(_from: string, _to: string, _requestId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    unfinalizedRequestNumber(overrides?: CallOverrides): Promise<BigNumber>;
    unfinalizedBACE(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        BUNKER_MODE_DISABLED_TIMESTAMP(overrides?: CallOverrides): Promise<BigNumber>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        FINALIZE_ROLE(overrides?: CallOverrides): Promise<string>;
        MANAGE_TOKEN_URI_ROLE(overrides?: CallOverrides): Promise<string>;
        MAX_BATCHES_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_BACE_WITHDRAWAL_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_BACE_WITHDRAWAL_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;
        ORACLE_ROLE(overrides?: CallOverrides): Promise<string>;
        PAUSE_INFINITELY(overrides?: CallOverrides): Promise<BigNumber>;
        PAUSE_ROLE(overrides?: CallOverrides): Promise<string>;
        RESUME_ROLE(overrides?: CallOverrides): Promise<string>;
        BACE(overrides?: CallOverrides): Promise<string>;
        WBACE(overrides?: CallOverrides): Promise<string>;
        approve(_to: string, _requestId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        balanceOf(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        bunkerModeSinceTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        calculateFinalizationBatches(_maxShareRate: BigNumberish, _maxTimestamp: BigNumberish, _maxRequestsPerCall: BigNumberish, _state: WithdrawalQueueBase.BatchesCalculationStateStruct, overrides?: CallOverrides): Promise<WithdrawalQueueBase.BatchesCalculationStateStructOutput>;
        claimWithdrawal(_requestId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        claimWithdrawals(_requestIds: BigNumberish[], _hints: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        claimWithdrawalsTo(_requestIds: BigNumberish[], _hints: BigNumberish[], _recipient: string, overrides?: CallOverrides): Promise<void>;
        finalize(_batches: BigNumberish[], _maxShareRate: BigNumberish, overrides?: CallOverrides): Promise<void>;
        findCheckpointHints(_requestIds: BigNumberish[], _firstIndex: BigNumberish, _lastIndex: BigNumberish, overrides?: CallOverrides): Promise<BigNumber[]>;
        getApproved(_requestId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getBaseURI(overrides?: CallOverrides): Promise<string>;
        getClaimableAce(_requestIds: BigNumberish[], _hints: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber[]>;
        getContractVersion(overrides?: CallOverrides): Promise<BigNumber>;
        getLastCheckpointIndex(overrides?: CallOverrides): Promise<BigNumber>;
        getLastFinalizedRequestId(overrides?: CallOverrides): Promise<BigNumber>;
        getLastRequestId(overrides?: CallOverrides): Promise<BigNumber>;
        getLockedAceAmount(overrides?: CallOverrides): Promise<BigNumber>;
        getNFTDescriptorAddress(overrides?: CallOverrides): Promise<string>;
        getResumeSinceTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getWithdrawalRequests(_owner: string, overrides?: CallOverrides): Promise<BigNumber[]>;
        getWithdrawalStatus(_requestIds: BigNumberish[], overrides?: CallOverrides): Promise<WithdrawalQueueBase.WithdrawalRequestStatusStructOutput[]>;
        grantRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
        initialize(_admin: string, overrides?: CallOverrides): Promise<void>;
        isApprovedForAll(_owner: string, _operator: string, overrides?: CallOverrides): Promise<boolean>;
        isBunkerModeActive(overrides?: CallOverrides): Promise<boolean>;
        isPaused(overrides?: CallOverrides): Promise<boolean>;
        name(overrides?: CallOverrides): Promise<string>;
        onOracleReport(_isBunkerModeNow: boolean, _bunkerStartTimestamp: BigNumberish, _currentReportTimestamp: BigNumberish, overrides?: CallOverrides): Promise<void>;
        ownerOf(_requestId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        pauseFor(_duration: BigNumberish, overrides?: CallOverrides): Promise<void>;
        pauseUntil(_pauseUntilInclusive: BigNumberish, overrides?: CallOverrides): Promise<void>;
        prefinalize(_batches: BigNumberish[], _maxShareRate: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            aceToLock: BigNumber;
            sharesToBurn: BigNumber;
        }>;
        renounceRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        requestWithdrawals(amounts: BigNumberish[], _owner: string, overrides?: CallOverrides): Promise<BigNumber[]>;
        requestWithdrawalsWithPermit(_amounts: BigNumberish[], _owner: string, _permit: WithdrawalQueue.PermitInputStruct, overrides?: CallOverrides): Promise<BigNumber[]>;
        requestWithdrawalsWbACE(amounts: BigNumberish[], _owner: string, overrides?: CallOverrides): Promise<BigNumber[]>;
        requestWithdrawalsWbACEWithPermit(_amounts: BigNumberish[], _owner: string, _permit: WithdrawalQueue.PermitInputStruct, overrides?: CallOverrides): Promise<BigNumber[]>;
        resume(overrides?: CallOverrides): Promise<void>;
        revokeRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        "safeTransferFrom(address,address,uint256)"(_from: string, _to: string, _requestId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "safeTransferFrom(address,address,uint256,bytes)"(_from: string, _to: string, _requestId: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        setApprovalForAll(_operator: string, _approved: boolean, overrides?: CallOverrides): Promise<void>;
        setBaseURI(_baseURI: string, overrides?: CallOverrides): Promise<void>;
        setNFTDescriptorAddress(_nftDescriptorAddress: string, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        symbol(overrides?: CallOverrides): Promise<string>;
        tokenURI(_requestId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        transferFrom(_from: string, _to: string, _requestId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        unfinalizedRequestNumber(overrides?: CallOverrides): Promise<BigNumber>;
        unfinalizedBACE(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: string | null, approved?: string | null, tokenId?: BigNumberish | null): ApprovalEventFilter;
        Approval(owner?: string | null, approved?: string | null, tokenId?: BigNumberish | null): ApprovalEventFilter;
        "ApprovalForAll(address,address,bool)"(owner?: string | null, operator?: string | null, approved?: null): ApprovalForAllEventFilter;
        ApprovalForAll(owner?: string | null, operator?: string | null, approved?: null): ApprovalForAllEventFilter;
        "BaseURISet(string)"(baseURI?: null): BaseURISetEventFilter;
        BaseURISet(baseURI?: null): BaseURISetEventFilter;
        "BunkerModeDisabled()"(): BunkerModeDisabledEventFilter;
        BunkerModeDisabled(): BunkerModeDisabledEventFilter;
        "BunkerModeEnabled(uint256)"(_sinceTimestamp?: null): BunkerModeEnabledEventFilter;
        BunkerModeEnabled(_sinceTimestamp?: null): BunkerModeEnabledEventFilter;
        "ContractVersionSet(uint256)"(version?: null): ContractVersionSetEventFilter;
        ContractVersionSet(version?: null): ContractVersionSetEventFilter;
        "InitializedV1(address)"(_admin?: null): InitializedV1EventFilter;
        InitializedV1(_admin?: null): InitializedV1EventFilter;
        "NftDescriptorAddressSet(address)"(nftDescriptorAddress?: null): NftDescriptorAddressSetEventFilter;
        NftDescriptorAddressSet(nftDescriptorAddress?: null): NftDescriptorAddressSetEventFilter;
        "Paused(uint256)"(duration?: null): PausedEventFilter;
        Paused(duration?: null): PausedEventFilter;
        "Resumed()"(): ResumedEventFilter;
        Resumed(): ResumedEventFilter;
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        RoleAdminChanged(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        "RoleGranted(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        RoleGranted(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        "RoleRevoked(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
        RoleRevoked(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, tokenId?: BigNumberish | null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, tokenId?: BigNumberish | null): TransferEventFilter;
        "WithdrawalClaimed(uint256,address,address,uint256)"(requestId?: BigNumberish | null, owner?: string | null, receiver?: string | null, amountOfACE?: null): WithdrawalClaimedEventFilter;
        WithdrawalClaimed(requestId?: BigNumberish | null, owner?: string | null, receiver?: string | null, amountOfACE?: null): WithdrawalClaimedEventFilter;
        "WithdrawalRequested(uint256,address,address,uint256,uint256)"(requestId?: BigNumberish | null, requestor?: string | null, owner?: string | null, amountOfBACE?: null, amountOfShares?: null): WithdrawalRequestedEventFilter;
        WithdrawalRequested(requestId?: BigNumberish | null, requestor?: string | null, owner?: string | null, amountOfBACE?: null, amountOfShares?: null): WithdrawalRequestedEventFilter;
        "WithdrawalsFinalized(uint256,uint256,uint256,uint256,uint256)"(from?: BigNumberish | null, to?: BigNumberish | null, amountOfACELocked?: null, sharesToBurn?: null, timestamp?: null): WithdrawalsFinalizedEventFilter;
        WithdrawalsFinalized(from?: BigNumberish | null, to?: BigNumberish | null, amountOfACELocked?: null, sharesToBurn?: null, timestamp?: null): WithdrawalsFinalizedEventFilter;
    };
    estimateGas: {
        BUNKER_MODE_DISABLED_TIMESTAMP(overrides?: CallOverrides): Promise<BigNumber>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        FINALIZE_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        MANAGE_TOKEN_URI_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_BATCHES_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_BACE_WITHDRAWAL_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_BACE_WITHDRAWAL_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;
        ORACLE_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        PAUSE_INFINITELY(overrides?: CallOverrides): Promise<BigNumber>;
        PAUSE_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        RESUME_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        BACE(overrides?: CallOverrides): Promise<BigNumber>;
        WBACE(overrides?: CallOverrides): Promise<BigNumber>;
        approve(_to: string, _requestId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        balanceOf(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        bunkerModeSinceTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        calculateFinalizationBatches(_maxShareRate: BigNumberish, _maxTimestamp: BigNumberish, _maxRequestsPerCall: BigNumberish, _state: WithdrawalQueueBase.BatchesCalculationStateStruct, overrides?: CallOverrides): Promise<BigNumber>;
        claimWithdrawal(_requestId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimWithdrawals(_requestIds: BigNumberish[], _hints: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimWithdrawalsTo(_requestIds: BigNumberish[], _hints: BigNumberish[], _recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        finalize(_batches: BigNumberish[], _maxShareRate: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        findCheckpointHints(_requestIds: BigNumberish[], _firstIndex: BigNumberish, _lastIndex: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getApproved(_requestId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getBaseURI(overrides?: CallOverrides): Promise<BigNumber>;
        getClaimableAce(_requestIds: BigNumberish[], _hints: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        getContractVersion(overrides?: CallOverrides): Promise<BigNumber>;
        getLastCheckpointIndex(overrides?: CallOverrides): Promise<BigNumber>;
        getLastFinalizedRequestId(overrides?: CallOverrides): Promise<BigNumber>;
        getLastRequestId(overrides?: CallOverrides): Promise<BigNumber>;
        getLockedAceAmount(overrides?: CallOverrides): Promise<BigNumber>;
        getNFTDescriptorAddress(overrides?: CallOverrides): Promise<BigNumber>;
        getResumeSinceTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getWithdrawalRequests(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        getWithdrawalStatus(_requestIds: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_admin: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isApprovedForAll(_owner: string, _operator: string, overrides?: CallOverrides): Promise<BigNumber>;
        isBunkerModeActive(overrides?: CallOverrides): Promise<BigNumber>;
        isPaused(overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        onOracleReport(_isBunkerModeNow: boolean, _bunkerStartTimestamp: BigNumberish, _currentReportTimestamp: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        ownerOf(_requestId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        pauseFor(_duration: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        pauseUntil(_pauseUntilInclusive: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        prefinalize(_batches: BigNumberish[], _maxShareRate: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        requestWithdrawals(amounts: BigNumberish[], _owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        requestWithdrawalsWithPermit(_amounts: BigNumberish[], _owner: string, _permit: WithdrawalQueue.PermitInputStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        requestWithdrawalsWbACE(amounts: BigNumberish[], _owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        requestWithdrawalsWbACEWithPermit(_amounts: BigNumberish[], _owner: string, _permit: WithdrawalQueue.PermitInputStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        resume(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256)"(_from: string, _to: string, _requestId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256,bytes)"(_from: string, _to: string, _requestId: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setApprovalForAll(_operator: string, _approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setBaseURI(_baseURI: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setNFTDescriptorAddress(_nftDescriptorAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        tokenURI(_requestId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(_from: string, _to: string, _requestId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        unfinalizedRequestNumber(overrides?: CallOverrides): Promise<BigNumber>;
        unfinalizedBACE(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        BUNKER_MODE_DISABLED_TIMESTAMP(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        FINALIZE_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MANAGE_TOKEN_URI_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_BATCHES_LENGTH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_BACE_WITHDRAWAL_AMOUNT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MIN_BACE_WITHDRAWAL_AMOUNT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ORACLE_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PAUSE_INFINITELY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PAUSE_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        RESUME_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        BACE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        WBACE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(_to: string, _requestId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(_owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bunkerModeSinceTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateFinalizationBatches(_maxShareRate: BigNumberish, _maxTimestamp: BigNumberish, _maxRequestsPerCall: BigNumberish, _state: WithdrawalQueueBase.BatchesCalculationStateStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimWithdrawal(_requestId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimWithdrawals(_requestIds: BigNumberish[], _hints: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimWithdrawalsTo(_requestIds: BigNumberish[], _hints: BigNumberish[], _recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        finalize(_batches: BigNumberish[], _maxShareRate: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        findCheckpointHints(_requestIds: BigNumberish[], _firstIndex: BigNumberish, _lastIndex: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getApproved(_requestId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBaseURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getClaimableAce(_requestIds: BigNumberish[], _hints: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getContractVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLastCheckpointIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLastFinalizedRequestId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLastRequestId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLockedAceAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNFTDescriptorAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getResumeSinceTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getWithdrawalRequests(_owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getWithdrawalStatus(_requestIds: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_admin: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isApprovedForAll(_owner: string, _operator: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isBunkerModeActive(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onOracleReport(_isBunkerModeNow: boolean, _bunkerStartTimestamp: BigNumberish, _currentReportTimestamp: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        ownerOf(_requestId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pauseFor(_duration: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        pauseUntil(_pauseUntilInclusive: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        prefinalize(_batches: BigNumberish[], _maxShareRate: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        requestWithdrawals(amounts: BigNumberish[], _owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        requestWithdrawalsWithPermit(_amounts: BigNumberish[], _owner: string, _permit: WithdrawalQueue.PermitInputStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        requestWithdrawalsWbACE(amounts: BigNumberish[], _owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        requestWithdrawalsWbACEWithPermit(_amounts: BigNumberish[], _owner: string, _permit: WithdrawalQueue.PermitInputStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        resume(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256)"(_from: string, _to: string, _requestId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(_from: string, _to: string, _requestId: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setApprovalForAll(_operator: string, _approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setBaseURI(_baseURI: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setNFTDescriptorAddress(_nftDescriptorAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenURI(_requestId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferFrom(_from: string, _to: string, _requestId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        unfinalizedRequestNumber(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unfinalizedBACE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
