'use strict';

const net = require('net');
const server = net.createServer;
const sockets = [];

server((socket)=>{
  socket.ID = 'User' + Math.floor(Math.random() * 1000);
  sockets.push(socket);
  socket.on('data', (chunk)=>{
    let message = chunk.toString();
    socket.write('SENDING... \n');
    sockets.forEach((s)=>{
      if (s != socket) s.write('INCOMING MESSAGE FROM ' + socket.ID + ':'+ '\n' + message);
    })
  });
  socket.on('end', ()=>{
    console.log('Socket ended')
  });
}).listen(3000, ()=>{
  console.log('Up on port 3000');
});
