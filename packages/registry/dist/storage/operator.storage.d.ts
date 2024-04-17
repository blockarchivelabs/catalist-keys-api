import { FilterQuery, FindOptions } from '@mikro-orm/core';
import { RegistryOperator } from './operator.entity';
import { RegistryOperatorRepository } from './operator.repository';
export declare class RegistryOperatorStorageService {
    private readonly repository;
    constructor(repository: RegistryOperatorRepository);
    /** find operators */
    find<P extends string = never>(where: FilterQuery<RegistryOperator>, options?: FindOptions<RegistryOperator, P>): Promise<RegistryOperator[]>;
    /** find all operators */
    findAll(): Promise<RegistryOperator[]>;
    /** find operator by index */
    findOneByIndex(operatorIndex: number): Promise<RegistryOperator | null>;
    /** removes operator by index */
    removeOneByIndex(operatorIndex: number): Promise<number>;
    /** removes all operators */
    removeAll(): Promise<number>;
    /** saves operator to storage */
    saveOne(operator: RegistryOperator): Promise<void>;
    /** saves multiply operators to storage */
    save(operators: RegistryOperator[]): Promise<import("@mikro-orm/core").EntityManager<import("@mikro-orm/core").IDatabaseDriver<import("@mikro-orm/core").Connection>>[]>;
}
