// imports the expresss app object
var express = require('express');
// then uses it to get a router object
var router = express.Router();

/* GET cool page. */ // and added routes 
router.get('/', function(req, res, next) {
  res.send('You are so cool');
});

module.exports = router;
