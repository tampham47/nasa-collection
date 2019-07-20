import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ActionButton from './ActionButton';

import HeartStrokeIcon from '../icons/heart.svg';
import HeartFilledIcon from '../icons/heart-filled.svg';
import PenIcon from '../icons/pen.svg';
import BinIcon from '../icons/trash-bin.svg';
import AddIcon from '../icons/add.svg';

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
  margin-bottom: 1.5em;
  overflow: hidden;
  img {
    width: 100%;
    display: block;
  }
`;
const Body = styled.div`
  height: 200px;
  position: relative;
`;
const Row = styled.div`
  font-size: 0.75em;
  display: flex;
  justify-content: space-between;
  color: gray;
`;
const Title = styled.h2`
  font-weight: 400;
  margin-top: .5em;
  margin-bottom: .5em;
`;
const Content = styled.p`
  color: gray;
  line-height: 1.5;
  margin: 0;
`;
const Control = styled.div`
  margin-top: 0.5em;
  position: absolute;
  bottom: 0;
  background-color: white;
  width: 100%;
  padding-top: 1em;
`;
const AddToBtn = styled(ActionButton)`
  width: calc(100% - 4px);
  text-align: center;
  position: relative;
  svg {
    position: absolute;
    left: 10px;
    top: 10px;
  }
`;


const CollectionItem = ({ model, onAdd, onToggleFav, onRemove, onEdit }) => {
  const onAddLocal = () => onAdd(model);
  const onRemoveLocal = () => onRemove(model);
  const onEditLocal = () => onEdit(model);
  const onToggleFavLocal = () => onToggleFav(model);

  return (
    <Item>
      <ImgWrapper>
        <img
          src={model.previewImg}
          alt={model.title}
        />
      </ImgWrapper>
      <Body>
        <Row>
          <span>{model.center}</span>
          <span>{model.date_created}</span>
        </Row>
        <Title>{model.title}</Title>
        <Content>{model.description}</Content>
        {onAdd ? (
          <Control>
            <AddToBtn onClick={onAddLocal}>
              <AddIcon/> Add to NASA collection
            </AddToBtn>
          </Control>
        ) : (
          <Control>
            <ActionButton onClick={onToggleFavLocal}>
              {model.fav ? <HeartFilledIcon className="red" /> : <HeartStrokeIcon />}
            </ActionButton>
            <ActionButton onClick={onRemoveLocal}>
              <BinIcon />
            </ActionButton>
            <ActionButton onClick={onEditLocal}>
              <PenIcon />
            </ActionButton>
          </Control>
        )}
      </Body>
    </Item>
  )
};

CollectionItem.propTypes = {
  onEdit: PropTypes.func,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
  onToggleFav: PropTypes.func,
  model: PropTypes.shape({
    fav: PropTypes.bool,
    previewImg: PropTypes.string,
    title: PropTypes.string,
    date_created: PropTypes.string,
    center: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default CollectionItem;
