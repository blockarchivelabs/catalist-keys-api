import { EntityRepository } from '@mikro-orm/knex';
import { ConsensusMetaEntity } from './consensus-meta.entity';
export declare class ConsensusMetaRepository extends EntityRepository<ConsensusMetaEntity> {
    upsert(entity: ConsensusMetaEntity): Promise<ConsensusMetaEntity>;
}
