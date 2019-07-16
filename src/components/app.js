import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: calc(100% - 2em);
  margin-left: auto;
  margin-right: auto;
  max-width: 75em;
`;

export default class App extends Component {
  render() {
    return (
      <Container>
        <h1>NASA Collection</h1>
      </Container>
    )
  }
};