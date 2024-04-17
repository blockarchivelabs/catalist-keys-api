'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var common = require('@nestjs/common');
var oracleReportSanityChecker_constants = require('./oracle-report-sanity-checker.constants.js');
var contract_module = require('../contract.module.js');
var OracleReportSanityChecker__factory = require('../generated/factories/OracleReportSanityChecker__factory.js');

var OracleReportSanityCheckerModule_1;
exports.OracleReportSanityCheckerModule = OracleReportSanityCheckerModule_1 = class OracleReportSanityCheckerModule extends contract_module.ContractModule {
};
exports.OracleReportSanityCheckerModule.module = OracleReportSanityCheckerModule_1;
exports.OracleReportSanityCheckerModule.contractFactory = OracleReportSanityChecker__factory.OracleReportSanityChecker__factory;
exports.OracleReportSanityCheckerModule.contractToken = oracleReportSanityChecker_constants.ORACLE_REPORT_SANITY_CHECKER_TOKEN;
exports.OracleReportSanityCheckerModule.defaultAddresses = oracleReportSanityChecker_constants.ORACLE_REPORT_SANITY_CHECKER_ADDRESSES;
exports.OracleReportSanityCheckerModule = OracleReportSanityCheckerModule_1 = tslib.__decorate([
    common.Module({})
], exports.OracleReportSanityCheckerModule);
