var express = require('express');
var router = express.Router();

const produtos = [
  { id: 1, nome: "PC TOPE", preco: 20},
  { id: 2, nome: "PC DE HACKER", preco: 10000},
  { id: 3, nome: "RAM DDR 5", preco: 1000000000000}
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('produtos');
});

router.get('/carrinho', function(req, res, next) {
  res.render('carrinho', {produtos});
});


module.exports = router;
