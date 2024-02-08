const express = require('express')

const app = express()
app.use(express.json())
// app.use(cors())



app.get('/about', (req, res, next)=>{
    console.log('this is first callback function')
    res.send('<p>Learning Routing</p>')

    // sending string in form of json
    // res.send(JOSN.stringify('Learning Routing'))
    next()
}, (req, res, next)=>{
    console.log('this is second callback function')
    // cannot set header again after they sent to client
    // res.send('<p>another call back function</p>')
})



app.get('/about/a',(req, res, next)=>{
    // res to client send in next call back function
    console.log('this is the first response')
    next()
},(req, res, next)=>{
    console.log('this is the second response')
    res.json('sharad poddar')
    next()
},(req, res)=>{
    console.log('this si the third response')
})


// call back functions
const fun1 = (req, res, next)=>{
    console.log('first1')
    next()
}
const fun2 = (req, res, next)=>{
    console.log('second2')
    next()
}
const fun3 = (req, res)=>{
    console.log('third3')
    // we must have to send something otherwise it will be loading
    res.send('we are sending something')
}
app.get('/about/b',[fun1, fun2, fun3])



const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`listening port = ${PORT}`);
})