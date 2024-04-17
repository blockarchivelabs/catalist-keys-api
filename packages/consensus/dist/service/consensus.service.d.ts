import { FetchService } from '@catalist-nestjs/fetch';
import { ConsensusBaseService } from './base.service';
import { ConsensusBeaconService } from './beacon.service';
import { ConsensusDebugService } from './debug.service';
import { ConsensusEventsService } from './events.service';
import { ConsensusNodeService } from './node.service';
import { ConsensusConfigService } from './config.service';
import { ConsensusValidatorService } from './validator.service';
import { ConsensusModuleOptions } from '../interfaces/module.interface';
export declare class ConsensusService {
    options: ConsensusModuleOptions;
    protected fetchService: FetchService;
    constructor(options: ConsensusModuleOptions, fetchService: FetchService);
}
export interface ConsensusService extends ConsensusBaseService, ConsensusBeaconService, ConsensusDebugService, ConsensusEventsService, ConsensusNodeService, ConsensusConfigService, ConsensusValidatorService {
}
