const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hi, I'm post");
});

router.get("/write", (req, res) => {
  res.render("post/write", {});
});

module.exports = router;
