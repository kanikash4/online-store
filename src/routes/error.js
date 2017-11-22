'use strict';

module.exports = function (err, req, res, next) {
	if(err) {
	  res.locals.message = err.message || "Encountered an error";
	  res.locals.status  = err.status || 500;
	  res.locals.stack   = err.stack ? err.stack.split('\n') : '';
	  res.render('error');
	}
};
