/*
 *
 * Title: Single note
 * Description: Single note card
 * Author: Shah Arafat
 * Date: 11-05-2021
 *
 */

import { formatDistance } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SingleTagName } from '.';
import loader from '../icons/ball-loader.svg';
import { deleteSingleNote } from '../store/actions/notes';
import { useStore } from '../store/Store';

const SingleNote = ({ note: { _id: id, title, tags, createdAt } }) => {
  // format date
  const noteCreationDate = formatDistance(new Date(createdAt), new Date(), { addSuffix: true });
  const [loading, setLoading] = useState(false);
  const { dispatch } = useStore();
  // const [loadingIcon, setLoadingIcon] = useState('');

  useEffect(() => {
    // load loader icon asynchronously
    (async () => {
      const loadIcon = async () => {
        const loadImg = new Image();
        loadImg.src = loader;
        loadImg.onload = () => {
          console.log('loaded');
        };
      };

      await loadIcon();
    })();
  }, []);

  // this will execute when trash icon clicked
  const deleteNote = async (id) => {
    setLoading(true);
    await deleteSingleNote(dispatch, id, setLoading);
  };

  return (
    <div className="w-full rounded-md bg-white p-3 my-2 shadow-md">
      <Link to={`/dashboard/note/${id}`} className="hover:underline">
        <h1 className="text-xl font-bold text-electromagnatic">{title}</h1>
      </Link>

      <span className="text-gray-400 text-sm">{noteCreationDate}</span>

      <div className="grid grid-cols-5 gap-2">
        <div className="flex flex-wrap mt-2 col-span-4">
          {tags.map((tag) => (
            <SingleTagName key={tag} tag={tag} />
          ))}
        </div>

        <div className="flex justify-end text-gray-400 col-span-1 self-end">
          {loading && <img src={loader} alt="delete loader" className="w-6" />}

          <span
            className="rounded-full cursor-pointer hover:text-electromagnatic inline-block px-1 py-1 ml-1 hover:bg-gray-300 "
            onClick={() => deleteNote(id)}
          >
            <FaTrash />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleNote;
