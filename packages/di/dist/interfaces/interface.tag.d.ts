export declare type InterfaceTag<T> = {
    new (...args: unknown[]): T;
    readonly id: symbol;
    readonly interfaceTag: symbol;
};
export declare type InterfaceFromTag<T extends InterfaceTag<any>> = T extends InterfaceTag<infer Interface> ? Interface : never;
