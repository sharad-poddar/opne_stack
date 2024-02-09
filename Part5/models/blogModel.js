const mongoose = require('mongoose')

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

module.exports = Blog