/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  CHANGE_SEARCH,
  CHANGE_TOTAL_ITEM,
  LOAD_SELECTED_LIST,
  FILTERED_LIST,
  CHANGE_SUCCESS_PAGENO,
} from './constants';

// The initial state of the App
export const initialState = {
  search: '',
  currentPage: 1,
  totalItems: 0,
  selectedList: [],
  filteredList: false,
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_SEARCH:
        // Delete prefixed '@' from the github username
        draft.search = action.search.replace(/@/gi, '');
        break;

      case CHANGE_TOTAL_ITEM:
        draft.totalItems = action.totalItems;
        break;

      case LOAD_SELECTED_LIST:
        draft.selectedList = action.data;
        draft.loading = false;
        break;

      case FILTERED_LIST:
        draft.filteredList = action.arr;
        draft.loading = false;
        break;

      case CHANGE_SUCCESS_PAGENO:
        draft.currentPage = action.pageNo;
        break;
    }
  });

export default homeReducer;
