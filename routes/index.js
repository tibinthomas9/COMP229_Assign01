var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tibin Thomas' });
});
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Tibin Thomas' });
});
router.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { title: 'Tibin Thomas' });
});

module.exports = router;
