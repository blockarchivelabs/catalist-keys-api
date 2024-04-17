import { DynamicModule, LoggerService } from '@nestjs/common';
export declare class MockLoggerModule {
    static forRoot(options: LoggerService): DynamicModule;
    static forRootAsync(options: LoggerService): DynamicModule;
}
