import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #784CC0;
  padding: 8px 16px 8px 12px;
  border: 0;
  border-radius: 3px;
  overflow: hidden;
  font-size: 14px;
  line-height: 17px;
  cursor: pointer;
  color: white;
  fill: white;
  outline: none;
  letter-spacing: 0.11px;
  height: 35px;
  svg {
    margin: -2px;
    margin-right: 8px;
    vertical-align: middle;
  }
  &:hover {
    background-color: #976BE2;
  }
  &:focus {
    background-color: #5D3999;
  }
`;

const ButtonComponent = ({ children }) => {
  return (
    <Button>{children}</Button>
  );
};

ButtonComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ButtonComponent;
