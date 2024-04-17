'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ssz = require('@chainsafe/ssz');

new ssz.BooleanType();
new ssz.UintNumberType(1);
const Bytes4 = new ssz.ByteVectorType(4);
new ssz.ByteVectorType(8);
new ssz.ByteVectorType(20);
const Bytes32 = new ssz.ByteVectorType(32);
const Bytes48 = new ssz.ByteVectorType(48);
new ssz.ByteVectorType(96);
new ssz.UintNumberType(1);
new ssz.UintNumberType(2);
new ssz.UintNumberType(4);
const UintNum64 = new ssz.UintNumberType(8);
new ssz.UintNumberType(8, { clipInfinity: true });
new ssz.UintBigintType(8);
new ssz.UintBigintType(16);
new ssz.UintBigintType(32);
/**
 * Use JS Number for performance, values must be limited to 2**52-1.
 * Epoch is a time unit, so in all usages it's bounded by the clock, ensuring < 2**53-1
 */
const Epoch = UintNum64;
const Root = new ssz.ByteVectorType(32);
const Version = Bytes4;
const BLSPubkey = Bytes48;
const Domain = Bytes32;
new ssz.UintNumberType(1, { setBitwiseOR: true });

exports.BLSPubkey = BLSPubkey;
exports.Bytes32 = Bytes32;
exports.Bytes4 = Bytes4;
exports.Bytes48 = Bytes48;
exports.Domain = Domain;
exports.Epoch = Epoch;
exports.Root = Root;
exports.UintNum64 = UintNum64;
exports.Version = Version;
