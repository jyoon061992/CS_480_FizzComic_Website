#!/usr/bin/env node

/**
 * Module dependencies.
 */
var app = require('./app');
var debug = require('debug')('express-react:server');
var http = require('http');
/**
 * Get port from environment and store in Express.
 */
 var mysql = require('mysql');
 var con = mysql.createConnection({
    host: 'us-cdbr-iron-east-04.cleardb.net',
    user: 'bb353640536722',
    password: 'f408fb6c',
    database: 'heroku_f8d562e61e70440',
    pool: { maxConnections: 50, maxIdleTime: 300}
 });

 con.connect(function(error){
    if(!!error){
        console.log('Error');
    }else{
        console.log('Connected');
    }
 });

var port = normalizePort(process.env.PORT || '3001');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
