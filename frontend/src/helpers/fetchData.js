/*
 *
 * Title: fetch data on start
 * Description: fetch data on start
 * Author: Shah Arafat
 * Date: 15-05-2021
 *
 */
import jwt_decode from 'jwt-decode';
import { Redirect } from 'react-router';
import { getAllNotes } from '../store/actions/notes';
import { getAllTags } from '../store/actions/tags';
import { LOADING_END, LOGIN_USER, LOGOUT_USER } from '../store/constants';

export const authenticateAndFetchData = async (dispatch) => {
  // check user
  let hasToken = localStorage.getItem('x_auth_token');
  // verify token
  if (hasToken?.startsWith('Bearer')) {
    const [, token] = hasToken.split(' ');
    // deccode token
    const { user, exp } = jwt_decode(token);

    // check expirity.
    if (exp > Date.now() / 1000) {
      dispatch({ type: LOGIN_USER, payload: { user } });

      // get all notes of this user
      await getAllNotes(dispatch, user.id);

      // fetch all tags data
      await getAllTags(dispatch);

      // if logged in . goto dashboard
      <Redirect to="/dashboard" />;
      dispatch({ type: LOADING_END });
    } else {
      // remove token
      localStorage.removeItem('x_auth_token');
      dispatch({ type: LOGOUT_USER });
      dispatch({ type: LOADING_END });
    }
  }
  dispatch({ type: LOADING_END });
};
