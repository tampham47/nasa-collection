import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  display: inline-block;
  margin-bottom: 2em;
  width: calc(33.33% - 2em);
  margin-left: 1em;
  margin-right: 1em;
  border-radius: 4px;
  overflow: hidden;
`;
const ImgWrapper = styled.div`
  height: 200px;
  width: 100%;
  display: block;
  margin-bottom: 2em;
  img {
    width: 100%;
    display: block;
  }
`;
const Body = styled.div`
  margin-top: 2em;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.h3``;
const Content = styled.p``;
const Control = styled.div``;
const Button = styled.button`
  width: 50px;
  height: 50px;
  margin-right: 1em;
  &:last-child {
    margin-right: 0;
  }
`;

const CollectionItem = () => {
  return (
    <Item>
      <ImgWrapper>
        <img
          src="http://www.accudata.com/smartdata/wp-content/uploads/2013/10/img-7-1.jpg" 
          alt="smart data"
        />
      </ImgWrapper>
      <Body>
        <Row>
          <span>Paolo Lazzatorii</span>
          <span>12 Feb, 2018</span>
        </Row>
        <Title>Eclipse over the gulf of Poets</Title>
        <Content>Occaecat et nulla velit sit ea mollit mollit aliquip. Aliquip labore aliquip eu voluptate Lorem fugiat velit irure voluptate. Sunt nostrud do ipsum commodo ad voluptate laborum minim amet esse esse irure nulla. Veniam sint irure do commodo reprehenderit anim ea velit do proident Lorem non nulla. Lorem enim ullamco reprehenderit ad elit eiusmod commodo ex deserunt nisi mollit aliquip ullamco.</Content>
        <Control>
          <Button>A</Button>
          <Button>B</Button>
          <Button>C</Button>
        </Control>
      </Body>
    </Item>
  )
};

export default CollectionItem;