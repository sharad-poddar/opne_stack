const config = require('./utils/config.js')
const app = require('./01_app.js')


const PORT = config.PORT
app.listen(PORT, ()=>{
    console.log('server running on PORT: ',PORT);
})