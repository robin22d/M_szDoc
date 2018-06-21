import React from 'react';
import { Link } from 'react-router-dom';

export default class NavigatingBar extends React.Component {
  render() {
    return (
      <div>
        <ul className="navWrapper">
          <li>
            <Link to="/">Welcome</Link>
          </li>
          <li>
            <Link to="/search"> Search </Link>
          </li>
          <li>
            <Link to="/documentTitles">All Documents</Link>
          </li>
        </ul>
      </div>
    );
  }
}
