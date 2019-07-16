import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './containers/Home';
import Search from './containers/Search';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Roboto', sans-serif;
  }
`;

export default class App extends Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <Route path="/" exact component={Home} />
        <Route path="/search" component={Search} />
      </Router>
    )
  }
}
