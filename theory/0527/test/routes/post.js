const express = require("express");
const router = express.Router();

const PostController = require("../controllers/post");

router.get("/", async (req, res) => {
  const result = await PostController.getPosts();
  let posts = result.data;

  // 만약 query 값으로 page가 없다면 1로 설정
  const page = req.query.page || 1;
  const perPage = 10;
  const totalPages = Math.ceil(posts.length / perPage);

  if (posts.length > 0) {
    const startIndex = (page - 1) * perPage;
    const endIndex =
      posts.length < page * perPage ? posts.length : page * perPage;
    posts = posts.slice(startIndex, endIndex);
  }

  res.render("index", {
    posts: posts,
    page: page,
    totalPages: totalPages == 0 ? 1 : totalPages,
  });
});

router.get("/write", async (req, res) => {
  const post = {
    post_id: "0",
    title: "",
    content: "",
    writer: "",
  };

  if (req.query.post_id) {
    const data = await PostController.getPost(req.query.post_id);
    post.post_id = req.query.post_id;
    post.title = data.data.title;
    post.content = data.data.content;
    post.writer = data.data.writer;
  }

  res.render("post/write", { post: post });
});

router.get("/:id", async (req, res) => {
  const post = await PostController.getPost(req.params.id);

  // 조회수 업데이트
  await PostController.updatePost(req.params.id, { hit: post.data.hit + 1 });

  res.render("post/view", {
    post_id: req.params.id,
    post: post.data,
  });
});

module.exports = router;
