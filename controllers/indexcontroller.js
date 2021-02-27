// 
//  FileName: index.js
//  Name: Tibin Thomas
//  Student ID:301160586
//  Purpose: Used to handle routing 
//
var express = require('express');
var  mongoose  = require('mongoose');
const passport = require('passport');
var router = express.Router();


/* GET home page. */
module.exports.displayHomepage = (req, res, next) => {
    res.render('index', { title: 'Tibin Thomas' });
  }

module.exports.displayAboutpage = (req, res, next) => {
    res.render('aboutme', { title: 'Tibin Thomas' });
  }

  
  module.exports.displayProjectspage = (req, res, next) => {
    res.render('projects', { title: 'Tibin Thomas' });
  }

  module.exports.displayServicespage = (req, res, next) => {
    res.render('services', { title: 'Tibin Thomas' });
  }

  module.exports.displayContactMepage = (req, res, next) => {
    res.render('contactme', { title: 'Tibin Thomas' });
  }

  module.exports.displayLoginMepage = (req, res, next) => {
      if(!req.user){
          res.render('auth/login', {title: "Login",messages: req.flash('loginMessage'), displayName: req.user ? req.user.displayname : ''})
      }
      else {
          res.redirect('/');
      }


    
  }

  module.exports.processLoginMepage = (req, res, next) => {
    passport.authenticate('local',
     (err, user, info) => {
        if(err){
            return next(err);
        }
        if(!user){
            req.flash('login message', 'authentication error');
            return res.redirect('/login');
        }
        req.login(user, (err) => {
            if(err)
            {
                return next(err);
            }
            return res.redirect('/login');
        });
    }) (req, res, next);


  
}