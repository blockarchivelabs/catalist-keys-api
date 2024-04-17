'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var zod = require('zod');
var primitives = require('./primitives.js');

exports.ValidatorStatus = void 0;
(function (ValidatorStatus) {
    ValidatorStatus["PENDING_INITIALIZED"] = "pending_initialized";
    ValidatorStatus["PENDING_QUEUED"] = "pending_queued";
    ValidatorStatus["ACTIVE_ONGOING"] = "active_ongoing";
    ValidatorStatus["ACTIVE_EXITING"] = "active_exiting";
    ValidatorStatus["ACTIVE_SLASHED"] = "active_slashed";
    ValidatorStatus["EXITED_UNSLASHED"] = "exited_unslashed";
    ValidatorStatus["EXITED_SLASHED"] = "exited_slashed";
    ValidatorStatus["WITHDRAWAL_POSSIBLE"] = "withdrawal_possible";
    ValidatorStatus["WITHDRAWAL_DONE"] = "withdrawal_done";
})(exports.ValidatorStatus || (exports.ValidatorStatus = {}));
const ValidatorStatusType = zod.z.nativeEnum(exports.ValidatorStatus);
const Validator = zod.z.object({
    index: primitives.ValidatorIndex,
    status: ValidatorStatusType,
    pubkey: primitives.BLSPubkeyHex,
}, { description: 'Validator' });
const Validators = zod.z.array(Validator);

exports.Validator = Validator;
exports.ValidatorStatusType = ValidatorStatusType;
exports.Validators = Validators;
