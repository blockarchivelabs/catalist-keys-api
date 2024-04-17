'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const compareOperators = (operatorOne, operatorTwo) => {
    if (operatorOne == null)
        return false;
    if (operatorTwo == null)
        return false;
    const addressOne = operatorOne.rewardAddress.toLocaleLowerCase();
    const addressTwo = operatorTwo.rewardAddress.toLocaleLowerCase();
    if (addressOne !== addressTwo)
        return false;
    return true;
};

exports.compareOperators = compareOperators;
