import {
  LOAD_DATA,
  LOAD_DATA_SUCCESS,
  LOAD_DATA_ERROR,
  LOAD_SELECTED_LIST,
  SUBMIT_FORM,
  FILTERED_LIST,
} from './constants';

export function loadData() {
  return {
    type: LOAD_DATA,
  };
}

export function dataLoaded(data) {
  return {
    type: LOAD_DATA_SUCCESS,
    data,
  };
}

export function dataLoadingError(error) {
  return {
    type: LOAD_DATA_ERROR,
    error,
  };
}
