const express = require("express");
const router = express.Router();

const UserController = require("../../controllers/user");

router.post("/", async (req, res, next) => {
  const result = await UserController.insertUser(req.body);

  if (result.message == "OK") {
    res.status(200).json(result);
  } else {
    res.status(400).json(result);
  }
});

router.post("/login", async (req, res, next) => {
  const result = await UserController.auth(req.body);

  if (result.message == "OK") {
    req.session.user = req.body;
    res.status(200).json(result);
  } else {
    res.status(400).json(result);
  }
});

module.exports = router;
