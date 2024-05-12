let router = require("express").Router();
router.get("/", (req, res) => {
    res.render("ranklists/mca/Mca");
  })
module.exports = router;