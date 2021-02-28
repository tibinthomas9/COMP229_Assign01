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
var userModel = require('../models/user');
let User = userModel.User;


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
    console.log("login suub");
    
          // Users = new User({email: "tibinmutholy@gmail.com", displayName : "tibint", username : "tibint"}); 
          // console.log("login dd");
          // User.register(Users, "password1", function(err, user) { 
          //   console.log("rrr");
          //   if (err) { 
          //     res.json({success:false, message:"Your account could  not be saved. Error: ", err})  
          //   }else{ 
          //     res.json({success: true, message: "Your account has     been saved"}) 
          //   } 
          // }); 

          //new

    passport.authenticate('local',
     (err, user, info) => {
      console.log(err, user,info);
        if(err){
            return next(err);
        }
        if(!user){
            req.flash('login message', 'authentication error');
            return res.redirect('/login');
        }
        console.log("login user suub");
        req.login(user, (err) => {
            if(err)
            {
                return next(err);
            }
            return res.redirect('/contacts');
        });
    }) (req, res, next);

// Logout
  }

module.exports.performLogout = (req, res, next) => {
  req.logout();
  res.redirect("/");
}
  
