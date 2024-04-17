'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var fetch = require('node-fetch');
var common = require('@nestjs/common');
var middleware = require('@catalist-nestjs/middleware');
var fetch_constants = require('./fetch.constants.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var fetch__default = /*#__PURE__*/_interopDefaultLegacy(fetch);

exports.FetchService = class FetchService {
    constructor(options, middlewareService) {
        var _a, _b;
        this.options = options;
        this.middlewareService = middlewareService;
        (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.middlewares) === null || _b === void 0 ? void 0 : _b.forEach((middleware) => {
            middlewareService.use(middleware);
        });
    }
    async fetchJson(url, options) {
        const response = await this.wrappedRequest(url, options);
        return await response.json();
    }
    async fetchText(url, options) {
        const response = await this.wrappedRequest(url, options);
        return await response.text();
    }
    async fetchStream(url, options) {
        const response = await this.wrappedRequest(url, options);
        return response.body;
    }
    async wrappedRequest(url, options) {
        return await this.middlewareService.go(() => this.request(url, options));
    }
    async request(url, options, attempt = 0) {
        attempt++;
        try {
            const baseUrl = this.getBaseUrl(attempt);
            const fullUrl = this.getUrl(baseUrl, url);
            const response = await fetch__default["default"](fullUrl, options);
            if (!response.ok) {
                const errorBody = await this.extractErrorBody(response);
                throw new common.HttpException(errorBody, response.status);
            }
            return response;
        }
        catch (error) {
            const possibleAttempt = this.getRetryAttempts(options);
            if (attempt > possibleAttempt)
                throw error;
            await this.delay(options);
            return await this.request(url, options, attempt);
        }
    }
    async delay(options) {
        const timeout = this.getDelayTimeout(options);
        if (timeout <= 0)
            return;
        return new Promise((resolve) => setTimeout(resolve, timeout));
    }
    async extractErrorBody(response) {
        try {
            return await response.json();
        }
        catch (error) {
            return response.statusText;
        }
    }
    getRetryAttempts(options) {
        var _a, _b, _c;
        const localAttempts = (_a = options === null || options === void 0 ? void 0 : options.retryPolicy) === null || _a === void 0 ? void 0 : _a.attempts;
        const globalAttempts = (_c = (_b = this.options) === null || _b === void 0 ? void 0 : _b.retryPolicy) === null || _c === void 0 ? void 0 : _c.attempts;
        if (localAttempts != null)
            return localAttempts;
        if (globalAttempts != null)
            return globalAttempts;
        return fetch_constants.FETCH_GLOBAL_RETRY_DEFAULT_ATTEMPTS;
    }
    getDelayTimeout(options) {
        var _a, _b, _c;
        const localDelay = (_a = options === null || options === void 0 ? void 0 : options.retryPolicy) === null || _a === void 0 ? void 0 : _a.delay;
        const globalDelay = (_c = (_b = this.options) === null || _b === void 0 ? void 0 : _b.retryPolicy) === null || _c === void 0 ? void 0 : _c.delay;
        if (localDelay != null)
            return localDelay;
        if (globalDelay != null)
            return globalDelay;
        return fetch_constants.FETCH_GLOBAL_RETRY_DEFAULT_DELAY;
    }
    getBaseUrl(attempt) {
        var _a, _b;
        const defaultBaseUrls = fetch_constants.FETCH_GLOBAL_RETRY_DEFAULT_BASE_URLS;
        const baseUrls = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.baseUrls) !== null && _b !== void 0 ? _b : defaultBaseUrls;
        if (!baseUrls.length)
            return null;
        const index = (attempt - 1) % baseUrls.length;
        return baseUrls[index];
    }
    getUrl(baseUrl, url) {
        if (typeof url !== 'string')
            return url;
        if (baseUrl == null)
            return url;
        if (this.isAbsoluteUrl(url))
            return url;
        return `${baseUrl}${url}`;
    }
    isAbsoluteUrl(url) {
        const regexp = new RegExp('^(?:[a-z]+:)?//', 'i');
        return regexp.test(url);
    }
};
exports.FetchService = tslib.__decorate([
    common.Injectable(),
    tslib.__param(0, common.Optional()),
    tslib.__param(0, common.Inject(fetch_constants.FETCH_GLOBAL_OPTIONS_TOKEN)),
    tslib.__metadata("design:paramtypes", [Object, middleware.MiddlewareService])
], exports.FetchService);
