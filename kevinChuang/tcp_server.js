/*eslint-env es6*/
/*jshint esversion:6*/

const net = require('net');
const process = require('process');
const stdin = process.stdin;
const stdout = process.stdout;

exports = modules.export = {};
const sockets = [];

net.createServer((socket) => {
  socket.name = socket.remotePort;
  socket.write('Hi ' + socket.name + '!\n');
  sockets.push(socket);
  console.log('request');
  socket.on('data', (chunk) => {
    console.log(chunk.toString());
    broadcast(chunk, socket);
  });
  exports.broadcast = function broadcast (message, sender) {
    sockets.forEach((s) => {
      if(s !== sender) {
        s.write(socket.name + '> ' + message);
      }
    });
  }
}).listen(3000, () => {
  console.log('chat server started on port 3000');
});

// const client = net.connect(3000, () => {
//   client.write('message');
// });
