'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var common = require('@nestjs/common');
var keyValidator_module = require('./key-validator.module.js');
var contracts = require('@catalist-nestjs/contracts');
var catalistKeyValidator = require('./services/catalist-key-validator.js');
var genesisForkVersion_service = require('./services/genesis-fork-version.service.js');
var withdrawalCredentialsFetcher = require('./services/withdrawal-credentials-fetcher.js');
var catalistKeyValidator_interface = require('./interfaces/catalist-key-validator.interface.js');
var genesisForkVersion_interface = require('./interfaces/genesis-fork-version.interface.js');
var withdrawalCredentials_extractor_interface = require('./interfaces/withdrawal-credentials.extractor.interface.js');

var CatalistKeyValidatorModule_1;
const getDefaultCatalistKeyValidatorModuleProviders = () => [
    {
        provide: catalistKeyValidator_interface.CatalistKeyValidatorInterface,
        useClass: catalistKeyValidator.CatalistKeyValidator,
    },
    {
        provide: genesisForkVersion_interface.GenesisForkVersionServiceInterface,
        useClass: genesisForkVersion_service.GenesisForkVersionService,
    },
    {
        provide: withdrawalCredentials_extractor_interface.WithdrawalCredentialsExtractorInterface,
        useClass: withdrawalCredentialsFetcher.WithdrawalCredentialsFetcher,
    },
];
exports.CatalistKeyValidatorModule = CatalistKeyValidatorModule_1 = class CatalistKeyValidatorModule {
    static forRoot(options) {
        return Object.assign({ global: true }, this.forFeature(options));
    }
    static forFeature(options) {
        return {
            module: CatalistKeyValidatorModule_1,
            imports: [
                contracts.CatalistContractModule,
                keyValidator_module.KeyValidatorModule.forFeature({
                    multithreaded: options ? options.multithreaded : true,
                }),
            ],
            providers: getDefaultCatalistKeyValidatorModuleProviders(),
            exports: [catalistKeyValidator_interface.CatalistKeyValidatorInterface],
        };
    }
};
exports.CatalistKeyValidatorModule = CatalistKeyValidatorModule_1 = tslib.__decorate([
    common.Module({})
], exports.CatalistKeyValidatorModule);

exports.getDefaultCatalistKeyValidatorModuleProviders = getDefaultCatalistKeyValidatorModuleProviders;
