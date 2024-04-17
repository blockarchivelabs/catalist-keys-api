/// <reference types="node" />
import { CHAINS } from '@catalist-nestjs/constants';
import { GenesisForkVersionServiceInterface } from '../interfaces';
export declare class GenesisForkVersionService implements GenesisForkVersionServiceInterface {
    getGenesisForkVersion(chainId: CHAINS): Promise<Buffer>;
}
