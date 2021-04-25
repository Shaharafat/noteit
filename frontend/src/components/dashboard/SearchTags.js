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
import { getNotesByTag } from '../../store/actions/notes';
import { useStore } from '../../store/Store';

const SearchTags = () => {
  const { MessageBox, configureMessageBox } = useResponseBox();
  const [searchText, setSearchText] = useState('');
  const [searchedTags, setSearchedTags] = useState([]);
  const {
    state: {
      user: { id },
    },
    dispatch,
  } = useStore();

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
    } catch (error) {
      configureMessageBox(false, error.response?.data?.message);
    }
  };

  // get notes refering the tag on submit.
  const getSearchedNotes = async (e) => {
    e.preventDefault();

    // empty tag list
    setSearchedTags([]);

    // const response = await getAllSearchedNotes(searchText, id, dispatch);
    const response = await getNotesByTag(searchText, id, dispatch);
    const { success } = response;

    // if success false. show notification on UI
    if (!success) {
      configureMessageBox(success, response.message);
    }
  };

  return (
    <div className="w-full relative">
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
      <ul className="divide-y divide-electromagnatic dark:divide-sourLemon max-h-40 overflow-y-auto w-full absolute top-18 ">
        {searchedTags.map((tag, index) => (
          <TagItem
            key={index}
            tag={tag}
            setSearchText={setSearchText}
            setSearchedTags={setSearchedTags}
            getNotes={getSearchedNotes}
          />
        ))}
      </ul>
    </div>
  );
};

export default SearchTags;
