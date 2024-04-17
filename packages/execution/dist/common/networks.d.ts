import { Network } from '@ethersproject/networks';
import { Networkish } from '../interfaces/networkish';
export declare const networksEqual: (networkA: Network, networkB: Network) => boolean;
export declare const getNetworkChain: (networkish: Networkish) => number;
export declare const networksChainsEqual: (networkA: Network, networkB: Networkish) => boolean;
