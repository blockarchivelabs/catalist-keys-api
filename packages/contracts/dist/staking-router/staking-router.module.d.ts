import { StakingRouter__factory } from '../generated';
import { ContractModule } from '../contract.module';
export declare class StakingRouterContractModule extends ContractModule {
    static module: typeof StakingRouterContractModule;
    static contractFactory: typeof StakingRouter__factory;
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
