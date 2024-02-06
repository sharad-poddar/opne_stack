// getting an specific app from app.js
const { app } = require('./app.js')
const config = require('./utils/config.js')
const logger = require('./utils/logger.js')


app.listen(config.port, ()=>{
    logger.info(`server is rinning on port: ${config.port}`)
})