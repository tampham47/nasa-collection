import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  width: 44px;
  height: 44px;
  margin-right: 1em;
  border-radius: 3px;
  background-color: white;
  cursor: pointer;
  border: 1px solid rgb(206, 206, 210, 0.4);
  fill: #CECED2;
  svg {
    vertical-align: middle;
  }
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    border-color: rgb(206, 206, 210, 1);
    svg {
      fill: rgba(0,0,0,0.9);
    }
    .red {
      fill: #E54D42;
    }
  }

  & .red {
    fill: #E54D42;
  }
`;

const ActionButton = ({ children }) => {
  return (
    <Button>{children}</Button>
  );
};

ActionButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ActionButton;