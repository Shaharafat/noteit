/*
 *
 * Title: Notes list
 * Description: Notes list, search notes and add note button
 * Author: Shah Arafat
 * Date: 11-05-2021
 *
 */
import React, { useState } from 'react';
import { Button, SingleNote } from '.';
import { getNotesByTitle } from '../store/actions/notes';
import { useStore } from '../store/Store';

const NotesList = () => {
  const [searchText, setSearchText] = useState('');
  const { dispatch } = useStore();
  const {
    state: { notes },
  } = useStore();

  const searchNote = async (e) => {
    e.preventDefault();
    console.log('notes');
    console.log(searchText);
    await getNotesByTitle(searchText, dispatch);
  };

  return (
    <div className="min-h-screen max-h-screen overflow-y-auto bg-antiFlashWhite px-3 py-5 flex flex-col relative">
      {/* search form */}
      <div>
        <form onSubmit={searchNote} className="border-b border-gray-300 pb-4">
          <input
            type="text"
            autoComplete="off"
            className="px-4 py-2 rounded-full bg-gray-200 focus:outline-none w-full"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search by name"
          />
        </form>
      </div>
      {/* All notes here */}
      <div>
        {notes.length > 0 ? (
          <>
            <h1 className="text-electromagnatic font-bold font-railway text-2xl mt-2">Notes</h1>
            {notes.map((note) => (
              <SingleNote key={note._id} note={note} />
            ))}
          </>
        ) : (
          <h2>No notes found. </h2>
        )}
      </div>

      <Button
        linkButton={true}
        to="/dashboard/newNote"
        pill={true}
        medium={true}
        extraStyles="sticky bottom-0 shadow-md w-full"
      >
        New Note
      </Button>
    </div>
  );
};

export default NotesList;
