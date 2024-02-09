const express = require('express')
const Blog = require('../models/blogModel.js')

const router = express.Router()

router.get('/',(req, res)=>{
    Blog.find({}).then(result=>{
        console.log(result)
        res.send(result)
    }).catch(error=>{
        console.log(error)
    })
})

router.post('/',(req, res)=>{
    // making an object from model and save it
    const blog = new Blog(req.body)
    blog.save().then((result)=>{
        console.log(result)
    }).catch(error=>{
        console.log(error)
    })
})

module.exports = router