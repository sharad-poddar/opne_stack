const express = require('express')

const app = express()
app.use(express.json())

// route removes the again and again writting thingd
app.route('/book')
    .get((req, res)=>{
        console.log(req.body)
        console.log('getting')
        res.send('setting up things!')
    })
    .post((req, res)=>{
        console.log(req.body)
        console.log('posting')
        res.send('setting up things!!')
    })
    .put((req, res)=>{
        console.log(req.body)
        console.log('puting')
        res.send('setting up things!!!')
    })

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`listening port = ${PORT}`);
})