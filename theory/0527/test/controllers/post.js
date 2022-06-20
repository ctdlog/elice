const Post = require("../models/post");

module.exports.getPosts = async () => {
  try {
    const posts = await Post.find({}).sort({ post_id: -1 });
    return { message: "OK", data: posts };
  } catch (err) {
    return { message: err };
  }
};

module.exports.getPost = async (post_id) => {
  try {
    const post = await Post.findOne({
      post_id: post_id,
    });
    return { message: "OK", data: post };
  } catch (err) {
    return { message: err };
  }
};

module.exports.writePost = async (post) => {
  try {
    const result = await Post.create(post);
    return { message: "OK", data: result };
  } catch (err) {
    return { message: err };
  }
};

module.exports.updatePost = async (post_id, post) => {
  try {
    const result = await Post.updateOne({ post_id: post_id }, post);
    return { message: "OK", data: result };
  } catch (err) {
    return { message: err };
  }
};

module.exports.deletePost = async (post_id) => {
  try {
    const result = await Post.deleteOne({ post_id: post_id });
    return { message: "OK", data: result };
  } catch (err) {
    return { message: err };
  }
};
