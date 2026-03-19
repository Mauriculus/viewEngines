var express = require('express');
var router = express.Router();

const jujubas = [
  {id: 1, produto: "Jujuba de porco", preco: "bem barato"},
  {id: 2, produto: "Jujuba de cavalo", preco: 14},
  {id: 3, produto: "Jujuba vegana", preco: "indisponível"}
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('jujuba', { title: 'Express' });
});

router.get('/carrinho', function(req, res, next) {
  res.render('carrinho', { jujubas });
});

module.exports = router;
