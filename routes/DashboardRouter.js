let express = require("express");
let router = express.Router();

router.get("/", (req, res) => {
  res.render("dashboard_view/DashboardView");
})

module.exports = router;
