const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config();

// schema blueprint
const SchemaModel = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
})

// mongoose schema model
// it makes the data collection in blogs s plural of modelSchema
const Blog = mongoose.model('blog',SchemaModel)

// connecting to db
mongoose.set('strictQuery', false)
mongoose.connect(process.env.DATABASE_API).then((res)=>{
    console.log('database has been connected')
}).catch(error=>{
    console.log(error)
})


const app = express()
app.use(express.json())


app.get('/api/blogs',(req, res)=>{
    Blog.find({}).then(result=>{
        console.log(result)
        res.send(result)
    }).catch(error=>{
        console.log(error)
    })
})

app.post('/api/blogs',(req, res)=>{
    // making an object from model and save it
    const blog = new Blog(req.body)
    blog.save().then((result)=>{
        console.log(result)
    }).catch(error=>{
        console.log(error)
    })
})

const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log('server running on PORT: ',PORT);
})