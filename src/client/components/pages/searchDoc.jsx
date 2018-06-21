import React from 'react';

import NavigatingBar from '../layout/navigatingBar.jsx';
import DocAction from '../../actions/docsActions';
import DocStore from '../../stores/docStore';
import DocTitleList from '../layout/docTitleList.jsx';

import './search.css';

export default class SearchDocs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      docs: DocStore.getAll(),
      error: DocStore.getError(),
      counter: 0,
      loading: DocStore.getLoading()
    };

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
        <h1>
            Search
        </h1>
        <NavigatingBar />
        <div className="grid-search-container">
          {/* Form to be filled in by user so that can search for docs */}
          <form onSubmit={this.handleForm.bind(this)} className="form">
            <input ref="searchWords" className="formItems" required />
            <select ref="typeOfSearch" className="formItems">
              <option value="searchTitles">Title</option>
              <option value="searchSummary">Summary</option>
              <option value="searchBody">Body</option>
            </select>
            <input type="submit" value="Find" className="btn" />
          </form>
          {this.handleRendering()}
          {/* Buttons so the user can get more docs */}
          <div className="footer">
            <button onClick={this.handleBack} className="btn back"> Back </button>
            <button onClick={this.handleNext} className="btn next"> Next </button>
          </div>
        </div>
      </div>
    );
  }

  // Function which called the Actions so that the api can be called to retrieve the data
  handleForm(event) {
    event.preventDefault();
    console.log('searching values: ', this.refs.searchWords.value, this.refs.typeOfSearch.value);
    const typeOfSearch = this.refs.typeOfSearch.value;
    const searchValue = this.refs.searchWords.value;
    DocAction.searchDocs(typeOfSearch, searchValue, 0);
    this.setState({ counter: this.state.counter = 0 });
  }

  // Handle the rendering of the page and outputting any errors
  handleRendering() {
    if (this.state.error.value) {
      return (
        <div>
          <h1>{this.state.error.message}</h1>
        </div>
      );
    } else if (!this.state.docs.length && !this.state.loading) {
      return (
        <div>
          <h1>No document found</h1>
        </div>
      );
    } else if (this.state.loading) {
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
    const typeOfSearch = this.refs.typeOfSearch.value;
    const searchValue = this.refs.searchWords.value;

    DocAction.searchDocs(typeOfSearch, searchValue, (this.state.counter + 1));
    this.setState({ counter: this.state.counter + 1 });
    console.log('state: ', this.state.counter);
  }

  // Calls the Actions store to get the next set of documents
  handleBack() {
    const typeOfSearch = this.refs.typeOfSearch.value;
    const searchValue = this.refs.searchWords.value;

    DocAction.searchDocs(typeOfSearch, searchValue, (this.state.counter - 1));
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
