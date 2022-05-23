const Post = require("../models/post");

const writePost = async (post) => {
  try {
    return await Post.create(post);
  } catch (err) {
    return arr;
  }
};
