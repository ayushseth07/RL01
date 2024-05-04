/**
 * Organization      : Yamaha Motor Solutions (INDIA) Pvt Ltd.
 * Project Name      : Process Rank List
 * Decription        : Client side javascript for Login view
 * Created On        : 09 Jan 2024
 * Created By        : Ayush Seth
 * Last Updated By   : Ayush Seth
 */

// Constant for login success message
const LOGIN_SUCCESSFUL = "Login successful";

/**
 * Event listener for when the window has finished loading
 */
window.addEventListener("load", function () {
    // Start the login process when the window has loaded
    login.Start();
});

/**
 * Login object encapsulating login functionality
 */
let login = {
    /**
     * Function to initialize the login process
     */
    Start : function () {
        // Add a submit event listener to the login form
        document.getElementById("login-form").addEventListener("submit", function (event) {
            // Prevent the default form submission behavior
            event.preventDefault();
            // If validation passes, proceed to fetch data from the backend
            if (login.Validate()) {
                login.FetchDataFromBackend();
            }
        });
    },

    /**
     * Function to validate user input before submitting to the backend
     * @returns {boolean} - True if the input is valid, false otherwise
     */
    Validate : function () {
        // Extract user input values from the form
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();

        // Validate email
        if (!window.utils.EmailValidation(email)) {
            // Show error message if email is invalid
            window.utils.MessageBox(window.INVALID_EMAIL);
            return false;
        }

        // Validate password
        if (!window.utils.PasswordValidation(password)) {
            // Show error message if password is invalid
            window.utils.MessageBox(window.INCORRECT_PASSWORD_FORMAT);
            return false;
        }

        // Validation passed
        return true;
    },

    /**
     * Function to fetch data from the backend using an API call
     */
    FetchDataFromBackend : function () {
        // Extract user input values from the form
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();

        // Prepare data object to send to the backend API
        let data = {
            email : email,
            password : password,
        };

        // Call the API using utils.CallAjax
        window.utils.CallAjax("POST", "/login", data, login.SuccessFunction, login.FailFunction);
    },

    /**
     * Success handler for the API call
     * @param {object} response - The response from the API call
     */
    SuccessFunction : function (response) {
        // Handle success response here
        if (response.json.message == LOGIN_SUCCESSFUL) {
            window.location.href = "/dashboard";
        } else {
            window.utils.MessageBox(response.json.message);
        }
    },

    /**
     * Error handler for the API call
     * @param {object} error - The error object from the API call
     */
    FailFunction : function (error) {
        // Handle error response here
        window.utils.MessageBox(error);
    },
};
