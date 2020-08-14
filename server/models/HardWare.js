const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:String,
    icon:String,
    category:{type:mongoose.SchemaTypes.ObjectId,ref:'Category'},
})

module.exports = mongoose.model("Hardware",schema)