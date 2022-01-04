const mongoose = require('mongoose')

const registerSchema = new mongoose.Schema({
    name: { type: String },
    email: String,
    password: String
})



const Reg = mongoose.model('Register', registerSchema);

module.exports = Reg;
