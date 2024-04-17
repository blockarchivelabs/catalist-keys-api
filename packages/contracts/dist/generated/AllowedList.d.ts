import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface AllowedListInterface extends utils.Interface {
    contractName: "AllowedList";
    functions: {
        "get_relays_amount()": FunctionFragment;
        "get_owner()": FunctionFragment;
        "get_manager()": FunctionFragment;
        "get_relays()": FunctionFragment;
        "get_relay_by_uri(string)": FunctionFragment;
        "get_allowed_list_version()": FunctionFragment;
        "add_relay(string,string,bool,string)": FunctionFragment;
        "remove_relay(string)": FunctionFragment;
        "change_owner(address)": FunctionFragment;
        "set_manager(address)": FunctionFragment;
        "dismiss_manager()": FunctionFragment;
        "recover_erc20(address,uint256,address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "get_relays_amount", values?: undefined): string;
    encodeFunctionData(functionFragment: "get_owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "get_manager", values?: undefined): string;
    encodeFunctionData(functionFragment: "get_relays", values?: undefined): string;
    encodeFunctionData(functionFragment: "get_relay_by_uri", values: [string]): string;
    encodeFunctionData(functionFragment: "get_allowed_list_version", values?: undefined): string;
    encodeFunctionData(functionFragment: "add_relay", values: [string, string, boolean, string]): string;
    encodeFunctionData(functionFragment: "remove_relay", values: [string]): string;
    encodeFunctionData(functionFragment: "change_owner", values: [string]): string;
    encodeFunctionData(functionFragment: "set_manager", values: [string]): string;
    encodeFunctionData(functionFragment: "dismiss_manager", values?: undefined): string;
    encodeFunctionData(functionFragment: "recover_erc20", values: [string, BigNumberish, string]): string;
    decodeFunctionResult(functionFragment: "get_relays_amount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_manager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_relays", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_relay_by_uri", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_allowed_list_version", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "add_relay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remove_relay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "change_owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "set_manager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dismiss_manager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "recover_erc20", data: BytesLike): Result;
    events: {
        "RelayAdded(string,tuple)": EventFragment;
        "RelayRemoved(string,string)": EventFragment;
        "AllowedListUpdated(uint256)": EventFragment;
        "OwnerChanged(address)": EventFragment;
        "ManagerChanged(address)": EventFragment;
        "ERC20Recovered(address,uint256,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "RelayAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RelayRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AllowedListUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnerChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ManagerChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ERC20Recovered"): EventFragment;
}
export declare type RelayAddedEvent = TypedEvent<[
    string,
    [
        string,
        string,
        boolean,
        string
    ] & {
        uri: string;
        operator: string;
        is_mandatory: boolean;
        description: string;
    }
], {
    uri_hash: string;
    relay: [string, string, boolean, string] & {
        uri: string;
        operator: string;
        is_mandatory: boolean;
        description: string;
    };
}>;
export declare type RelayAddedEventFilter = TypedEventFilter<RelayAddedEvent>;
export declare type RelayRemovedEvent = TypedEvent<[
    string,
    string
], {
    uri_hash: string;
    uri: string;
}>;
export declare type RelayRemovedEventFilter = TypedEventFilter<RelayRemovedEvent>;
export declare type AllowedListUpdatedEvent = TypedEvent<[
    BigNumber
], {
    allowed_list_version: BigNumber;
}>;
export declare type AllowedListUpdatedEventFilter = TypedEventFilter<AllowedListUpdatedEvent>;
export declare type OwnerChangedEvent = TypedEvent<[string], {
    new_owner: string;
}>;
export declare type OwnerChangedEventFilter = TypedEventFilter<OwnerChangedEvent>;
export declare type ManagerChangedEvent = TypedEvent<[string], {
    new_manager: string;
}>;
export declare type ManagerChangedEventFilter = TypedEventFilter<ManagerChangedEvent>;
export declare type ERC20RecoveredEvent = TypedEvent<[
    string,
    BigNumber,
    string
], {
    token: string;
    amount: BigNumber;
    recipient: string;
}>;
export declare type ERC20RecoveredEventFilter = TypedEventFilter<ERC20RecoveredEvent>;
export interface AllowedList extends BaseContract {
    contractName: "AllowedList";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AllowedListInterface;
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
        get_relays_amount(overrides?: CallOverrides): Promise<[BigNumber]>;
        get_owner(overrides?: CallOverrides): Promise<[string]>;
        get_manager(overrides?: CallOverrides): Promise<[string]>;
        get_relays(overrides?: CallOverrides): Promise<[
            ([string, string, boolean, string] & {
                uri: string;
                operator: string;
                is_mandatory: boolean;
                description: string;
            })[]
        ]>;
        get_relay_by_uri(relay_uri: string, overrides?: CallOverrides): Promise<[
            [
                string,
                string,
                boolean,
                string
            ] & {
                uri: string;
                operator: string;
                is_mandatory: boolean;
                description: string;
            }
        ]>;
        get_allowed_list_version(overrides?: CallOverrides): Promise<[BigNumber]>;
        add_relay(uri: string, operator: string, is_mandatory: boolean, description: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        remove_relay(uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        change_owner(owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        set_manager(manager: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        dismiss_manager(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        recover_erc20(token: string, amount: BigNumberish, recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    get_relays_amount(overrides?: CallOverrides): Promise<BigNumber>;
    get_owner(overrides?: CallOverrides): Promise<string>;
    get_manager(overrides?: CallOverrides): Promise<string>;
    get_relays(overrides?: CallOverrides): Promise<([string, string, boolean, string] & {
        uri: string;
        operator: string;
        is_mandatory: boolean;
        description: string;
    })[]>;
    get_relay_by_uri(relay_uri: string, overrides?: CallOverrides): Promise<[
        string,
        string,
        boolean,
        string
    ] & {
        uri: string;
        operator: string;
        is_mandatory: boolean;
        description: string;
    }>;
    get_allowed_list_version(overrides?: CallOverrides): Promise<BigNumber>;
    add_relay(uri: string, operator: string, is_mandatory: boolean, description: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    remove_relay(uri: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    change_owner(owner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    set_manager(manager: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    dismiss_manager(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    recover_erc20(token: string, amount: BigNumberish, recipient: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        get_relays_amount(overrides?: CallOverrides): Promise<BigNumber>;
        get_owner(overrides?: CallOverrides): Promise<string>;
        get_manager(overrides?: CallOverrides): Promise<string>;
        get_relays(overrides?: CallOverrides): Promise<([string, string, boolean, string] & {
            uri: string;
            operator: string;
            is_mandatory: boolean;
            description: string;
        })[]>;
        get_relay_by_uri(relay_uri: string, overrides?: CallOverrides): Promise<[
            string,
            string,
            boolean,
            string
        ] & {
            uri: string;
            operator: string;
            is_mandatory: boolean;
            description: string;
        }>;
        get_allowed_list_version(overrides?: CallOverrides): Promise<BigNumber>;
        add_relay(uri: string, operator: string, is_mandatory: boolean, description: string, overrides?: CallOverrides): Promise<void>;
        remove_relay(uri: string, overrides?: CallOverrides): Promise<void>;
        change_owner(owner: string, overrides?: CallOverrides): Promise<void>;
        set_manager(manager: string, overrides?: CallOverrides): Promise<void>;
        dismiss_manager(overrides?: CallOverrides): Promise<void>;
        recover_erc20(token: string, amount: BigNumberish, recipient: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "RelayAdded(string,tuple)"(uri_hash?: string | null, relay?: null): RelayAddedEventFilter;
        RelayAdded(uri_hash?: string | null, relay?: null): RelayAddedEventFilter;
        "RelayRemoved(string,string)"(uri_hash?: string | null, uri?: null): RelayRemovedEventFilter;
        RelayRemoved(uri_hash?: string | null, uri?: null): RelayRemovedEventFilter;
        "AllowedListUpdated(uint256)"(allowed_list_version?: BigNumberish | null): AllowedListUpdatedEventFilter;
        AllowedListUpdated(allowed_list_version?: BigNumberish | null): AllowedListUpdatedEventFilter;
        "OwnerChanged(address)"(new_owner?: string | null): OwnerChangedEventFilter;
        OwnerChanged(new_owner?: string | null): OwnerChangedEventFilter;
        "ManagerChanged(address)"(new_manager?: string | null): ManagerChangedEventFilter;
        ManagerChanged(new_manager?: string | null): ManagerChangedEventFilter;
        "ERC20Recovered(address,uint256,address)"(token?: string | null, amount?: null, recipient?: string | null): ERC20RecoveredEventFilter;
        ERC20Recovered(token?: string | null, amount?: null, recipient?: string | null): ERC20RecoveredEventFilter;
    };
    estimateGas: {
        get_relays_amount(overrides?: CallOverrides): Promise<BigNumber>;
        get_owner(overrides?: CallOverrides): Promise<BigNumber>;
        get_manager(overrides?: CallOverrides): Promise<BigNumber>;
        get_relays(overrides?: CallOverrides): Promise<BigNumber>;
        get_relay_by_uri(relay_uri: string, overrides?: CallOverrides): Promise<BigNumber>;
        get_allowed_list_version(overrides?: CallOverrides): Promise<BigNumber>;
        add_relay(uri: string, operator: string, is_mandatory: boolean, description: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        remove_relay(uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        change_owner(owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        set_manager(manager: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        dismiss_manager(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        recover_erc20(token: string, amount: BigNumberish, recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        get_relays_amount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_manager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_relays(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_relay_by_uri(relay_uri: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_allowed_list_version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        add_relay(uri: string, operator: string, is_mandatory: boolean, description: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        remove_relay(uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        change_owner(owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        set_manager(manager: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        dismiss_manager(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        recover_erc20(token: string, amount: BigNumberish, recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
