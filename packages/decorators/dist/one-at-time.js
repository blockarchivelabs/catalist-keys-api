'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function OneAtTime() {
    return function (target, propertyName, descriptor) {
        const method = descriptor.value;
        let isExecuting = false;
        descriptor.value = async function (...args) {
            var _a;
            if (isExecuting)
                return;
            try {
                isExecuting = true;
                return await method.apply(this, args);
            }
            catch (error) {
                (_a = this.logger) === null || _a === void 0 ? void 0 : _a.error(error);
                return;
            }
            finally {
                isExecuting = false;
            }
        };
    };
}

exports.OneAtTime = OneAtTime;
