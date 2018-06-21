// Importing modules
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Importing components
import Home from './pages/home.jsx';
import DocumentsTitles from './pages/documentsTitles.jsx';
import SingleDocument from './pages/docContent.jsx';
import Search from './pages/searchDoc.jsx';

// Directs the request to the right pages
export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/documentTitles" component={DocumentsTitles} />
          <Route path="/document/:documentId" component={SingleDocument} />
          <Route path="/search" component={Search} />
        </div>
      </Router>
    );
  }
}
