'use strict';

const net = require('net');
const fs = require('fs');
const sockets = [];


const server = net.createServer((socket) => {
  sockets.push(socket);

  socket.on('data', (chunk) => {

    var response = chunk.toString();
    var date = new Date();

    console.log(response + date);

    socket.write('SENDING.. \n');
    sockets.forEach((s) => {
      if (s != socket) s.write('RECIEVING.. \n' + chunk.toString());
    });

  });
  socket.on('end', () => {
    console.log('socket end');
  });
}).listen(3000, () => {
  console.log('Up on 3000');
});
