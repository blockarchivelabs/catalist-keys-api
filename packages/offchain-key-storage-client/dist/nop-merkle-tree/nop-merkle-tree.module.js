'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../node_modules/tslib/tslib.es6.js');
var common = require('@nestjs/common');
var nopMerkleTree_service = require('./nop-merkle-tree.service.js');

exports.NopMerkleTreeModule = class NopMerkleTreeModule {
};
exports.NopMerkleTreeModule = tslib_es6.__decorate([
    common.Module({
        imports: [],
        providers: [nopMerkleTree_service.NopMerkleTreeService],
        exports: [nopMerkleTree_service.NopMerkleTreeService],
    })
], exports.NopMerkleTreeModule);
