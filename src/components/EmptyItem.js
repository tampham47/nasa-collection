import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AddIcon from '../icons/add.svg';

const Main = styled(Link)`
  display: inline-block;
  width: calc(100% - 2em);
  margin-bottom: 4em;
  margin-left: 1em;
  margin-right: 1em;
  overflow: hidden;
  text-decoration: none;
  border: 2px dashed #784CC0;
  padding: 1.5em;
  border-radius: 3px;
  line-height: 1.5;
  color: #784CC0;
  fill: #784CC0;
  opacity: 0.8;
  transition: all 0.1s;
  & svg {
    margin-bottom: 0.2em;
  }
  &:hover {
    opacity: 1;
  }

  @media screen and (min-width: 48em) {
    width: calc(50% - 2em);
  }

  @media screen and (min-width: 75em) {
    width: calc(33.33% - 2em);
  }
`;

const EmptyItem = () => {
  return (
    <Main to="nasa-search">
      <AddIcon /><br/>
      There is no item in the collection,<br/>
      click here to find one.
    </Main>
  );
};

export default EmptyItem;
