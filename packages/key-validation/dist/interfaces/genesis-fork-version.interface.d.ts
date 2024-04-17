/// <reference types="node" />
import { CHAINS } from '@catalist-nestjs/constants';
export declare const GenesisForkVersionServiceInterface: import("@catalist-nestjs/di").InterfaceTag<GenesisForkVersionServiceInterface>;
export interface GenesisForkVersionServiceInterface {
    getGenesisForkVersion(chainId: CHAINS): Promise<Buffer>;
}
