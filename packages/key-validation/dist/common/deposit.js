'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const getDepositMessage = (publicKey, withdrawalCredentials, amount) => {
    return {
        pubkey: publicKey,
        withdrawalCredentials: withdrawalCredentials,
        amount,
    };
};

exports.getDepositMessage = getDepositMessage;
