/*
 *
 * Title: Notes list
 * Description: Notes list, search notes and add note button
 * Author: Shah Arafat
 * Date: 11-05-2021
 *
 */
import React, { useState } from 'react';
import { Button, SingleNote } from '../';
import loader from '../../icons/double-ring-loader.svg';
import { getNotesByTitle } from '../../store/actions/notes';
import { useStore } from '../../store/Store';

const NotesList = () => {
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const { dispatch } = useStore();
  const {
    state: { notes },
  } = useStore();

  // ⚙️ search note
  const searchNote = async (e) => {
    e.preventDefault();

    setLoading(true);
    await getNotesByTitle(searchText, dispatch);
    setLoading(false);
  };

  return (
    <div className="min-h-screen max-h-screen overflow-y-auto bg-antiFlashWhite dark:bg-midnightBlue px-3 py-5 flex flex-col relative">
      {/* search form */}
      <div>
        <form onSubmit={searchNote} className="border-b border-gray-300 pb-4">
          <div className="flex items-stretch">
            <input
              type="text"
              autoComplete="off"
              className={`px-4 py-2 rounded-l-full bg-gray-200 focus:outline-none w-full ${
                loading ? '' : 'rounded-r-full'
              }`}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search by name"
            />

            {loading && (
              <img src={loader} alt="loader" className="w-8 bg-gray-200 rounded-r-full" />
            )}
          </div>
        </form>
      </div>

      {/* All notes here */}
      <div>
        {notes.length > 0 ? (
          <>
            <h1 className="text-electromagnatic dark:text-antiFlashWhite font-bold font-railway text-2xl mt-2">
              Notes
            </h1>
            {notes.map((note) => (
              <SingleNote key={note._id} note={note} />
            ))}
          </>
        ) : (
          <div className="h-20 grid place-items-center">
            <h2 className="text-center text-electromagnatic dark:text-antiFlashWhite">
              No notes found.{' '}
            </h2>
          </div>
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
