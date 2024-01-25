const express = require('express');
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


// used to get body of req
app.use(express.json());

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

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`server starts at: ${PORT}`);
})