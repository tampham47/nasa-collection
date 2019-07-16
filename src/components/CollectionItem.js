import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ActionButton from './ActionButton';

import HeartStrokeIcon from '../icons/heart.svg';
import HeartFilledIcon from '../icons/heart-filled.svg';
import PenIcon from '../icons/pen.svg';
import BinIcon from '../icons/trash-bin.svg';

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
  padding: 4px;
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

const CollectionItem = ({ fav }) => {
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
          <ActionButton>
            {fav ? <HeartFilledIcon className="red" /> : <HeartStrokeIcon />}
          </ActionButton>
          <ActionButton><BinIcon /></ActionButton>
          <ActionButton><PenIcon /></ActionButton>
        </Control>
      </Body>
    </Item>
  )
};

CollectionItem.propTypes = {
  fav: PropTypes.bool,
};

export default CollectionItem;
