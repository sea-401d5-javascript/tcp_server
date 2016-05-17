const net = require('net');

const clients = [];

net.createServer((socket) => {
  socket.name = "User - " + socket.remotePort;
  clients.push(socket);

  socket.on('data', (chunk) => {
    clients.forEach((client) => {
      if (socket.name === client.name) return;
      client.write(socket.name + ': ' + chunk.toString());
    });
  });

  function broadcast(message, socket) {
    sockets.forEach(function(s){
      if (s === socket) return;
      s.write(message);
    });
  };

}).listen(3000, () =>{
  console.log('Up on 3000!');
});
