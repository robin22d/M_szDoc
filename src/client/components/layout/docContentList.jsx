import React from 'react';

export default class DocContentList extends React.Component {
  render() {
    const {
      m_szDocTitle,
      m_szYear,
      m_szDocSumamry,
      m_szDocBody,
    } = this.props.doc;

    return (
      <div>
        <h1>
          {m_szDocTitle}
        </h1>
        <div className="year">
          Year:
          {m_szYear}
        </div>
        <h2> Summary </h2>
        <div className="summary">
          {m_szDocSumamry}
        </div>
        <h2> Content </h2>
        <div className="body">
          {m_szDocBody}
        </div>
      </div>
    );
  }
}
