const net = require('net');

const client = net.connect(3000, () => {

  client.write('MESSAGE RECEIVED');
});
