import { EventEmitter } from 'events';

// Store where the data for the application is stored
import dispatcher from '../utils/dispatcher.js';

class SingleDocStore extends EventEmitter {
  constructor() {
    super();
    this.singleDoc = 'bob';
  }

  getAll() {
    return this.singleDoc;
  }

  setDoc(doc) {
    this.singleDoc = doc;
    this.emit('change');
  }

  handleActions(action) {
    switch (action.type) {
      case 'SET_DOC': {
        this.setDoc(action.doc);
        break;
      } default: {
        break;
      }
    }
  }
}

const singleDocStore = new SingleDocStore();

dispatcher.register(singleDocStore.handleActions.bind(singleDocStore));

export default singleDocStore;
