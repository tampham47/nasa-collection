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
  z-index: 9;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: calc(100% - 2em);
`;

const CloseButton = styled(ActionButton)`
  position: absolute;
  z-index: 1;
  background-color: transparent;
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
const ModalContent = styled.div`
  background-color: white;
  padding: 1.5em;
  border-radius: 4px;
  overflow: hidden;
`;
const ModalBody = styled.div`
  margin-top: 2em;
  margin-bottom: 2em;
  width: 600px;
  max-width: calc(100%);
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
  ModalContent,
  ModalBody
};

export default Modal;
