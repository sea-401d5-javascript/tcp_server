const net = require('net');

const client = net.connect(3000, () => {
  // client.on('data', (data) => {
  //   client.write('Message Recieved');
  // })
  client.write('here is message');
})
