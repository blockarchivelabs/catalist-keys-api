import { RequestPolicy } from '../provider/extended-json-rpc-batch-provider';
import { ConnectionInfo } from '@ethersproject/web';
import { Networkish } from './networkish';
import { NonEmptyArray } from './non-empty-array';
import { MiddlewareCallback } from '@catalist-nestjs/middleware';
export interface SimpleFallbackProviderConfig {
    urls: NonEmptyArray<ConnectionInfo | string>;
    network: Networkish;
    requestPolicy?: RequestPolicy;
    maxRetries?: number;
    minBackoffMs?: number;
    maxBackoffMs?: number;
    logRetries?: boolean;
    resetIntervalMs?: number;
    fetchMiddlewares?: MiddlewareCallback<Promise<any>>[];
    maxTimeWithoutNewBlocksMs?: number;
}
