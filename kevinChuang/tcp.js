/*eslint-env es6*/
/*jshint esversion:6*/

const net = require('net');

const sockets = [];

net.createServer((socket) => {
  sockets.push(socket);
  console.log('request');
  sockets.on('data', (chunk) => {
    console.log(chunk.toString());
    sockets.forEach((s) => {
      s.write('Broadcasting: ' + chunk.toString);
    });
  });
}).listen(3000, () => {
  console.log('listening on port 3000');
});
