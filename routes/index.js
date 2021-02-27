// 
//  FileName: index.js
//  Name: Tibin Thomas
//  Student ID:301160586
//  Purpose: Used to handle routing 
//
var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexcontroller');

/* GET home page. */
router.get('/', indexController.displayHomepage);
router.get('/home', indexController.displayHomepage);

router.get('/aboutme', indexController.displayAboutpage);

router.get('/projects', indexController.displayProjectspage);

router.get('/services', indexController.displayServicespage);

router.get('/contactme', indexController.displayContactMepage);

router.get('/login', indexController.displayLoginMepage);

router.post('/login', indexController.processLoginMepage);



module.exports = router;
