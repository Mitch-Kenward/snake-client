
const net = require('net');

//Establishes connection with game server

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
    setInterval(function() {
      conn.write("Move: up");
    }, 5000);


   
    
  });

  return conn;
};
connect();