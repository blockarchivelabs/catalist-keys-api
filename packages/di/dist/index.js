'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var di_constants = require('./di.constants.js');
var createInterface = require('./utils/create-interface.js');
var doesImplement = require('./utils/does-implement.js');
var isClass = require('./utils/is-class.js');
var isInterfaceTag = require('./utils/is-interface-tag.js');
var implementsAtRuntime_decorator = require('./decorators/implements-at-runtime.decorator.js');



exports.DESIGN_IMPLEMENTS = di_constants.DESIGN_IMPLEMENTS;
exports.INTERFACE_MAP_KEY = di_constants.INTERFACE_MAP_KEY;
exports.INTERFACE_TAG = di_constants.INTERFACE_TAG;
exports.createInterface = createInterface.createInterface;
exports.doesImplement = doesImplement.doesImplement;
exports.isClass = isClass.isClass;
exports.isInterfaceTag = isInterfaceTag.isInterfaceTag;
exports.ImplementsAtRuntime = implementsAtRuntime_decorator.ImplementsAtRuntime;
