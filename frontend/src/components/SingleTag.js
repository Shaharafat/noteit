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
import { getNotesByTag } from '../store/actions/notes';
import { useStore } from '../store/Store';

const SingleTag = ({ tag }) => {
  const { dispatch } = useStore();
  // will execute when clicked on tag
  const searchTagNotes = async (tagName) => {
    await getNotesByTag(tagName, dispatch);
  };

  return (
    <div
      className="flex justify-between items-center rounded-md bg-sourLemon my-2 shadow-sm px-2 py-2 cursor-pointer"
      onClick={() => searchTagNotes(tag.name)}
    >
      <span className="flex items-center">
        <FaTag className="inline-block mr-2 text-sm text-midnightBlue" />
        <h2 className="text-electromagnatic text-lg font-semibold font-railway">{tag.name}</h2>
      </span>
    </div>
  );
};

export default SingleTag;
