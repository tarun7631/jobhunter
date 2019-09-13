import produce from 'immer';
import {
  LOAD_DATA_SUCCESS,
  LOAD_DATA,
  LOAD_DATA_ERROR,
  LOAD_SELECTED_LIST,
  FILTERED_LIST,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    jobs: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_DATA_SUCCESS:
        draft.userData.jobs = action.data;
        draft.loading = false;
        draft.currentUser = action.username;
        break;

      case LOAD_DATA_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default appReducer;
