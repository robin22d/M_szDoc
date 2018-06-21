
const express = require('express');

const router = express.Router();
const apiUtil = require('./apiUtils');

const DocController = require('../../../database/controllers/docsController');

// Routes that can direct the api request to the correct functions
router.get('/v1/:resource/:count', (req, res) => {
  const resource = req.params.resource;
  const count = req.params.count;

  if (resource === 'getAllData') {
    DocController.getAllData(req.query, count, (err, results) => {
      apiUtil.JSONOutput(res, err, results);
    });
  }
});

router.get('/v1/:resource/:value/:count', (req, res) => {
  const resource = req.params.resource;
  const value = req.params.value;
  const count = req.params.count;
  console.log('im beong called');
  if (resource === 'searchTitles') {
    DocController.searchTitles(value, count, (err, results) => {
      apiUtil.JSONOutput(res, err, results);
    });
  } else if (resource === 'searchSummary') {
    DocController.searchSummary(value, count, (err, results) => {
      apiUtil.JSONOutput(res, err, results);
    });
  } else if (resource === 'searchBody') {
    DocController.searchBody(value, count, (err, results) => {
      apiUtil.JSONOutput(res, err, results);
    });
  }
});

router.get('/v1/:resource/:id', (req, res) => {
  const resource = req.params.resource;
  const id = req.params.id;

  if (resource === 'findById') {
    DocController.findById(id, (err, results) => {
      apiUtil.JSONOutput(res, err, results);
    });
  }
});

module.exports = router;
