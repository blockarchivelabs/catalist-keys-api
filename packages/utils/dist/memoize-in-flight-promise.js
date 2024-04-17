'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var v8 = require('v8');
var crypto = require('crypto');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var v8__namespace = /*#__PURE__*/_interopNamespace(v8);
var crypto__namespace = /*#__PURE__*/_interopNamespace(crypto);

/* eslint-disable @typescript-eslint/no-explicit-any */
function getNewWrapper(originalFn, target) {
    let ongoingPromises;
    const wrapper = function (...args) {
        const serialized = v8__namespace.serialize(args).toString('hex');
        const hasher = crypto__namespace.createHash('sha256');
        hasher.update(serialized);
        const hash = hasher.digest('hex');
        const cachedResult = ongoingPromises && ongoingPromises.get(hash);
        if (cachedResult) {
            return cachedResult;
        }
        const result = originalFn.call(this, ...args);
        if (!(result instanceof Promise)) {
            return result;
        }
        ongoingPromises = ongoingPromises ? ongoingPromises : new Map();
        result.finally(() => {
            ongoingPromises.delete(hash);
        });
        ongoingPromises.set(hash, result);
        return result;
    };
    return wrapper;
}
const isTypedMethodDescriptor = (descriptor) => {
    return (descriptor &&
        Object.hasOwnProperty.call(descriptor, 'value') &&
        typeof descriptor.value === 'function');
};
const isTypedGetterDescriptor = (descriptor) => {
    return (descriptor &&
        Object.hasOwnProperty.call(descriptor, 'get') &&
        typeof descriptor.get === 'function');
};
/**
 * Method and Getter Decorator to memoize promise, returned from a first call in a bunch of parallel multiple calls,
 * Promise is memoized until first returned promise is finalized.
 *
 *
 * Example:
 *
 * const A = [1,2,3];
 * const B = [1,2,3,4];
 *
 * class Foo {
 *  @DebouncePromise()
 *  async function doSomethingAsync<A>(args: A): Promise<A> {
 *      await sleep(1000);
 *      return args;
 *  }
 * }
 *
 * const foo = new Foo();
 *
 * await Promise.all([
 *    foo.doSomethingAsync(A), // will be called, will return Promise<A>
 *    foo.doSomethingAsync(A), // decorated function will not be called, but decorator will return the same Promise<A> from previous function call
 *    foo.doSomethingAsync(B), // this also will be called (arguments are different), will return Promise<B>
 *    foo.doSomethingAsync(B)  // decorated function will not be called, but decorator will return the same Promise<B> from previous function call
 * ]);
 *
 */
const MemoizeInFlightPromise = () => {
    function decorator(target, propertyKey, descriptor) {
        if (isTypedMethodDescriptor(descriptor)) {
            descriptor.value = getNewWrapper(descriptor.value);
        }
        else if (isTypedGetterDescriptor(descriptor)) {
            descriptor.get = getNewWrapper(descriptor.get);
        }
        else {
            throw new Error('MemoizeInFlightPromise() decorator can be applied to a method or get accessor only');
        }
    }
    return decorator;
};

exports.MemoizeInFlightPromise = MemoizeInFlightPromise;
