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

// ✔️ signup and update store
export const signupUser = async (body, dispatch) => {
  try {
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
    const { success, message } = error.response?.data;
    return { success, message };
  }
};

// ✔️ login user
export const loginUser = async (body, dispatch) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/login`, body);
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
    const { success, message } = error.response?.data;
    return { success, message };
  }
};

// ✔️ reset password
export const sendResetEmail = async (body) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/users/forgotpassword`,
      body
    );
    const { success, message } = response.data;

    // send success or error message
    if (success) {
      // set token to localstorage
      return { success, message };
    }
  } catch (error) {
    const { success, message } = error.response?.data;
    return { success, message };
  }
};

// ✔️ set new Password
export const setPassword = async (resetToken, password, dispatch) => {
  try {
    // send request with reset token
    const response = await axios.put(
      `${process.env.REACT_APP_SERVER_URL}/users/resetpassword/${resetToken}`,
      { password }
    );
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
    const { success, message } = error.response?.data;
    return { success, message };
  }
};
