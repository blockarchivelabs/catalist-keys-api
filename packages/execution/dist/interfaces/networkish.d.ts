export declare type ChainId = number;
export declare type NetworkInfo = {
    name: string;
    chainId: ChainId;
    ensAddress?: string;
};
export declare type Networkish = NetworkInfo | ChainId;
