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

// without this the body property would be undefined
// it takes the req in json format and transform into js then attach to body
app.use(express.json())


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

app.delete('/api/notes/:id',(req, res)=>{
    const id = req.params.id;
    notes = notes.filter(note=>id!=note.id);
    res.status(204).end()
})

// on posting always specify the content-types
app.post('/api/notes',(req, res)=>{
    const note = req.body;
    console.log(note);
    
    if(!body.content){
        return res.status(400).json({
            error: 'content missing' 
        })
    }else{
        // notes.push({id: notes.length+1, ...note});
        // setting up the important value as default as false
        notes.push({
            content: note.content,
            important: Boolean(note.important) || false,
            id: notes.length+1,
        })
        console.log(notes);
        res.json(notes);
    }
})

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`server starts at: ${PORT}`);
})





// GET  	fetches a single resource
// GET  	fetches all resources in the collection
// POST 	creates a new resource based on the request data
// DELETE	removes the identified resource
// PUT  	replaces the entire identified resource with the request data
// PATCH	replaces a part of the identified resource with the request data