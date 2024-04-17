import { Easytrack__factory } from '../generated';
import { ContractModule } from '../contract.module';
export declare class EasyTrackContractModule extends ContractModule {
    static module: typeof EasyTrackContractModule;
    static contractFactory: typeof Easytrack__factory;
    static contractToken: symbol;
    static defaultAddresses: {
        1: string;
        5: string;
        17000: string;
    };
}
