import React from 'react';

import DocStore from '../../stores/singleDocStore';
import DocActions from '../../actions/docsActions';

import DocContentList from '../layout/docContentList.jsx';
import NavigatingBar from '../layout/navigatingBar.jsx';

export default class DocContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      docs: DocStore.getAll()
    };

    // Calling the store using values entered into the url
    const { match: { params } } = this.props;
    DocActions.setSingleDoc(params.documentId);
    this.handleDocs = this.handleDocs.bind(this);
  }

  componentWillMount() {
    DocStore.on('change', this.handleDocs);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    DocStore.removeListener('change', this.handleDocs);
  }

  handleDocs() {
    this.setState({
      docs: DocStore.getAll()
    });
  }

  render() {
    return (
      <div>
        <NavigatingBar />
        <DocContentList
          doc={this.state.docs}
        />
        <div className="footer">
          {/*  */}
        </div>
      </div>
    );
  }
}
