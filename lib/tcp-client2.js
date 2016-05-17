const net = require('net');
const client2 = net.connect(3000, ()=>{
  client2.write('MESSAGE FROM TCP CLIENT2')
});
