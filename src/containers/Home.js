import React from 'react';
import styled from 'styled-components';

import CollectionStorage from '../CollectionStorage';
import CollectionItem from '../components/CollectionItem';
import { Link, Button } from '../components/Button';
import Container from '../components/Container';
import InputText from '../components/InputText';
import Modal, { ModalHeader, ModalFooter, ModalBody } from '../components/Modal';

import AddIcon from '../icons/add.svg';
import CheckIcon from '../icons/check.svg';

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

export default class Home extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      modalContent: null,
      collection: CollectionStorage.list(),
    };

    this.setModalContent = this.setModalContent.bind(this);
    this.unsetModalContent = this.unsetModalContent.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  setModalContent(value) {
    this.setState({ modalContent: value });
  }
  updateItem() {
    const item = this.state.modalContent;
    CollectionStorage.updateItemById(item.id, item);
    this.setState({
      collection: CollectionStorage.list(),
    });
  }
  unsetModalContent() {
    this.setState({ modalContent: null });
  }
  removeItem(item) {
    CollectionStorage.removeItemById(item.id);
    this.setState({
      collection: CollectionStorage.list(),
    });
  }

  render() {
    const { modalContent, collection } = this.state;

    return (
      <>
        <Header>
          <Container>
            <HeaderWrp>
              <Title>NASA Collection</Title>
              <Link to="/nasa-search">
                <AddIcon />Add new item
              </Link>
            </HeaderWrp>
          </Container>
        </Header>

        <Body>
          <Container>
            <List>
              {collection.map((i) => (
                <CollectionItem
                  key={i.id}
                  model={i}
                  onEdit={this.setModalContent}
                  onRemove={this.removeItem}
                />
              ))}
            </List>
            {!collection.length && (
              <p>There are no collections yet, let find one!</p>
            )}
          </Container>
        </Body>

        {modalContent && (
          <Modal onClose={this.unsetModalContent}>
            <ModalHeader>Edit</ModalHeader>

            <ModalBody>
              <InputText
                title="Title"
                value={modalContent.title}
              />
              <InputText
                longText
                title="Description"
                value={modalContent.description}
              />
              <InputText
                title="Type"
                value={modalContent.media_type}
              />
              <InputText
                required
                title="Link preview image url"
                value={modalContent.previewImg}
              />
              <InputText
                required
                title="Link file url"
                value={modalContent.assetURL}
              />
            </ModalBody>

            <ModalFooter>
              <Button><CheckIcon/> Save</Button>
            </ModalFooter>
          </Modal>
        )}

        <Footer>
          <Container>
            &copy; NASA 2019
          </Container>
        </Footer>
      </>
    )
  }
}
