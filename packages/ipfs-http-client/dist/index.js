'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ipfsFileData = require('./ipfs/interfaces/ipfs-file-data.js');
var ipfs_module = require('./ipfs/ipfs.module.js');
var ipfs_general_service = require('./ipfs/ipfs.general.service.js');



exports.isIpfsFileData = ipfsFileData.isIpfsFileData;
Object.defineProperty(exports, 'IpfsModule', {
	enumerable: true,
	get: function () { return ipfs_module.IpfsModule; }
});
Object.defineProperty(exports, 'IpfsGeneralService', {
	enumerable: true,
	get: function () { return ipfs_general_service.IpfsGeneralService; }
});
