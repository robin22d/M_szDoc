import React, { Component } from 'react';
import Router from './components/router.jsx';

import './app.css';

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Router />
      </div>
    );
  }
}
