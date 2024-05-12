window.addEventListener("load", function () {
    // Start the  process when the window has loaded
    searchResult.Start();
});

let searchResult = {
    /**
     * Function to initialize the login process
     */
    Start : function () {
        // Add a submit event listener to the login form
        document.querySelector(".header-form").addEventListener("submit", function (event) {
            // Prevent the default form submission behavior
            event.preventDefault();
            // If validation passes, proceed to fetch data from the backend
            if (searchResult.Validate()) {
                searchResult.FetchDataFromBackend();
            }
        });
    },

    /**
     * Function to validate user input before submitting to the backend
     * @returns {boolean} - True if the input is valid, false otherwise
     */
    Validate : function () {
        // Extract user input values from the form
        let college = document.getElementById("college").value.trim();
        let batch = document.getElementById("batch").value.trim();
        let sem= document.getElementById("sem").value.trim();

        if(college == "" || batch =="" || sem =="") return false;

        return true;
    },

    /**
     * Function to fetch data from the backend using an API call
     */
    FetchDataFromBackend : function () {
        // Extract user input values from the form
        let college = document.getElementById("college").value.trim();
        let batch = document.getElementById("batch").value.trim();
        let sem= document.getElementById("sem").value.trim();

        // Prepare data object to send to the backend API
        let data = {
            college : college,
            batch : batch,
            sem : sem
        };

        // Call the API using utils.CallAjax
        window.utils.CallAjax("POST", "/searchResult", data, searchResult.SuccessFunction, searchResult.FailFunction);
    },

    /**
     * Success handler for the API call
     * @param {object} response - The response from the API call
     */
    SuccessFunction : function (response) {
        // Handle success response here
        // if (response.json.message == LOGIN_SUCCESSFUL) {
        //     window.location.href = "/dashboard";
        // } else {
        //     window.utils.MessageBox(response.json.message);
        // }
    },

    /**
     * Error handler for the API call
     * @param {object} error - The error object from the API call
     */
    FailFunction : function (error) {
        // // Handle error response here
        // window.utils.MessageBox("Incorrect Password");
    },
};






/**
 * Function to display the loader
 */
function showLoader() {
    document.getElementById('loader').style.display = 'flex';
}

/**
 * Function to hide the loader
 */
function hideLoader() {
    document.getElementById('loader').style.display = 'none';
}
showLoader();
window.addEventListener("load", function () {
    hideLoader();
});
