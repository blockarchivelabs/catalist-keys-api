import { RegistryOperator } from '../../storage/operator.entity';
import { AbstractRegistryService } from '../abstract-registry';
export declare class ValidatorRegistryService extends AbstractRegistryService {
    getToIndex(currOperator: RegistryOperator): number;
    /** returns used keys from the db */
    getValidatorsKeysFromStorage(): Promise<import("../..").RegistryKey[]>;
}
