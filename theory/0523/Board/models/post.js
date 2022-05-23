const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(mongoose.connection);

// DB의 스키마를 정의
const PostSchema = new mongoose.Schema({
  post_id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  writer: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  hit: { type: Number, default: 0 },
});

PostSchema.plugin(autoIncrement.plugin, {
  model: "posts",
  field: "post_id",
});

// posts: collection 이름
const PostModel = mongoose.model("posts", PostSchema);

module.exports = PostModel;
// const Post = require("models/post");
