const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    googleId:String
})

// creating user model
mongoose.model('user' , userSchema);

// exporting the model
module.exports = mongoose.model('user');