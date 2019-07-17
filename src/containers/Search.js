import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Container from '../components/Container';
import BackIcon from '../icons/back.svg';

const Main = styled.section`
  margin-top: 6em;
`;

const BackLink = styled(Link)`
  text-decoration: none;
  color: RGB(124, 89, 182);
  line-height: 17px;
  font-size: 14px;
  & svg {
    fill: RGB(124, 89, 182);
    margin-right: 6px;
    vertical-align: middle;
  }
`;

const Title = styled.h1`
  font-size: 2.5em;
  font-weight: 400;
`;

const InputSearch = styled.input`
  width: 100%;
  max-width: 36em;
  border-radius: 3px;
  padding: 0.7em;
  font-size: 1.5em;
  border: 1px solid #CECED2;
  outline: none;
  &::placeholder {
    font-weight: 400;
    opacity: 0.5;
  }
`;

export default class Search extends React.PureComponent {
  render() {
    return (
      <Main>
        <Container>
          <BackLink to="/">
            <BackIcon />
            Back to collection
          </BackLink>
          <Title>Search from NASA</Title>
          <InputSearch placeholder="Type something to search..." autoFocus />
        </Container>
      </Main>
    )
  }
}
