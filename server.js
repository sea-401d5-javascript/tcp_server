const net = require('net');

const clients = [];

net.createServer((socket) => {
  socket.name = "User - " + socket.remotePort;
  clients.push(socket);

  socket.on('data', (chunk) => {
    clients.forEach((client) => {
      // if (socket.name !== client.name);
      client.write(socket.name + ' : ' + chunk.toString());
    });
  });

  function broadcast(from, message) {
    sockets.forEach(function(socket, index, array){
      if (socket.name === from) return;
      socket.write(message);
    })
  }
}).listen(3000, () =>{
  console.log('Up on 3000!');
});
