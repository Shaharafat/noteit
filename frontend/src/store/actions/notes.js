/*
 *
 * Title: notes
 * Description: notes related actiosn
 * Author: Shah Arafat
 * Date: 25-04-2021
 *
 */

import axios from 'axios';
import { GET_ALL_NOTES } from '../constants';

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
    console.log(notes);
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
    console.log(notes, success, id);
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
