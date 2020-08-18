module.exports = app =>{
    const assert = require('http-assert')
    const express = require('express')
    const jwt = require('jsonwebtoken')
    const AdminUser = require('../../models/AdminUser')
    const router = express.Router({
        mergeParams:true
    })
    router.post('/',async(req,res)=>{
        const model = await req.Model.create(req.body)
        res.send(model)
    })
    router.post('/:id',async(req,res)=>{
        const model = await req.Model.findByIdAndUpdate(req.params.id,req.body)
        res.send(model)
    })
    router.delete('/:id',async(req,res)=>{
        const model = await req.Model.findByIdAndDelete(req.params.id,req.body)
        res.send({
            success: true
        })
    })
    router.get('/',async(req,res)=>{
        const querryOptions = {}
        if(req.Model.modelName === 'Category'){
            querryOptions.populate = 'parent'
        }
        if(req.Model.modelName === 'Article'){
            querryOptions.populate = 'category'
        }
        if(req.Model.modelName === 'Hardware'){
            querryOptions.populate = 'category'
        }
        const games = await req.Model.find().setOptions(querryOptions)
        res.send(games)
    })
    router.get('/:id',async(req,res)=>{
        const model = await req.Model.findById(req.params.id)
        res.send(model)
    })

    const authMiddleware = require('../../middleware/auth')

    const resourceMiddleware = require('../../middleware/resource')

    app.use('/admin/api/rest/:resource',resourceMiddleware(),router)

    const multer = require('multer')
    const upload = multer({dest: __dirname + '/../../uploads'})
    app.post('/admin/api/upload',upload.single('file'), async(req,res)=>{
        const file = req.file
        file.url = `http://localhost:3000/uploads/${file.filename}`
        res.send(file)
    })

    app.post('/admin/api/login', async(req,res)=>{

        const{username,password} = req.body
        const user = await AdminUser.findOne({ username }).select('+password')
        console.log(user)
        if(!user){
            res.status(422).send({
                message:'用户不存在'
            })
        }
        const isValid = require('bcryptjs').compareSync(password, user.password)
        if(!isValid){
            res.status(422).send({
                message:'密码错误'
            })
        }
        const token = jwt.sign({ id: user._id }, app.get('secret'))
        res.send({ token })
      })
    
      app.use(async (err, req, res, next) => {
        // console.log(err)
        res.status(err.statusCode || 500).send({
          message: err.message
        })
      })
    }
