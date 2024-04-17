'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('@catalist-nestjs/utils');
var Piscina = require('piscina');
var serialize = require('../worker/serialize.js');
var keyValidator_worker = require('../worker/key-validator.worker.js');
var assert = require('assert');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Piscina__default = /*#__PURE__*/_interopDefaultLegacy(Piscina);
var assert__default = /*#__PURE__*/_interopDefaultLegacy(assert);

class MultiThreadedKeyValidatorExecutor {
    async validateKey(key) {
        const serialized = serialize.serialize(key);
        const result = keyValidator_worker["default"]([[serialized, 0]]);
        return result[0][1];
    }
    async validateKeys(keys) {
        const threadPool = new Piscina__default["default"]({
            filename: keyValidator_worker["default"].filename,
        });
        const partitions = utils.partition(keys, threadPool.threads.length, 100);
        const runner = threadPool.run;
        const results = await Promise.all(partitions.map(async (partition) => {
            const partitionWithExtraData = partition.map((key, index) => {
                // index in each partition is used to find result for each key from workers
                return { key, serialized: serialize.serialize(key), index };
            });
            const dataToBeSentToWorker = partitionWithExtraData.map((x) => [x.serialized, x.index]);
            const results = await runner.call(threadPool, dataToBeSentToWorker);
            const resultsWithOriginalKey = partitionWithExtraData.map((x) => {
                const result = results.find((s) => s[0] === x.index);
                // this will never happen
                assert__default["default"](result, 'Empty key result found. Halting.');
                return [x.key, result[1]];
            });
            return resultsWithOriginalKey;
        }));
        await threadPool.destroy();
        return results.flat();
    }
}

exports.MultiThreadedKeyValidatorExecutor = MultiThreadedKeyValidatorExecutor;
