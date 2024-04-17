import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface LdoInterface extends utils.Interface {
    contractName: "Ldo";
    functions: {
        "name()": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "creationBlock()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "decimals()": FunctionFragment;
        "changeController(address)": FunctionFragment;
        "balanceOfAt(address,uint256)": FunctionFragment;
        "version()": FunctionFragment;
        "createCloneToken(string,uint8,string,uint256,bool)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "parentToken()": FunctionFragment;
        "generateTokens(address,uint256)": FunctionFragment;
        "symbol()": FunctionFragment;
        "totalSupplyAt(uint256)": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transfersEnabled()": FunctionFragment;
        "parentSnapShotBlock()": FunctionFragment;
        "approveAndCall(address,uint256,bytes)": FunctionFragment;
        "destroyTokens(address,uint256)": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "claimTokens(address)": FunctionFragment;
        "tokenFactory()": FunctionFragment;
        "enableTransfers(bool)": FunctionFragment;
        "controller()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "creationBlock", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "changeController", values: [string]): string;
    encodeFunctionData(functionFragment: "balanceOfAt", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "version", values?: undefined): string;
    encodeFunctionData(functionFragment: "createCloneToken", values: [string, BigNumberish, string, BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "parentToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "generateTokens", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupplyAt", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transfersEnabled", values?: undefined): string;
    encodeFunctionData(functionFragment: "parentSnapShotBlock", values?: undefined): string;
    encodeFunctionData(functionFragment: "approveAndCall", values: [string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "destroyTokens", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "allowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "claimTokens", values: [string]): string;
    encodeFunctionData(functionFragment: "tokenFactory", values?: undefined): string;
    encodeFunctionData(functionFragment: "enableTransfers", values: [boolean]): string;
    encodeFunctionData(functionFragment: "controller", values?: undefined): string;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creationBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeController", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfAt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createCloneToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parentToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "generateTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupplyAt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfersEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parentSnapShotBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approveAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "destroyTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenFactory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enableTransfers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
    events: {
        "ClaimedTokens(address,address,uint256)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
        "NewCloneToken(address,uint256)": EventFragment;
        "Approval(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ClaimedTokens"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewCloneToken"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
}
export declare type ClaimedTokensEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    _token: string;
    _controller: string;
    _amount: BigNumber;
}>;
export declare type ClaimedTokensEventFilter = TypedEventFilter<ClaimedTokensEvent>;
export declare type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    _from: string;
    _to: string;
    _amount: BigNumber;
}>;
export declare type TransferEventFilter = TypedEventFilter<TransferEvent>;
export declare type NewCloneTokenEvent = TypedEvent<[
    string,
    BigNumber
], {
    _cloneToken: string;
    _snapshotBlock: BigNumber;
}>;
export declare type NewCloneTokenEventFilter = TypedEventFilter<NewCloneTokenEvent>;
export declare type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    _owner: string;
    _spender: string;
    _amount: BigNumber;
}>;
export declare type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export interface Ldo extends BaseContract {
    contractName: "Ldo";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: LdoInterface;
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
        name(overrides?: CallOverrides): Promise<[string]>;
        approve(_spender: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        creationBlock(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transferFrom(_from: string, _to: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        changeController(_newController: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        balanceOfAt(_owner: string, _blockNumber: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        version(overrides?: CallOverrides): Promise<[string]>;
        createCloneToken(_cloneTokenName: string, _cloneDecimalUnits: BigNumberish, _cloneTokenSymbol: string, _snapshotBlock: BigNumberish, _transfersEnabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        balanceOf(_owner: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            balance: BigNumber;
        }>;
        parentToken(overrides?: CallOverrides): Promise<[string]>;
        generateTokens(_owner: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        totalSupplyAt(_blockNumber: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(_to: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transfersEnabled(overrides?: CallOverrides): Promise<[boolean]>;
        parentSnapShotBlock(overrides?: CallOverrides): Promise<[BigNumber]>;
        approveAndCall(_spender: string, _amount: BigNumberish, _extraData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        destroyTokens(_owner: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        allowance(_owner: string, _spender: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            remaining: BigNumber;
        }>;
        claimTokens(_token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        tokenFactory(overrides?: CallOverrides): Promise<[string]>;
        enableTransfers(_transfersEnabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        controller(overrides?: CallOverrides): Promise<[string]>;
    };
    name(overrides?: CallOverrides): Promise<string>;
    approve(_spender: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    creationBlock(overrides?: CallOverrides): Promise<BigNumber>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transferFrom(_from: string, _to: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    decimals(overrides?: CallOverrides): Promise<number>;
    changeController(_newController: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    balanceOfAt(_owner: string, _blockNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    version(overrides?: CallOverrides): Promise<string>;
    createCloneToken(_cloneTokenName: string, _cloneDecimalUnits: BigNumberish, _cloneTokenSymbol: string, _snapshotBlock: BigNumberish, _transfersEnabled: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    balanceOf(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    parentToken(overrides?: CallOverrides): Promise<string>;
    generateTokens(_owner: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    symbol(overrides?: CallOverrides): Promise<string>;
    totalSupplyAt(_blockNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    transfer(_to: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transfersEnabled(overrides?: CallOverrides): Promise<boolean>;
    parentSnapShotBlock(overrides?: CallOverrides): Promise<BigNumber>;
    approveAndCall(_spender: string, _amount: BigNumberish, _extraData: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    destroyTokens(_owner: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    allowance(_owner: string, _spender: string, overrides?: CallOverrides): Promise<BigNumber>;
    claimTokens(_token: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    tokenFactory(overrides?: CallOverrides): Promise<string>;
    enableTransfers(_transfersEnabled: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    controller(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        name(overrides?: CallOverrides): Promise<string>;
        approve(_spender: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        creationBlock(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(_from: string, _to: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        decimals(overrides?: CallOverrides): Promise<number>;
        changeController(_newController: string, overrides?: CallOverrides): Promise<void>;
        balanceOfAt(_owner: string, _blockNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        version(overrides?: CallOverrides): Promise<string>;
        createCloneToken(_cloneTokenName: string, _cloneDecimalUnits: BigNumberish, _cloneTokenSymbol: string, _snapshotBlock: BigNumberish, _transfersEnabled: boolean, overrides?: CallOverrides): Promise<string>;
        balanceOf(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        parentToken(overrides?: CallOverrides): Promise<string>;
        generateTokens(_owner: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        symbol(overrides?: CallOverrides): Promise<string>;
        totalSupplyAt(_blockNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        transfer(_to: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        transfersEnabled(overrides?: CallOverrides): Promise<boolean>;
        parentSnapShotBlock(overrides?: CallOverrides): Promise<BigNumber>;
        approveAndCall(_spender: string, _amount: BigNumberish, _extraData: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        destroyTokens(_owner: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        allowance(_owner: string, _spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        claimTokens(_token: string, overrides?: CallOverrides): Promise<void>;
        tokenFactory(overrides?: CallOverrides): Promise<string>;
        enableTransfers(_transfersEnabled: boolean, overrides?: CallOverrides): Promise<void>;
        controller(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "ClaimedTokens(address,address,uint256)"(_token?: string | null, _controller?: string | null, _amount?: null): ClaimedTokensEventFilter;
        ClaimedTokens(_token?: string | null, _controller?: string | null, _amount?: null): ClaimedTokensEventFilter;
        "Transfer(address,address,uint256)"(_from?: string | null, _to?: string | null, _amount?: null): TransferEventFilter;
        Transfer(_from?: string | null, _to?: string | null, _amount?: null): TransferEventFilter;
        "NewCloneToken(address,uint256)"(_cloneToken?: string | null, _snapshotBlock?: null): NewCloneTokenEventFilter;
        NewCloneToken(_cloneToken?: string | null, _snapshotBlock?: null): NewCloneTokenEventFilter;
        "Approval(address,address,uint256)"(_owner?: string | null, _spender?: string | null, _amount?: null): ApprovalEventFilter;
        Approval(_owner?: string | null, _spender?: string | null, _amount?: null): ApprovalEventFilter;
    };
    estimateGas: {
        name(overrides?: CallOverrides): Promise<BigNumber>;
        approve(_spender: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        creationBlock(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(_from: string, _to: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        changeController(_newController: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        balanceOfAt(_owner: string, _blockNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
        createCloneToken(_cloneTokenName: string, _cloneDecimalUnits: BigNumberish, _cloneTokenSymbol: string, _snapshotBlock: BigNumberish, _transfersEnabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        balanceOf(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        parentToken(overrides?: CallOverrides): Promise<BigNumber>;
        generateTokens(_owner: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupplyAt(_blockNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        transfer(_to: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transfersEnabled(overrides?: CallOverrides): Promise<BigNumber>;
        parentSnapShotBlock(overrides?: CallOverrides): Promise<BigNumber>;
        approveAndCall(_spender: string, _amount: BigNumberish, _extraData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        destroyTokens(_owner: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        allowance(_owner: string, _spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        claimTokens(_token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        tokenFactory(overrides?: CallOverrides): Promise<BigNumber>;
        enableTransfers(_transfersEnabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        controller(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(_spender: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        creationBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferFrom(_from: string, _to: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        changeController(_newController: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        balanceOfAt(_owner: string, _blockNumber: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createCloneToken(_cloneTokenName: string, _cloneDecimalUnits: BigNumberish, _cloneTokenSymbol: string, _snapshotBlock: BigNumberish, _transfersEnabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(_owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parentToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        generateTokens(_owner: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupplyAt(_blockNumber: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(_to: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transfersEnabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parentSnapShotBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approveAndCall(_spender: string, _amount: BigNumberish, _extraData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        destroyTokens(_owner: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        allowance(_owner: string, _spender: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimTokens(_token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        tokenFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        enableTransfers(_transfersEnabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
