const net = require('net');
const expect = require('chai').expect;
const server = require('../tcp_server');
const client = require('../tcp_client');

describe('client receiving same message that was sent form other client', () => {
  it('should receive the same message that was sent', (done) => {
    var firstClient = net.connect(3000, () => {
      firstClient.write('message');
    })
    var secondClient = net.connect(3000, () => {
      secondClient.on('data', (chunk) => {
        console.log(chunk.toString());
      })
    })
    expect('message').to.eql(chunk.toString());
    done();
  });
});
