const express = require("express");
const router = express.Router();

const PostController = require("../../controllers/post");

router.get("/", async (req, res, next) => {
  const result = await PostController.getPosts();

  if (result.message == "OK") {
    res.status(200).json(result);
  } else {
    res.status(400).json(result);
  }
});

router.get("/:id", async (req, res, next) => {
  const result = await PostController.getPost(req.params.id);

  if (result.message == "OK") {
    res.status(200).json(result);
  } else {
    res.status(400).json(result);
  }
});

router.post("/", async (req, res, next) => {
  const result = await PostController.writePost(req.body);

  if (result.message == "OK") {
    res.status(200).json(result);
  } else {
    res.status(400).json(result);
  }
});

router.put("/:id", async (req, res, next) => {
  const result = await PostController.updatePost(req.params.id, req.body);

  if (result.message == "OK") {
    res.status(200).json(result);
  } else {
    res.status(400).json(result);
  }
});

router.delete("/:id", async (req, res, next) => {
  const result = await PostController.deletePost(req.params.id);

  if (result.message == "OK") {
    res.status(200).json(result);
  } else {
    res.status(400).json(result);
  }
});

module.exports = router;
