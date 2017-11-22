'use strict';

var utils = require('../lib/utils');

module.exports = function respondfn(req, res, next) {
  utils.timeRequest(req, 'respond');
  if ((req.url & req.url.indexOf('jsonp') > -1) ||
    (req.query && (req.query.callback || req.query.CALLBACK))) {
    res.jsonp(req.sendResult);
  } else {
    res.json(req.sendResult);
  }
};