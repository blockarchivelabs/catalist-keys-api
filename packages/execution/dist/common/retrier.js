'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sleep = require('./sleep.js');

const retrier = (logger, defaultMaxRetryCount = 3, defaultMinBackoffMs = 1000, defaultMaxBackoffMs = 60000, defaultLogWarning = false, defaultErrorFilter) => {
    return async (callback, maxRetryCount, minBackoffMs, maxBackoffMs, logWarning, errorFilter) => {
        maxRetryCount = maxRetryCount !== null && maxRetryCount !== void 0 ? maxRetryCount : defaultMaxRetryCount;
        minBackoffMs = minBackoffMs !== null && minBackoffMs !== void 0 ? minBackoffMs : defaultMinBackoffMs;
        maxBackoffMs = maxBackoffMs !== null && maxBackoffMs !== void 0 ? maxBackoffMs : defaultMaxBackoffMs;
        logWarning = logWarning !== null && logWarning !== void 0 ? logWarning : defaultLogWarning;
        errorFilter = errorFilter !== null && errorFilter !== void 0 ? errorFilter : defaultErrorFilter;
        try {
            return await callback();
        }
        catch (err) {
            if (typeof errorFilter === 'function' && errorFilter(err)) {
                throw err;
            }
            if (logger && logWarning) {
                logger.warn(err, `Retrying after (${minBackoffMs}ms). Remaining retries [${maxRetryCount}]`);
            }
            if (maxRetryCount <= 1 || minBackoffMs >= maxBackoffMs) {
                throw err;
            }
            await sleep.sleep(minBackoffMs);
            return await retrier(logger)(callback, maxRetryCount - 1, minBackoffMs * 2, maxBackoffMs, logWarning, errorFilter);
        }
    };
};

exports.retrier = retrier;
