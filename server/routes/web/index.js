const Article = require('../../models/Article')


module.exports = app => {
    const router = require('express').Router()
    const mongoose = require('mongoose')
    const Category = mongoose.model('Category')
    const Game = mongoose.model('Game')

    router.get('/news/list',async(req,res)=>{
        const parent = await Category.findOne({
            name: '新闻资讯'
        })
        const cats = await Category.aggregate([
            {$match:{parent:parent._id}},
            {
                $lookup:{
                from:'articles',
                localField: '_id',
                foreignField: 'category',
                as: 'newsList'
                }//类似于关系型数据库的join
            },
            {
                $addFields:{
                    newsList:{$slice:['$newsList',15]}
                }
            }
        ])



        cats.map(cat => {
            cat.newsList.map(news =>{
                news.category = cat.name
                return news
            })
            return cat
        })
        res.send(cats)
    })

    router.get('/games',async(req,res)=>{
        const data = await Game.find()
        res.send(data)
    })

    router.get('/articles/:id',async(req,res)=>{
        const data = await Article.findById(req.params.id)
        res.send(data)
    })

    router.get('/games/:id',async(req,res)=>{
        const data = await Article.findById(req.params.id)
        res.send(data)
    })
    app.use('/web/api',router)
}
