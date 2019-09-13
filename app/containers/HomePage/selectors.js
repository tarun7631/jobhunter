/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectSearch = () =>
  createSelector(
    selectHome,
    homeState => homeState.search,
  );

const makeSelectFilteredJobs = () =>
  createSelector(
    selectHome,
    homeState => homeState.filteredList,
  );

const makeSelectJobs = () =>
  createSelector(
    selectHome,
    homeState => homeState.selectedList,
  );

const makeSelectTotalFilteredJobs = () =>
  createSelector(
    selectHome,
    homeState => homeState.totalItems,
  );

const makeSelectCurrentPage = () =>
  createSelector(
    selectHome,
    homeState => homeState.currentPage,
  );

export {
  selectHome,
  makeSelectSearch,
  makeSelectFilteredJobs,
  makeSelectJobs,
  makeSelectTotalFilteredJobs,
  makeSelectCurrentPage,
};
