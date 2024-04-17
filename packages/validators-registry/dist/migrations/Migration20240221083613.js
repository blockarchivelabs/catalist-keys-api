'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var migrations = require('@mikro-orm/migrations');

class Migration20240221083613 extends migrations.Migration {
    async up() {
        this.addSql('alter table "consensus_meta" alter column "id" type smallint using ("id"::smallint);');
        this.addSql('alter table "consensus_meta" alter column "id" set default 0;');
        this.addSql('alter table "consensus_meta" drop constraint "consensus_meta_pkey";');
        this.addSql('alter table "consensus_meta" add constraint "consensus_meta_id_unique" unique ("id");');
        this.addSql('alter table "consensus_meta" add constraint "consensus_meta_pkey" primary key ("id", "block_number");');
    }
    async down() {
        this.addSql('alter table "consensus_meta" alter column "id" drop default;');
        this.addSql('alter table "consensus_meta" alter column "id" type int2 using ("id"::int2);');
        this.addSql('alter table "consensus_meta" drop constraint "consensus_meta_id_unique";');
        this.addSql('alter table "consensus_meta" drop constraint "consensus_meta_pkey";');
        this.addSql('alter table "consensus_meta" add constraint "consensus_meta_pkey" primary key ("id");');
    }
}

exports.Migration20240221083613 = Migration20240221083613;
