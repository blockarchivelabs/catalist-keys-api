'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var common = require('@nestjs/common');
var consensus_service = require('./service/consensus.service.js');
var consensus_constants = require('./consensus.constants.js');

var ConsensusModule_1;
exports.ConsensusModule = ConsensusModule_1 = class ConsensusModule {
    static forRoot(options) {
        return Object.assign({ global: true }, this.forFeature(options));
    }
    static forRootAsync(options) {
        return Object.assign({ global: true }, this.forFeatureAsync(options));
    }
    static forFeature(options) {
        const _a = options || {}, { imports } = _a, serviceOptions = tslib.__rest(_a, ["imports"]);
        return {
            module: ConsensusModule_1,
            imports,
            providers: [
                {
                    provide: consensus_constants.CONSENSUS_OPTIONS_TOKEN,
                    useValue: serviceOptions,
                },
            ],
        };
    }
    static forFeatureAsync(options) {
        return {
            module: ConsensusModule_1,
            imports: options.imports,
            providers: [
                {
                    provide: consensus_constants.CONSENSUS_OPTIONS_TOKEN,
                    useFactory: options.useFactory,
                    inject: options.inject,
                },
            ],
        };
    }
};
exports.ConsensusModule = ConsensusModule_1 = tslib.__decorate([
    common.Module({
        providers: [consensus_service.ConsensusService],
        exports: [consensus_service.ConsensusService],
    })
], exports.ConsensusModule);
