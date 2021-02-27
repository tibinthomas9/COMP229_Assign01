// 
//  FileName: app.js
//  Name: Tibin Thomas
//  Student ID:301160586
//  Purpose: Entry point of app
//

//3rd party packages
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//authentication
var session = require('express-session');
var passport = require('passport');
var passportLocal = require('passport-local');
var localStrategy = passportLocal.Strategy;
var flash = require('connect-flash');


//db setup
var mongoose = require('mongoose');
let DB = require('./db');

//point mongoose to uri
mongoose.connect(DB.URI, {useNewUrlParser: true, useUnifiedTopology: true});

let mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console,'connection error:'));
mongoDB.once('open', ()=> {
  console.log("Connected to mongoDB");
});


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

//setup express session
app.use(session({resave: false, saveUninitialized: true, secret: 'newseecret' })); // session secret
//intiialise passport 
//
app.use(flash());
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

var userModel = require('./models/user');
let User = userModel.User;


 
//passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
let port = process.env.PORT;
if (port == null || port == "") {
    port = 4004;
}
app.listen(port, () => {
    console.log('Listening to port 3000.');
});


module.exports = app;
