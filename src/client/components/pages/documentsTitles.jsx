import React from 'react';
import DocAction from '../../actions/docsActions';
import DocStore from '../../stores/docStore';

import NavigatingBar from '../layout/navigatingBar.jsx';
import DocTitleList from '../layout/docTitleList.jsx';

export default class DocumentsTitles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      docs: DocStore.getAll(),
      error: DocStore.getError(),
      counter: 0,
      loading: DocStore.getLoading()
    };
    DocAction.getDocs(this.state.counter);

    // Bind functions so they can access 'this'
    this.handleDocs = this.handleDocs.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleLoading = this.handleLoading.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  // On mount updating the state
  componentWillMount() {
    DocStore.on('change', this.handleDocs);
    DocStore.on('error', this.handleError);
    DocStore.on('change', this.handleLoading);
  }

  // Removing all listeners for old components
  componentWillUnmount() {
    DocStore.removeListener('change', this.handleDocs);
    DocStore.removeListener('error', this.handleError);
    DocStore.removeListener('change', this.handleLoading);
  }

  render() {
    return (
      <div>
        <h1> Documents </h1>
        <NavigatingBar />
        {this.handleRendering()}
        <div className="footer">
          <button onClick={this.handleBack} className="btn back"> Back </button>
          <button onClick={this.handleNext} className="btn next"> Next </button>
        </div>
      </div>
    );
  }

  // Handles the rendering on the docs
  handleRendering() {
    if (this.state.error.value) {
      return (
        <div>
          <h1>{this.state.error.message}</h1>
        </div>
      );
    } else if (!this.state.docs.length || this.state.loading) {
      return (
        <div>
          <h1>Loading ...</h1>
        </div>
      );
    }

    return (
      <DocTitleList
        docs={this.state.docs}
      />
    );
  }

  // Calls the Actions store to get the next set of documents
  handleNext() {
    DocAction.getDocs(this.state.counter + 1);
    this.setState({ counter: this.state.counter + 1 });
    console.log('state: ', this.state.counter);
  }

  // Calls the Actions store to get the next set of documents
  handleBack() {
    DocAction.getDocs(this.state.counter - 1);
    this.setState({ counter: this.state.counter - 1 });
    console.log('state: ', this.state.counter);
  }

  // Handles the state getting updated from the stores

  handleDocs() {
    this.setState({
      docs: DocStore.getAll()
    });
  }

  handleError() {
    this.setState({
      error: DocStore.getError()
    });
  }

  handleLoading() {
    this.setState({
      loading: DocStore.getLoading()
    });
  }
}
