// The following API routes should be created:
const notesData = require('../db/db.json');
const fs = require('fs');
// const { allowedNodeEnvironmentFlags } = require('process');
module.exports = (app) => {
    // * `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

    app.get('/api/notes', (req, res) => res.json(notesData));
    // * `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into `npm` packages that could do this for you).
    // Help from classmates to find a solution
    app.post('/api/notes', (req, res) => {
        const newNote = {
            title: req.body.title,
            text: req.body.text,
            id: req.body.id,
        };
        const notes = JSON.parse(fs.readFileSync('/db/db.json', 'uf8'));
        newNote.id = (notes.length).string();
        const noteArray = [...notes, postNote];
        fs.writeFileSync('/db/db.json', JSON.stringify(noteArray));
        res.sendStatus(200);
      
    });
    app.get('/api/notes', (req, res) => {
        const notes = fs.readFileSync('./db/db.json', 'utf8')
        res.json(JSON.parse(notes))
    })
// Get all notes
    app.get("/api/notes", (req, res) => {
        res.json(notesData);
    })
}
