const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.sendFile(__dirname, '/public/index.html');
});

router.get('/documents', (req, res) => {
  res.send(__dirname, '/public/index.html');
});

module.exports = router;
