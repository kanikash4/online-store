'use strict';
var util = require('util'),
    errorMap  = require('./errorMap'),
    _         = require('lodash');

var ApiError = function (errorCode, status, options) {
  this.giftErrorCode = errorCode;

  var mappedError = errorMap.codeMap[errorCode] || {};
  this.httpStatusCode = status || mappedError.status || 400;
  var message = mappedError.message || "Some error occured";
  _.keys(options || {}).forEach(function(key) {message = message.replace("<" + key + ">", options[key])});
  this.message = message;
  this.title = mappedError.title || "Some error occured";

  Error.captureStackTrace(this, ApiError);
};

util.inherits(ApiError, Error);

module.exports = ApiError;
