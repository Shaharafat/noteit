/*
 *
 * Title: Search tags
 * Description: search tags on text change
 * Author: Shah Arafat
 * Date: 25-04-2021
 *
 */
import axios from 'axios';
import React, { useState } from 'react';
import { TagItem, useResponseBox } from '..';

const SearchTags = () => {
  const { MessageBox, configureMessageBox } = useResponseBox();
  const [searchText, setSearchText] = useState('');
  const [searchedTags, setSearchedTags] = useState([]);

  // get tags when matched typing on search box
  const getTags = async (text) => {
    // set state
    setSearchText(text);

    try {
      // search on change
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/tags`, {
        search: text,
      });

      const { success, tags } = response.data;
      if (success) {
        setSearchedTags(tags);
      }
      console.log(success, tags);
    } catch (error) {
      configureMessageBox(false, error.response?.data?.message);
    }
  };

  // get notes refering the tag on submit.
  const getSearchedNotes = () => {
    console.log('submitted');
    setSearchedTags([]);
  };

  return (
    <div className="w-full">
      <MessageBox />
      <form className="w-full" onSubmit={getSearchedNotes}>
        <input
          type="text"
          placeholder="Search by tags"
          className={`px-2 py-3 w-full mt-5 bg-antiFlashWhite dark:bg-wetEsphalt text-electromagnatic dark:text-antiFlashWhite ring-2 ring-indigo-300 focus:outline-none`}
          value={searchText}
          onChange={(e) => getTags(e.target.value)}
        />
      </form>
      {/* notes from search results */}
      <ul className="divide-y divide-electromagnatic dark:divide-sourLemon max-h-40 overflow-y-scroll ">
        {searchedTags.map((tag, index) => (
          <TagItem
            key={index}
            tag={tag}
            setSearchText={setSearchText}
            getNotes={getSearchedNotes}
          />
        ))}
      </ul>
    </div>
  );
};

export default SearchTags;
