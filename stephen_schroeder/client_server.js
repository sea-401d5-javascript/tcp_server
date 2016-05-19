'use strict';

const net = require('net');

function newUser(name) {
  let client = net.connect(3000, () => {
    client.write(name + 'is available\n');
    client.write('MESSAGE RECEIVED');
    client.on('data', (chunk) => {
      console.log('Message');
      console.log('message received from' +
      chunk.toString().split('\s')[0].trim() + ': \n', chunk.toString());
    });
  }).client.end('Goodbye\n');
}
newUser('Stephen');
newUser('Larry');
newUser('Moe');
newUser('Curly');
