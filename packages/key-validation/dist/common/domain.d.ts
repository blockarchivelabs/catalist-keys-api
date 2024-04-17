import { DomainType, Root, Version } from '../ssz/primitive/types';
/**
 * Used primarily in signature domains to avoid collisions across forks/chains.
 */
export declare function computeForkDataRoot(currentVersion: Version, genesisValidatorsRoot: Root): Uint8Array;
export declare function computeDomain(domainType: DomainType, forkVersion: Version, genesisValidatorRoot: Root): Uint8Array;
