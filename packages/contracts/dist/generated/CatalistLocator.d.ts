import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace CatalistLocator {
    type ConfigStruct = {
        accountingOracle: string;
        depositSecurityModule: string;
        elRewardsVault: string;
        legacyOracle: string;
        catalist: string;
        oracleReportSanityChecker: string;
        postTokenRebaseReceiver: string;
        burner: string;
        stakingRouter: string;
        treasury: string;
        validatorsExitBusOracle: string;
        withdrawalQueue: string;
        withdrawalVault: string;
        oracleDaemonConfig: string;
    };
    type ConfigStructOutput = [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
    ] & {
        accountingOracle: string;
        depositSecurityModule: string;
        elRewardsVault: string;
        legacyOracle: string;
        catalist: string;
        oracleReportSanityChecker: string;
        postTokenRebaseReceiver: string;
        burner: string;
        stakingRouter: string;
        treasury: string;
        validatorsExitBusOracle: string;
        withdrawalQueue: string;
        withdrawalVault: string;
        oracleDaemonConfig: string;
    };
}
export interface CatalistLocatorInterface extends utils.Interface {
    contractName: "CatalistLocator";
    functions: {
        "accountingOracle()": FunctionFragment;
        "burner()": FunctionFragment;
        "coreComponents()": FunctionFragment;
        "depositSecurityModule()": FunctionFragment;
        "elRewardsVault()": FunctionFragment;
        "legacyOracle()": FunctionFragment;
        "catalist()": FunctionFragment;
        "oracleDaemonConfig()": FunctionFragment;
        "oracleReportComponentsForCatalist()": FunctionFragment;
        "oracleReportSanityChecker()": FunctionFragment;
        "postTokenRebaseReceiver()": FunctionFragment;
        "stakingRouter()": FunctionFragment;
        "treasury()": FunctionFragment;
        "validatorsExitBusOracle()": FunctionFragment;
        "withdrawalQueue()": FunctionFragment;
        "withdrawalVault()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "accountingOracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "burner", values?: undefined): string;
    encodeFunctionData(functionFragment: "coreComponents", values?: undefined): string;
    encodeFunctionData(functionFragment: "depositSecurityModule", values?: undefined): string;
    encodeFunctionData(functionFragment: "elRewardsVault", values?: undefined): string;
    encodeFunctionData(functionFragment: "legacyOracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "catalist", values?: undefined): string;
    encodeFunctionData(functionFragment: "oracleDaemonConfig", values?: undefined): string;
    encodeFunctionData(functionFragment: "oracleReportComponentsForCatalist", values?: undefined): string;
    encodeFunctionData(functionFragment: "oracleReportSanityChecker", values?: undefined): string;
    encodeFunctionData(functionFragment: "postTokenRebaseReceiver", values?: undefined): string;
    encodeFunctionData(functionFragment: "stakingRouter", values?: undefined): string;
    encodeFunctionData(functionFragment: "treasury", values?: undefined): string;
    encodeFunctionData(functionFragment: "validatorsExitBusOracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawalQueue", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawalVault", values?: undefined): string;
    decodeFunctionResult(functionFragment: "accountingOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "coreComponents", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositSecurityModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "elRewardsVault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "legacyOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "catalist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "oracleDaemonConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "oracleReportComponentsForCatalist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "oracleReportSanityChecker", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "postTokenRebaseReceiver", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakingRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "treasury", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validatorsExitBusOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawalQueue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawalVault", data: BytesLike): Result;
    events: {};
}
export interface CatalistLocator extends BaseContract {
    contractName: "CatalistLocator";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CatalistLocatorInterface;
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
        accountingOracle(overrides?: CallOverrides): Promise<[string]>;
        burner(overrides?: CallOverrides): Promise<[string]>;
        coreComponents(overrides?: CallOverrides): Promise<[string, string, string, string, string, string]>;
        depositSecurityModule(overrides?: CallOverrides): Promise<[string]>;
        elRewardsVault(overrides?: CallOverrides): Promise<[string]>;
        legacyOracle(overrides?: CallOverrides): Promise<[string]>;
        catalist(overrides?: CallOverrides): Promise<[string]>;
        oracleDaemonConfig(overrides?: CallOverrides): Promise<[string]>;
        oracleReportComponentsForCatalist(overrides?: CallOverrides): Promise<[string, string, string, string, string, string, string]>;
        oracleReportSanityChecker(overrides?: CallOverrides): Promise<[string]>;
        postTokenRebaseReceiver(overrides?: CallOverrides): Promise<[string]>;
        stakingRouter(overrides?: CallOverrides): Promise<[string]>;
        treasury(overrides?: CallOverrides): Promise<[string]>;
        validatorsExitBusOracle(overrides?: CallOverrides): Promise<[string]>;
        withdrawalQueue(overrides?: CallOverrides): Promise<[string]>;
        withdrawalVault(overrides?: CallOverrides): Promise<[string]>;
    };
    accountingOracle(overrides?: CallOverrides): Promise<string>;
    burner(overrides?: CallOverrides): Promise<string>;
    coreComponents(overrides?: CallOverrides): Promise<[string, string, string, string, string, string]>;
    depositSecurityModule(overrides?: CallOverrides): Promise<string>;
    elRewardsVault(overrides?: CallOverrides): Promise<string>;
    legacyOracle(overrides?: CallOverrides): Promise<string>;
    catalist(overrides?: CallOverrides): Promise<string>;
    oracleDaemonConfig(overrides?: CallOverrides): Promise<string>;
    oracleReportComponentsForCatalist(overrides?: CallOverrides): Promise<[string, string, string, string, string, string, string]>;
    oracleReportSanityChecker(overrides?: CallOverrides): Promise<string>;
    postTokenRebaseReceiver(overrides?: CallOverrides): Promise<string>;
    stakingRouter(overrides?: CallOverrides): Promise<string>;
    treasury(overrides?: CallOverrides): Promise<string>;
    validatorsExitBusOracle(overrides?: CallOverrides): Promise<string>;
    withdrawalQueue(overrides?: CallOverrides): Promise<string>;
    withdrawalVault(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        accountingOracle(overrides?: CallOverrides): Promise<string>;
        burner(overrides?: CallOverrides): Promise<string>;
        coreComponents(overrides?: CallOverrides): Promise<[string, string, string, string, string, string]>;
        depositSecurityModule(overrides?: CallOverrides): Promise<string>;
        elRewardsVault(overrides?: CallOverrides): Promise<string>;
        legacyOracle(overrides?: CallOverrides): Promise<string>;
        catalist(overrides?: CallOverrides): Promise<string>;
        oracleDaemonConfig(overrides?: CallOverrides): Promise<string>;
        oracleReportComponentsForCatalist(overrides?: CallOverrides): Promise<[string, string, string, string, string, string, string]>;
        oracleReportSanityChecker(overrides?: CallOverrides): Promise<string>;
        postTokenRebaseReceiver(overrides?: CallOverrides): Promise<string>;
        stakingRouter(overrides?: CallOverrides): Promise<string>;
        treasury(overrides?: CallOverrides): Promise<string>;
        validatorsExitBusOracle(overrides?: CallOverrides): Promise<string>;
        withdrawalQueue(overrides?: CallOverrides): Promise<string>;
        withdrawalVault(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        accountingOracle(overrides?: CallOverrides): Promise<BigNumber>;
        burner(overrides?: CallOverrides): Promise<BigNumber>;
        coreComponents(overrides?: CallOverrides): Promise<BigNumber>;
        depositSecurityModule(overrides?: CallOverrides): Promise<BigNumber>;
        elRewardsVault(overrides?: CallOverrides): Promise<BigNumber>;
        legacyOracle(overrides?: CallOverrides): Promise<BigNumber>;
        catalist(overrides?: CallOverrides): Promise<BigNumber>;
        oracleDaemonConfig(overrides?: CallOverrides): Promise<BigNumber>;
        oracleReportComponentsForCatalist(overrides?: CallOverrides): Promise<BigNumber>;
        oracleReportSanityChecker(overrides?: CallOverrides): Promise<BigNumber>;
        postTokenRebaseReceiver(overrides?: CallOverrides): Promise<BigNumber>;
        stakingRouter(overrides?: CallOverrides): Promise<BigNumber>;
        treasury(overrides?: CallOverrides): Promise<BigNumber>;
        validatorsExitBusOracle(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawalQueue(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawalVault(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        accountingOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        coreComponents(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        depositSecurityModule(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        elRewardsVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        legacyOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        catalist(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        oracleDaemonConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        oracleReportComponentsForCatalist(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        oracleReportSanityChecker(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        postTokenRebaseReceiver(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stakingRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        treasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validatorsExitBusOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawalQueue(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawalVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
