import { FetchService } from '@catalist-nestjs/fetch';
import { Result } from './interfaces';
export declare class IpfsGeneralService {
    protected httpService: FetchService;
    private _url;
    private _password;
    private _username;
    constructor(httpService: FetchService, url: string, username?: string, password?: string);
    add(value: string): Promise<Result>;
    get(cid: string): Promise<Result>;
    private prepareUrl;
}
