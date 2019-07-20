import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ActionButton from './ActionButton';
import CloseIcon from '../icons/close.svg';

const Main = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0,0,0,0.5);
`;

const Wrapper = styled.div`
  width: calc(100% - 2em);
  max-width: 36em;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1.5em;
  background-color: white;
  border-radius: 4px;
  overflow: hidden;
`;

const CloseButton = styled(ActionButton)`
  position: absolute;
  right: 4px;
  top: 4px;
`;

const ModalHeader = styled.h2`
  margin: 0;
  font-weight: 400;
`;
const ModalFooter = styled.div`
  margin-top: 1em;
`;
const ModalBody = styled.div`
  margin-top: 2em;
  margin-bottom: 2em;
`;

const Modal = ({ children, onClose }) => {
  return (
    <Main>
      <Wrapper>
        {onClose && (
          <CloseButton onClick={onClose} noBorder>
            <CloseIcon/>
          </CloseButton>
        )}
        {children}
      </Wrapper>
    </Main>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export {
  ModalHeader,
  ModalFooter,
  ModalBody
};

export default Modal;
