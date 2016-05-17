'use strict';

const net = require('net');
const sockets = [];

const server = net.createServer((socket) => {
  sockets.push(socket);
  socket.on('data', (chunk) => {
    let curName = sockets.indexOf(socket);
      sockets.forEach((item, index, array) => {
        if (curName !== index) {
        item.write(curName + ': ' + chunk.toString());
      }
    })
  })
}).listen(3000, () => {
  console.log('up on 3000')
})
