import React from 'react';
import styled from 'styled-components';

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
      modalContent: 1,
    };

    this.setModalContent = this.setModalContent.bind(this);
    this.unsetModalContent = this.unsetModalContent.bind(this);
  }

  setModalContent() {
    this.setState({ modalContent: 1 });
  }
  unsetModalContent() {
    this.setState({ modalContent: null });
  }

  render() {
    const { modalContent } = this.state;

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
              <CollectionItem fav onEdit={this.setModalContent} />
              <CollectionItem onEdit={this.setModalContent} />
              <CollectionItem onEdit={this.setModalContent} />
              <CollectionItem onEdit={this.setModalContent} />
            </List>
          </Container>
        </Body>

        {modalContent && (
          <Modal onClose={this.unsetModalContent}>
            <ModalHeader>Edit</ModalHeader>

            <ModalBody>
              <InputText title="Title" />
              <InputText title="Description" longText />
              <InputText title="Type" />
              <InputText title="Link preview image url" required />
              <InputText title="Link file url" required />
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
