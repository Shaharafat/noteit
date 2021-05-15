/*
 *
 * Title: site store to manage state
 * Description: store with context api and useReducer
 * Author: Shah Arafat
 * Date: 07-04-2021
 *
 */

import { createContext, useContext, useEffect, useReducer } from 'react';
import { RootLoader } from '../components';
import { authenticateAndFetchData } from '../helpers/fetchData';
import { setThemeToRoot } from '../helpers/themes';
import { initialState, reducer } from './reducer';

// create store context
const Store = createContext();

// use store
export const useStore = () => useContext(Store);

// store provider
export const StoreProvider = ({ children }) => {
  // userReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // set theme
    setThemeToRoot();

    // load user and fetch data
    (async () => {
      await authenticateAndFetchData(dispatch);
    })();
  }, []);

  console.log(state);
  const storeValue = {
    state,
    dispatch,
  };

  return (
    <Store.Provider value={storeValue}>{state.loading ? <RootLoader /> : children}</Store.Provider>
  );
};
