/*
 *
 * Title: Notes list
 * Description: Notes list, search notes and add note button
 * Author: Shah Arafat
 * Date: 11-05-2021
 *
 */
import React from 'react';
import { SingleNote } from '.';
import { useStore } from '../store/Store';

const NotesList = () => {
  const {
    state: { notes },
  } = useStore();

  const searchNote = () => {
    console.log('notes');
  };

  return (
    <div className="min-h-screen max-h-screen overflow-y-auto bg-antiFlashWhite px-3 py-5 flex flex-col">
      {/* search form */}
      <div>
        <form onSubmit={searchNote} className="border-b border-gray-300 pb-4">
          <input
            type="text"
            autoComplete="off"
            className="px-4 py-2 rounded-full bg-gray-200 focus:outline-none w-full"
            placeholder="Search by name"
          />
        </form>
      </div>

      <div>
        <h1 className="text-electromagnatic font-bold font-railway text-2xl mt-2">Notes</h1>
        {notes.map((note) => (
          <SingleNote key={note._id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default NotesList;
