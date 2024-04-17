import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface AragonVotingInterface extends utils.Interface {
    contractName: "AragonVoting";
    functions: {
        "hasInitialized()": FunctionFragment;
        "unsafelyChangeObjectionPhaseTime(uint64)": FunctionFragment;
        "initialize(address,uint64,uint64,uint64,uint64)": FunctionFragment;
        "UNSAFELY_MODIFY_VOTE_TIME_ROLE()": FunctionFragment;
        "unsafelyChangeVoteTime(uint64)": FunctionFragment;
        "getEVMScriptExecutor(bytes)": FunctionFragment;
        "getRecoveryVault()": FunctionFragment;
        "MODIFY_QUORUM_ROLE()": FunctionFragment;
        "objectionPhaseTime()": FunctionFragment;
        "getVoterState(uint256,address)": FunctionFragment;
        "getVote(uint256)": FunctionFragment;
        "changeMinAcceptQuorumPct(uint64)": FunctionFragment;
        "MODIFY_SUPPORT_ROLE()": FunctionFragment;
        "changeSupportRequiredPct(uint64)": FunctionFragment;
        "allowRecoverability(address)": FunctionFragment;
        "appId()": FunctionFragment;
        "getInitializationBlock()": FunctionFragment;
        "transferToVault(address)": FunctionFragment;
        "canPerform(address,bytes32,uint256[])": FunctionFragment;
        "getEVMScriptRegistry()": FunctionFragment;
        "voteTime()": FunctionFragment;
        "CREATE_VOTES_ROLE()": FunctionFragment;
        "canForward(address,bytes)": FunctionFragment;
        "canExecute(uint256)": FunctionFragment;
        "canVote(uint256,address)": FunctionFragment;
        "kernel()": FunctionFragment;
        "newVote(bytes,string)": FunctionFragment;
        "forward(bytes)": FunctionFragment;
        "minAcceptQuorumPct()": FunctionFragment;
        "isPetrified()": FunctionFragment;
        "votesLength()": FunctionFragment;
        "vote(uint256,bool,bool)": FunctionFragment;
        "getVotePhase(uint256)": FunctionFragment;
        "executeVote(uint256)": FunctionFragment;
        "supportRequiredPct()": FunctionFragment;
        "token()": FunctionFragment;
        "PCT_BASE()": FunctionFragment;
        "isForwarder()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "hasInitialized", values?: undefined): string;
    encodeFunctionData(functionFragment: "unsafelyChangeObjectionPhaseTime", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, BigNumberish, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "UNSAFELY_MODIFY_VOTE_TIME_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "unsafelyChangeVoteTime", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getEVMScriptExecutor", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getRecoveryVault", values?: undefined): string;
    encodeFunctionData(functionFragment: "MODIFY_QUORUM_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "objectionPhaseTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "getVoterState", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "getVote", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "changeMinAcceptQuorumPct", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "MODIFY_SUPPORT_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "changeSupportRequiredPct", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "allowRecoverability", values: [string]): string;
    encodeFunctionData(functionFragment: "appId", values?: undefined): string;
    encodeFunctionData(functionFragment: "getInitializationBlock", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferToVault", values: [string]): string;
    encodeFunctionData(functionFragment: "canPerform", values: [string, BytesLike, BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "getEVMScriptRegistry", values?: undefined): string;
    encodeFunctionData(functionFragment: "voteTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "CREATE_VOTES_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "canForward", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "canExecute", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "canVote", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "kernel", values?: undefined): string;
    encodeFunctionData(functionFragment: "newVote", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "forward", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "minAcceptQuorumPct", values?: undefined): string;
    encodeFunctionData(functionFragment: "isPetrified", values?: undefined): string;
    encodeFunctionData(functionFragment: "votesLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "vote", values: [BigNumberish, boolean, boolean]): string;
    encodeFunctionData(functionFragment: "getVotePhase", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "executeVote", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "supportRequiredPct", values?: undefined): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "PCT_BASE", values?: undefined): string;
    encodeFunctionData(functionFragment: "isForwarder", values?: undefined): string;
    decodeFunctionResult(functionFragment: "hasInitialized", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unsafelyChangeObjectionPhaseTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "UNSAFELY_MODIFY_VOTE_TIME_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unsafelyChangeVoteTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEVMScriptExecutor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRecoveryVault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MODIFY_QUORUM_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "objectionPhaseTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVoterState", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeMinAcceptQuorumPct", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MODIFY_SUPPORT_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeSupportRequiredPct", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowRecoverability", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "appId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getInitializationBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferToVault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "canPerform", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEVMScriptRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "voteTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "CREATE_VOTES_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "canForward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "canExecute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "canVote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "kernel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "newVote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minAcceptQuorumPct", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPetrified", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "votesLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVotePhase", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeVote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportRequiredPct", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PCT_BASE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isForwarder", data: BytesLike): Result;
    events: {
        "StartVote(uint256,address,string)": EventFragment;
        "CastVote(uint256,address,bool,uint256)": EventFragment;
        "CastObjection(uint256,address,uint256)": EventFragment;
        "ExecuteVote(uint256)": EventFragment;
        "ChangeSupportRequired(uint64)": EventFragment;
        "ChangeMinQuorum(uint64)": EventFragment;
        "ChangeVoteTime(uint64)": EventFragment;
        "ChangeObjectionPhaseTime(uint64)": EventFragment;
        "ScriptResult(address,bytes,bytes,bytes)": EventFragment;
        "RecoverToVault(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "StartVote"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CastVote"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CastObjection"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExecuteVote"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ChangeSupportRequired"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ChangeMinQuorum"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ChangeVoteTime"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ChangeObjectionPhaseTime"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ScriptResult"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RecoverToVault"): EventFragment;
}
export declare type StartVoteEvent = TypedEvent<[
    BigNumber,
    string,
    string
], {
    voteId: BigNumber;
    creator: string;
    metadata: string;
}>;
export declare type StartVoteEventFilter = TypedEventFilter<StartVoteEvent>;
export declare type CastVoteEvent = TypedEvent<[
    BigNumber,
    string,
    boolean,
    BigNumber
], {
    voteId: BigNumber;
    voter: string;
    supports: boolean;
    stake: BigNumber;
}>;
export declare type CastVoteEventFilter = TypedEventFilter<CastVoteEvent>;
export declare type CastObjectionEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber
], {
    voteId: BigNumber;
    voter: string;
    stake: BigNumber;
}>;
export declare type CastObjectionEventFilter = TypedEventFilter<CastObjectionEvent>;
export declare type ExecuteVoteEvent = TypedEvent<[BigNumber], {
    voteId: BigNumber;
}>;
export declare type ExecuteVoteEventFilter = TypedEventFilter<ExecuteVoteEvent>;
export declare type ChangeSupportRequiredEvent = TypedEvent<[
    BigNumber
], {
    supportRequiredPct: BigNumber;
}>;
export declare type ChangeSupportRequiredEventFilter = TypedEventFilter<ChangeSupportRequiredEvent>;
export declare type ChangeMinQuorumEvent = TypedEvent<[
    BigNumber
], {
    minAcceptQuorumPct: BigNumber;
}>;
export declare type ChangeMinQuorumEventFilter = TypedEventFilter<ChangeMinQuorumEvent>;
export declare type ChangeVoteTimeEvent = TypedEvent<[
    BigNumber
], {
    voteTime: BigNumber;
}>;
export declare type ChangeVoteTimeEventFilter = TypedEventFilter<ChangeVoteTimeEvent>;
export declare type ChangeObjectionPhaseTimeEvent = TypedEvent<[
    BigNumber
], {
    objectionPhaseTime: BigNumber;
}>;
export declare type ChangeObjectionPhaseTimeEventFilter = TypedEventFilter<ChangeObjectionPhaseTimeEvent>;
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
export interface AragonVoting extends BaseContract {
    contractName: "AragonVoting";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AragonVotingInterface;
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
        unsafelyChangeObjectionPhaseTime(_objectionPhaseTime: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initialize(_token: string, _supportRequiredPct: BigNumberish, _minAcceptQuorumPct: BigNumberish, _voteTime: BigNumberish, _objectionPhaseTime: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        UNSAFELY_MODIFY_VOTE_TIME_ROLE(overrides?: CallOverrides): Promise<[string]>;
        unsafelyChangeVoteTime(_voteTime: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getEVMScriptExecutor(_script: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getRecoveryVault(overrides?: CallOverrides): Promise<[string]>;
        MODIFY_QUORUM_ROLE(overrides?: CallOverrides): Promise<[string]>;
        objectionPhaseTime(overrides?: CallOverrides): Promise<[BigNumber]>;
        getVoterState(_voteId: BigNumberish, _voter: string, overrides?: CallOverrides): Promise<[number]>;
        getVote(_voteId: BigNumberish, overrides?: CallOverrides): Promise<[
            boolean,
            boolean,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            string,
            number
        ] & {
            open: boolean;
            executed: boolean;
            startDate: BigNumber;
            snapshotBlock: BigNumber;
            supportRequired: BigNumber;
            minAcceptQuorum: BigNumber;
            yea: BigNumber;
            nay: BigNumber;
            votingPower: BigNumber;
            script: string;
            phase: number;
        }>;
        changeMinAcceptQuorumPct(_minAcceptQuorumPct: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        MODIFY_SUPPORT_ROLE(overrides?: CallOverrides): Promise<[string]>;
        changeSupportRequiredPct(_supportRequiredPct: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        allowRecoverability(token: string, overrides?: CallOverrides): Promise<[boolean]>;
        appId(overrides?: CallOverrides): Promise<[string]>;
        getInitializationBlock(overrides?: CallOverrides): Promise<[BigNumber]>;
        transferToVault(_token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        canPerform(_sender: string, _role: BytesLike, _params: BigNumberish[], overrides?: CallOverrides): Promise<[boolean]>;
        getEVMScriptRegistry(overrides?: CallOverrides): Promise<[string]>;
        voteTime(overrides?: CallOverrides): Promise<[BigNumber]>;
        CREATE_VOTES_ROLE(overrides?: CallOverrides): Promise<[string]>;
        canForward(_sender: string, arg1: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        canExecute(_voteId: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        canVote(_voteId: BigNumberish, _voter: string, overrides?: CallOverrides): Promise<[boolean]>;
        kernel(overrides?: CallOverrides): Promise<[string]>;
        "newVote(bytes,string)"(_executionScript: BytesLike, _metadata: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "newVote(bytes,string,bool,bool)"(_executionScript: BytesLike, _metadata: string, _castVote: boolean, _executesIfDecided_deprecated: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        forward(_evmScript: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        minAcceptQuorumPct(overrides?: CallOverrides): Promise<[BigNumber]>;
        isPetrified(overrides?: CallOverrides): Promise<[boolean]>;
        votesLength(overrides?: CallOverrides): Promise<[BigNumber]>;
        vote(_voteId: BigNumberish, _supports: boolean, _executesIfDecided_deprecated: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getVotePhase(_voteId: BigNumberish, overrides?: CallOverrides): Promise<[number]>;
        executeVote(_voteId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        supportRequiredPct(overrides?: CallOverrides): Promise<[BigNumber]>;
        token(overrides?: CallOverrides): Promise<[string]>;
        PCT_BASE(overrides?: CallOverrides): Promise<[BigNumber]>;
        isForwarder(overrides?: CallOverrides): Promise<[boolean]>;
    };
    hasInitialized(overrides?: CallOverrides): Promise<boolean>;
    unsafelyChangeObjectionPhaseTime(_objectionPhaseTime: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initialize(_token: string, _supportRequiredPct: BigNumberish, _minAcceptQuorumPct: BigNumberish, _voteTime: BigNumberish, _objectionPhaseTime: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    UNSAFELY_MODIFY_VOTE_TIME_ROLE(overrides?: CallOverrides): Promise<string>;
    unsafelyChangeVoteTime(_voteTime: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getEVMScriptExecutor(_script: BytesLike, overrides?: CallOverrides): Promise<string>;
    getRecoveryVault(overrides?: CallOverrides): Promise<string>;
    MODIFY_QUORUM_ROLE(overrides?: CallOverrides): Promise<string>;
    objectionPhaseTime(overrides?: CallOverrides): Promise<BigNumber>;
    getVoterState(_voteId: BigNumberish, _voter: string, overrides?: CallOverrides): Promise<number>;
    getVote(_voteId: BigNumberish, overrides?: CallOverrides): Promise<[
        boolean,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        number
    ] & {
        open: boolean;
        executed: boolean;
        startDate: BigNumber;
        snapshotBlock: BigNumber;
        supportRequired: BigNumber;
        minAcceptQuorum: BigNumber;
        yea: BigNumber;
        nay: BigNumber;
        votingPower: BigNumber;
        script: string;
        phase: number;
    }>;
    changeMinAcceptQuorumPct(_minAcceptQuorumPct: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    MODIFY_SUPPORT_ROLE(overrides?: CallOverrides): Promise<string>;
    changeSupportRequiredPct(_supportRequiredPct: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    allowRecoverability(token: string, overrides?: CallOverrides): Promise<boolean>;
    appId(overrides?: CallOverrides): Promise<string>;
    getInitializationBlock(overrides?: CallOverrides): Promise<BigNumber>;
    transferToVault(_token: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    canPerform(_sender: string, _role: BytesLike, _params: BigNumberish[], overrides?: CallOverrides): Promise<boolean>;
    getEVMScriptRegistry(overrides?: CallOverrides): Promise<string>;
    voteTime(overrides?: CallOverrides): Promise<BigNumber>;
    CREATE_VOTES_ROLE(overrides?: CallOverrides): Promise<string>;
    canForward(_sender: string, arg1: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    canExecute(_voteId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    canVote(_voteId: BigNumberish, _voter: string, overrides?: CallOverrides): Promise<boolean>;
    kernel(overrides?: CallOverrides): Promise<string>;
    "newVote(bytes,string)"(_executionScript: BytesLike, _metadata: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "newVote(bytes,string,bool,bool)"(_executionScript: BytesLike, _metadata: string, _castVote: boolean, _executesIfDecided_deprecated: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    forward(_evmScript: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    minAcceptQuorumPct(overrides?: CallOverrides): Promise<BigNumber>;
    isPetrified(overrides?: CallOverrides): Promise<boolean>;
    votesLength(overrides?: CallOverrides): Promise<BigNumber>;
    vote(_voteId: BigNumberish, _supports: boolean, _executesIfDecided_deprecated: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getVotePhase(_voteId: BigNumberish, overrides?: CallOverrides): Promise<number>;
    executeVote(_voteId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    supportRequiredPct(overrides?: CallOverrides): Promise<BigNumber>;
    token(overrides?: CallOverrides): Promise<string>;
    PCT_BASE(overrides?: CallOverrides): Promise<BigNumber>;
    isForwarder(overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        hasInitialized(overrides?: CallOverrides): Promise<boolean>;
        unsafelyChangeObjectionPhaseTime(_objectionPhaseTime: BigNumberish, overrides?: CallOverrides): Promise<void>;
        initialize(_token: string, _supportRequiredPct: BigNumberish, _minAcceptQuorumPct: BigNumberish, _voteTime: BigNumberish, _objectionPhaseTime: BigNumberish, overrides?: CallOverrides): Promise<void>;
        UNSAFELY_MODIFY_VOTE_TIME_ROLE(overrides?: CallOverrides): Promise<string>;
        unsafelyChangeVoteTime(_voteTime: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getEVMScriptExecutor(_script: BytesLike, overrides?: CallOverrides): Promise<string>;
        getRecoveryVault(overrides?: CallOverrides): Promise<string>;
        MODIFY_QUORUM_ROLE(overrides?: CallOverrides): Promise<string>;
        objectionPhaseTime(overrides?: CallOverrides): Promise<BigNumber>;
        getVoterState(_voteId: BigNumberish, _voter: string, overrides?: CallOverrides): Promise<number>;
        getVote(_voteId: BigNumberish, overrides?: CallOverrides): Promise<[
            boolean,
            boolean,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            string,
            number
        ] & {
            open: boolean;
            executed: boolean;
            startDate: BigNumber;
            snapshotBlock: BigNumber;
            supportRequired: BigNumber;
            minAcceptQuorum: BigNumber;
            yea: BigNumber;
            nay: BigNumber;
            votingPower: BigNumber;
            script: string;
            phase: number;
        }>;
        changeMinAcceptQuorumPct(_minAcceptQuorumPct: BigNumberish, overrides?: CallOverrides): Promise<void>;
        MODIFY_SUPPORT_ROLE(overrides?: CallOverrides): Promise<string>;
        changeSupportRequiredPct(_supportRequiredPct: BigNumberish, overrides?: CallOverrides): Promise<void>;
        allowRecoverability(token: string, overrides?: CallOverrides): Promise<boolean>;
        appId(overrides?: CallOverrides): Promise<string>;
        getInitializationBlock(overrides?: CallOverrides): Promise<BigNumber>;
        transferToVault(_token: string, overrides?: CallOverrides): Promise<void>;
        canPerform(_sender: string, _role: BytesLike, _params: BigNumberish[], overrides?: CallOverrides): Promise<boolean>;
        getEVMScriptRegistry(overrides?: CallOverrides): Promise<string>;
        voteTime(overrides?: CallOverrides): Promise<BigNumber>;
        CREATE_VOTES_ROLE(overrides?: CallOverrides): Promise<string>;
        canForward(_sender: string, arg1: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        canExecute(_voteId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        canVote(_voteId: BigNumberish, _voter: string, overrides?: CallOverrides): Promise<boolean>;
        kernel(overrides?: CallOverrides): Promise<string>;
        "newVote(bytes,string)"(_executionScript: BytesLike, _metadata: string, overrides?: CallOverrides): Promise<BigNumber>;
        "newVote(bytes,string,bool,bool)"(_executionScript: BytesLike, _metadata: string, _castVote: boolean, _executesIfDecided_deprecated: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        forward(_evmScript: BytesLike, overrides?: CallOverrides): Promise<void>;
        minAcceptQuorumPct(overrides?: CallOverrides): Promise<BigNumber>;
        isPetrified(overrides?: CallOverrides): Promise<boolean>;
        votesLength(overrides?: CallOverrides): Promise<BigNumber>;
        vote(_voteId: BigNumberish, _supports: boolean, _executesIfDecided_deprecated: boolean, overrides?: CallOverrides): Promise<void>;
        getVotePhase(_voteId: BigNumberish, overrides?: CallOverrides): Promise<number>;
        executeVote(_voteId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        supportRequiredPct(overrides?: CallOverrides): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<string>;
        PCT_BASE(overrides?: CallOverrides): Promise<BigNumber>;
        isForwarder(overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "StartVote(uint256,address,string)"(voteId?: BigNumberish | null, creator?: string | null, metadata?: null): StartVoteEventFilter;
        StartVote(voteId?: BigNumberish | null, creator?: string | null, metadata?: null): StartVoteEventFilter;
        "CastVote(uint256,address,bool,uint256)"(voteId?: BigNumberish | null, voter?: string | null, supports?: null, stake?: null): CastVoteEventFilter;
        CastVote(voteId?: BigNumberish | null, voter?: string | null, supports?: null, stake?: null): CastVoteEventFilter;
        "CastObjection(uint256,address,uint256)"(voteId?: BigNumberish | null, voter?: string | null, stake?: null): CastObjectionEventFilter;
        CastObjection(voteId?: BigNumberish | null, voter?: string | null, stake?: null): CastObjectionEventFilter;
        "ExecuteVote(uint256)"(voteId?: BigNumberish | null): ExecuteVoteEventFilter;
        ExecuteVote(voteId?: BigNumberish | null): ExecuteVoteEventFilter;
        "ChangeSupportRequired(uint64)"(supportRequiredPct?: null): ChangeSupportRequiredEventFilter;
        ChangeSupportRequired(supportRequiredPct?: null): ChangeSupportRequiredEventFilter;
        "ChangeMinQuorum(uint64)"(minAcceptQuorumPct?: null): ChangeMinQuorumEventFilter;
        ChangeMinQuorum(minAcceptQuorumPct?: null): ChangeMinQuorumEventFilter;
        "ChangeVoteTime(uint64)"(voteTime?: null): ChangeVoteTimeEventFilter;
        ChangeVoteTime(voteTime?: null): ChangeVoteTimeEventFilter;
        "ChangeObjectionPhaseTime(uint64)"(objectionPhaseTime?: null): ChangeObjectionPhaseTimeEventFilter;
        ChangeObjectionPhaseTime(objectionPhaseTime?: null): ChangeObjectionPhaseTimeEventFilter;
        "ScriptResult(address,bytes,bytes,bytes)"(executor?: string | null, script?: null, input?: null, returnData?: null): ScriptResultEventFilter;
        ScriptResult(executor?: string | null, script?: null, input?: null, returnData?: null): ScriptResultEventFilter;
        "RecoverToVault(address,address,uint256)"(vault?: string | null, token?: string | null, amount?: null): RecoverToVaultEventFilter;
        RecoverToVault(vault?: string | null, token?: string | null, amount?: null): RecoverToVaultEventFilter;
    };
    estimateGas: {
        hasInitialized(overrides?: CallOverrides): Promise<BigNumber>;
        unsafelyChangeObjectionPhaseTime(_objectionPhaseTime: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initialize(_token: string, _supportRequiredPct: BigNumberish, _minAcceptQuorumPct: BigNumberish, _voteTime: BigNumberish, _objectionPhaseTime: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        UNSAFELY_MODIFY_VOTE_TIME_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        unsafelyChangeVoteTime(_voteTime: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getEVMScriptExecutor(_script: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getRecoveryVault(overrides?: CallOverrides): Promise<BigNumber>;
        MODIFY_QUORUM_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        objectionPhaseTime(overrides?: CallOverrides): Promise<BigNumber>;
        getVoterState(_voteId: BigNumberish, _voter: string, overrides?: CallOverrides): Promise<BigNumber>;
        getVote(_voteId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        changeMinAcceptQuorumPct(_minAcceptQuorumPct: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        MODIFY_SUPPORT_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        changeSupportRequiredPct(_supportRequiredPct: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        allowRecoverability(token: string, overrides?: CallOverrides): Promise<BigNumber>;
        appId(overrides?: CallOverrides): Promise<BigNumber>;
        getInitializationBlock(overrides?: CallOverrides): Promise<BigNumber>;
        transferToVault(_token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        canPerform(_sender: string, _role: BytesLike, _params: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        getEVMScriptRegistry(overrides?: CallOverrides): Promise<BigNumber>;
        voteTime(overrides?: CallOverrides): Promise<BigNumber>;
        CREATE_VOTES_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        canForward(_sender: string, arg1: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        canExecute(_voteId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        canVote(_voteId: BigNumberish, _voter: string, overrides?: CallOverrides): Promise<BigNumber>;
        kernel(overrides?: CallOverrides): Promise<BigNumber>;
        "newVote(bytes,string)"(_executionScript: BytesLike, _metadata: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "newVote(bytes,string,bool,bool)"(_executionScript: BytesLike, _metadata: string, _castVote: boolean, _executesIfDecided_deprecated: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        forward(_evmScript: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        minAcceptQuorumPct(overrides?: CallOverrides): Promise<BigNumber>;
        isPetrified(overrides?: CallOverrides): Promise<BigNumber>;
        votesLength(overrides?: CallOverrides): Promise<BigNumber>;
        vote(_voteId: BigNumberish, _supports: boolean, _executesIfDecided_deprecated: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getVotePhase(_voteId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        executeVote(_voteId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        supportRequiredPct(overrides?: CallOverrides): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
        PCT_BASE(overrides?: CallOverrides): Promise<BigNumber>;
        isForwarder(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        hasInitialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unsafelyChangeObjectionPhaseTime(_objectionPhaseTime: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initialize(_token: string, _supportRequiredPct: BigNumberish, _minAcceptQuorumPct: BigNumberish, _voteTime: BigNumberish, _objectionPhaseTime: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        UNSAFELY_MODIFY_VOTE_TIME_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unsafelyChangeVoteTime(_voteTime: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getEVMScriptExecutor(_script: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRecoveryVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MODIFY_QUORUM_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        objectionPhaseTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getVoterState(_voteId: BigNumberish, _voter: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getVote(_voteId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        changeMinAcceptQuorumPct(_minAcceptQuorumPct: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        MODIFY_SUPPORT_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        changeSupportRequiredPct(_supportRequiredPct: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        allowRecoverability(token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        appId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getInitializationBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferToVault(_token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        canPerform(_sender: string, _role: BytesLike, _params: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getEVMScriptRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        voteTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        CREATE_VOTES_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        canForward(_sender: string, arg1: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        canExecute(_voteId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        canVote(_voteId: BigNumberish, _voter: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        kernel(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "newVote(bytes,string)"(_executionScript: BytesLike, _metadata: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "newVote(bytes,string,bool,bool)"(_executionScript: BytesLike, _metadata: string, _castVote: boolean, _executesIfDecided_deprecated: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        forward(_evmScript: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        minAcceptQuorumPct(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isPetrified(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        votesLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        vote(_voteId: BigNumberish, _supports: boolean, _executesIfDecided_deprecated: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getVotePhase(_voteId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        executeVote(_voteId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        supportRequiredPct(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PCT_BASE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isForwarder(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
