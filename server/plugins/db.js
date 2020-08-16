module.exports = app =>{
    const mongoose = require("mongoose")
    mongoose.connect('mongodb://127.0.0.1:27017/node-vue-moba',{
        useNewUrlParser: true,
        useUnifiedTopology:true
    })

    const Category = require('../models/Category')
    const Game = require('../models/Game')
}