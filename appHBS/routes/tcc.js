var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('tcc');
});

router.get('/aula', function(req, res, next) {
  res.render('aula');
});

module.exports = router;