var express = require('express');
var router = express.Router();

const aulas = [
  { id: 1, titulo: "Como lavar roupa", autor: "Mauriculus"},
  { id: 2, titulo: "Como fazer strogonoff", autor: "Karenlachas" },
  { id: 3, titulo: "Como comer milho", autor: "Bellebell" },
  { id: 4, titulo: "Explodindo uma panela de pressão", autor: "SaSantiago"}
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('tcc');
});

router.get('/aula', function(req, res, next) {
  res.render('aula', {aulas});
});

module.exports = router;