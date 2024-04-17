'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var knex = require('@mikro-orm/knex');

class ConsensusMetaRepository extends knex.EntityRepository {
    async upsert(entity) {
        await this.nativeDelete({});
        return await this.createQueryBuilder().insert(entity).execute();
    }
}

exports.ConsensusMetaRepository = ConsensusMetaRepository;
