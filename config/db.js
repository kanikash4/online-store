'use strict';

// var mysql = require('mysql');

// var db = {
//   connection : mysql.createConnection({
//       host : 'localhost',
//       user : 'root',
//       password : 'paytm@197',//'mysql@123',
//       database : 'online_store'
//   }),
//   connect: function () {
//       this.connection.connect(function(err) {
//         if(err){
//           console.error('error connecting: ' + err.stack);
//           return;
//         }
//         console.info('Connected as id ' + connection.threadId);
//       });
//   },
//   query: function (queryText, cb) {
//       this.connection.query(queryText, function (err, results) {
//           if(err) {
//               return cb(err);
//           }
//           return cb(null, results);
//       });
//   },
//   end: function () {
//       this.connection.end(function(err) {
//           console.info("Connection is gracefully terminated");
//       });
//   }
// };

// module.exports = db;



// config/database.js
module.exports = {
    'connection': {
        'host': 'localhost',
        'user': 'root',
        'password': 'paytm@197'
    },
  'database': 'online_store',
    'users_table': 'users'
};