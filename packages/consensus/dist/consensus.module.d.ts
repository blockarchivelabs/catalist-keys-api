import { DynamicModule } from '@nestjs/common';
import { ConsensusModuleSyncOptions, ConsensusModuleAsyncOptions } from './interfaces/module.interface';
export declare class ConsensusModule {
    static forRoot(options?: ConsensusModuleSyncOptions): DynamicModule;
    static forRootAsync(options: ConsensusModuleAsyncOptions): DynamicModule;
    static forFeature(options?: ConsensusModuleSyncOptions): DynamicModule;
    static forFeatureAsync(options: ConsensusModuleAsyncOptions): DynamicModule;
}
