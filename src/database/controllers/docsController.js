const m_szDocs = require('../models/docsSchema.js');

// Functions that can be run on the database that can be called from anywhere.
module.exports = {

  // Get 100 items back from the database
  getAllData: (params, counter, callback) => {
    const skipNo = counter * 100;
    m_szDocs.find(params, (err, allDocs) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, allDocs);
    }).limit(101).skip(skipNo);
  },

  findById: (id, callback) => {
    m_szDocs.findById(id, (err, doc) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, doc);
    });
  },

  // Search for matches and return 100 items back from the database
  searchTitles: (string, counter, callback) => {
    const skipNo = counter * 100;
    m_szDocs.find({ 'm_szDocTitle' : { $regex : `.*${string}.*` } }, (err, doc) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, doc);
    }).limit(101).skip(skipNo);
  },

  searchSummary: (string, counter, callback) => {
    const skipNo = counter * 100;
    m_szDocs.find({ 'm_szDocSumamry' : { $regex : `.*${string}.*` } }, (err, doc) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, doc);
    }).limit(101).skip(skipNo);
  },

  searchBody: (string, counter, callback) => {
    const skipNo = counter * 100;
    m_szDocs.find({ 'm_szDocBody' : { $regex : `.*${string}.*` } }, (err, doc) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, doc);
    }).limit(101).skip(skipNo);
  }
};
