import { Ldo__factory } from '../generated';
import { ContractModule } from '../contract.module';
export declare class LdoContractModule extends ContractModule {
    static module: typeof LdoContractModule;
    static contractFactory: typeof Ldo__factory;
    static contractToken: symbol;
    static defaultAddresses: {
        1: string;
        5: string;
        17000: string;
        11155111: string;
    };
}
