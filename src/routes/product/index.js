'use strict';

var async = require('async');

var ApiError = require('../../lib/apiError');

var product = {
	create : function (req, res, next) {
		if(!req || !req.body) {
      return next(new ApiError('Customer Id is missing or not valid', 412));
		}
		//check for authenticated users
	  async.waterfall([
	    _checkUserAuth,
	    _createProduct,
	  ], function (err) {
	  if (err) {
	    return cb(err, item);
	  }
	    return cb(null, item);
	  });

	  function  _checkUserAuth(cb) {}

	  function _createProduct(user, cb) {}

	},

	search : function (req, res, next) {},

	delete : function (req, res, next) {},

	update : function (req, res, next) {}

};

module.exports = product;