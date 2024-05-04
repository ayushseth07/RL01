/**
 * Project Name: Process Rank List
 * @company YMSLI
 * @author Ayush Seth
 * @date January 09, 2024
 * Copyright (c) 2024, Yamaha Motor Solutions (INDIA) Pvt Ltd.
 * -----------------------------------------------------------------------------------
 * Description
 * -----------------------------------------------------------------------------------
 * This module exports a set of constants representing various messages used in the application.
 * These messages are intended to provide meaningful information or error descriptions.
 * -----------------------------------------------------------------------------------
 * Constants:
 * - INTERNAL_PROCESSING: Represents an internal processing message.
 * - CANNOT_READ_PROPERTIES: Indicates an error when unable to read the properties file.
 * - ERROR_WHILE_PREPARING_RESPONSE: Denotes an error during response preparation.
 * - ERROR_WHILE_PREPARING_LINE_STATUS_RESPONSE: Denotes an error while preparing line status response.
 * - METHOD_LOG_IN: Represents the log in method / IN.
 * - METHOD_LOG_OUT: Represents the log out method / OUT.
 * - DATA_PROCESSING_TIMEOUT: Indicates a timeout during data processing.
 * - APP_CONFIG_PROPERTIES_NOT_FOUND_AT_SOURCE_DIRECTORY: Error when app config properties are not found.
 * - REGISTRATION_SUCCESSFUL: Message for successful user registration.
 * - REGISTRATION_FAILED: Message for failed user registration.
 * - USER_ALREADY_EXISTS: Message indicating that the user already exists.
 * - LOGIN_SUCCESSFUL: Message for successful user login.
 * - USER_DOES_NOT_EXIST: Message indicating that the user does not exist.
 * - INVALID_PASSWORD: Message for an invalid password.
 * - FAILED_LOGOUT: Message for a failed logout attempt.
 * - NO_MATCHING_PROCESS_ID_FOUND : Message indicating that the process id not ofund
 * -----------------------------------------------------------------------------------
 * Revision History
 * -----------------------------------------------------------------------------------
 * Modified By          Modified On         Description
 * Ayush Seth           January 09, 2024    Initially created
 * -----------------------------------------------------------------------------------
 */

module.exports = {
  INTERNAL_PROCESSING : "internal-processing",
  CANNOT_READ_PROPERTIES : "Could not read the properties file.",
  ERROR_WHILE_PREPARING_RESPONSE : "Error occurred while preparing response",
  ERROR_WHILE_PREPARING_LINE_STATUS_RESPONSE : "Error occurred while preparing line status response",
  METHOD_LOG_IN : " / IN",
  METHOD_LOG_OUT : " / OUT",
  DATA_PROCESSING_TIMEOUT : "Data processing timed out, failed to retrieve data",
  APP_CONFIG_PROPERTIES_NOT_FOUND_AT_SOURCE_DIRECTORY : "App Config properties not found at source directory",
  REGISTRATION_SUCCESSFUL : "Registration successful",
  REGISTRATION_FAILED : "Registration failed",
  USER_ALREADY_EXSISTS : 'User already exists',
  LOGIN_SUCCESSFUL : "Login successful",
  USER_DOESNOT_EXSISTS : "User does not exist",
  INVALID_PASSWORD : "Invalid password",
  FAILED_LOGOUT : "Failed to log out",
  INVALID_PROCESS_ID : "PROCESS_ID is not defined. Please make sure it is set before continuing.",
  NO_MATCHING_PROCESS_ID_FOUND : "No matching process ID found."
};
