let express = require("express");
let router = express.Router();

router.get("/graphical-dashboard", (req, res) => {
  res.render("dashboard_view/GraphicalDashboardView");
})

module.exports = router;
