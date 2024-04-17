'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('reflect-metadata');
var di_constants = require('../di.constants.js');
var isClass = require('../utils/is-class.js');

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Class decorator indicating that class implements interface at runtime
 *
 * This is needed for proper work of:
 * `foo instanceof IFoo`
 */
const ImplementsAtRuntime = (interfaceTag) => {
    return (target) => {
        const tags = [];
        if (!isClass.isClass(target)) {
            throw new Error(`'target' must be a class constructor`);
        }
        if (!(isClass.isClass(interfaceTag) &&
            interfaceTag.interfaceTag === di_constants.INTERFACE_TAG &&
            interfaceTag.id)) {
            throw new Error(`'interfaceTag' must be a special anonymous class constructor`);
        }
        tags.push(interfaceTag.id);
        if (Reflect.hasMetadata(di_constants.DESIGN_IMPLEMENTS, target)) {
            const existingTags = Reflect.getMetadata(di_constants.DESIGN_IMPLEMENTS, target);
            tags.push(...existingTags);
        }
        Reflect.defineMetadata(di_constants.DESIGN_IMPLEMENTS, tags, target);
    };
};

exports.ImplementsAtRuntime = ImplementsAtRuntime;
