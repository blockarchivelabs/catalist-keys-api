export declare type KeySignPair = {
    key: string;
    sign: string;
};
export declare function isKeySignPairArray(value: unknown): value is KeySignPair[];
export declare const isKeySignPair: (value: unknown) => value is KeySignPair;
