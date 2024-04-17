import { Registry } from '@catalist-nestjs/contracts';
import { CallOverrides } from './interfaces/overrides.interface';
import { RegistryKey } from './interfaces/key.interface';
import { RegistryOperatorFetchService } from './operator.fetch';
export declare class RegistryKeyFetchService {
    private contract;
    private operatorsService;
    constructor(contract: Registry, operatorsService: RegistryOperatorFetchService);
    /** fetches one key */
    fetchOne(operatorIndex: number, keyIndex: number, overrides?: CallOverrides): Promise<RegistryKey>;
    /** fetches operator's keys */
    fetch(operatorIndex: number, fromIndex?: number, toIndex?: number, overrides?: CallOverrides): Promise<RegistryKey[]>;
}
