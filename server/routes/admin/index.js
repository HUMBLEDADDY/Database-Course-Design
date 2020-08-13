const AdminUser = require('../../models/AdminUser')

module.exports = app =>{
    const assert = require('http-assert')
    const express = require('express')
    const jwt = require('jsonwebtoken')
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
        const games = await req.Model.find().setOptions(querryOptions)
        res.send(games)
    })
    router.get('/:id',async(req,res)=>{
        const model = await req.Model.findById(req.params.id)
        res.send(model)
    })

    const authMiddleware = require('../../middleware/auth')

    const resourceMiddleware = async(req,res,next)=>{
        const modelName = require('inflection').classify(req.params.resource)
        req.Model = require(`../../models/${modelName}`)
        next()
    }

    app.use('/admin/api/rest/:resource',authMiddleware(),resourceMiddleware,router)

    const multer = require('multer')
    const upload = multer({dest: __dirname + '/../../uploads'})
    app.post('/admin/api/upload',authMiddleware(),upload.single('file'), async(req,res)=>{
        const file = req.file
        file.url = `http://localhost:3000/uploads/${file.filename}`
        res.send(file)
    })

    app.post('/admin/api/login', async(req,res)=>{

        const{username,password} = req.body
        const AdminUser = require('../../models/AdminUser')
        const user = await AdminUser.findOne({ username }).select('+password')
        assert(user, 422, '用户不存在')
        const isValid = require('bcryptjs').compareSync(password, user.password)
        assert(isValid, 422, '密码错误')

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
