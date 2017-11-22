'use strict';

var error = require('./error');
var product = require('./product');
var respond = require('./respond');

module.exports = function(app) {

  app.all('/_status', function(req, res, next) {
    res.sendStatus(200);
  });

	// It should support addition, deletion, editing and searching a product.

	app.post('/createProduct', product.create, respond, error);

	app.put('/updateProduct', product.update, respond, error);

	app.get('/search/:id', product.search, respond, error);

	app.delete('/delete', product.delete, respond, error);

};