/*
 *
 * Title: Note details
 * Description: Notes details and new note form
 * Author: Shah Arafat
 * Date: 11-05-2021
 *
 */
import axios from 'axios';
import { formatDistance } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { FaStar, FaTrash } from 'react-icons/fa';
import { useParams } from 'react-router';
import { Loader, SingleTagName } from '.';

const NoteDetails = () => {
  const { noteId } = useParams();
  const [noteDetails, setNoteDetails] = useState();
  const [loading, setLoading] = useState(false);

  // format date using date-fns
  const formatDate = (date) => {
    return formatDistance(new Date(date), new Date(), { addSuffix: true });
  };

  useEffect(() => {
    // ⚠️ get note details from server
    let getNote = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/notes/get/${noteId}`,
          { headers: { x_auth_token: localStorage.getItem('x_auth_token') } }
        );

        const { success, note } = response.data;

        if (success) {
          setNoteDetails(note);
        }
        setLoading(false);
      } catch (error) {
        const { success, message } = error.response?.data;
        if (!success) {
          console.log(message);
        }
        setLoading(false);
      }
    };

    // fetch note data
    getNote();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className="min-h-screen max-h-screen overflow-y-auto">
      <h1 className="text-4xl font-bold font-railway mt-6">{noteDetails?.title}</h1>
      <div className="flex justify-between">
        <span className="text-gray-400 font-railway">
          {noteDetails && formatDate(noteDetails?.createdAt)}
        </span>

        <div className="flex justify-end text-gray-400 col-span-1 self-end">
          <span className="rounded-full cursor-pointer hover:text-electromagnatic inline-block px-1 py-1 mr-2 hover:bg-gray-300 ">
            <FaStar />
          </span>
          <span className="rounded-full cursor-pointer hover:text-electromagnatic inline-block px-1 py-1 mr-2 hover:bg-gray-300 ">
            <FaTrash />
          </span>
        </div>
      </div>

      {/* tags */}
      <div className="flex mt-3 flex-wrap">
        {noteDetails?.tags.map((tag) => (
          <SingleTagName key={tag._id} tag={tag} />
        ))}
      </div>

      {/* main text */}
      <div className="prose mt-4" dangerouslySetInnerHTML={{ __html: noteDetails?.details }}></div>
    </div>
  );
};

export default NoteDetails;
