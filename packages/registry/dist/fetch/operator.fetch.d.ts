import { Registry } from '@catalist-nestjs/contracts';
import { CallOverrides } from './interfaces/overrides.interface';
import { RegistryOperator } from './interfaces/operator.interface';
export declare class RegistryOperatorFetchService {
    private contract;
    constructor(contract: Registry);
    /** fetches number of operators */
    count(overrides?: CallOverrides): Promise<number>;
    /** fetches one operator */
    fetchOne(operatorIndex: number, overrides?: CallOverrides): Promise<RegistryOperator>;
    /** fetches operators */
    fetch(fromIndex?: number, toIndex?: number, overrides?: CallOverrides): Promise<RegistryOperator[]>;
}
