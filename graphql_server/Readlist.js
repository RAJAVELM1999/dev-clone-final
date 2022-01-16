const mongoose = require('mongoose')

const readinlistSchema = new mongoose.Schema({
    title: String,
    tags: String,
    description: String,
    creatpostid: { type: String, unique: true },

})



const Readlst = mongoose.model('Readinglist', readinlistSchema);

module.exports = Readlst;
