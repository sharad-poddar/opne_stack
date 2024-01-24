const express = require('express');
const app = express();

let notes = [
    {
      id: 1,
      content: "HTML is easy",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only JavaScript",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      important: true
    }
]

// route-1
// HTTP GET requests
app.get('/',(req, res)=>{
    // sending html/text data
    res.send('<h1>hello world</h1>');
})

// route-2
// HTTP GET requests
app.get('/api/notes',(req, res)=>{
    // sending json data
    res.json(notes);

    // here also data goes in string format
    // res.send(JSON.stringify(notes));
})

// route-3
// HTTP GET requests
app.get('/api/name',(req, res)=>{
    // if res.json then data send in json format
    // if res.send then data send in text/html format
    res.send('sharad poddar');
})

//1. fetching an single data
//2. here /:id is not an id
app.get('/api/notes/:id',(req, res)=>{
    // here the console.log() runs in bacekend means vs code server
    // here we have no body
    console.log('Body -> ',req.body);
    console.log('Params -> ',req.params);
    const id = req.params.id;
    const note = notes.find(note=>note.id==id);
    
    // checking if note is available or not
    // end() is used when no data is send on req
    // status() setting up the status
    // 404 status response denoted by red line in console
    if(note){
        res.json(note);
    }else{
        // res.status(404).send('<p>No data is found!!</p>');
        res.status(404).end();
    }
})


const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`server starts at: ${PORT}`);
})
