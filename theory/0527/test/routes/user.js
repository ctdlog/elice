const express = require("express");
const router = express.Router();

router.get("/login", async (req, res) => {
  res.render("user/login");
});

router.get("/signup", async (req, res) => {
  res.render("user/signup");
});

router.get("/logout", async (req, res, next) => {
  req.session.destroy((err) => {
    if (err) console.log(err);
    else res.send("logout");
  });
});

module.exports = router;
