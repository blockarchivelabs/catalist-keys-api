import { Deposit__factory } from '../generated';
import { ContractModule } from '../contract.module';
export declare class DepositContractModule extends ContractModule {
    static module: typeof DepositContractModule;
    static contractFactory: typeof Deposit__factory;
    static contractToken: symbol;
    static defaultAddresses: {
        1: string;
        5: string;
        17000: string;
        11155111: string;
        6480000002: string;
        648: string;
    };
}
