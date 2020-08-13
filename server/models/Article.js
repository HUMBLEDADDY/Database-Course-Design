const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    title:String,
    content:String,
    category:{type:mongoose.SchemaTypes.ObjectId,ref:'Category'}
})

module.exports = mongoose.model("Article",schema)