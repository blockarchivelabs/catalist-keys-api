'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ssz = require('@chainsafe/ssz');
var sszTypes = require('./primitive/ssz-types.js');

new ssz.ContainerType({
    previousVersion: sszTypes.Version,
    currentVersion: sszTypes.Version,
    epoch: sszTypes.Epoch,
}, { typeName: 'Fork', jsonCase: 'eth2' });
const ForkData = new ssz.ContainerType({
    currentVersion: sszTypes.Version,
    genesisValidatorsRoot: sszTypes.Root,
}, { typeName: 'ForkData', jsonCase: 'eth2' });
const SigningData = new ssz.ContainerType({
    objectRoot: sszTypes.Root,
    domain: sszTypes.Domain,
}, { typeName: 'SigningData', jsonCase: 'eth2' });
const DepositMessage = new ssz.ContainerType({
    pubkey: sszTypes.BLSPubkey,
    withdrawalCredentials: sszTypes.Bytes32,
    amount: sszTypes.UintNum64,
}, { typeName: 'DepositMessage', jsonCase: 'eth2' });

exports.DepositMessage = DepositMessage;
exports.ForkData = ForkData;
exports.SigningData = SigningData;
