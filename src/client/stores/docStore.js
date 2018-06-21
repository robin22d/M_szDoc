import { EventEmitter } from 'events';

import dispatcher from '../utils/dispatcher.js';

// Store where the data for the application is stored
class DocStore extends EventEmitter {
  constructor() {
    super();
    this.docs = [];
    this.error = {
      message: '',
      value: false
    };
    this.loading = false;
  }

  getAll() {
    return this.docs;
  }

  getError() {
    return this.error;
  }

  getLoading() {
    return this.loading;
  }

  receivedDocs(newDocs) {
    this.docs = newDocs;
    this.error = {
      message: '',
      value: false
    };
    this.loading = false;
    this.emit('change');
  }

  errorDocs() {
    const errorPhrase = 'Oopps something went wrong please try again!';
    this.error = {
      message: errorPhrase,
      value: true
    };
    this.emit('error');
  }

  enableLoading() {
    this.loading = true;
    console.log('loading: ', this.loading);
    this.emit('change');
  }

  handleActions(action) {
    switch (action.type) {
      case 'RECEIVED_DOCS': {
        this.receivedDocs(action.docs);
        break;
      } case 'ERROR_FETCHING_DOCS': {
        this.errorDocs();
        break;
      } case 'LOADING': {
        this.enableLoading();
        break;
      } default: {
        break;
      }
    }
  }
}

const docStore = new DocStore();

dispatcher.register(docStore.handleActions.bind(docStore));

export default docStore;
