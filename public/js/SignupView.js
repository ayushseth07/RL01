const REGISTRATION_SUCCESSFUL = "Registration successful";

/**
 * Event listener for when the window has finished loading
 */
window.addEventListener("load", function () {
    // Start the signup process when the window has loaded
    signup.Start();
});

/**
 * Signup object encapsulating signup functionality
 */
let signup = {
    /**
     * Function to initialize the signup process
     */
    Start: function () {
        // Add a submit event listener to the signup form
        document.getElementById("signup-form").addEventListener("submit", function (event) {
            // Prevent the default form submission behavior
            event.preventDefault();
            // If validation passes, proceed to fetch data from the backend
            if (signup.Validate()) {
                signup.FetchDataFromBackend();
            }
        });
    },

    /**
     * Function to validate user input before submitting to the backend
     * @returns {boolean} - True if the input is valid, false otherwise
     */
    Validate: function () {
        // Extract user input values from the form
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        let role = document.getElementById("role").value.trim();

        // Validate name, email, password, and role
        if (name === "" || email === "" || password === "" || role === "") {
            window.utils.MessageBox("Please fill out all fields.");
            return false;
        }

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
    FetchDataFromBackend: function () {
        // Extract user input values from the form
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        let role = document.getElementById("role").value.trim();

        // Prepare data object to send to the backend API
        let data = {
            name: name,
            email: email,
            password: password,
            role: role, // Include role in the data object
        };

        // Call the API using utils.CallAjax
        window.utils.CallAjax("POST", "/signup", data, signup.SuccessFunction, signup.FailFunction);
    },

    /**
     * Success handler for the API call
     * @param {object} response - The response from the API call
     */
    SuccessFunction: function (response) {
        // Handle success response here
        if (response.json.message == REGISTRATION_SUCCESSFUL) {
            window.location.href = "/login";
        } else {
            window.utils.MessageBox(response.json.message);
        }
    },

    /**
     * Error handler for the API call
     * @param {object} error - The error object from the API call
     */
    FailFunction: function (error) {
        // Handle error response here
        window.utils.MessageBox(error);
    },
};