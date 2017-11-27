'use strict';

var error = require('./error');
var product = require('./product');
var respond = require('./respond');
var user = require('./user');

module.exports = function(app, passport) {

  app.all('/_status', function(req, res, next) {
    res.sendStatus(200);
  });

	// It should support addition, deletion, editing and searching a product.

	app.post('/createProduct', product.create, respond, error);

	app.put('/updateProduct', product.update, respond, error);

	app.get('/search/:id', product.search, respond, error);

	app.delete('/delete', product.delete, respond, error);

	/**
	 * process the login form
	 */
	app.post('/login', passport.authenticate('local-login', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/login', // redirect back to the signup page if there is an error
            failureFlash : false // allow flash messages
		}),
        function(req, res) {
            console.log("hello");

            if (req.body.remember) {
              req.session.cookie.maxAge = 1000 * 60 * 3;
            } else {
              req.session.cookie.expires = false;
            }
        res.redirect('/');
  });


	// =====================================
	// PROFILE SECTION =========================
	// =====================================
	// we will want this protected so you have to be logged in to visit
	// we will use route middleware to verify this (the isLoggedIn function)
		app.get('/profile', isLoggedIn, function(req, res) {
		res.render('profile.ejs', {
			user : req.user // get the user out of session and pass to template
		});
	});


	// app.get('/login', function(req, res) {
	// 	res.render('login', { message: 'loginMessage'});
	// })

};

// route middleware to make sure
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}