import { IpfsGeneralService } from '@catalist-nestjs/ipfs-http-client';
import { NopKeysResult, KeySignPair } from './interfaces';
export declare class IpfsNopKeysService {
    protected readonly ipfsClient: IpfsGeneralService;
    constructor(ipfsClient: IpfsGeneralService);
    addKeySign(values: KeySignPair[]): Promise<NopKeysResult>;
    getKeySign(cid: string): Promise<NopKeysResult>;
}
