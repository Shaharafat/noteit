/*
 *
 * Title: Single note
 * Description: Single note card
 * Author: Shah Arafat
 * Date: 11-05-2021
 *
 */

import { formatDistance } from 'date-fns';
import React from 'react';
import { FaStar, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SingleTagName } from '.';

const SingleNote = ({ note: { _id: id, title, tags, createdAt } }) => {
  // format date
  const noteCreationDate = formatDistance(new Date(createdAt), new Date(), { addSuffix: true });

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
          <span className="rounded-full cursor-pointer hover:text-electromagnatic inline-block px-1 py-1 mr-2 hover:bg-gray-300 ">
            <FaStar />
          </span>
          <span className="rounded-full cursor-pointer hover:text-electromagnatic inline-block px-1 py-1 mr-2 hover:bg-gray-300 ">
            <FaTrash />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleNote;
