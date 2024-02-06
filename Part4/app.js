const express = require('express')
const config = require('./utils/config.js')
const logger = require('./utils/logger.js')
const mongoose = require('mongoose')
const cors = require('cors')
const { notesRouter } = require('./controllers/notes.js')
const middleware = require('./utils/middleware.js')

// making an server
const app = express()

// connecting to moongose database
mongoose.set('strictQuery', false)
mongoose.connect(config.database_api).then(()=>{
    logger.info('connecting to database')
}).catch((error)=>{
    console.log('error on connecting to database ',error);
})  


// middlewares
app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger)



// A router object is an isolated instance of middleware and routes. 
// You can think of it as a “mini-application,” capable only of performing 
// middleware and routing functions. Every Express application has a built-in 
// app router.
// this /api/notes is base url
app.use('/api/notes', notesRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = { app }

