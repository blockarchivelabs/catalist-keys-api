import { Type } from '@chainsafe/ssz';
import { Domain } from '../ssz/primitive/types';
export declare const computeSigningRoot: <T>(type: Type<T>, sszObject: T, domain: Domain) => Uint8Array;
