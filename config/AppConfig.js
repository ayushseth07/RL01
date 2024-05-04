/**
 * Project Name: Process Rank List
 * @company YMSLI
 * @author Ayush Seth
 * @date January 09, 2024
 * Copyright (c) 2024, Yamaha Motor Solutions (INDIA) Pvt Ltd.
 * -----------------------------------------------------------------------------------
 * Description
 * -----------------------------------------------------------------------------------
 * This file contains the configuration settings for the Process Rank List
 * project. It includes server configuration, logger configuration, PostgreSQL database
 * settings, and other global parameters.
 * -----------------------------------------------------------------------------------
 * Configuration Settings:
 * - SERVER_IP: The IP address on which the server will listen.
 * - SERVER_PORT: The port on which the server will listen.
 * - SERVER_MODE_PRODUCTION: Set to true for production mode, false for development.
 * - LOG_FILE_MAX_SIZE: Maximum size of the log file in bytes before rotation.
 * - DATA_PROCESSING_TIMEOUT: Timeout for processing incoming request data in milliseconds.
 * - LOG_FILE_ARCHIVE: Set to true to archive log files, false otherwise.
 * - POSTGRES: PostgreSQL database configurations.
 * - CHECKLOG_FLG: Flag to check and log configuration settings.
 * -----------------------------------------------------------------------------------
 * Revision History
 * -----------------------------------------------------------------------------------
 * Modified By          Modified On         Description
 * Ayush Seth           January 09, 2024    Initially created
 * -----------------------------------------------------------------------------------
 */
let appConfig = {
  SERVER_IP : "127.0.0.1",
  SERVER_PORT : 3000,
  SERVER_MODE_PRODUCTION : true,
  LOG_FILE_MAX_SIZE : 10000000,
  DATA_PROCESSING_TIMEOUT : 600000,
  LOG_FILE_ARCHIVE : false,
  POSTGRES : {
    MAIN : {
      HOST : "localhost",
      PORT : 5432,
      DATABASE : "Process_Management",
      USER : "postgres",
      PASSWORD : "root",
      SSL : false,
      BINARY : false,
      CLIENT_ENCODING : "UTF8",
      CONNECTION_TIMEOUT_MILLIS : 10000,
      IDLE_TIMEOUT_MILLIS : 30000,
      MAX : 10,
      QUERY_TIMEOUT : 30000,
      KEEP_ALIVE : true,
      ALLOW_EXIT_ON_IDLE : false
    },
  }
};

module.exports = appConfig;
