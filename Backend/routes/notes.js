const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Notes = require('../models/Notes');
const { body, validationResult } = require('express-validator');


// Route 1  get all notes using get /api/notes/fetchnotes login requires 

router.get('/fetchnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);
    }
    catch (error) {
        return res.status(500).json({ error: 'Server error' });
    }
})


// Route 2  get all notes using get /api/notes/addnotes login requires 

router.post('/addnotes', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 5 }),
    body('description', 'Enter a valid description').isLength({ min: 8 })
], async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Notes({
            title, description, tag, user: req.user.id
        })
        const savenote = await note.save();
        res.json(savenote)
    }
    catch (error) {
        return res.status(500).json({ error: 'Server error' });
    }
})


// Route 3  get all notes using get /api/notes/updatenotes login requires 

router.put('/updatenotes/:id', fetchuser, async (req, res) => {
    try {


        const { title, description, tag } = req.body;
        //creating a new note object
        const newnote = {}

        if (title) { newnote.title = title }
        if (description) { newnote.description = description }
        if (tag) { newnote.tag = tag }



        //find the note to  be updated
        let note = await Notes.findById(req.params.id);

        if (!note) { return res.status(404).send("Not found") }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).json("Not allowed")
        }

        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newnote }, { new: true });
        res.json(note)
    }
    catch (error) {
        return res.status(500).json({ error: 'Server error' });
    }
})



// Route 4  get all notes using get /api/notes/deletenote login requires 

router.delete('/deletenote/:id', fetchuser, async (req, res) => {

    //find the note to  be updated
    try {


        let note = await Notes.findById(req.params.id)
        if (!note) { return res.status(404).send("Not found") }
        if (note.user.toString() !== req.user.id) {
            return res.status(401).json("Not allowed")
        }
        note = await Notes.findByIdAndDelete(req.params.id);
        res.json({ "Success": "Note deleted success fully", note: note })
    } catch (error) {
        return res.status(500).json({ error: 'Server error' });
    }
})
module.exports = router