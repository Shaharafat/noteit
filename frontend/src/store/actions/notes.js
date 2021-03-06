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

// ✔️ search users notes by tag name
export const getNotesByTag = async (tag, dispatch) => {
  try {
    const response = await axios.post(
      `/notes/searchNotes`,
      {
        tag,
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

// ✔️ search users notes by title
export const getNotesByTitle = async (title, dispatch) => {
  try {
    const response = await axios.post(
      `/notes/searchByTitle`,
      {
        title,
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

// ✔️ get all notes
export const getAllNotes = async (dispatch, id) => {
  try {
    const response = await axios.get(`/notes/${id}`, {
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
    const response = await axios.post(`/notes/newNote`, body, {
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
export const deleteSingleNote = async (dispatch, id, setLoading) => {
  try {
    const response = await axios.delete(`/notes/delete/${id}`, {
      headers: { x_auth_token: localStorage.getItem('x_auth_token') },
    });

    const { success, message } = response.data;

    // if success, delete from store
    if (success) {
      setLoading(false);
      dispatch({ type: DELETE_SINGLE_NOTE, payload: { id } });
    }

    return { success, message };
  } catch (error) {
    const { success, message } = error.response?.data;
    return { success, message };
  }
};
