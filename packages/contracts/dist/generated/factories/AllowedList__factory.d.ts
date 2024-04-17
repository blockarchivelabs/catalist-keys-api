import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { AllowedList, AllowedListInterface } from "../AllowedList";
export declare class AllowedList__factory {
    static readonly abi: ({
        name: string;
        inputs: ({
            name: string;
            type: string;
            indexed: boolean;
            components?: undefined;
        } | {
            name: string;
            type: string;
            components: {
                name: string;
                type: string;
            }[];
            indexed: boolean;
        })[];
        anonymous: boolean;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        stateMutability: string;
        type: string;
        inputs: {
            name: string;
            type: string;
        }[];
        outputs: never[];
        name?: undefined;
        anonymous?: undefined;
    } | {
        stateMutability: string;
        type: string;
        name: string;
        inputs: never[];
        outputs: {
            name: string;
            type: string;
        }[];
        anonymous?: undefined;
    } | {
        stateMutability: string;
        type: string;
        name: string;
        inputs: {
            name: string;
            type: string;
        }[];
        outputs: {
            name: string;
            type: string;
            components: {
                name: string;
                type: string;
            }[];
        }[];
        anonymous?: undefined;
    } | {
        stateMutability: string;
        type: string;
        name?: undefined;
        inputs?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    })[];
    static createInterface(): AllowedListInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AllowedList;
}
