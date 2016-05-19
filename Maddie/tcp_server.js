const net = require('net');

const clients = [];

module.exports = exports = net.createServer((socket) => {
  socket.name = socket.remotePort;
  clients.push(socket);
  function chat (message, from) {
    clients.forEach((client) => {
      if(client != from) {
      client.write(message);
    }
      })
    }
  socket.on('data', (chunk) => {
    chat('Username: ' + socket.name + '--->' + chunk.toString(), socket)
    })
}).listen(3000, () => {
  console.log('Up and running on 3000')
});

//write send message, on data receving message
