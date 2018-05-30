var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool', function(req, res, next) {
  res.send('You are so cool');
});

router.get('/this-works', function(req, res, next) {
  res.send('I cannot believe I am making new routes this way. Why not new files?');
});

module.exports = router;
