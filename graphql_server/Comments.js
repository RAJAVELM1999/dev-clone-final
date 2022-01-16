const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    createpostid: String,
    comments: String,

})

const Comments = mongoose.model('Comments', commentSchema);

module.exports = Comments;