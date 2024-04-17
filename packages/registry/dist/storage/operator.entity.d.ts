import { EntityRepositoryType } from '@mikro-orm/core';
import { RegistryOperatorRepository } from './operator.repository';
export declare class RegistryOperator {
    [EntityRepositoryType]?: RegistryOperatorRepository;
    constructor(operator: RegistryOperator);
    index: number;
    active: boolean;
    name: string;
    rewardAddress: string;
    stakingLimit: number;
    stoppedValidators: number;
    totalSigningKeys: number;
    usedSigningKeys: number;
}
