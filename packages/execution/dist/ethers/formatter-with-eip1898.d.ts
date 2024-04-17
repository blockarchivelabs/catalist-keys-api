import { Formatter } from '@ethersproject/providers';
export declare class FormatterWithEIP1898 extends Formatter {
    /**
     * blockTag formatter with EIP-1898 support
     * https://eips.ethereum.org/EIPS/eip-1898
     */
    blockTag(blockTag: any): any;
}
