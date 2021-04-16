// The following API routes should be created:
var notesData = require('../db/db.json');
const fs = require('fs');
const express = require('express');

module.exports = (app) => {
     app.get('/api/notes', (req, res) => {res.json(notesData)})
    // * `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

    
    // * `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into `npm` packages that could do this for you).
    // Help from classmates to find a solution
    app.post('/api/notes', (req, res) => {
        const newNote = {
            title: req.body.title,
            text: req.body.text,
            id: notesData.length,
        };
        console.log('this is new note', newNote)
        notesData.push(newNote);
        console.log('this is the notes data', notesData )
        
        fs.writeFileSync('./db/db.json', JSON.stringify(notesData));
        res.sendStatus(200);
      
    });
    
// Get all notes
    app.delete("/api/notes/:id", (req, res) => {
       console.log(req.params)
       var newArray = notesData.filter(note=> note.id !== parseInt(req.params.id))
       console.log(newArray)
       notesData = newArray
       fs.writeFileSync('./db/db.json', JSON.stringify(notesData));
        res.sendStatus(200);
       
})

   
}
