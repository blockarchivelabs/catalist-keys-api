import { WinstonModule } from 'nest-winston';
import { LoggerService } from '..';
export declare const createMockLogger: (logger: LoggerService) => {
    module: typeof WinstonModule;
    providers: {
        provide: string;
        useFactory: () => LoggerService;
    }[];
    exports: {
        provide: string;
        useFactory: () => LoggerService;
    }[];
};
