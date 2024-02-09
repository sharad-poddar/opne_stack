const express = require('express')
const mongoose = require('mongoose')
const router = require('./controllers/blog.js')

const app = express()

// connecting to db
mongoose.set('strictQuery', false)
mongoose.connect(process.env.DATABASE_API).then((res)=>{
    console.log('database has been connected')
}).catch(error=>{
    console.log(error)
})


app.use(express.json())
app.use('/api/blogs',router)

module.exports = app