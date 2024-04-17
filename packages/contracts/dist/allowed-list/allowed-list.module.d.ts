import { AllowedList__factory } from '../generated';
import { ContractModule } from '../contract.module';
export declare class AllowedListContractModule extends ContractModule {
    static module: typeof AllowedListContractModule;
    static contractFactory: typeof AllowedList__factory;
    static contractToken: symbol;
    static defaultAddresses: {
        1: string;
        17000: string;
        5: string;
    };
}
