const mongoose = require('mongoose');

// Model of the database
const m_szDocs = mongoose.Schema({

  m_szDocID: {
    type: String,
    default: false
  },
  m_szDocTitle: {
    type: String
  },
  m_szYear: {
    type: String
  },
  m_szDocSumamry: {
    type: String
  },
  m_szDocBody: {
    type: String
  },
  m_szGeo1: {
    type: String
  },
  m_szSourceType: {
    type: String
  },
  m_szSrcUrl: {
    type: String
  },
  m_Places: {
    type: String
  },
  m_People: {
    type: String
  },
  m_Companies: {
    type: String
  },
  m_BiGrams: {
    type: String
  },
  m_TriGrams: {
    type: String
  },
  m_SocialTags: {
    type: String
  },
  m_Topics: {
    type: String
  },
  m_Industry: {
    type: String
  },
  m_Technology: {
    type: String
  },
  m_BiCnt: {
    type: Number
  },
  m_TriCnt: {
    type: Number
  },
  m_iDocBodyWordCnt: {
    type: Number
  },
  m_dateCreated: {
    type: Date,
    default: Date.now
  }
}, { collection: 'm_szDocs' });

module.exports = mongoose.model('m_szDocs', m_szDocs);
