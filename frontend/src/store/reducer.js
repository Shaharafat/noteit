/*
 *
 * Title: reducer and initial state for store
 * Description: reducer and initialstate
 * Author: Shah Arafat
 * Date: 07-04-2021
 *
 */
// dependencies
import {
  GET_ALL_NOTES,
  GET_ALL_TAGS,
  LOADING_END,
  LOADING_START,
  LOGIN_USER,
  LOGOUT_USER,
} from './constants';

// initial states
export const initialState = {
  loading: true,
  user: null,
  notes: [],
  tags: [],
};

// reducer function. this will be passed in useReducer.
export const reducer = (state, action) => {
  switch (action.type) {
    case LOADING_START: {
      return { ...state, loading: true };
    }
    case LOADING_END: {
      return { ...state, loading: false };
    }
    case LOGIN_USER: {
      return { ...state, user: action.payload.user };
    }
    case LOGOUT_USER: {
      return { ...state, user: null };
    }
    case GET_ALL_NOTES: {
      return { ...state, notes: action.payload.notes };
    }
    case GET_ALL_TAGS: {
      return { ...state, tags: action.payload.tags };
    }
    default: {
      return state;
    }
  }
};
