import React from 'react';
import styled from 'styled-components';

import CollectionStorage from '../CollectionStorage';
import CollectionItem from '../components/CollectionItem';
import { Link, Button } from '../components/Button';
import Container from '../components/Container';
import InputText from '../components/InputText';
import Modal, { ModalHeader, ModalFooter, ModalBody, ModalContent } from '../components/Modal';

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
      edtItem: null,
      collection: CollectionStorage.list(),
    };

    this.setEditingItem = this.setEditingItem.bind(this);
    this.unsetEditingItem = this.unsetEditingItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.toggleFavItem = this.toggleFavItem.bind(this);

    this.handleChangingTitle = this.handleChangingTitle.bind(this);
    this.handleChangingDesc = this.handleChangingDesc.bind(this);
    this.handleChangingType = this.handleChangingType.bind(this);
    this.handleChangingPreviewImg = this.handleChangingPreviewImg.bind(this);
    this.handleChangingAssetUrl = this.handleChangingAssetUrl.bind(this);

  }

  setEditingItem(value) {
    const t = {
      ...value,
      descriptionInit: value.description,
    }
    this.setState({ edtItem: t });
  }
  unsetEditingItem() {
    this.setState({ edtItem: null });
  }
  updateItem() {
    const item = this.state.edtItem;
    CollectionStorage.updateItemById(item.id, item);
    this.setState({
      collection: CollectionStorage.list(),
      edtItem: null,
    });
  }
  toggleFavItem(item) {
    const newItem = {
      ...item,
      fav: !item.fav,
    };
    CollectionStorage.updateItemById(newItem.id, newItem);
    this.setState({
      collection: CollectionStorage.list(),
    });
  }
  removeItem(item) {
    CollectionStorage.removeItemById(item.id);
    this.setState({
      collection: CollectionStorage.list(),
    });
  }

  handleChangingTitle(e) {
    const { value } = e.target;
    this.setState({
      edtItem: {
        ...this.state.edtItem,
        title: value,
      },
    });
  }
  handleChangingDesc(e) {
    const { value } = e.target;
    this.setState({
      edtItem: {
        ...this.state.edtItem,
        description: value,
      },
    });
  }
  handleChangingType(e) {
    const { value } = e.target;
    this.setState({
      edtItem: {
        ...this.state.edtItem,
        type: value,
      },
    });
  }
  handleChangingPreviewImg(e) {
    const { value } = e.target;
    this.setState({
      edtItem: {
        ...this.state.edtItem,
        previewImg: value,
      },
    });
  }
  handleChangingAssetUrl(e) {
    const { value } = e.target;
    this.setState({
      edtItem: {
        ...this.state.edtItem,
        assetURL: value,
      },
    });
  }

  render() {
    const { edtItem, collection } = this.state;

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
                  onEdit={this.setEditingItem}
                  onRemove={this.removeItem}
                  onToggleFav={this.toggleFavItem}
                />
              ))}
            </List>
            {!collection.length && (
              <p>There are no collections yet, let find one!</p>
            )}
          </Container>
        </Body>

        {edtItem && (
          <Modal onClose={this.unsetEditingItem}>
            <ModalContent>
              <ModalHeader>Edit</ModalHeader>
              <ModalBody>
                <InputText
                  title="Title"
                  value={edtItem.title}
                  onChange={this.handleChangingTitle}
                  />
                <InputText
                  longText
                  title="Description"
                  value={edtItem.descriptionInit}
                  onChange={this.handleChangingDesc}
                  />
                <InputText
                  title="Type"
                  value={edtItem.type}
                  onChange={this.handleChangingType}
                  />
                <InputText
                  required
                  title="Link preview image url"
                  value={edtItem.previewImg}
                  onChange={this.handleChangingPreviewImg}
                  />
                <InputText
                  required
                  title="Link file url"
                  value={edtItem.assetURL}
                  onChange={this.handleChangingAssetUrl}
                />
              </ModalBody>

              <ModalFooter>
                <Button onClick={this.updateItem}><CheckIcon/> Save</Button>
              </ModalFooter>
            </ModalContent>
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
