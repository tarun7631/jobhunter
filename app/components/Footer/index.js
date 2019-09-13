import React from 'react';
import styled from 'styled-components';
import Wrapper from './Wrapper';

const Span = styled.span`
  color: red;
`;

function Footer() {
  return (
    <Wrapper>
      <section>
        Made with &nbsp;<Span>&hearts;</Span> &nbsp; from &nbsp;
        <a href="https://linkedin.com/in/tarun-goel-7a8a0b125">Tarun Goel</a>
      </section>
    </Wrapper>
  );
}

export default Footer;
