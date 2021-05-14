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
import { Helmet } from 'react-helmet';
import { FaStar } from 'react-icons/fa';
import { useParams } from 'react-router';
import { Loader, SingleTagName } from '.';
import loader from '../icons/loader.svg';

const NoteDetails = () => {
  const { noteId } = useParams();
  const [noteDetails, setNoteDetails] = useState();
  const [loading, setLoading] = useState(false);

  // format date using date-fns
  const formatDate = (date) => {
    return formatDistance(new Date(date), new Date(), { addSuffix: true });
  };

  useEffect(() => {
    (async () => {
      // load loader icon asynchronously
      const loadIcon = () =>
        new Promise((resolve) => {
          const loadImg = new Image();
          loadImg.src = loader;
          loadImg.onload = () => {
            console.log('loaded-log');
            resolve('loaded in notedetails');
          };
        });

      // ⚠️ get note details from server
      let getNote = async () => {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_SERVER_URL}/notes/get/${noteId}`,
            { headers: { x_auth_token: localStorage.getItem('x_auth_token') } }
          );

          const { success, note } = response.data;

          if (success) {
            setNoteDetails(note);
          }
        } catch (error) {
          const { success, message } = error.response?.data;
          if (!success) {
            console.log(message);
          }
        }
      };

      setLoading(true);
      // load icon
      await loadIcon();

      // fetch note data
      await getNote();
      setLoading(false);
    })();
  }, [noteId]);

  return loading ? (
    <Loader loader={loader} />
  ) : (
    <div className="min-h-screen max-h-screen bg-white dark:bg-wetEsphalt overflow-y-auto px-3">
      <Helmet>
        <title>{`${noteDetails?.title} | Noteit`} </title>
      </Helmet>

      <h1 className="text-4xl font-bold font-railway mt-6 text-electromagnatic dark:text-antiFlashWhite ">
        {noteDetails?.title}
      </h1>
      <div className="flex justify-between">
        <span className="text-gray-400 font-railway">
          {noteDetails && formatDate(noteDetails?.createdAt)}
        </span>

        <div className="flex justify-end text-gray-400 col-span-1 self-end">
          <span className="rounded-full cursor-pointer hover:text-electromagnatic inline-block px-1 py-1 ml-2 hover:bg-gray-300 ">
            <FaStar />
          </span>
        </div>
      </div>

      {/* tags */}
      <div className="flex mt-3 flex-wrap">
        {noteDetails?.tags.map((tag, index) => (
          <SingleTagName key={index} tag={tag} />
        ))}
      </div>

      {/* main text */}
      <div
        className="prose dark:prose-dark mt-4"
        dangerouslySetInnerHTML={{ __html: noteDetails?.details }}
      ></div>
    </div>
  );
};

export default NoteDetails;
