/**
 * Project Name: Process Rank List
 * @company YMSLI
 * @author Ayush Seth
 * @date January 09, 2024
 * -----------------------------------------------------------------------------------
 * Description
 * -----------------------------------------------------------------------------------
 * Consists of constants related to query for calling procedure.
 * -----------------------------------------------------------------------------------
 * Revision History
 * -----------------------------------------------------------------------------------
 * Modified By          Modified On         Description
 * Ayush Seth           January 09, 2024    Initially created
 * -----------------------------------------------------------------------------------
 */

//Query to call a function which accepts argument to select all columns from the table
const SELECT_FUNC_WITHOUT_COLUMN_QUERY = `SELECT %s(%s)`;

module.exports = {
  SELECT_FUNC_WITHOUT_COLUMN_QUERY : SELECT_FUNC_WITHOUT_COLUMN_QUERY
};
