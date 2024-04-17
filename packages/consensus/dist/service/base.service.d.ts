/// <reference types="node" />
import { RequestInit } from 'node-fetch';
import { FetchService } from '@catalist-nestjs/fetch';
import { ConsensusMethodArgs } from '../interfaces/consensus.interface';
import { ConsensusModuleOptions } from '../interfaces/module.interface';
import { ConsensusSubscribeCallback } from '../interfaces/subscribe.interface';
import { ConsensusService } from '../service/consensus.service';
export declare class ConsensusBaseService {
    options: ConsensusModuleOptions | null;
    protected fetchService: FetchService;
    constructor(options: ConsensusModuleOptions | null, fetchService: FetchService);
    private _slotNumber;
    fetch<T>(path: string, init?: RequestInit): Promise<T>;
    fetchStream(path: string, init?: RequestInit): Promise<NodeJS.ReadableStream>;
    getSearchString(queryObject: Record<string, string[] | string | number | undefined>): string;
    /**
     * Pool interval
     */
    get pollingInterval(): number;
    get slotNumber(): number;
    set slotNumber(value: number);
    /**
     * Subscribes to blocks
     * @param callback - calls for a new block
     */
    subscribe(this: ConsensusService, callback: ConsensusSubscribeCallback, args?: ConsensusMethodArgs<'getBlock'>): () => void;
}
