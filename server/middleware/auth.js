module.exports = options =>{
    const assert = require('http-assert')
    const jwt = require('jsonwebtoken')
    const AdminUser = require('../models/AdminUser')

    return async(req,res,next)=>{
        const token = String(req.headers.authorization || '').split(' ').pop()
        if(!token){
            res.status(401).send({
                message:'请先登录'
            })
        }
        const { id } = jwt.verify(token,req.app.get('secret'))
        if(!id){
            res.status(401).send({
                message:'请先登录'
            })
        }
        req.user = await AdminUser.findById(id)
        if(!req.user){
            res.status(401).send({
                message:'请先登录'
            })
        }
        await next()
    }
}