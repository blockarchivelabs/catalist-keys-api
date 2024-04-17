import { RegistryOperator } from '../../storage/operator.entity';
import { AbstractRegistryService } from '../abstract-registry';
export declare class KeyRegistryService extends AbstractRegistryService {
    getToIndex(currOperator: RegistryOperator): number;
    /** returns all operators keys from the db */
    getAllKeysFromStorage(): Promise<import("../..").RegistryKey[]>;
    /** returns used keys from the db */
    getUsedKeysFromStorage(): Promise<import("../..").RegistryKey[]>;
}
