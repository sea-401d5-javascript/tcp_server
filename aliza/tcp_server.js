const net = require('net');

const sockets = [];

net.createServer((socket) => {
  socket.name = socket.remotePort;
  sockets.push(socket);
  socket.on('data', (chunk) => {
    console.log(chunk.toString());
    socket.write('MESSAGE RECEIVED\n');
    sockets.forEach((s) => {
      s.write(socket.name + ': ' + chunk.toString())
    });
  });
}).listen(3000, () => {
  console.log('Up on 3000');
});
