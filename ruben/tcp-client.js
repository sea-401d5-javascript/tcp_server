const net = require('net');

const client = net.connect(3000, () => {
  client.on('data', (data) => {
    client.write('MESSAGE RECIEVED');
  })
  client.write('HERE IS MESSAGE');
})
