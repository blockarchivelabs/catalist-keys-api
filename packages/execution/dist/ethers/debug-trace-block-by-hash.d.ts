import { ExtendedJsonRpcBatchProvider } from '../provider/extended-json-rpc-batch-provider';
import { SimpleFallbackJsonRpcBatchProvider } from '../provider/simple-fallback-json-rpc-batch-provider';
import { TraceConfig, TraceResult } from '../interfaces/debug-traces';
export declare function getDebugTraceBlockByHash(this: ExtendedJsonRpcBatchProvider | SimpleFallbackJsonRpcBatchProvider, blockHash: string, traceConfig: Partial<TraceConfig>): Promise<TraceResult[]>;
