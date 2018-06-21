import _ from 'lodash';

import dispatcher from '../utils/dispatcher.js';
import APIManager from '../utils/APIManager';
import DocStore from '../stores/docStore';

export default {

  // Calling the api with a get request and dispatching the result to the store
  getDocs: (counter) => {
    dispatcher.dispatch({
      type: 'LOADING'
    });
    const url = 'getAllData';
    APIManager.get(url, null, counter, (err, response) => {
      if (err) {
        const error = err.message;
        dispatcher.dispatch({
          type: 'ERROR_FETCHING_DOCS',
          error,
        });
      }

      const docs = response.message;
      dispatcher.dispatch({
        type: 'RECEIVED_DOCS',
        docs,
      });
    });
  },

  // Calling the api with a get request and dispatching the result to the store
  searchDocs: (typeOfSearch, searchValue, counter) => {
    dispatcher.dispatch({
      type: 'LOADING'
    });
    const url = typeOfSearch;
    APIManager.search(url, null, searchValue, counter, (err, response) => {
      if (err) {
        const error = err.message;
        dispatcher.dispatch({
          type: 'ERROR_FETCHING_DOCS',
          error,
        });
      }

      const docs = response.message;
      dispatcher.dispatch({
        type: 'RECEIVED_DOCS',
        docs,
      });
    });
  },

  // Setting document that needs to be loaded into a page
  setSingleDoc: (docId) => {
    const getDoc = new Promise((resolve) => {
      const docs = DocStore.getAll();
      const foundDoc = _.find(docs, i => i.m_szDocID === docId);
      if (foundDoc !== 'undefined') {
        resolve(foundDoc);
      }
    });

    getDoc.then((doc) => {
      dispatcher.dispatch({
        type: 'SET_DOC',
        doc
      });
    });
  },
};
