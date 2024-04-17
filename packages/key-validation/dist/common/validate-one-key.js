'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var constants = require('../constants/constants.js');
var bufferHex = require('./buffer-hex.js');
var domain = require('./domain.js');
var computeSigningRoot = require('./compute-signing-root.js');
var index = require('../ssz/index.js');
var blst = require('@chainsafe/blst');
var deposit = require('./deposit.js');

const validateOneKey = (key, depositSignature, withdrawalCredentials, genesisForkVersion, amount = 32 * 10 ** 9, domainDeposit = constants.DOMAIN_DEPOSIT, zeroHash = constants.ZERO_HASH) => {
    const pubkeyBuffer = bufferHex.bufferFromHexString(key);
    const signatureBuffer = bufferHex.bufferFromHexString(depositSignature);
    const depositMessage = deposit.getDepositMessage(pubkeyBuffer, withdrawalCredentials, amount);
    const domain$1 = domain.computeDomain(domainDeposit, genesisForkVersion, zeroHash);
    const signingRoot = computeSigningRoot.computeSigningRoot(index.DepositMessage, depositMessage, domain$1);
    try {
        return blst.verify(signingRoot, blst.PublicKey.fromBytes(pubkeyBuffer, blst.CoordType.affine), blst.Signature.fromBytes(signatureBuffer, blst.CoordType.affine));
    }
    catch (e) {
        return false;
    }
};

exports.validateOneKey = validateOneKey;
