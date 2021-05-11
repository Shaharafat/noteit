/*
 *
 * Title: Add new note
 * Description: Add new note
 * Author: Shah Arafat
 * Date: 25-04-2021
 *
 */
import React from 'react';
import { AddNoteForm } from '../components';

const AddNewNote = () => {
  return (
    <div>
      <h1 className="text-2xl text-electromagnatic dark:text-sourLemon font-railway font-semibold">
        Add Note
      </h1>

      <AddNoteForm />
    </div>
  );
};

export default AddNewNote;
