'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var common = require('@nestjs/common');
var middleware_constants = require('./middleware.constants.js');

exports.MiddlewareService = class MiddlewareService {
    constructor(options) {
        var _a, _b;
        this.options = options;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-explicit-any
        this.go = (next, _ = undefined) => next();
        (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.middlewares) === null || _b === void 0 ? void 0 : _b.forEach((middleware) => {
            this.use(middleware);
        });
    }
    use(callback) {
        this.go = ((stack) => (next, ctx) => {
            return stack(callback.bind(this, next.bind(this), ctx), ctx);
        })(this.go);
    }
};
exports.MiddlewareService = tslib.__decorate([
    common.Injectable({ scope: common.Scope.TRANSIENT }),
    tslib.__param(0, common.Optional()),
    tslib.__param(0, common.Inject(middleware_constants.MIDDLEWARE_OPTIONS_TOKEN)),
    tslib.__metadata("design:paramtypes", [Object])
], exports.MiddlewareService);
