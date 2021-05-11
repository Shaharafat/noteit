/*
 *
 * Title: tags actions
 * Description: tags action
 * Author: Shah Arafat
 * Date: 11-05-2021
 *
 */

import axios from 'axios';
import { GET_ALL_TAGS } from '../constants';

export const getAllTags = async (dispatch) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/tags`, {
      headers: { x_auth_token: localStorage.getItem('x_auth_token') },
    });
    const { success, tags } = response.data;

    if (success) {
      dispatch({ type: GET_ALL_TAGS, payload: { tags } });
    }
  } catch (error) {
    const { success, message } = error.response?.data;
    return { success, message };
  }
};
