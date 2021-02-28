// 
//  FileName: index.js
//  Name: Tibin Thomas
//  Student ID:301160586
//  Purpose: Used to handle routing 
//
var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexcontroller');


// helper function for guard purposes
function requireAuth(req, res, next)
{
// check if the user is logged in
if(!req.isAuthenticated())
{
return res.redirect('/login');
}
next();
}


/* GET home page. */
router.get('/', indexController.displayHomepage);
router.get('/home',indexController.displayHomepage);

router.get('/aboutme',indexController.displayAboutpage);

router.get('/projects',requireAuth, indexController.displayProjectspage);

router.get('/services', requireAuth,indexController.displayServicespage);

router.get('/contactme',requireAuth, indexController.displayContactMepage);

router.get('/login', indexController.displayLoginMepage);

router.post('/login',indexController.processLoginMepage);

router.get('/logout', requireAuth,indexController.performLogout);



module.exports = router;
