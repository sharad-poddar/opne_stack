const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


const PORT = process.env.PORT || 2000;
const MAX_NOTES = 100;
const prefix = '/part0';

const app = express();

app.use(bodyParser());

const notes = [
    {
        content: 'HTML is easy',
        data: new Date('2024-1-12'),
    },{
        content: 'My name is sharad',
        data: new Date('2024-1-13'),
    },{
        content: 'github...',
        data: new Date('2024-1-14'),
    }
]

const isValidNote =(note)=>{
    return typeof(note)=='object' && typeof(note.content) == 'string';
}

const createNote =(note)=>{
    notes.push(note);
    if(notes.length > MAX_NOTES){
        // removes the zeroth element of array and shift all the element towards zeroth index
        notes.shift();
    }
}

const formatNote = note => {
    return {
      content: note.content.substring(0, 200),
      date: new Date(note.date),
    }
}


// new note send to server, there notes get update
// logic is written in the server side
const notes_page=`
    <!DOCTYPE html>
    <html>
    <head>
        <link rel="stylesheet" type="text/css" href="${prefix}/main.css" />
        <script type="text/javascript" src="${prefix}/main.js"></script>
    </head>
    <body>
        <div class='container'>
        <h1>Notes</h1>
        <div id='notes'>
        </div>
        <form action='${prefix}/new_note' method='POST'>
            <input type="text" name="note"><br>
            <input type="submit" value="Save">
        </form>
        </div>
    </body>
    </html>
`


// here firstly the notes get update then notes send to server
// logic is get fetched and get update
const notes_spa = `
    <!DOCTYPE html>
    <html>
    <head>
    <link rel="stylesheet" type="text/css" href="${prefix}/main.css" />
    <script type="text/javascript" src="${prefix}/spa.js"></script>
    </head>
    <body>
    <div class='container'>
        <h1>Notes -- single page app</h1>
        <div id='notes'>
        </div>
        <form id='notes_form'>
        <input type="text" name="note"><br>
        <input type="submit" value="Save">
        </form>
    </div>
    </body>
    </html>
`

const getFrontPageHtml = (noteCount) => {
    return(`
    <!DOCTYPE html>
      <html>
        <head>
        </head>
        <body>
          <div class='container'>
            <h1>Full stack example app</h1>
            <p>number of notes created ${noteCount}</p>
            <a href='${prefix}/notes'>notes</a>
          </div>
        </body>
      </html>`
   )
  } 
  
const router = express.Router();

router.use(express.static(path.join(__dirname, 'public')))

// on simple / we get dynamic HTMl page
// get is used here
router.get('/', (req, res) => {
  const page = getFrontPageHtml(notes.length)
  res.send(page)
})

// splice(start, deleteCount)
// reseting the notes
// logic is written in the server side
// sending with status 201
router.get('/reset', (req, res) => {
  notes.splice(0, notes.length)
  res.status(201).send({ message: 'notes reset' })
})


// getting notes
router.get('/notes', (req, res) => {
  res.send(notes_page);
})


// getting whole page 
router.get('/spa', (req, res) => {
  res.send(notes_spa)
})

// getting the data 
router.get('/data.json', (req, res) => {
  res.json(notes)
})

// new notes posting in spa
// not redirecting to anywhere
// simpley sending message as note create on validating of note
// adding note to notes
router.post('/new_note_spa', (req, res) => {
  if (!isValidNote(req.body)) {
    return res.send('invalid note').status(400)
  }
  createNote(formatNote(req.body))
  res.status(201).send({ message: 'note created' })
})

// redirecting to the notes page again as notes get update in server side
// more files in network/ more communication
router.post('/new_note', (req, res) => {
  if (typeof req.body.note === 'string') {
    createNote(formatNote({
      //req.body is used to get the data of the req
      content: req.body.note,
      date: new Date()
    }))
  }
  res.redirect(`${prefix}/notes`)
})


if (process.env.NODE_ENV === 'development') {
  app.use(prefix, router)
} else {
  app.use('/', router)
}

app.listen(PORT, () => console.log(`Listening on ${PORT}`))