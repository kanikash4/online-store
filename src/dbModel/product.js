'use strict';

var db = require('../../config/db');

var product = {

  create : function (product, cb) {
  	if ( !product || !product.name || !product.description ||  !product.supplier_name) {
  		return cb(new Error('Incomplete product details'));
  	}
  	var query = "INSERT INTO product (name, description, supplier_name)  VALUES ('" + product.name + "', '" + product.description + "', '"  + product.supplier_name + "')";
    db.query(query, function(e,r) {
      if(e) {
      	return cb(e);
      }
      cb(null, r);
    });
  },

  update : function(product, cb) {
  	if ( !product) {
  		return cb();
  	}
  	var query = '';
    db.query(query, function(e,r) {
      if(e) {
      	return cb(e);
      }
      cb(null, r);
    });
  },

  delete : function(product, cb) {
  	if (!product) {
  		return cb();
  	}
  	var query = '';
    db.query(query, function(e,r) {
      if(e) {
      	return cb(e);
      }
      cb(null, r);
    });
  },

  search : function(product, cb) {
  	if ( !product) {
  		return cb();
  	}
  	var query = '';
    db.query(query, function(e,r) {
      if(e) {
      	return cb(e);
      }
      cb(null, r);
    });
  }

};

module.exports = product;

if (require.main === module) {
  (function () {

  var data = {
  	name : 'testProduct',
    description : 'description of the product abcd.',
    supplier_name : 'ABC Ltd.',
  };

  product.create(data, function (err, res) {
    console.log(err || res);
  });

  })();
}
