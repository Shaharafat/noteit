/*
 *
 * Title: Notes route
 * Description: Manage notes using this route
 * Author: Shah Arafat
 * Date: 12-04-2021
 *
 */
import express from 'express';
import { createNote, deleteNote, getIndividualNote, getSearchedNotes, getUserNotes } from '../controllers/note.js';
import { isAuthenticated } from '../middlewares/auth.js';
import validate from '../middlewares/validate.js';
import { validateNote } from '../models/note.js';

const router = express.Router();

// find all notes for a specific user
router.get('/:userId', isAuthenticated, getUserNotes);

// get individual post details
router.get('/get/:noteId', isAuthenticated, getIndividualNote);

// create new note
router.post('/newNote', [isAuthenticated, validate(validateNote)], createNote);

// get notes by tag
router.post('/searchNotes', isAuthenticated, getSearchedNotes);

// delete a note
router.delete('/delete/:noteId', isAuthenticated, deleteNote);

// export router
export default router;
