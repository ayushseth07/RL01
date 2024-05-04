/**
 * Project Name: Process Rank List
 * @company YMSLI
 * @author Ayush Seth
 * @date January 09, 2024
 * Copyright (c) 2024, Yamaha Motor Solutions (INDIA) Pvt Ltd.
 * -----------------------------------------------------------------------------------
 * Description
 * -----------------------------------------------------------------------------------
 * This file defines constants used throughout the Process Rank List project.
 * It includes supported date and timestamp formats, data processing timeout, base URL,
 * error codes, and other constants.
 * -----------------------------------------------------------------------------------
 * Revision History
 * -----------------------------------------------------------------------------------
 * Modified By          Modified On         Description
 * Ayush Seth           January 09, 2024    Initially created
 * -----------------------------------------------------------------------------------
 */
let constants = {
  SUPPORTED_QUERY_DATE_FORMAT : "YYYY-MM-DD",
  SUPPORTED_QUERY_DATETIME_FORMAT : "YYYY-MM-DD HH:mm:ss",
  DATA_PROCESSING_TIMEOUT : 600000,
  BASE_URL : "/",
  RECORD_EXSISTS_ERROR_CODE : "23505",
  ZERO : 0,
  FETCH_PROCESS_DATA_TIME : 500,
  MIN_PASSWORD_LENGTH : 8,
  SESSION_SECRET_KEY : "12#42ddaghn**7"
};

module.exports = constants;