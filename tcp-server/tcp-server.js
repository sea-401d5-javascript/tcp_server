const net = require('net');

const sockets = [];

net.createServer((socket) => {
  sockets.push(socket);
  socket.on('data', (chunk) => {
  socket.write('MESSAGE RECIEVED\n');
  sockets.forEach((s) => {
      s.write('BROADCASTING: ' + chunk.toString())
    });
  });
}).listen(3000, () => {
  console.log('Up on 3000');
});
