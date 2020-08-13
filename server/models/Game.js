const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:String,
    icon:String,
    score:String,
    publisher:String,
    content:String,
    price:Number
})

module.exports = mongoose.model("Game",schema)