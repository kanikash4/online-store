'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var session  = require('express-session');
var cookieParser = require('cookie-parser');
var http = require('http');
var routes = require('./src/routes');
var app = express();
var passport = require('passport');

app.set('port', process.env.PORT || 3001);
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({
    extended: true
}));

/**
 * Connect to db
 */

require('./config/passport')(passport); // pass passport for configuration


/**
 * Passport
 */

app.use(session({
	secret: 'runningWingifyAssignment',
	resave: true,
	saveUninitialized: true
 } )); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


/**
 * Load routes and pass in our app and fully configured passport
 */
routes(app, passport);

/**
 * Create HTTP server.
 */

http.createServer(app)
.on('error',function(err) {
  console.log("[Error] ", err);
  process.exit(1);
})
.listen(app.get('port'), function(){
      console.log("Service listening on port " + app.get('port'));
});
