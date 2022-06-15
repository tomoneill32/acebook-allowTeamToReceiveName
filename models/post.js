const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  message: String,
  comments: [{ user_id: String, message: String, username: String }],
  user_id: String,
  username: String,
  likes: Array
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
