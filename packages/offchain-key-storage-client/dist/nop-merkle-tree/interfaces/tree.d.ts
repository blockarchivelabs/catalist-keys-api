import { KeySignBuffer } from './key-sign-buffer';
export declare type Tree = {
    hashes: string[];
    root: string;
    leafAmount: number;
    data: KeySignBuffer[];
};
