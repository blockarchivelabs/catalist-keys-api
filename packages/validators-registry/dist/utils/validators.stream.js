'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var StreamArray = require('stream-json/streamers/StreamArray');
var streamChain = require('stream-chain');
var streamJson = require('stream-json');
var Pick = require('stream-json/filters/Pick');
var parse = require('./parse.js');
var Batch = require('stream-json/utils/Batch');
var validator_type = require('../types/validator.type.js');
var consensusDataInvalid_error = require('../errors/consensus-data-invalid.error.js');

function unblock() {
    // Unblock event loop in long loops
    // Source: https://snyk.io/blog/nodejs-how-even-quick-async-functions-can-block-the-event-loop-starve-io/
    return new Promise((resolve) => {
        return setImmediate(() => resolve(true));
    });
}
const BATCH_SIZE = 100;
async function processValidatorsStream(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
validatorsReadStream, callback, batchSize = BATCH_SIZE) {
    const pipeline = streamChain.chain([
        validatorsReadStream,
        streamJson.parser(),
        Pick.pick({ filter: 'data' }),
        StreamArray.streamArray(),
        Batch.batch({ batchSize }),
        async (batch) => {
            var _a, _b, _c, _d;
            await unblock();
            const chunk = [];
            for (const validator of batch) {
                /* istanbul ignore next */
                const parsedValidator = parse.parseAsTypeOrFail(validator_type.Validator, {
                    pubkey: (_b = (_a = validator.value) === null || _a === void 0 ? void 0 : _a.validator) === null || _b === void 0 ? void 0 : _b.pubkey,
                    index: (_c = validator.value) === null || _c === void 0 ? void 0 : _c.index,
                    status: (_d = validator.value) === null || _d === void 0 ? void 0 : _d.status,
                }, (error) => {
                    throw new consensusDataInvalid_error.ConsensusDataInvalidError(`Got invalid validators`, error);
                });
                chunk.push(parsedValidator);
            }
            await callback([...chunk]);
        },
    ]);
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    pipeline.on('data', /* istanbul ignore next */ () => { });
    await new Promise((resolve, reject) => {
        pipeline.on('error', (error) => {
            reject(error);
        });
        pipeline.on('end', async () => {
            resolve(true);
        });
    }).finally(() => pipeline.destroy());
}

exports.processValidatorsStream = processValidatorsStream;
