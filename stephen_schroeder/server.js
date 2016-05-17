const net = require('net');

const users = [];

module.exports = function() {
  net.createServer((socket) => {
    socket.name = socket.remotePort + new Date();
    users.push(socket);
    socket.on('data', (chunk) => {
      console.log(chunk.toString());
      users.forEach((s) => {
        if (socket.name !== s.name) {
          s.write(socket.name + ': ' + chunk.toString());
        }
      });
    });
  }).listen(3000, () => {
    console.log('listening on port 3000');
  });
};
