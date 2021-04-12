const { setupInput } = require('./input')
const net = require('net');
//Establishes connection with game server
/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */

const connect = function() {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541
  });
  
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', function() {
    console.log('We are connected');
    //conn.write("Name: mrk");

    console.log('Connecting ...');
    // setInterval(function() {
    // conn.write("Move: up");
    // }, 5000);
  
  });

  return conn;
};

setupInput(connect());

