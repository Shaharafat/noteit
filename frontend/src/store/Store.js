/*
 *
 * Title: site store to manage state
 * Description: store with context api and useReducer
 * Author: Shah Arafat
 * Date: 07-04-2021
 *
 */

import jwt_decode from 'jwt-decode';
import { createContext, useContext, useEffect, useReducer } from 'react';
import { Redirect } from 'react-router-dom';
import { LOADING_END, LOGIN_USER, LOGOUT_USER } from './constants';
import { initialState, reducer } from './reducer';

// create store context
const Store = createContext();

// use store
export const useStore = () => useContext(Store);

// store provider
export const StoreProvider = ({ children }) => {
  // userReducer
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  useEffect(() => {
    let hasToken = localStorage.getItem('x_auth_token');
    // verify token
    if (hasToken?.startsWith('Bearer')) {
      const [, token] = hasToken.split(' ');
      // deccode token
      const { user, exp } = jwt_decode(token);

      // check expirity.
      if (exp > Date.now() / 1000) {
        dispatch({ type: LOGIN_USER, payload: { user } });
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
  }, []);

  const storeValue = {
    state,
    dispatch,
  };

  return (
    <Store.Provider value={storeValue}>
      {!state.loading ? children : <p>Loading...</p>}
    </Store.Provider>
  );
};
