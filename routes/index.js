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
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Tibin Thomas' });
});
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Tibin Thomas' });
});
router.get('/contactme', function(req, res, next) {
  res.render('contactme', { title: 'Tibin Thomas' });
});

module.exports = router;
