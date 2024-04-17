'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var snakeCase = require('lodash.snakecase');
var nodeAbortController = require('node-abort-controller');
var fetch = require('@catalist-nestjs/fetch');
var common = require('@nestjs/common');
var consensus_constants = require('../consensus.constants.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var snakeCase__default = /*#__PURE__*/_interopDefaultLegacy(snakeCase);

exports.ConsensusBaseService = class ConsensusBaseService {
    constructor(options, fetchService) {
        this.options = options;
        this.fetchService = fetchService;
    }
    async fetch(path, init) {
        return await this.fetchService.fetchJson(path, init);
    }
    async fetchStream(path, init) {
        return await this.fetchService.fetchStream(path, init);
    }
    getSearchString(queryObject) {
        const searchParams = new URLSearchParams();
        Object.entries(queryObject).forEach(([key, value]) => {
            if (value == null)
                return;
            searchParams.append(snakeCase__default["default"](key), String(value));
        });
        const searchString = searchParams.toString();
        return searchString ? `?${searchString}` : '';
    }
    /**
     * Pool interval
     */
    get pollingInterval() {
        var _a, _b;
        return (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.pollingInterval) !== null && _b !== void 0 ? _b : consensus_constants.CONSENSUS_DEFAULT_POOL_INTERVAL;
    }
    /*
     * Polling slot number
     */
    get slotNumber() {
        var _a;
        return (_a = this._slotNumber) !== null && _a !== void 0 ? _a : consensus_constants.CONSENSUS_DEFAULT_SLOT_NUMBER;
    }
    set slotNumber(value) {
        if (!Number.isFinite(value)) {
            throw new Error(`New slot (${value}) is not a number`);
        }
        if (value < this.slotNumber) {
            throw new Error(`New slot (${value}) is smaller than the previous one (${this.slotNumber})`);
        }
        this._slotNumber = value;
    }
    /**
     * Subscribes to blocks
     * @param callback - calls for a new block
     */
    subscribe(callback, args) {
        let timer = null;
        let controller = null;
        const stopPreviousTick = () => {
            controller === null || controller === void 0 ? void 0 : controller.abort();
            if (timer)
                clearTimeout(timer);
            timer = setTimeout(tick, this.pollingInterval);
        };
        const tick = async () => {
            var _a;
            stopPreviousTick();
            try {
                controller = new nodeAbortController.AbortController();
                const { signal } = controller;
                const { data } = await this.getBlock(Object.assign(Object.assign({ blockId: 'head' }, args), { options: Object.assign(Object.assign({}, args === null || args === void 0 ? void 0 : args.options), { signal }) }));
                const fetchedSlot = Number((_a = data === null || data === void 0 ? void 0 : data.message) === null || _a === void 0 ? void 0 : _a.slot);
                const savedSlot = this.slotNumber;
                if (fetchedSlot === savedSlot)
                    return;
                this.slotNumber = fetchedSlot;
                callback(null, data);
            }
            catch (error) {
                callback(error, null);
            }
        };
        tick();
        const unsubscribe = () => {
            if (timer != null)
                clearTimeout(timer);
            if (controller != null)
                controller.abort();
        };
        return unsubscribe;
    }
};
exports.ConsensusBaseService = tslib.__decorate([
    common.Injectable(),
    tslib.__param(0, common.Optional()),
    tslib.__param(0, common.Inject(consensus_constants.CONSENSUS_OPTIONS_TOKEN)),
    tslib.__metadata("design:paramtypes", [Object, fetch.FetchService])
], exports.ConsensusBaseService);
