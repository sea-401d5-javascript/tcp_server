'use strict';
const net = require('net');

function createClient(username) {
  let client = net.connect(3000, () => {
    client.write('My name is ' + username +  '!\n');
    client.on('data', (chunk) => {
      console.log('Message received from ' + chunk.toString().split('\s')[0].trim() + ':\n', chunk.toString());
    });
  }).on('error', (err) => {
    console.log(err);
    client.end();
  });
}

createClient('stefanie');
createClient('bob');
