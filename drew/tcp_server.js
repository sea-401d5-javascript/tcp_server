const net = require('net');

const sockets = [];

net.createServer((socket) => {
  sockets.push(socket);
  socket.on('data', (chunk) => {
    console.log(chunk.toString());
    socket.name = Math.floor((Math.random() * 255) + 1);
    socket.write('MESSAGE RECEIVED\n');
    sockets.forEach((s) => {
      socket.name = Math.floor((Math.random() * 255) + 1);
      if (socket.name != s.name)
        s.write('BROADCASTING: ' + chunk.toString());
      console.log(sockets.length);
    });
  });
}).listen(3000, () => {
  console.log('Up on 3000');
});
