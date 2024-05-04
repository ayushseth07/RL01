const LOGIN_USER_QUERY = require("../queries/QueryTvfLogin");
let { GetPostgresClient } = require("./Postgres");

module.exports = {
    /**
     * Retrieves the password for a user given their email address.
     * @param {string} email - The email address of the user.
     * @returns {Promise<object>} - A promise that resolves to the result of the password retrieval.
     * @throws {Error} - Throws an error if there is an issue with the database connection or query execution.
     */
    GetPassword : async (email) => {
        global.log("info", global.messages.METHOD_LOG_IN);
        try {
            // Establish a connection to the PostgreSQL database
            let db = await GetPostgresClient(global.appConfig.POSTGRES.MAIN);

            // Generate the login user query based on the provided email
            let loginUserQuery = LOGIN_USER_QUERY.LoginUserQuery(email);

            // Execute the query and retrieve the result
            let result = await db.Execute(loginUserQuery);
            global.log("info", global.messages.METHOD_LOG_OUT);

            // Return the result
            return result;
        } catch (error) {
            // Handle database connection errors or other exceptions
            global.log("error", error.message);
            throw error;
        }
    }
};
