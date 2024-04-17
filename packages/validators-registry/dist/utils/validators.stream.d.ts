import { Validator } from '../types';
export declare type ValidatorCallback = (validators: Validator[]) => Promise<void>;
export declare function processValidatorsStream(validatorsReadStream: any, callback: ValidatorCallback, batchSize?: number): Promise<void>;
