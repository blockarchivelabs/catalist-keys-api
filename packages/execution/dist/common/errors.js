'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var logger = require('@ethersproject/logger');

const nonRetryableErrors = [
    ///////////////////
    // Generic Errors
    // Not Implemented
    logger.ErrorCode.NOT_IMPLEMENTED,
    ///////////////////
    // Operational  Errors
    // Buffer Overrun
    logger.ErrorCode.BUFFER_OVERRUN,
    // Numeric Fault
    //   - operation: the operation being executed
    //   - fault: the reason this faulted
    logger.ErrorCode.NUMERIC_FAULT,
    ///////////////////
    // Argument Errors
    // Missing new operator to an object
    //  - name: The name of the class
    logger.ErrorCode.MISSING_NEW,
    // Invalid argument (e.g. value is incompatible with type) to a function:
    //   - argument: The argument name that was invalid
    //   - value: The value of the argument
    logger.ErrorCode.INVALID_ARGUMENT,
    // Missing argument to a function:
    //   - count: The number of arguments received
    //   - expectedCount: The number of arguments expected
    logger.ErrorCode.MISSING_ARGUMENT,
    // Too many arguments
    //   - count: The number of arguments received
    //   - expectedCount: The number of arguments expected
    logger.ErrorCode.UNEXPECTED_ARGUMENT,
    ///////////////////
    // Blockchain Errors
    // Call exception
    //  - transaction: the transaction
    //  - address?: the contract address
    //  - args?: The arguments passed into the function
    //  - method?: The Solidity method signature
    //  - errorSignature?: The EIP848 error signature
    //  - errorArgs?: The EIP848 error parameters
    //  - reason: The reason (only for EIP848 "Error(string)")
    logger.ErrorCode.CALL_EXCEPTION,
    // Insufficient funds (< value + gasLimit * gasPrice)
    //   - transaction: the transaction attempted
    logger.ErrorCode.INSUFFICIENT_FUNDS,
    // Nonce has already been used
    //   - transaction: the transaction attempted
    logger.ErrorCode.NONCE_EXPIRED,
    // The replacement fee for the transaction is too low
    //   - transaction: the transaction attempted
    logger.ErrorCode.REPLACEMENT_UNDERPRICED,
    // The gas limit could not be estimated
    //   - transaction: the transaction passed to estimateGas
    logger.ErrorCode.UNPREDICTABLE_GAS_LIMIT,
    // The transaction was replaced by one with a higher gas price
    //   - reason: "cancelled", "replaced" or "repriced"
    //   - cancelled: true if reason == "cancelled" or reason == "replaced")
    //   - hash: original transaction hash
    //   - replacement: the full TransactionsResponse for the replacement
    //   - receipt: the receipt of the replacement
    logger.ErrorCode.TRANSACTION_REPLACED,
];
const isErrorHasCode = (error) => {
    return (error instanceof Error &&
        Object.prototype.hasOwnProperty.call(error, 'code'));
};
const hasErrorProperty = (error) => {
    return Object.prototype.hasOwnProperty.call(error, 'error');
};
const hasServerErrorProperty = (error) => {
    return Object.prototype.hasOwnProperty.call(error, 'serverError');
};
/**
 * Detect that ethers error is a server error.
 *
 * Note: Ethers v5 error management is not very clean,
 * and ethers error can be nested.
 *
 */
const isEthersServerError = (error) => {
    return (hasServerErrorProperty(error) || // nesting level 0
        (hasErrorProperty(error) && hasServerErrorProperty(error.error)) || // nesting level 1
        (hasErrorProperty(error) &&
            hasErrorProperty(error.error) &&
            hasServerErrorProperty(error.error.error)) // nesting level 2
    );
};

exports.hasErrorProperty = hasErrorProperty;
exports.hasServerErrorProperty = hasServerErrorProperty;
exports.isErrorHasCode = isErrorHasCode;
exports.isEthersServerError = isEthersServerError;
exports.nonRetryableErrors = nonRetryableErrors;
