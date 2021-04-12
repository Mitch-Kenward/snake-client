
const net = require('net');
//Establishes connection with game server
/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(handleUserInput) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');

  stdin.on('data', (key) => {
  
    handleUserInput(key);
  });

  stdin.resume();
  return stdin;
};
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
    setupInput(handleUserInput);

  });

  return conn;
};
connect();

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
};


