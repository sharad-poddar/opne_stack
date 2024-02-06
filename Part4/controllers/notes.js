// this all are the controllers

// here we creates an router object
const notesRouter = require('express').Router()
const { NoteModel } = require('../model/Note.js')


notesRouter.get('/', (req, res) => {
    NoteModel.find({}).then(notes => {
    res.json(notes)
  })
})


notesRouter.get('/:id', (req, res, next) => {
  NoteModel.findById(req.params.id)
    .then(note => {
      if (note) {
        res.json(note)
      } else {
        res.status(404).end()
      }
    })
    .catch(error => next(error))
})


notesRouter.post('/', (req, res, next) => {
  const body = req.body

  const note = new NoteModel({
    content: body.content,
    important: body.important || false,
  })

  note.save()
    .then(savedNote => {
      res.json(savedNote)
    })
    .catch(error => next(error))
})


notesRouter.delete('/:id', (req, res, next) => {
  NoteModel.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(204).end()
    })
    .catch(error => next(error))
})


notesRouter.put('/:id', (req, res, next) => {
  const body = req.body

  const note = {
    content: body.content,
    important: body.important,
  }

  NoteModel.findByIdAndUpdate(req.params.id, note, { new: true })
    .then(updatedNote => {
      res.json(updatedNote)
    })
    .catch(error => next(error))
})


module.exports = { notesRouter }