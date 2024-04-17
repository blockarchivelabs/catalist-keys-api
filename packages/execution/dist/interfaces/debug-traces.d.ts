export declare type CallType = 'CALL' | 'DELEGATECALL' | 'STATICCALL';
export declare type TraceResultItem = {
    from: string;
    gas: string;
    gasUsed: string;
    to: string;
    input: string;
    type: string;
    value?: string;
    calls?: TraceResultItem[];
};
export declare type TraceResult = {
    txHash?: string;
    result: TraceResultItem;
};
export declare type TraceResponse = {
    id: number;
    jsonrpc: string;
    result: TraceResult[];
};
export declare type TraceConfig = {
    tracer: string;
    disableStorage: boolean;
    disableStack: boolean;
    enableMemory: boolean;
    enableReturnData: boolean;
};
