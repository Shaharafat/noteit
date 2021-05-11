/*
 *
 * Title: Add new note Form
 * Description: Note form
 * Author: Shah Arafat
 * Date: 26-04-2021
 *
 */
import React, { useState } from 'react';
import { Editor, TagManager } from '..';
import { addNoteSchema, validateSchema } from '../../helpers/schemas';

const AddNoteForm = () => {
  const [note, setNote] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = validateSchema(addNoteSchema);

  // execute when form submits
  const submitNewNote = () => {
    console.log('submitted');
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(submitNewNote)}>
        <div className="flex flex-col">
          <label htmlFor="title" className="text-electromagnatic dark:text-antiFlashWhite">
            Note Title
          </label>
          <input
            type="text"
            className="px-1 py-2 mt-1 border border-gray-200"
            placeholder="Type note title"
            id="title"
            {...register('title')}
          />
          <p className="small text-red-500">{errors.register?.message}</p>
        </div>
        {/* note editor */}
        <Editor note={note} setNote={setNote} />
        {/* tags */}
        <TagManager register={register} errors={errors} />
      </form>
    </div>
  );
};

export default AddNoteForm;
