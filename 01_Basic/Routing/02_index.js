const express = require('express')

const app = express()
app.use(express.json())

// response methods
app.get('/',(req, res)=>{
    res.send('<h1>Learning Response Methods</h1>')
})

//1. res.download()
// use to download the file, there is no change of page in this
app.get('/download',(req, res)=>{
    console.log('download part going on')
    // here the files will be download from backened
    // this is restircted only one thing can done in headers
    // res.send('downloading')
    res.download('01_index.js')
})

//2. res.end()
// used to end the response
app.get('/end',(req, res)=>{
    console.log('end part going on')
    // this end is usd to stop the loading without sending anything
    res.status(200).end()
})

//3. res.json()
// sending the json data
app.get('/json',(req, res)=>{
    console.log('json part going on')
    // this end is usd to stop the loading without sending anything
    // json file is going to client
    res.json('hello world')
})

//4. res.jsonp()
// sedning json with jsonp response
app.get('/jsonp',(req, res)=>{
    console.log('jsonp part going on')
    res.jsonp('hello world jsonp')
})

// 5. res.redirect()
app.get('/redirect',(req, res)=>{
    console.log('redirect part going on')
    // the new comes at the beginnig
    // res.send('/')

    res.send('https://google.com')
    // it will back to the same page
    // res.redirect('back')
})

// 6. there are may like
// res.send() -> sending text
// res.status() -> setting up status
// res.sendFile() -> snding any file
// res.set() -> setting the res header/body

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`listening port = ${PORT}`);
})