'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var common = require('@nestjs/common');
var di = require('@catalist-nestjs/di');
var constants = require('../constants/constants.js');
var genesisForkVersion_interface = require('../interfaces/genesis-fork-version.interface.js');

exports.GenesisForkVersionService = class GenesisForkVersionService {
    async getGenesisForkVersion(chainId) {
        const version = constants.GENESIS_FORK_VERSION[chainId];
        if (!version) {
            throw new Error(`GENESIS_FORK_VERSION is undefined for chain ${chainId}`);
        }
        return version;
    }
};
exports.GenesisForkVersionService = tslib.__decorate([
    common.Injectable(),
    di.ImplementsAtRuntime(genesisForkVersion_interface.GenesisForkVersionServiceInterface)
], exports.GenesisForkVersionService);
