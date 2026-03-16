var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('jujuba', { title: 'Express' });
});

router.get('/carrinho', function(req, res, next) {
  res.render('jujuba', { title: 'Express' });
});

module.exports = router;
