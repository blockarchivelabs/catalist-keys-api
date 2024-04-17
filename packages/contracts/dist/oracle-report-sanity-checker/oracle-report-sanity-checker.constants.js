'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var constants = require('@catalist-nestjs/constants');

const ORACLE_REPORT_SANITY_CHECKER_TOKEN = Symbol('oracleReportSanityChecker');
const ORACLE_REPORT_SANITY_CHECKER_ADDRESSES = {
    [constants.CHAINS.Mainnet]: '0x9305c1Dbfe22c12c66339184C0025d7006f0f1cC',
    [constants.CHAINS.Goerli]: '0xbf74600040F91D3560d5757280727FB00c64Fd2E',
    [constants.CHAINS.Holesky]: '0xF0d576c7d934bBeCc68FE15F1c5DAF98ea2B78bb',
    [constants.CHAINS.Sepolia]: '0xbac2A471443F18aC5C31078b96C5797A78fCc680',
    [constants.CHAINS.EnduranceDevnet]: '0x9a60911f5213140414DD57e95886c05d5f55FFbC',
    [constants.CHAINS.EnduranceMainnet]: '0x45B0AD8EE592F256bb460FA08cDc361E1e9EDa0D',
};

exports.ORACLE_REPORT_SANITY_CHECKER_ADDRESSES = ORACLE_REPORT_SANITY_CHECKER_ADDRESSES;
exports.ORACLE_REPORT_SANITY_CHECKER_TOKEN = ORACLE_REPORT_SANITY_CHECKER_TOKEN;
