/*
 *
 * Title: note controller
 * Description: note requests controller
 * Author: Shah Arafat
 * Date: 13-04-2021
 *
 */
import { errorMessage, progressMessage, successMessage } from '../helpers/debugHelpers.js';
import { Note } from '../models/note.js';
import { Tag } from '../models/tag.js';
import ErrorResponse from '../utils/errorResponse.js';

// ✔️ note create controller
export const createNote = async (req, res, next) => {
  progressMessage('Creating new note.');
  const { title, details, tags, user } = req.body;

  //  this function add new tags to tag model
  const updateTagList = (noteTags) => {
    noteTags.forEach(async (tag) => {
      const hasTag = await Tag.findOne({ name: tag });
      progressMessage('Finding matching tag');

      if (!hasTag) {
        progressMessage('Tag doesn"t exist, Adding new tag');
        try {
          const newTag = new Tag({ name: tag });
          await newTag.save();
          successMessage('New tag added');
        } catch (error) {
          next(500, 'Tag adding failed.');
        }
      } else {
        progressMessage('Tag already exists');
      }
    });
  };

  // note model
  let note = new Note({
    title,
    details,
    tags,
    user,
  });

  // saving notes
  try {
    note = await note.save();

    successMessage('New note created.');
    // add new tags to tag model
    progressMessage('updating tags list');
    updateTagList(tags); // update tag list after creating notes
    res.status(200).send(note);
  } catch (error) {
    errorMessage('Note creation failed.');
    next(error);
  }
};

// ✔️ get all notes controller
export const getAllNotes = async (req, res, next) => {
  progressMessage('Fetching all notes.');

  try {
    const users = await Note.find().populate('user', 'firstName email -_id');
    successMessage('Notes fetching successfull');
    res.send(users);
  } catch (error) {
    errorMessage('Notes fetching failed.');
    next(new ErrorResponse(500, 'Note fetchind failed'));
  }
};

// ✔️ get notes of specific user controller
export const getSpecificNotes = async (req, res, next) => {
  progressMessage('Fetching notes for single user.');

  const { userId } = req.params;

  try {
    const users = await Note.find({ user: { _id: userId } }).populate(
      'user',
      'firstName email -_id'
    );
    successMessage('Notes fetching successfull');
    res.send(users);
  } catch (error) {
    errorMessage('Notes fetching failed.');
    next(new ErrorResponse(500, 'User notes fetching failed.'));
  }
};

// ✔️ delete a note controller
export const deleteNote = async (req, res, next) => {
  progressMessage('User requested to delete a note');

  const { noteId } = req.params;
  // check note exist or not
  try {
    const note = await Note.findById(noteId);
    if (!note) {
      errorMessage('No user found with that id.');

      return next(404, 'Note not found with this id.');
    }
  } catch (error) {
    errorMessage('Note finding failed.');
    next(error);
  }

  // removing note.
  try {
    await Note.findByIdAndRemove({ _id: noteId });
    successMessage('User deleted.');

    res.status(200).json({ success: true, message: 'Note deleted' });
  } catch (error) {
    errorMessage('User deletion failed');
    next(new ErrorResponse(400, "Can't delete the note"));
  }
};
