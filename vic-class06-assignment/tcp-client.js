// load TCP library
const net = require('net');

const client = net.connect(3000, () => {
  client.on('data', (data) => {
    client.write('This is client, I received your message');
  })
  client.write('Here is Message');
})
