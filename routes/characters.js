const router = require("express").Router();
const { characters } = require("../lib/data/character_list");

router.get("/", (req, res) => {
  res.render("./characters.ejs");
});

for (let i = 0; i < characters.length; i++) {
  const curr = characters[i];
  router.get(`/${curr}`, (req, res) => {
    res.render(`./characters/${curr}.ejs`);
  });
}

module.exports = router;
