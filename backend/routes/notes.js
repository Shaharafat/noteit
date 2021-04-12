/*
 *
 * Title: Notes route
 * Description: Manage notes using this route
 * Author: Shah Arafat
 * Date: 12-04-2021
 *
 */
import express from 'express';
import { createNote, deleteNote, getAllNotes, getSpecificNotes } from '../controllers/note.js';
import validate from '../middlewares/validate.js';
import { validateNote } from '../models/note.js';

const router = express.Router();

// get all notes
router.get('/', getAllNotes);

// find all notes for a specific user
router.get('/:userId', getSpecificNotes);

// create new note
router.post('/add', validate(validateNote), createNote);

// delete a note
router.delete('/delete/:noteId', deleteNote);

// export router
export default router;
