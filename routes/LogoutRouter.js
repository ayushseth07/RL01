/**
 * Project Name: Process Rank List
 * @company YMSLI
 * @author Ayush Seth
 * @date Jan 09, 2024
 * Copyright (c) 2024, Yamaha Motor Solutions (INDIA) Pvt Ltd.
 * -----------------------------------------------------------------------------------
 * Description
 * -----------------------------------------------------------------------------------
 * Express Router for handling user logout.
 * Routers:
 * - GET /: Logs out the user by destroying the session and redirects to the login page.
 * -----------------------------------------------------------------------------------
 * Private Functions:
 * - None
 * -----------------------------------------------------------------------------------
 * Revision History
 * -----------------------------------------------------------------------------------
 * Modified By          Modified On         Description
 * Ayush                09 Jan 2024         Initially created
 * Ayush                10 Jan 2024         Added get rout to logout user
 * -----------------------------------------------------------------------------------
 */

let express = require("express");
let router = express.Router();
let httpStatus = require("http-status-codes").StatusCodes;

/**
 * GET /: Logs out the user by destroying the session and redirects to the login page.
 */
router.get("/", (req, res) => {
    try {
        // Check if user is already logged in
        if (req.session.user) {
            // Destroy the session on logout
            req.session.destroy(() => {
                // On successful logout redirect to login page
                res.redirect('/login');
            });
        } else {
            // User not logged in, return a bad request with an error message
            res.status(httpStatus.BAD_REQUEST).json({ message : global.messages.FAILED_LOGOUT });
        }
    } catch (error) {
        console.error('Error during logout:', error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message : 'Internal Server Error' });
    }
});

module.exports = router;
