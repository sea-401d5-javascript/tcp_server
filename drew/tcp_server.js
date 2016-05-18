const net = require('net');

const sockets = [];

net.createServer((socket) => {
  sockets.push(socket);
  socket.on('data', (data) => {
    console.log(data.toString());
    // socket.name = Math.floor((Math.random() * 255) + 1);
    // socket.write('MESSAGE RECEIVED\n');
    sockets.forEach((s) => {
      // socket.name = Math.floor((Math.random() * 255) + 1);
      // if (socket.name != s.name)
      if (s === socket) return;
      s.write('BROADCASTING: ' + data.toString());
    });
  });
}).listen(3000, () => {
  console.log('Up on 3000');
});
