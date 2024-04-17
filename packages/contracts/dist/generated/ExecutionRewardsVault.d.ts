import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ExecutionRewardsVaultInterface extends utils.Interface {
    contractName: "ExecutionRewardsVault";
    functions: {
        "CATALIST()": FunctionFragment;
        "TREASURY()": FunctionFragment;
        "recoverERC20(address,uint256)": FunctionFragment;
        "recoverERC721(address,uint256)": FunctionFragment;
        "withdrawRewards(uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "CATALIST", values?: undefined): string;
    encodeFunctionData(functionFragment: "TREASURY", values?: undefined): string;
    encodeFunctionData(functionFragment: "recoverERC20", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "recoverERC721", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdrawRewards", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "CATALIST", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "TREASURY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "recoverERC20", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "recoverERC721", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawRewards", data: BytesLike): Result;
    events: {
        "ERC20Recovered(address,address,uint256)": EventFragment;
        "ERC721Recovered(address,address,uint256)": EventFragment;
        "ACEReceived(uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ERC20Recovered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ERC721Recovered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ACEReceived"): EventFragment;
}
export declare type ERC20RecoveredEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    requestedBy: string;
    token: string;
    amount: BigNumber;
}>;
export declare type ERC20RecoveredEventFilter = TypedEventFilter<ERC20RecoveredEvent>;
export declare type ERC721RecoveredEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    requestedBy: string;
    token: string;
    tokenId: BigNumber;
}>;
export declare type ERC721RecoveredEventFilter = TypedEventFilter<ERC721RecoveredEvent>;
export declare type ACEReceivedEvent = TypedEvent<[BigNumber], {
    amount: BigNumber;
}>;
export declare type ACEReceivedEventFilter = TypedEventFilter<ACEReceivedEvent>;
export interface ExecutionRewardsVault extends BaseContract {
    contractName: "ExecutionRewardsVault";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ExecutionRewardsVaultInterface;
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
        CATALIST(overrides?: CallOverrides): Promise<[string]>;
        TREASURY(overrides?: CallOverrides): Promise<[string]>;
        recoverERC20(_token: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        recoverERC721(_token: string, _tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdrawRewards(_maxAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    CATALIST(overrides?: CallOverrides): Promise<string>;
    TREASURY(overrides?: CallOverrides): Promise<string>;
    recoverERC20(_token: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    recoverERC721(_token: string, _tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdrawRewards(_maxAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        CATALIST(overrides?: CallOverrides): Promise<string>;
        TREASURY(overrides?: CallOverrides): Promise<string>;
        recoverERC20(_token: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        recoverERC721(_token: string, _tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        withdrawRewards(_maxAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "ERC20Recovered(address,address,uint256)"(requestedBy?: string | null, token?: string | null, amount?: null): ERC20RecoveredEventFilter;
        ERC20Recovered(requestedBy?: string | null, token?: string | null, amount?: null): ERC20RecoveredEventFilter;
        "ERC721Recovered(address,address,uint256)"(requestedBy?: string | null, token?: string | null, tokenId?: null): ERC721RecoveredEventFilter;
        ERC721Recovered(requestedBy?: string | null, token?: string | null, tokenId?: null): ERC721RecoveredEventFilter;
        "ACEReceived(uint256)"(amount?: null): ACEReceivedEventFilter;
        ACEReceived(amount?: null): ACEReceivedEventFilter;
    };
    estimateGas: {
        CATALIST(overrides?: CallOverrides): Promise<BigNumber>;
        TREASURY(overrides?: CallOverrides): Promise<BigNumber>;
        recoverERC20(_token: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        recoverERC721(_token: string, _tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdrawRewards(_maxAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        CATALIST(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        TREASURY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        recoverERC20(_token: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        recoverERC721(_token: string, _tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdrawRewards(_maxAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
