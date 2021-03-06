import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { format } from 'date-fns';

import ActionButton from './ActionButton';
import Modal from './Modal';

import HeartStrokeIcon from '../icons/heart.svg';
import HeartFilledIcon from '../icons/heart-filled.svg';
import PenIcon from '../icons/pen.svg';
import BinIcon from '../icons/trash-bin.svg';
import AddIcon from '../icons/add.svg';
import CheckIcon from '../icons/check.svg';

const Item = styled.div`
  display: inline-block;
  width: calc(100% - 2em);
  margin-bottom: 4em;
  margin-left: 1em;
  margin-right: 1em;
  overflow: hidden;

  @media screen and (min-width: 48em) {
    width: calc(50% - 2em);
  }

  @media screen and (min-width: 75em) {
    width: calc(33.33% - 2em);
  }
`;
const ImgShadow = styled.div`
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 90%;
    height: 90%;
    background-color: black;
    opacity: 0.6;
    bottom: -8px;
    filter: blur(10px);
    transform: translateX(-50%);
    left: 50%;
    z-index: -1;
    transition: all 0.3s;
  }

  &:hover {
    &:after {
      opacity: 0.8;
      bottom: -8px;
    }
  }
`;
const ImgWrapper = styled.div`
  height: 200px;
  width: 100%;
  display: block;
  border-radius: 4px;
  margin-bottom: 1.5em;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  img {
    width: 100%;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
  line-height: 1.1;
  max-height: 2.2em;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
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
const IMG = styled.img`
  min-width: 200px;
  min-height: 60px;
  max-height: calc(${props => props.innerHeight} - 2em);
  max-width: calc(${props => props.innerWidth} - 2em);
  border-radius: 3px;
  background-color: rgba(0,0,0,0.1);
`;
const Video = styled.video`
  outline: none;
  width: 100%;
`;

class CollectionItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      model: props.model,
      innerWidth: '100px',
      innerHeight: '100px',
    };

    this.onAddLocal = this.onAddLocal.bind(this);
    this.onRemoveLocal = this.onRemoveLocal.bind(this);
    this.onEditLocal = this.onEditLocal.bind(this);
    this.onToggleFavLocal = this.onToggleFavLocal.bind(this);
    this.openView = this.openView.bind(this);
    this.closeView = this.closeView.bind(this);
  }

  componentDidMount() {
    this.setState({
      innerWidth: `${window.innerWidth}px`,
      innerHeight: `${window.innerHeight}px`,
    });
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.model !== nextProps.model) {
      const { model } = this.state;
      this.setState({
        model: {
          ...model,
          ...nextProps.model,
        },
      });
    }
    return true;
  }
  onAddLocal() {
    const { model } = this.props;
    this.props.onAdd(model);
  }
  onRemoveLocal() {
    const { model } = this.props;
    this.props.onRemove(model);
  }
  onEditLocal() {
    const { model } = this.props;
    this.props.onEdit(model);
  }
  onToggleFavLocal() {
    const { model } = this.props;
    this.props.onToggleFav(model);
  }
  openView() {
    if (this.props.getMoreData) {
      const { model } = this.state;
      this.props.getMoreData(model.id, model).then(body => {
        this.setState({
          model: {
            ...model,
            ...body,
          },
          active: true,
        });
      });
      return;
    }

    this.setState({
      active: true,
    });
  }
  closeView() {
    this.setState({
      active: false,
    });
  }

  render() {
    const { onAdd, isAdded } = this.props;
    const { active, model, innerWidth, innerHeight } = this.state;

    return (
      <Item>
        <ImgShadow>
          <ImgWrapper onClick={this.openView}>
            <img
              src={model.previewImg}
              alt={model.title}
            />
          </ImgWrapper>
        </ImgShadow>
        <Body>
          <Row>
            <span>{model.center}</span>
            <span>{format(model.date_created, 'DD MMM, YYYY')}</span>
          </Row>
          <Title>{model.title}</Title>
          <Content>{model.description}</Content>
          {onAdd ? (
            <Control>
              <AddToBtn onClick={this.onAddLocal}>
                {!isAdded ? (
                  <span>
                    <AddIcon/> Add to NASA collection
                  </span>
                ) : (
                  <span>
                    <CheckIcon className="green" /> Added
                  </span>
                )}
              </AddToBtn>
            </Control>
          ) : (
            <Control>
              <ActionButton onClick={this.onToggleFavLocal}>
                {model.fav ? <HeartFilledIcon className="red" /> : <HeartStrokeIcon />}
              </ActionButton>
              <ActionButton onClick={this.onRemoveLocal}>
                <BinIcon />
              </ActionButton>
              <ActionButton onClick={this.onEditLocal}>
                <PenIcon />
              </ActionButton>
            </Control>
          )}
        </Body>

        {active && (
          <Modal onClose={this.closeView}>
            {model.type === 'video' ? (
              <Video width="100%" controls autoPlay>
                <source src={model.assetURL} type="video/mp4" />
                Your browser does not support the video tag.
              </Video>
            ) : (
              <IMG src={model.assetURL}
                alt={model.title}
                innerHeight={innerHeight}
                innerWidth={innerWidth}
              />
            )}
          </Modal>
        )}
      </Item>
    )
  }
}

CollectionItem.propTypes = {
  onEdit: PropTypes.func,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
  onToggleFav: PropTypes.func,
  isAdded: PropTypes.bool,
  getMoreData: PropTypes.func,
  model: PropTypes.shape({
    fav: PropTypes.bool,
    previewImg: PropTypes.string,
    title: PropTypes.string,
    date_created: PropTypes.string,
    center: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.string,
    assetURL: PropTypes.string,
  }).isRequired,
};

export default CollectionItem;
