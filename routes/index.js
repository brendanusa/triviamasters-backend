var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  console.log('REQUEST RCVD')
  res.send('nic')
});

module.exports = router;
