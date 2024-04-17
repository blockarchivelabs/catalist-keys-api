import { EntityRepositoryType } from '@mikro-orm/core';
import { Validator, ValidatorStatus } from '../types';
import { ConsensusValidatorRepository } from './consensus-validator.repository';
export declare class ConsensusValidatorEntity implements Validator {
    [EntityRepositoryType]?: ConsensusValidatorRepository;
    pubkey: string;
    index: number;
    status: ValidatorStatus;
}
