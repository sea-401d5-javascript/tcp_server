// load the TCP library
const net = require('net');

// keep an array of clients
const clients = [];

// start a TCP server
net.createServer((socket) => {
// Identify client
  socket.name = socket.remotePort;
  var clientName = socket.name;

// Put client in the array
  clients.push(socket);

  socket.write(clientName + ' has joined\n');

  socket.on('data', (chunk) => {
    //Add Time Stamp on server
    var response = chunk.toString();
    var time = new Date();
    console.log(response + time);

    var message = clientName + ': ' + chunk.toString();
    clients.forEach((m) => {
      if (socket.name !== m.name)
      m.write(message);
    });
  });
}).listen(3000, () => {
  console.log('Up on 3000');
});
