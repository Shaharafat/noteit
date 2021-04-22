/*
 *
 * Title: user actions
 * Description: user related actions
 * Author: Shah Arafat
 * Date: 22-04-2021
 *
 */
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { LOGIN_USER } from '../constants';

export const signupUser = async (body, dispatch) => {
  try {
    console.log(body);
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/register`, body);
    const { success, token, message } = response.data;

    if (success) {
      // set token to localstorage
      localStorage.setItem('x_auth_token', 'Bearer' + ' ' + token);
      const { user } = jwt_decode(token);

      // log in user
      dispatch({ type: LOGIN_USER, payload: { user } });
      return { success, message };
    }
  } catch (error) {
    const message = error.response?.data?.message;
    return { success: false, message };
  }
};

// export const loginUser = (token) => {

// }
