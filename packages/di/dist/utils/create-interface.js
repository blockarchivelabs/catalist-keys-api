'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var doesImplement = require('./does-implement.js');
var di_constants = require('../di.constants.js');

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Creates special interface-like anonymous class that acts like an interface
 * utilizing `Symbol.hasInstance` method that allows to override behavior of `instanceof` operator
 *
 * Example:
 *
 * export interface FooInterface {
 *    bar(): string;
 * }
 * export const FooInterface = createInterface<FooInterface>('FooInterface');
 *
 * @ImplementsAtRuntime(FooInterface)
 * export class Foo implements FooInterface {
 *    bar(): string {
 *      return 'bar';
 *    }
 * }
 *
 * const foo = new Foo();
 *
 * foo instanceof FooInterface === true;
 *
 */
const createInterface = (name) => {
    var _a;
    const id = Symbol.for(name);
    const _global = global;
    if (!_global[di_constants.INTERFACE_MAP_KEY]) {
        _global[di_constants.INTERFACE_MAP_KEY] = new Map();
    }
    const interfaceMap = _global[di_constants.INTERFACE_MAP_KEY];
    const foundInterfaceTag = interfaceMap.get(id);
    if (foundInterfaceTag) {
        return foundInterfaceTag;
    }
    const newInterfaceTag = (_a = class {
            static [Symbol.hasInstance](instance) {
                return doesImplement.doesImplement(instance, this);
            }
            static get id() {
                return this.tag;
            }
        },
        _a.tag = id,
        _a.interfaceTag = di_constants.INTERFACE_TAG,
        _a);
    Object.defineProperty(newInterfaceTag, 'name', {
        value: name,
        writable: false,
    });
    Object.freeze(newInterfaceTag);
    interfaceMap.set(id, newInterfaceTag);
    return newInterfaceTag;
};

exports.createInterface = createInterface;
