import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Main = styled.label`
  display: block;
  margin-bottom: 30px;
  min-height: 56px;
  padding-top: 25px;
  padding-right: 0;
  padding-bottom: 11px;
  padding-left: 0;
  position: relative;
`;
const Label = styled.div`
  position: absolute;
  top: 8px;
  left: 10px;
  font-size: 12px;
  & > label {
    color: rgba(0, 0, 0, 0.9);
    opacity: 0.4;
    margin: 0;
  }
  & > span {
    color: rgba(215, 80, 80, 1);
    margin-left: 6px;
    line-height: 12px;
    font-size: 16px;
    vertical-align: bottom;
  }
`;
const Input = styled.input`
  border: 0;
  outline: none;
  color: black;
  width: 100%;
  margin-top: -25px;
  margin-bottom: -11px;
  padding-top: 25px;
  padding-right: 9px;
  padding-bottom: 11px;
  padding-left: 9px;
  border: 1px solid #CECED2;
  border-radius: 3px;

  &:hover,
  &:focus {
    box-shadow: 0 1px 5px 0 rgba(57, 24, 245, 0.9);
  }
`;
const TextArea = styled.div`
  border: 0;
  outline: none;
  color: black;
  width: 100%;
  min-height: 100px;
  margin-top: -25px;
  margin-bottom: -11px;
  padding-top: 25px;
  padding-right: 9px;
  padding-bottom: 11px;
  padding-left: 9px;
  border: 1px solid #CECED2;
  border-radius: 3px;

  &:hover,
  &:focus {
    box-shadow: 0 1px 5px 0 rgba(57, 24, 245, 0.9);
  }
`;

const InputText = ({ title, required, longText, ...props }) => {
  const id =`inputtext-${Math.random() * 1000}`;
  return (
    <Main htmlFor={id}>
      <Label>
        <label>{title}</label>
        {required && <span>*</span>}
      </Label>
      {!longText ? (
        <Input {...props} />
      ) : (
        <TextArea contentEditable {...props} />
      )}
    </Main>
  );
}

InputText.propTypes = {
  title: PropTypes.string.isRequired,
  longText: PropTypes.bool,
  required: PropTypes.bool,
};

export default InputText;
