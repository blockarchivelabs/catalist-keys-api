import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface AragonTokenManagerInterface extends utils.Interface {
    contractName: "AragonTokenManager";
    functions: {
        "hasInitialized()": FunctionFragment;
        "MAX_VESTINGS_PER_ADDRESS()": FunctionFragment;
        "spendableBalanceOf(address)": FunctionFragment;
        "assignVested(address,uint256,uint64,uint64,uint64,bool)": FunctionFragment;
        "getEVMScriptExecutor(bytes)": FunctionFragment;
        "getRecoveryVault()": FunctionFragment;
        "getVesting(address,uint256)": FunctionFragment;
        "mint(address,uint256)": FunctionFragment;
        "onTransfer(address,address,uint256)": FunctionFragment;
        "transferableBalance(address,uint256)": FunctionFragment;
        "allowRecoverability(address)": FunctionFragment;
        "appId()": FunctionFragment;
        "ISSUE_ROLE()": FunctionFragment;
        "getInitializationBlock()": FunctionFragment;
        "vestingsLengths(address)": FunctionFragment;
        "transferToVault(address)": FunctionFragment;
        "burn(address,uint256)": FunctionFragment;
        "canPerform(address,bytes32,uint256[])": FunctionFragment;
        "getEVMScriptRegistry()": FunctionFragment;
        "ASSIGN_ROLE()": FunctionFragment;
        "BURN_ROLE()": FunctionFragment;
        "assign(address,uint256)": FunctionFragment;
        "canForward(address,bytes)": FunctionFragment;
        "issue(uint256)": FunctionFragment;
        "kernel()": FunctionFragment;
        "forward(bytes)": FunctionFragment;
        "onApprove(address,address,uint256)": FunctionFragment;
        "isPetrified()": FunctionFragment;
        "initialize(address,bool,uint256)": FunctionFragment;
        "MINT_ROLE()": FunctionFragment;
        "maxAccountTokens()": FunctionFragment;
        "REVOKE_VESTINGS_ROLE()": FunctionFragment;
        "proxyPayment(address)": FunctionFragment;
        "revokeVesting(address,uint256)": FunctionFragment;
        "token()": FunctionFragment;
        "isForwarder()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "hasInitialized", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_VESTINGS_PER_ADDRESS", values?: undefined): string;
    encodeFunctionData(functionFragment: "spendableBalanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "assignVested", values: [
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        boolean
    ]): string;
    encodeFunctionData(functionFragment: "getEVMScriptExecutor", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getRecoveryVault", values?: undefined): string;
    encodeFunctionData(functionFragment: "getVesting", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "mint", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "onTransfer", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferableBalance", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "allowRecoverability", values: [string]): string;
    encodeFunctionData(functionFragment: "appId", values?: undefined): string;
    encodeFunctionData(functionFragment: "ISSUE_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "getInitializationBlock", values?: undefined): string;
    encodeFunctionData(functionFragment: "vestingsLengths", values: [string]): string;
    encodeFunctionData(functionFragment: "transferToVault", values: [string]): string;
    encodeFunctionData(functionFragment: "burn", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "canPerform", values: [string, BytesLike, BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "getEVMScriptRegistry", values?: undefined): string;
    encodeFunctionData(functionFragment: "ASSIGN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "BURN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "assign", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "canForward", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "issue", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "kernel", values?: undefined): string;
    encodeFunctionData(functionFragment: "forward", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "onApprove", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "isPetrified", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, boolean, BigNumberish]): string;
    encodeFunctionData(functionFragment: "MINT_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "maxAccountTokens", values?: undefined): string;
    encodeFunctionData(functionFragment: "REVOKE_VESTINGS_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "proxyPayment", values: [string]): string;
    encodeFunctionData(functionFragment: "revokeVesting", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "isForwarder", values?: undefined): string;
    decodeFunctionResult(functionFragment: "hasInitialized", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_VESTINGS_PER_ADDRESS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "spendableBalanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assignVested", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEVMScriptExecutor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRecoveryVault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVesting", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferableBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowRecoverability", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "appId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ISSUE_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getInitializationBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vestingsLengths", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferToVault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "canPerform", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEVMScriptRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ASSIGN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "BURN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assign", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "canForward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "issue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "kernel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onApprove", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPetrified", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MINT_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxAccountTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "REVOKE_VESTINGS_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxyPayment", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeVesting", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isForwarder", data: BytesLike): Result;
    events: {
        "NewVesting(address,uint256,uint256)": EventFragment;
        "RevokeVesting(address,uint256,uint256)": EventFragment;
        "ScriptResult(address,bytes,bytes,bytes)": EventFragment;
        "RecoverToVault(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "NewVesting"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RevokeVesting"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ScriptResult"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RecoverToVault"): EventFragment;
}
export declare type NewVestingEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], {
    receiver: string;
    vestingId: BigNumber;
    amount: BigNumber;
}>;
export declare type NewVestingEventFilter = TypedEventFilter<NewVestingEvent>;
export declare type RevokeVestingEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], {
    receiver: string;
    vestingId: BigNumber;
    nonVestedAmount: BigNumber;
}>;
export declare type RevokeVestingEventFilter = TypedEventFilter<RevokeVestingEvent>;
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
export interface AragonTokenManager extends BaseContract {
    contractName: "AragonTokenManager";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AragonTokenManagerInterface;
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
        MAX_VESTINGS_PER_ADDRESS(overrides?: CallOverrides): Promise<[BigNumber]>;
        spendableBalanceOf(_holder: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        assignVested(_receiver: string, _amount: BigNumberish, _start: BigNumberish, _cliff: BigNumberish, _vested: BigNumberish, _revokable: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getEVMScriptExecutor(_script: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getRecoveryVault(overrides?: CallOverrides): Promise<[string]>;
        getVesting(_recipient: string, _vestingId: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            boolean
        ] & {
            amount: BigNumber;
            start: BigNumber;
            cliff: BigNumber;
            vesting: BigNumber;
            revokable: boolean;
        }>;
        mint(_receiver: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        onTransfer(_from: string, _to: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferableBalance(_holder: string, _time: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        allowRecoverability(_token: string, overrides?: CallOverrides): Promise<[boolean]>;
        appId(overrides?: CallOverrides): Promise<[string]>;
        ISSUE_ROLE(overrides?: CallOverrides): Promise<[string]>;
        getInitializationBlock(overrides?: CallOverrides): Promise<[BigNumber]>;
        vestingsLengths(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        transferToVault(_token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        burn(_holder: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        canPerform(_sender: string, _role: BytesLike, _params: BigNumberish[], overrides?: CallOverrides): Promise<[boolean]>;
        getEVMScriptRegistry(overrides?: CallOverrides): Promise<[string]>;
        ASSIGN_ROLE(overrides?: CallOverrides): Promise<[string]>;
        BURN_ROLE(overrides?: CallOverrides): Promise<[string]>;
        assign(_receiver: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        canForward(_sender: string, arg1: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        issue(_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        kernel(overrides?: CallOverrides): Promise<[string]>;
        forward(_evmScript: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        onApprove(arg0: string, arg1: string, arg2: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isPetrified(overrides?: CallOverrides): Promise<[boolean]>;
        initialize(_token: string, _transferable: boolean, _maxAccountTokens: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        MINT_ROLE(overrides?: CallOverrides): Promise<[string]>;
        maxAccountTokens(overrides?: CallOverrides): Promise<[BigNumber]>;
        REVOKE_VESTINGS_ROLE(overrides?: CallOverrides): Promise<[string]>;
        proxyPayment(arg0: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        revokeVesting(_holder: string, _vestingId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        token(overrides?: CallOverrides): Promise<[string]>;
        isForwarder(overrides?: CallOverrides): Promise<[boolean]>;
    };
    hasInitialized(overrides?: CallOverrides): Promise<boolean>;
    MAX_VESTINGS_PER_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;
    spendableBalanceOf(_holder: string, overrides?: CallOverrides): Promise<BigNumber>;
    assignVested(_receiver: string, _amount: BigNumberish, _start: BigNumberish, _cliff: BigNumberish, _vested: BigNumberish, _revokable: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getEVMScriptExecutor(_script: BytesLike, overrides?: CallOverrides): Promise<string>;
    getRecoveryVault(overrides?: CallOverrides): Promise<string>;
    getVesting(_recipient: string, _vestingId: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean
    ] & {
        amount: BigNumber;
        start: BigNumber;
        cliff: BigNumber;
        vesting: BigNumber;
        revokable: boolean;
    }>;
    mint(_receiver: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    onTransfer(_from: string, _to: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferableBalance(_holder: string, _time: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    allowRecoverability(_token: string, overrides?: CallOverrides): Promise<boolean>;
    appId(overrides?: CallOverrides): Promise<string>;
    ISSUE_ROLE(overrides?: CallOverrides): Promise<string>;
    getInitializationBlock(overrides?: CallOverrides): Promise<BigNumber>;
    vestingsLengths(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    transferToVault(_token: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    burn(_holder: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    canPerform(_sender: string, _role: BytesLike, _params: BigNumberish[], overrides?: CallOverrides): Promise<boolean>;
    getEVMScriptRegistry(overrides?: CallOverrides): Promise<string>;
    ASSIGN_ROLE(overrides?: CallOverrides): Promise<string>;
    BURN_ROLE(overrides?: CallOverrides): Promise<string>;
    assign(_receiver: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    canForward(_sender: string, arg1: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    issue(_amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    kernel(overrides?: CallOverrides): Promise<string>;
    forward(_evmScript: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    onApprove(arg0: string, arg1: string, arg2: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isPetrified(overrides?: CallOverrides): Promise<boolean>;
    initialize(_token: string, _transferable: boolean, _maxAccountTokens: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    MINT_ROLE(overrides?: CallOverrides): Promise<string>;
    maxAccountTokens(overrides?: CallOverrides): Promise<BigNumber>;
    REVOKE_VESTINGS_ROLE(overrides?: CallOverrides): Promise<string>;
    proxyPayment(arg0: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    revokeVesting(_holder: string, _vestingId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    token(overrides?: CallOverrides): Promise<string>;
    isForwarder(overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        hasInitialized(overrides?: CallOverrides): Promise<boolean>;
        MAX_VESTINGS_PER_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;
        spendableBalanceOf(_holder: string, overrides?: CallOverrides): Promise<BigNumber>;
        assignVested(_receiver: string, _amount: BigNumberish, _start: BigNumberish, _cliff: BigNumberish, _vested: BigNumberish, _revokable: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        getEVMScriptExecutor(_script: BytesLike, overrides?: CallOverrides): Promise<string>;
        getRecoveryVault(overrides?: CallOverrides): Promise<string>;
        getVesting(_recipient: string, _vestingId: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            boolean
        ] & {
            amount: BigNumber;
            start: BigNumber;
            cliff: BigNumber;
            vesting: BigNumber;
            revokable: boolean;
        }>;
        mint(_receiver: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        onTransfer(_from: string, _to: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        transferableBalance(_holder: string, _time: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        allowRecoverability(_token: string, overrides?: CallOverrides): Promise<boolean>;
        appId(overrides?: CallOverrides): Promise<string>;
        ISSUE_ROLE(overrides?: CallOverrides): Promise<string>;
        getInitializationBlock(overrides?: CallOverrides): Promise<BigNumber>;
        vestingsLengths(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        transferToVault(_token: string, overrides?: CallOverrides): Promise<void>;
        burn(_holder: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        canPerform(_sender: string, _role: BytesLike, _params: BigNumberish[], overrides?: CallOverrides): Promise<boolean>;
        getEVMScriptRegistry(overrides?: CallOverrides): Promise<string>;
        ASSIGN_ROLE(overrides?: CallOverrides): Promise<string>;
        BURN_ROLE(overrides?: CallOverrides): Promise<string>;
        assign(_receiver: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        canForward(_sender: string, arg1: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        issue(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        kernel(overrides?: CallOverrides): Promise<string>;
        forward(_evmScript: BytesLike, overrides?: CallOverrides): Promise<void>;
        onApprove(arg0: string, arg1: string, arg2: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        isPetrified(overrides?: CallOverrides): Promise<boolean>;
        initialize(_token: string, _transferable: boolean, _maxAccountTokens: BigNumberish, overrides?: CallOverrides): Promise<void>;
        MINT_ROLE(overrides?: CallOverrides): Promise<string>;
        maxAccountTokens(overrides?: CallOverrides): Promise<BigNumber>;
        REVOKE_VESTINGS_ROLE(overrides?: CallOverrides): Promise<string>;
        proxyPayment(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        revokeVesting(_holder: string, _vestingId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        token(overrides?: CallOverrides): Promise<string>;
        isForwarder(overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "NewVesting(address,uint256,uint256)"(receiver?: string | null, vestingId?: null, amount?: null): NewVestingEventFilter;
        NewVesting(receiver?: string | null, vestingId?: null, amount?: null): NewVestingEventFilter;
        "RevokeVesting(address,uint256,uint256)"(receiver?: string | null, vestingId?: null, nonVestedAmount?: null): RevokeVestingEventFilter;
        RevokeVesting(receiver?: string | null, vestingId?: null, nonVestedAmount?: null): RevokeVestingEventFilter;
        "ScriptResult(address,bytes,bytes,bytes)"(executor?: string | null, script?: null, input?: null, returnData?: null): ScriptResultEventFilter;
        ScriptResult(executor?: string | null, script?: null, input?: null, returnData?: null): ScriptResultEventFilter;
        "RecoverToVault(address,address,uint256)"(vault?: string | null, token?: string | null, amount?: null): RecoverToVaultEventFilter;
        RecoverToVault(vault?: string | null, token?: string | null, amount?: null): RecoverToVaultEventFilter;
    };
    estimateGas: {
        hasInitialized(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_VESTINGS_PER_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;
        spendableBalanceOf(_holder: string, overrides?: CallOverrides): Promise<BigNumber>;
        assignVested(_receiver: string, _amount: BigNumberish, _start: BigNumberish, _cliff: BigNumberish, _vested: BigNumberish, _revokable: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getEVMScriptExecutor(_script: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getRecoveryVault(overrides?: CallOverrides): Promise<BigNumber>;
        getVesting(_recipient: string, _vestingId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        mint(_receiver: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        onTransfer(_from: string, _to: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferableBalance(_holder: string, _time: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        allowRecoverability(_token: string, overrides?: CallOverrides): Promise<BigNumber>;
        appId(overrides?: CallOverrides): Promise<BigNumber>;
        ISSUE_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        getInitializationBlock(overrides?: CallOverrides): Promise<BigNumber>;
        vestingsLengths(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        transferToVault(_token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        burn(_holder: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        canPerform(_sender: string, _role: BytesLike, _params: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        getEVMScriptRegistry(overrides?: CallOverrides): Promise<BigNumber>;
        ASSIGN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        BURN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        assign(_receiver: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        canForward(_sender: string, arg1: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        issue(_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        kernel(overrides?: CallOverrides): Promise<BigNumber>;
        forward(_evmScript: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        onApprove(arg0: string, arg1: string, arg2: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isPetrified(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_token: string, _transferable: boolean, _maxAccountTokens: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        MINT_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        maxAccountTokens(overrides?: CallOverrides): Promise<BigNumber>;
        REVOKE_VESTINGS_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        proxyPayment(arg0: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        revokeVesting(_holder: string, _vestingId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
        isForwarder(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        hasInitialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_VESTINGS_PER_ADDRESS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        spendableBalanceOf(_holder: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        assignVested(_receiver: string, _amount: BigNumberish, _start: BigNumberish, _cliff: BigNumberish, _vested: BigNumberish, _revokable: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getEVMScriptExecutor(_script: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRecoveryVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getVesting(_recipient: string, _vestingId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(_receiver: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        onTransfer(_from: string, _to: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferableBalance(_holder: string, _time: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowRecoverability(_token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        appId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ISSUE_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getInitializationBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        vestingsLengths(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferToVault(_token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        burn(_holder: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        canPerform(_sender: string, _role: BytesLike, _params: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getEVMScriptRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ASSIGN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        BURN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        assign(_receiver: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        canForward(_sender: string, arg1: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        issue(_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        kernel(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        forward(_evmScript: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        onApprove(arg0: string, arg1: string, arg2: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isPetrified(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_token: string, _transferable: boolean, _maxAccountTokens: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        MINT_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxAccountTokens(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        REVOKE_VESTINGS_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proxyPayment(arg0: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        revokeVesting(_holder: string, _vestingId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isForwarder(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
