import { EntityRepositoryType } from '@mikro-orm/core';
import { ConsensusMeta } from '../types';
import { ConsensusMetaRepository } from './consensus-meta.repository';
export declare class ConsensusMetaEntity implements ConsensusMeta {
    [EntityRepositoryType]?: ConsensusMetaRepository;
    constructor(meta: ConsensusMeta);
    readonly id = 0;
    epoch: number;
    slot: number;
    slotStateRoot: string;
    blockNumber: number;
    blockHash: string;
    timestamp: number;
}
