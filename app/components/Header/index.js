import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import H1 from '../H1';
import NavBar from './NavBar';

const AppWrapper = styled.div`
  display: flex;
  text-align: center;
  padding: 0 16px;
  width: 100%;
  min-height: 80px;
  justify-content: center;
  background-color: #fff !important;
  box-shadow: 0 0 14.6px 1.4px rgba(0, 0, 0, 0.2);
  margin: auto;
  align-items: center;
`;

function Header() {
  return (
    <AppWrapper>
      <NavBar>
        <H1>JOBHUNTER</H1>
      </NavBar>
    </AppWrapper>
  );
}

export default Header;
