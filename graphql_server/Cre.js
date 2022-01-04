const mongoose = require('mongoose')

const createpostSchema = new mongoose.Schema({
    title: String,
    description: String,
    tags: String
})

const Cre = mongoose.model('Createpost', createpostSchema);

module.exports = Cre;