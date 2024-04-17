'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var extendedJsonRpcBatchProvider = require('./provider/extended-json-rpc-batch-provider.js');
var simpleFallbackJsonRpcBatchProvider = require('./provider/simple-fallback-json-rpc-batch-provider.js');
var queue = require('./common/queue.js');
var fallbackProvider_module = require('./fallback-provider.module.js');
var batchProvider_module = require('./batch-provider.module.js');
var feeHistory = require('./ethers/fee-history.js');
var allProvidersFailed_error = require('./error/all-providers-failed.error.js');
var fetch_error = require('./error/fetch.error.js');
var noNewBlocksWhilePolling_error = require('./error/no-new-blocks-while-polling.error.js');



Object.defineProperty(exports, 'ExtendedJsonRpcBatchProvider', {
	enumerable: true,
	get: function () { return extendedJsonRpcBatchProvider.ExtendedJsonRpcBatchProvider; }
});
Object.defineProperty(exports, 'SimpleFallbackJsonRpcBatchProvider', {
	enumerable: true,
	get: function () { return simpleFallbackJsonRpcBatchProvider.SimpleFallbackJsonRpcBatchProvider; }
});
exports.Queue = queue.Queue;
Object.defineProperty(exports, 'FallbackProviderModule', {
	enumerable: true,
	get: function () { return fallbackProvider_module.FallbackProviderModule; }
});
Object.defineProperty(exports, 'BatchProviderModule', {
	enumerable: true,
	get: function () { return batchProvider_module.BatchProviderModule; }
});
exports.MAX_BLOCKCOUNT = feeHistory.MAX_BLOCKCOUNT;
exports.MIN_BLOCKCOUNT = feeHistory.MIN_BLOCKCOUNT;
exports.getFeeHistory = feeHistory.getFeeHistory;
exports.AllProvidersFailedError = allProvidersFailed_error.AllProvidersFailedError;
exports.FetchError = fetch_error.FetchError;
exports.NoNewBlocksWhilePollingError = noNewBlocksWhilePolling_error.NoNewBlocksWhilePollingError;
