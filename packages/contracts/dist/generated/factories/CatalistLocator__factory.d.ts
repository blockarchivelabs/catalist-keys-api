import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { CatalistLocator, CatalistLocatorInterface } from "../CatalistLocator";
export declare class CatalistLocator__factory {
    static readonly abi: ({
        inputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        outputs?: undefined;
    } | {
        inputs: never[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): CatalistLocatorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CatalistLocator;
}
