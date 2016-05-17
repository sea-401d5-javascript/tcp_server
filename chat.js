'use strict';
const net = require('net');
const sockets = [];

net.createServer((socket) => {
  sockets.push(socket);
  socket.on('data', (chunk) => {
    sockets.forEach((sock) => {
      socket.name = 'Client' + sockets.indexOf(sock);
      if (socket.name !== sock.name) {
        socket.write(socket.name + ' says: ' + chunk.toString() + '\n')
      }
    });
  })
}).listen(3000, () => {
  console.log('listening on port 3000');
})
