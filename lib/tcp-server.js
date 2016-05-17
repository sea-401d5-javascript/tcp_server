const net = require('net');
const server = net.createServer;
const sockets = [];

server((socket)=>{
  sockets.push(socket);
  socket.on('data', (chunk)=>{
    socket.write('SENDING... \n');
    sockets.forEach((s)=>{
      if (s != socket) s.write('RECEIVING... \n' + chunk.toString());
    })
  });
  socket.on('end', ()=>{
    console.log('Socket ended')
  });
}).listen(3000, ()=>{
  console.log('Up on port 3000');
});
