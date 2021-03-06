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
  border-width: ${props => props.noBorder ? '0' : '1px'};
  border-style: solid;
  border-color: rgb(206, 206, 210, 0.4);
  fill: #CECED2;
  outline: none;
  svg {
    vertical-align: middle;
  }

  &:last-of-type {
    margin-right: 0;
  }
  &:hover,
  &:focus {
    border-color: rgb(206, 206, 210, 1);
    svg {
      fill: rgba(0,0,0,0.9);
    }
    .red {
      fill: #E54D42;
    }
    .green {
      fill: green;
    }
  }

  & .red {
    fill: #E54D42;
  }
  & .green {
    fill: green;
  }
`;

const ActionButton = ({ children, ...props }) => {
  return (
    <Button {...props}>{children}</Button>
  );
};

ActionButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ActionButton;
