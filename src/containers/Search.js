import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import CollectionStorage from '../CollectionStorage';
import Container from '../components/Container';
import CollectionItem from '../components/CollectionItem';
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
const List = styled.div`
  margin-left: -1em;
  margin-right: -1em;
  margin-top: 2em;
`;

const API_PATH = 'https://images-api.nasa.gov';
const nomalizeCollection = (list) => {
  return list.map(i => ({
    ...i.data[0],
    id: i.data[0].nasa_id,
    previewImg: i.links[0].href,
  })).slice(0, 24);
}

export default class Search extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
      collection: [],
    };

    this.search = this.search.bind(this);
    this.fetchVideoById = this.fetchVideoById.bind(this);
    this.addAnItemToCollection = this.addAnItemToCollection.bind(this);
  }

  addAnItemToCollection(item) {
    this.fetchVideoById(item.id)
      .then(body => {
        const newCollection = {
          ...item,
          assetURL: body.href,
        };
        CollectionStorage.add(newCollection);
      });
  }

  search(e) {
    e.preventDefault();
    const query = 'moon';
    fetch(`${API_PATH}/search?q=${query}`)
      .then(res => res.json())
      .then(body => {
        this.setState({
          collection: nomalizeCollection(body.collection.items),
        });
      })
  }

  fetchVideoById(id) {
    return fetch(`${API_PATH}/asset/${id}`)
      .then(res => res.json())
      .then(body => body.collection.items[0]);
  }

  setInput(e) {
    const { value } = e.target;
    this.setState({
      searchQuery: value,
    });
  }

  render() {
    const { collection } = this.state;

    return (
      <Main>
        <Container>
          <BackLink to="/">
            <BackIcon />
            Back to collection
          </BackLink>
          <Title>Search from NASA</Title>
          <form onSubmit={this.search}>
            <InputSearch placeholder="Type something to search..." autoFocus />
          </form>
          <List>
            {collection.map((i, index) => (
              <CollectionItem key={index} model={i} onAdd={this.addAnItemToCollection} />
            ))}
          </List>
        </Container>
      </Main>
    )
  }
}
