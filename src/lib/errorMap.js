'use strict';

var map = {

  httpMap: {
    400: "Bad Request",
    401: "Login required",
    403: "Forbidden",
    404: "Not Found",
    406: "Validation Error",
    412: "Precondition Failed",
    422: "Unprocessable Entity",
    500: "Unknown Error",
  },

  codeMap: {
    'SEARCH_NR': {
      message : "No search results found for your request.",
      title   : "No results found",
      status  : 404,
      xmsg    : "No results"
    }
  }
};

module.exports = map;
