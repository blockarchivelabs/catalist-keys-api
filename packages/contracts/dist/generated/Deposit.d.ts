import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface DepositInterface extends utils.Interface {
    contractName: "Deposit";
    functions: {
        "deposit(bytes,bytes,bytes,bytes32)": FunctionFragment;
        "get_deposit_count()": FunctionFragment;
        "get_deposit_root()": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "deposit", values: [BytesLike, BytesLike, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "get_deposit_count", values?: undefined): string;
    encodeFunctionData(functionFragment: "get_deposit_root", values?: undefined): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_deposit_count", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_deposit_root", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    events: {
        "DepositEvent(bytes,bytes,bytes,bytes,bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "DepositEvent"): EventFragment;
}
export declare type DepositEventEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    string
], {
    pubkey: string;
    withdrawal_credentials: string;
    amount: string;
    signature: string;
    index: string;
}>;
export declare type DepositEventEventFilter = TypedEventFilter<DepositEventEvent>;
export interface Deposit extends BaseContract {
    contractName: "Deposit";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DepositInterface;
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
        deposit(pubkey: BytesLike, withdrawal_credentials: BytesLike, signature: BytesLike, deposit_data_root: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        get_deposit_count(overrides?: CallOverrides): Promise<[string]>;
        get_deposit_root(overrides?: CallOverrides): Promise<[string]>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
    };
    deposit(pubkey: BytesLike, withdrawal_credentials: BytesLike, signature: BytesLike, deposit_data_root: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    get_deposit_count(overrides?: CallOverrides): Promise<string>;
    get_deposit_root(overrides?: CallOverrides): Promise<string>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        deposit(pubkey: BytesLike, withdrawal_credentials: BytesLike, signature: BytesLike, deposit_data_root: BytesLike, overrides?: CallOverrides): Promise<void>;
        get_deposit_count(overrides?: CallOverrides): Promise<string>;
        get_deposit_root(overrides?: CallOverrides): Promise<string>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "DepositEvent(bytes,bytes,bytes,bytes,bytes)"(pubkey?: null, withdrawal_credentials?: null, amount?: null, signature?: null, index?: null): DepositEventEventFilter;
        DepositEvent(pubkey?: null, withdrawal_credentials?: null, amount?: null, signature?: null, index?: null): DepositEventEventFilter;
    };
    estimateGas: {
        deposit(pubkey: BytesLike, withdrawal_credentials: BytesLike, signature: BytesLike, deposit_data_root: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        get_deposit_count(overrides?: CallOverrides): Promise<BigNumber>;
        get_deposit_root(overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        deposit(pubkey: BytesLike, withdrawal_credentials: BytesLike, signature: BytesLike, deposit_data_root: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        get_deposit_count(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_deposit_root(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
