/*
 *
 * Title: Add new note Form
 * Description: Note form
 * Author: Shah Arafat
 * Date: 26-04-2021
 *
 */
import React, { useState } from 'react';
import { Button, Editor, TagManager } from '..';
import { addNoteSchema, validateSchema } from '../../helpers/schemas';

const AddNoteForm = () => {
  const [note, setNote] = useState('');
  const [loading, setLoading] = useState(false);
  // const { dispatch } = useStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = validateSchema(addNoteSchema);

  // execute when form submits
  const submitNewNote = (data) => {
    data = { ...data, details: note };
    console.log(data, note);
    setLoading(true);
    console.log('submitted');
  };

  return (
    <div className="w-full mt-6">
      <h1 className="text-electromagnatic font-bold font-railway text-2xl mt-2">Create New Note</h1>
      <form onSubmit={handleSubmit(submitNewNote)} className="mt-3">
        <div className="flex flex-col">
          <label
            htmlFor="title"
            className="text-electromagnatic dark:text-antiFlashWhite font-semibold"
          >
            Note Title
          </label>
          <input
            type="text"
            className="px-1 py-2 mt-1 border border-gray-200 focus:outline-none"
            placeholder="Type note title"
            id="title"
            {...register('title')}
          />
          <p className="small text-red-500">{errors.title?.message}</p>
        </div>
        {/* note editor */}
        <Editor note={note} setNote={setNote} />
        {/* tags */}
        <TagManager register={register} errors={errors} />
        {/* TODO: color option */}

        {/* submit */}
        <Button medium="true" disabled={loading}>
          Create
        </Button>
      </form>
    </div>
  );
};

export default AddNoteForm;
