'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var migrations = require('@mikro-orm/migrations');

/**
 * PLEASE DO NOT EDIT !!!
 *
 * This migration can be used in the applications that use this module.
 */
class Migration20230119153937 extends migrations.Migration {
    /**
     * @see ConsensusValidatorEntity
     */
    async up() {
        /**
         * @see ConsensusValidatorEntity
         */
        this.addSql('CREATE INDEX idx_consensus_validator__status on "consensus_validator"("status")');
    }
    async down() {
        /**
         * @see ConsensusMetaEntity
         */
        this.addSql('DROP INDEX IF EXISTS idx_consensus_validator__status');
    }
}

exports.Migration20230119153937 = Migration20230119153937;
