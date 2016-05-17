'use strict'
const net = require('net');

const client = net.connect(3000, () => {
  client.on('data', (data) => {
    client.write('Client One: ');
  })
  client.write('Message recieved');
});
