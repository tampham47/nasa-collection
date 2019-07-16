import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  display: inline-block;
  margin-bottom: 4em;
  width: calc(33.33% - 2em);
  margin-left: 1em;
  margin-right: 1em;
  overflow: hidden;
`;
const ImgWrapper = styled.div`
  height: 200px;
  width: 100%;
  display: block;
  border-radius: 4px;
  margin-bottom: 2em;
  overflow: hidden;
  img {
    width: 100%;
    display: block;
  }
`;
const Body = styled.div`
  margin-top: 2em;
`;
const Row = styled.div`
  margin-top: 1em;
  margin-bottom: 1em;
  display: flex;
  justify-content: space-between;
  color: gray;
`;
const Title = styled.h2`
  font-weight: 400;
`;
const Content = styled.p`
  color: gray;
  line-height: 1.5;
`;
const Control = styled.div``;
const Button = styled.button`
  width: 50px;
  height: 50px;
  margin-right: 1em;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
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
        <Content>Occaecat et nulla velit sit ea mollit mollit aliquip. Aliquip labore aliquip eu voluptate Lorem fugiat velit irure voluptate.</Content>
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
