'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var nopMerkleTree_module = require('./nop-merkle-tree/nop-merkle-tree.module.js');
var nopMerkleTree_service = require('./nop-merkle-tree/nop-merkle-tree.service.js');
var keySignPair = require('./ipfs/interfaces/key-sign-pair.js');
var ipfs_nopKeys_module = require('./ipfs/ipfs.nop-keys.module.js');
var ipfs_nopKeys_service = require('./ipfs/ipfs.nop-keys.service.js');



Object.defineProperty(exports, 'NopMerkleTreeModule', {
	enumerable: true,
	get: function () { return nopMerkleTree_module.NopMerkleTreeModule; }
});
Object.defineProperty(exports, 'NopMerkleTreeService', {
	enumerable: true,
	get: function () { return nopMerkleTree_service.NopMerkleTreeService; }
});
exports.isKeySignPair = keySignPair.isKeySignPair;
exports.isKeySignPairArray = keySignPair.isKeySignPairArray;
Object.defineProperty(exports, 'IpfsNopKeysModule', {
	enumerable: true,
	get: function () { return ipfs_nopKeys_module.IpfsNopKeysModule; }
});
Object.defineProperty(exports, 'IpfsNopKeysService', {
	enumerable: true,
	get: function () { return ipfs_nopKeys_service.IpfsNopKeysService; }
});
