const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("./story.ejs");
});

module.exports = router;
