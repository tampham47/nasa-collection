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
  font-weight: 400;
  @media screen and (min-width: 48em) {
    font-size: 2.5em;
  }
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
const ListBody = styled.div`
  margin-left: 1em;
  margin-right: 1em;
`;

const API_PATH = 'https://images-api.nasa.gov';
const nomalizeCollection = (list) => {
  return list.map(i => ({
    ...i.data[0],
    id: i.data[0].nasa_id,
    previewImg: i.links
      ? i.links[0].href
      : 'https://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2019/03/12/nasa.jpg?itok=aTqjs0b1',
    type: i.data[0].media_type,
  })).slice(0, 24);
}

const checkInArray = (arrayOfId, id) => {
  return arrayOfId.indexOf(id) >= 0;
};
const getListOfId = array => array.map(i => i.id);

export default class Search extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
      collection: [],
      checked: false,
      fetching: false,
      arrayOfId: getListOfId(CollectionStorage.list()),
    };

    this.search = this.search.bind(this);
    this.fetchVideoById = this.fetchVideoById.bind(this);
    this.addAnItemToCollection = this.addAnItemToCollection.bind(this);
    this.setInput = this.setInput.bind(this);
  }

  addAnItemToCollection(item) {
    this.fetchVideoById(item.id)
      .then(body => {
        const newCollection = {
          ...item,
          assetURL: body.href,
        };
        CollectionStorage.add(newCollection);

        this.setState({
          arrayOfId: getListOfId(CollectionStorage.list()),
        })
      });
  }

  search(e) {
    e.preventDefault();
    const { searchQuery } = this.state;
    this.setState({ fetching: true });

    fetch(`${API_PATH}/search?q=${searchQuery}`)
      .then(res => res.json())
      .then(body => {
        this.setState({
          collection: nomalizeCollection(body.collection.items),
          checked: true,
          fetching: false,
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
      checked: false,
      searchQuery: value,
      collection: [],
    });
  }

  render() {
    const { collection, arrayOfId, searchQuery, checked, fetching } = this.state;
    const isShowHelper = checked && !collection.length;

    return (
      <Main>
        <Container>
          <BackLink to="/">
            <BackIcon />
            Back to collection
          </BackLink>
          <Title>Search from NASA</Title>
          <form onSubmit={this.search}>
            <InputSearch
              type="text"
              autoFocus
              placeholder="Type something to search..."
              value={searchQuery}
              onChange={this.setInput}
            />
          </form>
          <List>
            {isShowHelper && (
              <ListBody>
                <p>There are no results for your query, <b>{searchQuery}</b>.</p>
              </ListBody>
            )}
            {fetching && (
              <ListBody>
                Loading...
              </ListBody>
            )}
            {collection.map((i, index) => (
              <CollectionItem
                key={index}
                model={i}
                isAdded={checkInArray(arrayOfId, i.id)}
                onAdd={this.addAnItemToCollection}
              />
            ))}
          </List>
        </Container>
      </Main>
    )
  }
}
