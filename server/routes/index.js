var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/express-server', function(req, res, next) {
  res.send({ express: 'Express connected to React.' });
});

module.exports = router;
