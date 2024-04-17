import { KeySignBuffer, Tree } from './interfaces';
export declare class NopMerkleTreeService {
    createTree(data: KeySignBuffer[]): {
        hashes: string[];
        root: string;
        leafAmount: number;
        data: KeySignBuffer[];
    };
    prepareProofs(tree: Tree, index: number): {
        hash: string;
        proofs: string[];
    };
    createTreeFromProofs(hash: string, hashIndex: number, leafAmount: number, proofs: string[]): string;
    private hashPair;
    private hashKeySigns;
    private hashKeySign;
}
