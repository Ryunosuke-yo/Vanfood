const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : String,
    password : String,
    subscribed : {type:Array, 'default':[]}
})

const user = mongoose.model("user", userSchema)

module.exports = user   