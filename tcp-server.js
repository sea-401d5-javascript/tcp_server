'use strict';

const net = require('net');
const fs = require('fs');
const sockets = [];

const server = net.createServer((socket) => {
  socket.push = sockets;

  // var response = chunk.toString();
  // var date = new Date();
  // fs.writeFile(__dirname + '/response/' + date.toString() + '.txt', response);
  // console.log(response);

  socket.on('data', (chunk) => {
    socket.write('message Recieved: ')
    sockets.forEach((s) => {
      s.write('Message Recieved: ' + chunk.toString());
    });
  });
  socket.on('end', () => {
    console.log('socket end');
  })
}).listen(3000, () => {
  console.log('Up on 3000');
});
