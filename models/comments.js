const mongoose = require("mongoose");
const { Double } = require('bson');

const commentSchema = new mongoose.Schema({

catcomment:String,
userId:String,
comdate: String,
catId: String

});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
