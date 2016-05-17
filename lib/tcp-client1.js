const net = require('net');
const client1 = net.connect(3000, ()=>{
  client1.write('MESSAGE FROM TCP CLIENT1')
});
