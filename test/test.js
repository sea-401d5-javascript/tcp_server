const expect = require('chai').expect;
const net = require('net');
const server = require('../tcp_server.js');


describe('Test TCP server', () => {
  it('message received is equal to message sent', (done) => {
    const client1 = net.connect(3000, () => {
      client1.write('Hello')
    })
    const client2 = net.connect(3000, () => {
      client2.on('data', (message) => {
        expect('Username: ' + server.name + '--->' + 'Hello').to.eql(message.toString());
        done();
      })
    })

    });
})
