import { Migration } from '@mikro-orm/migrations';

export class Migration20231220104403 extends Migration {
  async up(): Promise<void> {
    this.addSql('alter table "el_meta_entity" add column "last_changed_block_hash" varchar(66) not null;');

    this.addSql('alter table "registry_operator" add column "finalized_used_signing_keys" int not null;');

    this.addSql('alter table "sr_module_entity" add column "last_changed_block_hash" varchar(255) not null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "el_meta_entity" drop column "last_changed_block_hash";');

    this.addSql('alter table "registry_operator" drop column "finalized_used_signing_keys";');

    this.addSql('alter table "sr_module_entity" drop column "last_changed_block_hash";');
  }
}
