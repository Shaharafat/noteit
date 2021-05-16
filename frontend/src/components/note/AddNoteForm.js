/*
 *
 * Title: Add new note Form
 * Description: Note form
 * Author: Shah Arafat
 * Date: 26-04-2021
 *
 */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button, Editor, TagManager } from '..';
import { addNoteSchema, validateSchema } from '../../helpers/schemas';
import { createNewNote } from '../../store/actions/notes';
import { useStore } from '../../store/Store';

const AddNoteForm = () => {
  const [note, setNote] = useState('');
  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useStore();

  // form validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = validateSchema(addNoteSchema);

  // execute when form submits
  const submitNewNote = async (data) => {
    setLoading(true);
    // make tag array
    data.tags = data.tags.split(',');

    data = { ...data, details: note, user: state.user.id };
    const response = await createNewNote(dispatch, data);

    // TODO: show notification
    if (response.success) {
      console.log('successfull');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen max-h-screen bg-white dark:bg-wetEsphalt">
      <div className="w-full pt-6 px-3 ">
        <Helmet>
          <title>New Note | Noteit</title>
        </Helmet>

        <h1 className="text-electromagnatic dark:text-antiFlashWhite font-bold font-railway text-2xl mt-2">
          Create New Note
        </h1>
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

          {/* submit */}
          <Button medium="true" disabled={loading}>
            Create
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddNoteForm;
