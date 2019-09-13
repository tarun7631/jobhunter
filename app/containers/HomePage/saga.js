import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_DATA } from 'containers/App/constants';
import { dataLoaded, repoLoadingError } from 'containers/App/actions';
import request from 'utils/request';
import {
  makeSelectSearch,
  makeSelectFilteredJobs,
} from 'containers/HomePage/selectors';
import { makeSelectAllJobs } from 'containers/App/selectors';
import {
  onChangeTotalItem,
  selectedLists,
  changeFilteredList,
  onSuccessChangePage,
} from './actions';
import {
  CHANGE_PAGENO,
  CHANGE_TOTAL_ITEM,
  SUBMIT_FORM,
  SORT_LIST,
} from './constants';

export function* getData() {
  const requestURL = `https://jobsqared.herokuapp.com/jobs`;

  try {
    const data = yield call(request, requestURL);

    let companies = data.data.map(x => x.companyname);
    companies = [...new Set(companies)];

    yield put(dataLoaded(data.data));
    yield put(onChangeTotalItem(data.data.length));
    yield put(selectedLists(data.data.slice(0, 10)));
  } catch (err) {
    yield put(dataLoadingError(err));
  }
}

export function* searchData() {
  const data = yield select(makeSelectAllJobs());
  const toSearch = yield select(makeSelectSearch());
  let results = [];
  for (let i = 0; i < data.length; i++) {
    for (const key in data[i]) {
      if (
        data[i][key]
          .toString()
          .toLowerCase()
          .indexOf(toSearch.toLowerCase()) != -1
      ) {
        results.push(data[i]);
      }
    }
  }
  results = [...new Set(results)];
  yield put(onSuccessChangePage(1));
  yield put(changeFilteredList(results));
  yield put(onChangeTotalItem(results.length));
  yield put(selectedLists(results.slice(0, 10)));
}

export function* page(obj) {
  const { pageNo } = obj;
  let filteredList = yield select(makeSelectFilteredJobs());
  if (filteredList == false) {
    filteredList = yield select(makeSelectAllJobs());
  }

  yield put(selectedLists(filteredList.slice(10 * (pageNo - 1), 10 * pageNo)));
  yield put(onSuccessChangePage(obj.pageNo));
}

export function* sortList(obj) {
  const { sortBy } = obj;
  const jobList = yield select(makeSelectAllJobs());

  if (sortBy === 'byExperience') {
    jobList.sort(sortByExperience);
  } else if (sortBy === 'byLocation') {
    jobList.sort(sortByLocation);
  }

  yield put(changeFilteredList(jobList));
  yield put(onSuccessChangePage(1));
  yield put(selectedLists(jobList.slice(0, 10)));
}

function sortByExperience(a, b) {
  if (a.experience < b.experience) {
    return -1;
  }
  if (a.experience > b.experience) {
    return 1;
  }
  return 0;
}

function sortByLocation(a, b) {
  if (a.location < b.location) {
    return -1;
  }
  if (a.location > b.location) {
    return 1;
  }
  return 0;
}

export default function* jobData() {
  yield takeLatest(LOAD_DATA, getData);
  yield takeLatest(SUBMIT_FORM, searchData);
  yield takeLatest(CHANGE_PAGENO, page);
  yield takeLatest(SORT_LIST, sortList);
}
