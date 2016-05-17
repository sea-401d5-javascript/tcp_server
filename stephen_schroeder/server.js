const net = require('net');

const sockets = [];

net.createServer((socket) => {
  sockets.push(socket);
  socket.on('data', (chunk) => {
    console.log(chunk.toString());
    socket.write('MESSAGE RECEIVED');
    sockets.forEach((s) => {
      s.write('BROADCASTING: ' + chunk.toString());
    });
  });
}).listen(3000, () => {
  console.log('listening on port 3000');
});
