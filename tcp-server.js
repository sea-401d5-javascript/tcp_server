'use strict';

const net = require('net');
const fs = require('fs');

const server = net.createServer((socket) => {

  socket.on('data', (chunk) => {
    var response = chunk.toString();
    var date = new Date();
    fs.writeFile(__dirname + '/response/' + date.toString() + '.txt', response);
    console.log(response);
  });
  socket.on('end', () => {
    console.log('socket end');
  })
}).listen(3000, () => {
  console.log('Up on 3000');
});
