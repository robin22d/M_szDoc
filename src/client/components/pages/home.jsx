import React from 'react';
import { Link } from 'react-router-dom';

import NavigatingBar from '../layout/navigatingBar.jsx';

import './home.css';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">
          M_DOC Interface
        </h1>
        <div className="navBar">
          <NavigatingBar />
        </div>
        <div className="grid-container">
          <div className="search"> Specific files can be found using the search function. </div>
          <div className="allFiles"> All that the files can be browsed using there title by going to All Documents. </div>
          <Link to="/search" className="btn"> Search </Link>
          <Link to="/documentTitles" className="btn ">All Documents</Link>
        </div>
        <div className="footer"> Robin Davies </div>
      </div>
    );
  }
}
