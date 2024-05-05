/**
 * Project Name: Process Rank List
 * @company YMSLI
 * @author Ayush Seth
 * @date Jan 09, 2024
 * Copyright (c) 2024, Yamaha Motor Solutions (INDIA) Pvt Ltd.
 * -----------------------------------------------------------------------------------
 * Description
 * -----------------------------------------------------------------------------------
 * Utility module providing a promise wrapper method with timeout functionality.
 * -----------------------------------------------------------------------------------
 * Functions:
 * - PromiseWithTimeout: A promise wrapper method with timeout functionality.
 * -----------------------------------------------------------------------------------
 * Revision History
 * -----------------------------------------------------------------------------------
 * Modified By          Modified On         Description
 * Ayush Seth           09 Jan 2024         Initial creation
 * -----------------------------------------------------------------------------------
 */

let utils = {
  /**
   * A promise wrapper method with timeout functionality.
   * @function PromiseWithTimeout
   * @param {number} timeoutMs Timeout value in milliseconds.
   * @param {promise} promise The actual promise to be processed.
   * @param {string} failureMessage Message passed while settling promise when the timer times out.
   * @param {boolean} onTimeOutReject To select whether to resolve or reject the promise on timeout.
   * @returns {promise} Wrapped promise, when resolved in time, returns response.
   */
  PromiseWithTimeout : function (timeoutMs, promise, failureMessage, onTimeOutReject = false) {
    let timeoutHandle;
    const timeoutPromise = new Promise((resolve, reject) => {
      if (onTimeOutReject) {
        timeoutHandle = setTimeout(() => reject(new Error(failureMessage)), timeoutMs);
      } else {
        timeoutHandle = setTimeout(() =>
          resolve({
            timedOut : true,
            message : failureMessage,
            result : {}
          }), timeoutMs);
      }
    });

    return Promise.race([promise, timeoutPromise]).then((result) => {
      clearTimeout(timeoutHandle);
      return result;
    });
  },
};

module.exports = utils;
