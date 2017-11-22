'use strict';

var db = require('../../config/db');

var user = {

  create : function (userDetails, cb) {
    if ( !userDetails) {
        return cb();
    }
    var query = "";
    db.query(query, function(e,r) {
      if(e) {
        return cb(e);
      }
      cb(null, r);
    });
  }

};

module.exports = user;
