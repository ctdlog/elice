const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(mongoose.connection);

const postSchema = new mongoose.Schema({
  post_id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  writer: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  hit: { type: Number, default: 0 },
});

postSchema.plugin(autoIncrement.plugin, {
  model: "post",
  field: "post_id",
  startAt: 1,
});

const post = mongoose.model("post", postSchema);

module.exports = post;
