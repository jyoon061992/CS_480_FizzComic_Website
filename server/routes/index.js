var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var pool  = mysql.createPool({
  host     : 'us-cdbr-iron-east-04.cleardb.net',
  user     : 'bb353640536722',
  password : 'f408fb6c',
  database : 'heroku_f8d562e61e70440'
});

router.get('/comics', function(req, res, next) {
  pool.getConnection(function(err, connection) {
    // Use the connection
    connection.query('select * from comics', function (error, results, fields) {
      return res.json(results)
      // And done with the connection.
      connection.release();
      // Handle error after the release.
      if (error) throw error;
      // Don't use the connection here, it has been returned to the pool.
    });
  });
});
router.post('/login', function(req, res, next) {
  pool.getConnection(function(err, connection) {
    // Use the connection
    console.log(req.body.user);
    var email=req.body.user.email;
    var password=req.body.user.pass;
    var firstname=req.body.user.firstname;
    var lastname=req.body.user.lastname;
    connection.query('INSERT INTO accounts (firstname,lastname, email, password) VALUES (\''
    + String(firstname)+'\''+ ',\''+ String(lastname)+'\',\'' + String(email)+'\',\''+ String(password)+'\');', function (error, results, fields) {
      // And done with the connection.
      connection.release();
      // Handle error after the release.
      if (error) throw error;
      // Don't use the connection here, it has been returned to the pool.
    });
 });
});
module.exports = router;
