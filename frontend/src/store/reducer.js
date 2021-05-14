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
  ADD_NEW_NOTE,
  ADD_NEW_TAG,
  DELETE_SINGLE_NOTE,
  GET_ALL_NOTES,
  GET_ALL_TAGS,
  LOADING_END,
  LOADING_START,
  LOGIN_USER,
  LOGOUT_USER,
} from './constants';

export const initialState = {
  user: null,
  notes: [],
  tags: [],
  loading: false,
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
    case ADD_NEW_NOTE: {
      return { ...state, notes: [action.payload.note, ...state.notes] };
    }
    case ADD_NEW_TAG: {
      return { ...state, tags: [...state.tags, ...action.payload.tags] };
    }
    case DELETE_SINGLE_NOTE: {
      const { id } = action.payload;
      return { ...state, notes: state.notes.filter((note) => note._id !== id) };
    }
    default: {
      return state;
    }
  }
};
