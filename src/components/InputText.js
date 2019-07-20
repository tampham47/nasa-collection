import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Main = styled.div`
  display: block;
  margin-bottom: 30px;
  min-height: 56px;
  padding-top: 25px;
  padding-right: 0;
  padding-bottom: 11px;
  padding-left: 0;
  position: relative;
`;
const Label = styled.label`
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

class InputText extends React.PureComponent {
  constructor(props) {
    super(props);

    this.setNode = this.setNode.bind(this);
    this.emitChange = this.emitChange.bind(this);
  }

  setNode(node) {
    this.refNode = node;
  }

  emitChange() {
    const value = this.refNode.innerHTML;
    if (this.props.onChange && value !== this.lastHtml) {
      this.props.onChange({
        target: { value },
      });
    }
    this.lastHtml = value;
  }

  render() {
    const { title, required, longText, value, onChange, ...props } = this.props;

    return (
      <Main>
        <Label>
          <label>{title}</label>
          {required && <span>*</span>}
        </Label>
        {!longText ? (
          <Input {...props} value={value} onChange={onChange} />
        ) : (
          <TextArea contentEditable
            {...props}
            ref={this.setNode}
            dangerouslySetInnerHTML={{ __html: value }}
            onChange={onChange}
            onInput={this.emitChange}
            onBlur={this.emitChange}
          />
        )}
      </Main>
    );
  }
}

InputText.propTypes = {
  title: PropTypes.string.isRequired,
  longText: PropTypes.bool,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputText;
