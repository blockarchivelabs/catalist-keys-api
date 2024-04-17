'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../node_modules/tslib/tslib.es6.js');
var common = require('@nestjs/common');
var ipfsHttpClient = require('@catalist-nestjs/ipfs-http-client');
var keySignPair = require('./interfaces/key-sign-pair.js');

exports.IpfsNopKeysService = class IpfsNopKeysService {
    constructor(ipfsClient) {
        this.ipfsClient = ipfsClient;
    }
    async addKeySign(values) {
        if (!keySignPair.isKeySignPairArray(values)) {
            throw new Error('Incorrect parameter, values should be KeySignPair[]');
        }
        const data = JSON.stringify(values);
        const result = await this.ipfsClient.add(data);
        return { cid: result.cid, data: values };
    }
    async getKeySign(cid) {
        const result = await this.ipfsClient.get(cid);
        const json = JSON.parse(result.data);
        if (!keySignPair.isKeySignPairArray(json)) {
            throw Error('Incorrect parameter, values should be KeySignPair[]');
        }
        return { cid: result.cid, data: json };
    }
};
exports.IpfsNopKeysService = tslib_es6.__decorate([
    common.Injectable(),
    tslib_es6.__metadata("design:paramtypes", [ipfsHttpClient.IpfsGeneralService])
], exports.IpfsNopKeysService);
