const net = require('net');

const clients = [];

const client1 = net.connect(3000, () => {
  sockets.push(client1);
  client1.on('data', (chunk) => {
    console.log(chunk.toString());
    client1.write('TESTESTESTESTEST');
    sockets.forEach((c) => {
      c.write('BROADCASTING FROM CLIENT1: ' + chunk.toString());
    });
  });
});

const client2 = net.connect(3000, () => {
  sockets.push(client2);
  client2.on('data', (chunk) => {
    console.log(chunk.toString());
    client2.write('OTHEROTHEROTHER');
    sockets.forEach((c) => {
      c.write('BROADCASTING FROM CLIENT2: ' + chunk.toString());
    });
  });
});
