import {
  CHANGE_SEARCH,
  CHANGE_PAGENO,
  CHANGE_TOTAL_ITEM,
  LOAD_SELECTED_LIST,
  SUBMIT_FORM,
  FILTERED_LIST,
  CHANGE_SUCCESS_PAGENO,
  SORT_LIST,
} from './constants';

export function onChangeSearch(search) {
  return {
    type: CHANGE_SEARCH,
    search,
  };
}

export function onChangePage(pageNo) {
  return {
    type: CHANGE_PAGENO,
    pageNo,
  };
}

export function onSuccessChangePage(pageNo) {
  return {
    type: CHANGE_SUCCESS_PAGENO,
    pageNo,
  };
}

export function onChangeTotalItem(totalItems) {
  return {
    type: CHANGE_TOTAL_ITEM,
    totalItems,
  };
}

export function selectedLists(data) {
  return {
    type: LOAD_SELECTED_LIST,
    data,
  };
}

export function onSubmitForm(evt) {
  evt.preventDefault();
  return {
    type: SUBMIT_FORM,
  };
}

export function changeFilteredList(arr) {
  return {
    type: FILTERED_LIST,
    arr,
  };
}

export function sort(sortBy) {
  return {
    type: SORT_LIST,
    sortBy,
  };
}
