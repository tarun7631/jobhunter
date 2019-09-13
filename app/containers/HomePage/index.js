/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import Pagination from 'react-js-pagination';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';

import H2 from 'components/H2';
import styled from 'styled-components';
import {
  makeSelectJobs,
  makeSelectTotalFilteredJobs,
  makeSelectCurrentPage,
} from './selectors';
import Section from './Section';
import { loadData } from '../App/actions';
import { onChangeSearch, onChangePage, onSubmitForm, sort } from './actions';

import Input from './Input';
import Form from './Form';
import reducer from './reducer';
import saga from './saga';

const List = styled.div`
  background: #fff;
  padding: 16px;
  margin: 10px 0px;
`;

const MainDiv = styled.div`
  margin: 0px 150px;
  @media (max-width: 768px) {
    margin: 10px 30px;
  }
  @media (max-width: 1024px) {
    margin: 10px 80px;
  }
  @media (max-width: 425px) {
    margin: 10px 10px;
  }
`;
const ListTitle = styled.p`
  font-size: 1rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: 0em;
`;
const SearchAndFilter = styled.div`
  display: flex;
  align-items: baseline;
`;
const ListDesc = styled.div`
  font-size: 0.875rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  color: rgba(0, 0, 0, 0.54);
  margin: 5px 0px;
`;

const Sort = styled.div`
  color: black;
`;

const key = 'home';

export function HomePage({
  username,
  onSubmitForm,
  currentPage,
  onChangePage,
  sort,
  loading,
  error,
  repos,
  getData,
  onChangeSearch,
  list,
  totalJobs,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  useEffect(() => {
    getData();
    // When initial state username is not null, submit the form to load repos
  }, []);

  const reposListProps = {
    loading,
    error,
    repos,
  };

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="JOBHUNTER homepage" />
      </Helmet>
      <div>
        <Section>
          <MainDiv>
            <SearchAndFilter>
              <Form onSubmit={onSubmitForm}>
                <Input
                  type="text"
                  placeholder="Search"
                  onChange={onChangeSearch}
                />
              </Form>{' '}
              {` ${totalJobs}`} Jobs Found
              <Sort>
                <input
                  type="radio"
                  value="byExperience"
                  name="sort"
                  onChange={sort}
                />
                By Experience
                <input
                  type="radio"
                  value="byLocation"
                  name="sort"
                  onChange={sort}
                />
                By Location By Location
              </Sort>
            </SearchAndFilter>
            {list.map(function(x) {
              return (
                <List key={x._id}>
                  <ListTitle>
                    {x.companyname} - {x.title} ({x.experience})
                  </ListTitle>
                  <ListDesc>location : {x.location}</ListDesc>
                </List>
              );
            })}

            <Pagination
              activePage={currentPage}
              itemsCountPerPage={10}
              totalItemsCount={totalJobs}
              pageRangeDisplayed={10}
              onChange={onChangePage}
            />
          </MainDiv>
        </Section>
      </div>
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  list: makeSelectJobs(),
  totalJobs: makeSelectTotalFilteredJobs(),
  currentPage: makeSelectCurrentPage(),
});

export function mapDispatchToProps(dispatch) {
  return {
    getData: evt => dispatch(loadData()),
    onSubmitForm: evt => dispatch(onSubmitForm(evt)),
    onChangeSearch: evt => dispatch(onChangeSearch(evt.target.value)),
    onChangePage: pageNo => dispatch(onChangePage(pageNo)),
    sort: evt => dispatch(sort(evt.target.value)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
