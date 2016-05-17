const net = require('net');

const clients = [];

module.exports = exports = net.createServer((socket) => {
  socket.name = socket.remotePort;
  clients.push(socket);
  socket.on('data', (chunk) => {
    console.log(chunk.toString());
    socket.write('MESSAGE RECEIVED\n');
    clients.forEach((s) => {
      if (socket.name !== s.name)
      s.write(socket.name + ': ' + chunk.toString());
    });
  });
}).listen(3000, () => {
  console.log('Up on 3000');
});
