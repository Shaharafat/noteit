/*
 *
 * Title: Tag item
 * Description: Each tag from search list.
 * Author: Shah Arafat
 * Date: 24-04-2021
 *
 */
import React from 'react';

const TagItem = ({ tag: { name }, setSearchText, setSearchedTags, getNotes }) => {
  const handleTagClick = (e) => {
    // set search tags to empty array and
    // search text to list value.
    setSearchText(name);
    setSearchedTags([]);

    // search for the notes
    getNotes(e);
  };

  return (
    <li
      className="py-3 px-2 bg-antiFlashWhite dark:bg-wetEsphalt text-electromagnatic dark:text-white shadow-md hover:opacity-80 cursor-pointer"
      onClick={handleTagClick}
    >
      {name}
    </li>
  );
};

export default TagItem;
