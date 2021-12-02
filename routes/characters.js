const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("./characters.ejs");
});

module.exports = router;
