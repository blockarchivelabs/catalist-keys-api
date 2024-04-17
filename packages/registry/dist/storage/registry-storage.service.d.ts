import { OnModuleDestroy } from '@nestjs/common';
import { MikroORM } from '@mikro-orm/core';
export declare class RegistryStorageService implements OnModuleDestroy {
    private readonly orm;
    constructor(orm: MikroORM);
    onModuleDestroy(): Promise<void>;
}
