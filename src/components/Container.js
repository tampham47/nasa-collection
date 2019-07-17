import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Main = styled.div`
  width: calc(100% - 2em);
  margin-left: auto;
  margin-right: auto;
  max-width: 75em;
`;

const Container = ({ children }) => {
  return (
    <Main>
      {children}
    </Main>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
