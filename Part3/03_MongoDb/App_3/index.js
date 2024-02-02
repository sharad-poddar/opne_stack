const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
require('dotenv').config();

const app = express();

const data = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

//1. CORS
//2. this allows any site to get the data, without matching the ports/ same-origin
app.use(cors());

// used to get body of req
app.use(express.json());

// defined by user
morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms'
    ].join(' ')
})
// defined middle ware
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

// predefined morgan middleware
// app.use(morgan('tiny'));

app.get('/',(req, res)=>{
    res.send('<p>go to /api/phonebook</p>');
})

app.get('/info',(req, res)=>{
    res.send(`<div>
        <p>phonebook has ${data.length} info</p>
        <p>${new Date()}</p>
    </div>`);
})

app.get('/api/phonebook',(req, res)=>{
    res.json(data);
})

app.get('/api/phonebook/:id',(req, res)=>{
    const id = req.params.id;
    console.log(id);
    
    const phoneData = data.find(e=>e.id==id);

    if(phoneData){
        res.json(phoneData);
    }else{
        res.status(404).end();
    }
})

app.delete('/api/phonebook/:id',(req, res)=>{
    const id = req.params.id;
    console.log(id);
    const phonebook = data.filter(e => e.id!=id);
    console.log(phonebook);
    res.status(204).end();
})

app.post('/api/phonebook',(req, res)=>{
    
    const name = data.find(e=> e.name == req.body.name)?.name;
    console.log(Boolean(name));

    if(!req.body || Boolean(name) || req.body.name == '' || req.body.number == ''){
        if(Boolean(name)){
            res.status(400).json({ error: 'name must be unique' })
        }else{
            res.status(400).json({ content: 'content missing' })
        }
    }else{
        const newData = {
            name: req.body.name,
            number: req.body.number,
            id: data.length+1
        }

        const newDataArr = data.concat(newData);
        console.log(newDataArr);
        res.json(newDataArr);
    }
})


// this will run on wrong endpoint or that endpoint which we not defined yet
const unknownEndPoint = (req, res)=>{
    res.status(404).json({error: 'unknown endpoint'});
}
app.use(unknownEndPoint);


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`server starts at: ${PORT}`);
})