import React from 'react';
import { Link } from 'react-router-dom';

import './documentTitle.css';

export default class DocTitleList extends React.Component {
  render() {
    const data = this.props.docs;
    const listItems = data.map((i) => <Link className="documentTitleList" key={i.m_szDocID} to={`/document/${i.m_szDocID}`}>{i.m_szDocTitle}</Link>);

    return (
      <div>
        {listItems}
      </div>
    );
  }
}
