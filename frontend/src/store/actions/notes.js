/*
 *
 * Title: notes
 * Description: notes related actiosn
 * Author: Shah Arafat
 * Date: 25-04-2021
 *
 */

import axios from 'axios';
import { ADD_NEW_NOTE, ADD_NEW_TAG, DELETE_SINGLE_NOTE, GET_ALL_NOTES } from '../constants';

// TODO: cancel token
// ✔️ search users notes by tag name
export const getNotesByTag = async (tag, id, dispatch) => {
  console.log(tag, id);
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/notes/searchNotes`,
      {
        tag,
        id,
      },
      { headers: { x_auth_token: localStorage.getItem('x_auth_token') } }
    );

    const { success, notes } = response.data;
    if (success) {
      // if fetching successful then populate store
      dispatch({ type: GET_ALL_NOTES, payload: { notes } });
    }
    return { success };
  } catch (error) {
    const { success, message } = error.response?.data;
    return { success, message };
  }
};

export const getAllNotes = async (dispatch, id) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/notes/${id}`, {
      headers: { x_auth_token: localStorage.getItem('x_auth_token') },
    });

    const { success, notes } = response.data;
    if (success) {
      // if fetching successful then populate store
      dispatch({ type: GET_ALL_NOTES, payload: { notes } });
    }
    return { success };
  } catch (error) {
    const { success, message } = error.response?.data;
    return { success, message };
  }
};

// ✔️ create new note
export const createNewNote = async (dispatch, body) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/notes/newNote`, body, {
      headers: { x_auth_token: localStorage.getItem('x_auth_token') },
    });

    const { success, note, newTags } = response.data;

    if (success) {
      // update store
      dispatch({ type: ADD_NEW_NOTE, payload: { note } });
      // update taglist
      dispatch({ type: ADD_NEW_TAG, payload: { tags: newTags } });
    }

    return success;
  } catch (error) {
    const { success } = error.response?.data;
    return success;
  }
};

// ✔️ delete a note
export const deleteSingleNote = async (dispatch, id) => {
  try {
    const response = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/notes/delete/${id}`, {
      headers: { x_auth_token: localStorage.getItem('x_auth_token') },
    });

    const { success, message } = response.data;

    // if success, delete from store
    if (success) {
      dispatch({ type: DELETE_SINGLE_NOTE, payload: { id } });
      console.log('deleted');
    }

    return { success, message };
  } catch (error) {
    const { success, message } = error.response?.data;
    return { success, message };
  }
};
