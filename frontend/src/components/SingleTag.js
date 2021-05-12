/*
 *
 * Title: Single tag
 * Description: Single tag and note count
 * Author: Shah Arafat
 * Date: 11-05-2021
 *
 */
import React from 'react';
import { FaTag } from 'react-icons/fa';

const SingleTag = ({ tag }) => {
  return (
    <div className="flex justify-between items-center rounded-md bg-sourLemon my-2 shadow-sm px-2 py-2">
      <div className="flex items-center">
        <FaTag className="inline-block mr-2 text-sm text-midnightBlue" />
        <h2 className="text-electromagnatic text-lg font-semibold font-railway">{tag.name}</h2>
      </div>
      {/* <span className="bg-midnightBlue rounded-full text-sourLemon font-semibold px-3 py-0 grid items-center">
        {tag.noteCount}
      </span> */}
    </div>
  );
};

export default SingleTag;
