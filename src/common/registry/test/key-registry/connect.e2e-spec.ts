import { Test } from '@nestjs/testing';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { nullTransport, LoggerModule } from '@lido-nestjs/logger';
import { BatchProviderModule, ExtendedJsonRpcBatchProvider } from '@lido-nestjs/execution';
import { KeyRegistryModule, KeyRegistryService, RegistryStorageService } from '../../';
import { clearDb, compareTestOperators, mikroORMConfig } from '../testing.utils';
import { operators } from '../fixtures/connect.fixture';
import { MikroORM } from '@mikro-orm/core';
import { REGISTRY_CONTRACT_ADDRESSES } from '@lido-nestjs/contracts';
import * as dotenv from 'dotenv';

dotenv.config();

describe('Registry', () => {
  let registryService: KeyRegistryService;
  let storageService: RegistryStorageService;
  let mikroOrm: MikroORM;
  if (!process.env.CHAIN_ID) {
    console.error("CHAIN_ID wasn't provides");
    process.exit(1);
  }
  const address = REGISTRY_CONTRACT_ADDRESSES[process.env.CHAIN_ID];
  const operatorsWithModuleAddress = operators.map((key) => {
    return { ...key, moduleAddress: address };
  });

  beforeEach(async () => {
    const imports = [
      MikroOrmModule.forRoot(mikroORMConfig),
      BatchProviderModule.forRoot({
        url: process.env.PROVIDERS_URLS as string,
        requestPolicy: {
          jsonRpcMaxBatchSize: 50,
          maxConcurrentRequests: 10,
          batchAggregationWaitMs: 10,
        },
      }),
      LoggerModule.forRoot({ transports: [nullTransport()] }),
      KeyRegistryModule.forFeatureAsync({
        inject: [ExtendedJsonRpcBatchProvider],
        async useFactory(provider: ExtendedJsonRpcBatchProvider) {
          return { provider };
        },
      }),
    ];
    const moduleRef = await Test.createTestingModule({ imports }).compile();
    registryService = moduleRef.get(KeyRegistryService);
    storageService = moduleRef.get(RegistryStorageService);
    mikroOrm = moduleRef.get(MikroORM);
    const generator = mikroOrm.getSchemaGenerator();
    await generator.updateSchema();
  });

  afterEach(async () => {
    await clearDb(mikroOrm);
    await storageService.onModuleDestroy();
  });

  test('Update', async () => {
    const blockHash = '0x4ef0f15a8a04a97f60a9f76ba83d27bcf98dac9635685cd05fe1d78bd6e93418';

    await registryService.update(address, blockHash);

    await compareTestOperators(address, registryService, {
      operators: operatorsWithModuleAddress,
    });

    const keys = await registryService.getOperatorsKeysFromStorage(address);
    expect(keys).toHaveLength(20527);
  }, 400_000);
});