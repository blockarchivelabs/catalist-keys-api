import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace HashConsensus {
    type MemberConsensusStateStruct = {
        currentFrameRefSlot: BigNumberish;
        currentFrameConsensusReport: BytesLike;
        isMember: boolean;
        isFastLane: boolean;
        canReport: boolean;
        lastMemberReportRefSlot: BigNumberish;
        currentFrameMemberReport: BytesLike;
    };
    type MemberConsensusStateStructOutput = [
        BigNumber,
        string,
        boolean,
        boolean,
        boolean,
        BigNumber,
        string
    ] & {
        currentFrameRefSlot: BigNumber;
        currentFrameConsensusReport: string;
        isMember: boolean;
        isFastLane: boolean;
        canReport: boolean;
        lastMemberReportRefSlot: BigNumber;
        currentFrameMemberReport: string;
    };
}
export interface HashConsensusInterface extends utils.Interface {
    contractName: "HashConsensus";
    functions: {
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "DISABLE_CONSENSUS_ROLE()": FunctionFragment;
        "MANAGE_FAST_LANE_CONFIG_ROLE()": FunctionFragment;
        "MANAGE_FRAME_CONFIG_ROLE()": FunctionFragment;
        "MANAGE_MEMBERS_AND_QUORUM_ROLE()": FunctionFragment;
        "MANAGE_REPORT_PROCESSOR_ROLE()": FunctionFragment;
        "addMember(address,uint256)": FunctionFragment;
        "disableConsensus()": FunctionFragment;
        "getChainConfig()": FunctionFragment;
        "getConsensusState()": FunctionFragment;
        "getConsensusStateForMember(address)": FunctionFragment;
        "getCurrentFrame()": FunctionFragment;
        "getFastLaneMembers()": FunctionFragment;
        "getFrameConfig()": FunctionFragment;
        "getInitialRefSlot()": FunctionFragment;
        "getIsFastLaneMember(address)": FunctionFragment;
        "getIsMember(address)": FunctionFragment;
        "getMembers()": FunctionFragment;
        "getQuorum()": FunctionFragment;
        "getReportProcessor()": FunctionFragment;
        "getReportVariants()": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "getRoleMember(bytes32,uint256)": FunctionFragment;
        "getRoleMemberCount(bytes32)": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "removeMember(address,uint256)": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "setFastLaneLengthSlots(uint256)": FunctionFragment;
        "setFrameConfig(uint256,uint256)": FunctionFragment;
        "setQuorum(uint256)": FunctionFragment;
        "setReportProcessor(address)": FunctionFragment;
        "submitReport(uint256,bytes32,uint256)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "updateInitialEpoch(uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "DISABLE_CONSENSUS_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MANAGE_FAST_LANE_CONFIG_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MANAGE_FRAME_CONFIG_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MANAGE_MEMBERS_AND_QUORUM_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MANAGE_REPORT_PROCESSOR_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "addMember", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "disableConsensus", values?: undefined): string;
    encodeFunctionData(functionFragment: "getChainConfig", values?: undefined): string;
    encodeFunctionData(functionFragment: "getConsensusState", values?: undefined): string;
    encodeFunctionData(functionFragment: "getConsensusStateForMember", values: [string]): string;
    encodeFunctionData(functionFragment: "getCurrentFrame", values?: undefined): string;
    encodeFunctionData(functionFragment: "getFastLaneMembers", values?: undefined): string;
    encodeFunctionData(functionFragment: "getFrameConfig", values?: undefined): string;
    encodeFunctionData(functionFragment: "getInitialRefSlot", values?: undefined): string;
    encodeFunctionData(functionFragment: "getIsFastLaneMember", values: [string]): string;
    encodeFunctionData(functionFragment: "getIsMember", values: [string]): string;
    encodeFunctionData(functionFragment: "getMembers", values?: undefined): string;
    encodeFunctionData(functionFragment: "getQuorum", values?: undefined): string;
    encodeFunctionData(functionFragment: "getReportProcessor", values?: undefined): string;
    encodeFunctionData(functionFragment: "getReportVariants", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getRoleMember", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRoleMemberCount", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "removeMember", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "setFastLaneLengthSlots", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setFrameConfig", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setQuorum", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setReportProcessor", values: [string]): string;
    encodeFunctionData(functionFragment: "submitReport", values: [BigNumberish, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "updateInitialEpoch", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DISABLE_CONSENSUS_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MANAGE_FAST_LANE_CONFIG_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MANAGE_FRAME_CONFIG_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MANAGE_MEMBERS_AND_QUORUM_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MANAGE_REPORT_PROCESSOR_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disableConsensus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getChainConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getConsensusState", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getConsensusStateForMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCurrentFrame", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFastLaneMembers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFrameConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getInitialRefSlot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getIsFastLaneMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getIsMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMembers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getQuorum", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReportProcessor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReportVariants", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMemberCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFastLaneLengthSlots", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFrameConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setQuorum", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReportProcessor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "submitReport", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateInitialEpoch", data: BytesLike): Result;
    events: {
        "ConsensusReached(uint256,bytes32,uint256)": EventFragment;
        "FastLaneConfigSet(uint256)": EventFragment;
        "FrameConfigSet(uint256,uint256)": EventFragment;
        "MemberAdded(address,uint256,uint256)": EventFragment;
        "MemberRemoved(address,uint256,uint256)": EventFragment;
        "QuorumSet(uint256,uint256,uint256)": EventFragment;
        "ReportProcessorSet(address,address)": EventFragment;
        "ReportReceived(uint256,address,bytes32)": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ConsensusReached"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FastLaneConfigSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FrameConfigSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MemberAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MemberRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "QuorumSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReportProcessorSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReportReceived"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
}
export declare type ConsensusReachedEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber
], {
    refSlot: BigNumber;
    report: string;
    support: BigNumber;
}>;
export declare type ConsensusReachedEventFilter = TypedEventFilter<ConsensusReachedEvent>;
export declare type FastLaneConfigSetEvent = TypedEvent<[
    BigNumber
], {
    fastLaneLengthSlots: BigNumber;
}>;
export declare type FastLaneConfigSetEventFilter = TypedEventFilter<FastLaneConfigSetEvent>;
export declare type FrameConfigSetEvent = TypedEvent<[
    BigNumber,
    BigNumber
], {
    newInitialEpoch: BigNumber;
    newEpochsPerFrame: BigNumber;
}>;
export declare type FrameConfigSetEventFilter = TypedEventFilter<FrameConfigSetEvent>;
export declare type MemberAddedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], {
    addr: string;
    newTotalMembers: BigNumber;
    newQuorum: BigNumber;
}>;
export declare type MemberAddedEventFilter = TypedEventFilter<MemberAddedEvent>;
export declare type MemberRemovedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], {
    addr: string;
    newTotalMembers: BigNumber;
    newQuorum: BigNumber;
}>;
export declare type MemberRemovedEventFilter = TypedEventFilter<MemberRemovedEvent>;
export declare type QuorumSetEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber
], {
    newQuorum: BigNumber;
    totalMembers: BigNumber;
    prevQuorum: BigNumber;
}>;
export declare type QuorumSetEventFilter = TypedEventFilter<QuorumSetEvent>;
export declare type ReportProcessorSetEvent = TypedEvent<[
    string,
    string
], {
    processor: string;
    prevProcessor: string;
}>;
export declare type ReportProcessorSetEventFilter = TypedEventFilter<ReportProcessorSetEvent>;
export declare type ReportReceivedEvent = TypedEvent<[
    BigNumber,
    string,
    string
], {
    refSlot: BigNumber;
    member: string;
    report: string;
}>;
export declare type ReportReceivedEventFilter = TypedEventFilter<ReportReceivedEvent>;
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
export interface HashConsensus extends BaseContract {
    contractName: "HashConsensus";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: HashConsensusInterface;
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
        DISABLE_CONSENSUS_ROLE(overrides?: CallOverrides): Promise<[string]>;
        MANAGE_FAST_LANE_CONFIG_ROLE(overrides?: CallOverrides): Promise<[string]>;
        MANAGE_FRAME_CONFIG_ROLE(overrides?: CallOverrides): Promise<[string]>;
        MANAGE_MEMBERS_AND_QUORUM_ROLE(overrides?: CallOverrides): Promise<[string]>;
        MANAGE_REPORT_PROCESSOR_ROLE(overrides?: CallOverrides): Promise<[string]>;
        addMember(addr: string, quorum: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        disableConsensus(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getChainConfig(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            slotsPerEpoch: BigNumber;
            secondsPerSlot: BigNumber;
            genesisTime: BigNumber;
        }>;
        getConsensusState(overrides?: CallOverrides): Promise<[
            BigNumber,
            string,
            boolean
        ] & {
            refSlot: BigNumber;
            consensusReport: string;
            isReportProcessing: boolean;
        }>;
        getConsensusStateForMember(addr: string, overrides?: CallOverrides): Promise<[
            HashConsensus.MemberConsensusStateStructOutput
        ] & {
            result: HashConsensus.MemberConsensusStateStructOutput;
        }>;
        getCurrentFrame(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            refSlot: BigNumber;
            reportProcessingDeadlineSlot: BigNumber;
        }>;
        getFastLaneMembers(overrides?: CallOverrides): Promise<[
            string[],
            BigNumber[]
        ] & {
            addresses: string[];
            lastReportedRefSlots: BigNumber[];
        }>;
        getFrameConfig(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            initialEpoch: BigNumber;
            epochsPerFrame: BigNumber;
            fastLaneLengthSlots: BigNumber;
        }>;
        getInitialRefSlot(overrides?: CallOverrides): Promise<[BigNumber]>;
        getIsFastLaneMember(addr: string, overrides?: CallOverrides): Promise<[boolean]>;
        getIsMember(addr: string, overrides?: CallOverrides): Promise<[boolean]>;
        getMembers(overrides?: CallOverrides): Promise<[
            string[],
            BigNumber[]
        ] & {
            addresses: string[];
            lastReportedRefSlots: BigNumber[];
        }>;
        getQuorum(overrides?: CallOverrides): Promise<[BigNumber]>;
        getReportProcessor(overrides?: CallOverrides): Promise<[string]>;
        getReportVariants(overrides?: CallOverrides): Promise<[
            string[],
            BigNumber[]
        ] & {
            variants: string[];
            support: BigNumber[];
        }>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<[boolean]>;
        removeMember(addr: string, quorum: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setFastLaneLengthSlots(fastLaneLengthSlots: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setFrameConfig(epochsPerFrame: BigNumberish, fastLaneLengthSlots: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setQuorum(quorum: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setReportProcessor(newProcessor: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        submitReport(slot: BigNumberish, report: BytesLike, consensusVersion: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        updateInitialEpoch(initialEpoch: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    DISABLE_CONSENSUS_ROLE(overrides?: CallOverrides): Promise<string>;
    MANAGE_FAST_LANE_CONFIG_ROLE(overrides?: CallOverrides): Promise<string>;
    MANAGE_FRAME_CONFIG_ROLE(overrides?: CallOverrides): Promise<string>;
    MANAGE_MEMBERS_AND_QUORUM_ROLE(overrides?: CallOverrides): Promise<string>;
    MANAGE_REPORT_PROCESSOR_ROLE(overrides?: CallOverrides): Promise<string>;
    addMember(addr: string, quorum: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    disableConsensus(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getChainConfig(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        slotsPerEpoch: BigNumber;
        secondsPerSlot: BigNumber;
        genesisTime: BigNumber;
    }>;
    getConsensusState(overrides?: CallOverrides): Promise<[
        BigNumber,
        string,
        boolean
    ] & {
        refSlot: BigNumber;
        consensusReport: string;
        isReportProcessing: boolean;
    }>;
    getConsensusStateForMember(addr: string, overrides?: CallOverrides): Promise<HashConsensus.MemberConsensusStateStructOutput>;
    getCurrentFrame(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        refSlot: BigNumber;
        reportProcessingDeadlineSlot: BigNumber;
    }>;
    getFastLaneMembers(overrides?: CallOverrides): Promise<[
        string[],
        BigNumber[]
    ] & {
        addresses: string[];
        lastReportedRefSlots: BigNumber[];
    }>;
    getFrameConfig(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        initialEpoch: BigNumber;
        epochsPerFrame: BigNumber;
        fastLaneLengthSlots: BigNumber;
    }>;
    getInitialRefSlot(overrides?: CallOverrides): Promise<BigNumber>;
    getIsFastLaneMember(addr: string, overrides?: CallOverrides): Promise<boolean>;
    getIsMember(addr: string, overrides?: CallOverrides): Promise<boolean>;
    getMembers(overrides?: CallOverrides): Promise<[
        string[],
        BigNumber[]
    ] & {
        addresses: string[];
        lastReportedRefSlots: BigNumber[];
    }>;
    getQuorum(overrides?: CallOverrides): Promise<BigNumber>;
    getReportProcessor(overrides?: CallOverrides): Promise<string>;
    getReportVariants(overrides?: CallOverrides): Promise<[
        string[],
        BigNumber[]
    ] & {
        variants: string[];
        support: BigNumber[];
    }>;
    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
    getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    grantRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
    removeMember(addr: string, quorum: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setFastLaneLengthSlots(fastLaneLengthSlots: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setFrameConfig(epochsPerFrame: BigNumberish, fastLaneLengthSlots: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setQuorum(quorum: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setReportProcessor(newProcessor: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    submitReport(slot: BigNumberish, report: BytesLike, consensusVersion: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    updateInitialEpoch(initialEpoch: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        DISABLE_CONSENSUS_ROLE(overrides?: CallOverrides): Promise<string>;
        MANAGE_FAST_LANE_CONFIG_ROLE(overrides?: CallOverrides): Promise<string>;
        MANAGE_FRAME_CONFIG_ROLE(overrides?: CallOverrides): Promise<string>;
        MANAGE_MEMBERS_AND_QUORUM_ROLE(overrides?: CallOverrides): Promise<string>;
        MANAGE_REPORT_PROCESSOR_ROLE(overrides?: CallOverrides): Promise<string>;
        addMember(addr: string, quorum: BigNumberish, overrides?: CallOverrides): Promise<void>;
        disableConsensus(overrides?: CallOverrides): Promise<void>;
        getChainConfig(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            slotsPerEpoch: BigNumber;
            secondsPerSlot: BigNumber;
            genesisTime: BigNumber;
        }>;
        getConsensusState(overrides?: CallOverrides): Promise<[
            BigNumber,
            string,
            boolean
        ] & {
            refSlot: BigNumber;
            consensusReport: string;
            isReportProcessing: boolean;
        }>;
        getConsensusStateForMember(addr: string, overrides?: CallOverrides): Promise<HashConsensus.MemberConsensusStateStructOutput>;
        getCurrentFrame(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            refSlot: BigNumber;
            reportProcessingDeadlineSlot: BigNumber;
        }>;
        getFastLaneMembers(overrides?: CallOverrides): Promise<[
            string[],
            BigNumber[]
        ] & {
            addresses: string[];
            lastReportedRefSlots: BigNumber[];
        }>;
        getFrameConfig(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            initialEpoch: BigNumber;
            epochsPerFrame: BigNumber;
            fastLaneLengthSlots: BigNumber;
        }>;
        getInitialRefSlot(overrides?: CallOverrides): Promise<BigNumber>;
        getIsFastLaneMember(addr: string, overrides?: CallOverrides): Promise<boolean>;
        getIsMember(addr: string, overrides?: CallOverrides): Promise<boolean>;
        getMembers(overrides?: CallOverrides): Promise<[
            string[],
            BigNumber[]
        ] & {
            addresses: string[];
            lastReportedRefSlots: BigNumber[];
        }>;
        getQuorum(overrides?: CallOverrides): Promise<BigNumber>;
        getReportProcessor(overrides?: CallOverrides): Promise<string>;
        getReportVariants(overrides?: CallOverrides): Promise<[
            string[],
            BigNumber[]
        ] & {
            variants: string[];
            support: BigNumber[];
        }>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
        removeMember(addr: string, quorum: BigNumberish, overrides?: CallOverrides): Promise<void>;
        renounceRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        revokeRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        setFastLaneLengthSlots(fastLaneLengthSlots: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setFrameConfig(epochsPerFrame: BigNumberish, fastLaneLengthSlots: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setQuorum(quorum: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setReportProcessor(newProcessor: string, overrides?: CallOverrides): Promise<void>;
        submitReport(slot: BigNumberish, report: BytesLike, consensusVersion: BigNumberish, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        updateInitialEpoch(initialEpoch: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ConsensusReached(uint256,bytes32,uint256)"(refSlot?: BigNumberish | null, report?: null, support?: null): ConsensusReachedEventFilter;
        ConsensusReached(refSlot?: BigNumberish | null, report?: null, support?: null): ConsensusReachedEventFilter;
        "FastLaneConfigSet(uint256)"(fastLaneLengthSlots?: null): FastLaneConfigSetEventFilter;
        FastLaneConfigSet(fastLaneLengthSlots?: null): FastLaneConfigSetEventFilter;
        "FrameConfigSet(uint256,uint256)"(newInitialEpoch?: null, newEpochsPerFrame?: null): FrameConfigSetEventFilter;
        FrameConfigSet(newInitialEpoch?: null, newEpochsPerFrame?: null): FrameConfigSetEventFilter;
        "MemberAdded(address,uint256,uint256)"(addr?: string | null, newTotalMembers?: null, newQuorum?: null): MemberAddedEventFilter;
        MemberAdded(addr?: string | null, newTotalMembers?: null, newQuorum?: null): MemberAddedEventFilter;
        "MemberRemoved(address,uint256,uint256)"(addr?: string | null, newTotalMembers?: null, newQuorum?: null): MemberRemovedEventFilter;
        MemberRemoved(addr?: string | null, newTotalMembers?: null, newQuorum?: null): MemberRemovedEventFilter;
        "QuorumSet(uint256,uint256,uint256)"(newQuorum?: null, totalMembers?: null, prevQuorum?: null): QuorumSetEventFilter;
        QuorumSet(newQuorum?: null, totalMembers?: null, prevQuorum?: null): QuorumSetEventFilter;
        "ReportProcessorSet(address,address)"(processor?: string | null, prevProcessor?: string | null): ReportProcessorSetEventFilter;
        ReportProcessorSet(processor?: string | null, prevProcessor?: string | null): ReportProcessorSetEventFilter;
        "ReportReceived(uint256,address,bytes32)"(refSlot?: BigNumberish | null, member?: string | null, report?: null): ReportReceivedEventFilter;
        ReportReceived(refSlot?: BigNumberish | null, member?: string | null, report?: null): ReportReceivedEventFilter;
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        RoleAdminChanged(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        "RoleGranted(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        RoleGranted(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        "RoleRevoked(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
        RoleRevoked(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
    };
    estimateGas: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        DISABLE_CONSENSUS_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        MANAGE_FAST_LANE_CONFIG_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        MANAGE_FRAME_CONFIG_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        MANAGE_MEMBERS_AND_QUORUM_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        MANAGE_REPORT_PROCESSOR_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        addMember(addr: string, quorum: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        disableConsensus(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getChainConfig(overrides?: CallOverrides): Promise<BigNumber>;
        getConsensusState(overrides?: CallOverrides): Promise<BigNumber>;
        getConsensusStateForMember(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentFrame(overrides?: CallOverrides): Promise<BigNumber>;
        getFastLaneMembers(overrides?: CallOverrides): Promise<BigNumber>;
        getFrameConfig(overrides?: CallOverrides): Promise<BigNumber>;
        getInitialRefSlot(overrides?: CallOverrides): Promise<BigNumber>;
        getIsFastLaneMember(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
        getIsMember(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
        getMembers(overrides?: CallOverrides): Promise<BigNumber>;
        getQuorum(overrides?: CallOverrides): Promise<BigNumber>;
        getReportProcessor(overrides?: CallOverrides): Promise<BigNumber>;
        getReportVariants(overrides?: CallOverrides): Promise<BigNumber>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        removeMember(addr: string, quorum: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setFastLaneLengthSlots(fastLaneLengthSlots: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setFrameConfig(epochsPerFrame: BigNumberish, fastLaneLengthSlots: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setQuorum(quorum: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setReportProcessor(newProcessor: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        submitReport(slot: BigNumberish, report: BytesLike, consensusVersion: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        updateInitialEpoch(initialEpoch: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DISABLE_CONSENSUS_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MANAGE_FAST_LANE_CONFIG_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MANAGE_FRAME_CONFIG_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MANAGE_MEMBERS_AND_QUORUM_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MANAGE_REPORT_PROCESSOR_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addMember(addr: string, quorum: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        disableConsensus(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getChainConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getConsensusState(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getConsensusStateForMember(addr: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCurrentFrame(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFastLaneMembers(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFrameConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getInitialRefSlot(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getIsFastLaneMember(addr: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getIsMember(addr: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMembers(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getQuorum(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReportProcessor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReportVariants(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeMember(addr: string, quorum: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setFastLaneLengthSlots(fastLaneLengthSlots: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setFrameConfig(epochsPerFrame: BigNumberish, fastLaneLengthSlots: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setQuorum(quorum: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setReportProcessor(newProcessor: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        submitReport(slot: BigNumberish, report: BytesLike, consensusVersion: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updateInitialEpoch(initialEpoch: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
