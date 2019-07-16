import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import CollectionItem from './CollectionItem';
import Button from './Button';
import AddIcon from '../icons/add.svg';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Roboto', sans-serif;
  }
`;

const Container = styled.div`
  width: calc(100% - 2em);
  margin-left: auto;
  margin-right: auto;
  max-width: 75em;
`;

const Header = styled.header`
  margin-top: 6em;
  margin-bottom: 5em;
`;
const HeaderWrp = styled.header`
  display: flex;
  align-items: center;
`;
const Title = styled.h1`
  flex: auto;
  line-height: 1.2em;
  font-size: 4em;
  color: gray;
  margin: 0;
`;

const Body = styled.main``;
const List = styled.div`
  margin-left: -1em;
  margin-right: -1em;
`;

const Footer = styled.footer`
  margin-top: 8em;
  margin-bottom: 1em;
  text-align: center;
  color: gray;
`;

export default class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Header>
          <Container>
            <HeaderWrp>
              <Title>NASA Collection</Title>
              <Button>
                <AddIcon />Add new item
              </Button>
            </HeaderWrp>
          </Container>
        </Header>

        <Body>
          <Container>
            <List>
              <CollectionItem fav />
              <CollectionItem />
              <CollectionItem />
              <CollectionItem />
            </List>
          </Container>
        </Body>

        <Footer>
          <Container>
            &copy; NASA 2019
          </Container>
        </Footer>
      </>
    )
  }
}
