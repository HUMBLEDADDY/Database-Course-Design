const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:String,
    parent:{type:mongoose.SchemaTypes.ObjectId,ref:'Game'},
    icon:String,
    scores:Number,
    publisher:String,
    content:String,
    price:Number
})

module.exports = mongoose.model("Game",schema)