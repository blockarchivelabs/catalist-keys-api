'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../node_modules/tslib/tslib.es6.js');
var fetch = require('@catalist-nestjs/fetch');
var common = require('@nestjs/common');
var ipfsFileData = require('./interfaces/ipfs-file-data.js');

exports.IpfsGeneralService = class IpfsGeneralService {
    constructor(httpService, url, username, password) {
        this.httpService = httpService;
        this._url = url;
        this._password = password;
        this._username = username;
    }
    async add(value) {
        const urlFinal = this.prepareUrl(this._url);
        const boundary = 'ipfs-lib';
        const payload = `--${boundary}\r\nContent-Disposition: form-data; name="path"\r\nContent-Type: application/octet-stream\r\n\r\n${value}\r\n--${boundary}--`;
        const headers = {
            accept: 'application/json',
            'Content-Type': `multipart/form-data; boundary=${boundary}`,
        };
        if (this._username && this._password) {
            const auth = Buffer.from(`${this._username}:${this._password}`, 'binary').toString('base64');
            headers['Authorization'] = `Basic ${auth}`;
        }
        const res = await this.httpService.fetchJson(`${urlFinal}/add?pin=true`, {
            method: 'POST',
            headers,
            body: payload,
        });
        if (!ipfsFileData.isIpfsFileData(res)) {
            throw new Error(`Unexpected result: ${JSON.stringify(res)}`);
        }
        return { cid: res.Hash, data: value };
    }
    async get(cid) {
        const urlFinal = this.prepareUrl(this._url);
        const queryString = new URLSearchParams({
            arg: cid,
        });
        const headers = {};
        if (this._username && this._password) {
            const auth = Buffer.from(`${this._username}:${this._password}`, 'binary').toString('base64');
            headers['Authorization'] = `Basic ${auth}`;
        }
        const data = await this.httpService.fetchText(`${urlFinal}/cat?${queryString}`, {
            method: 'POST',
            headers,
        });
        return { cid, data };
    }
    prepareUrl(url) {
        return url.replace(/\/$/, '');
    }
};
exports.IpfsGeneralService = tslib_es6.__decorate([
    common.Injectable(),
    tslib_es6.__metadata("design:paramtypes", [fetch.FetchService, String, String, String])
], exports.IpfsGeneralService);
