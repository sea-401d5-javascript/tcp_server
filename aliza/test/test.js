const net = require('net');
const expect = require('chai').expect;
const server = require('../tcp_server');
const client = require('../tcp_client');

describe('tcp tests', () => {
  it('should send message to all clients, but not to sender', (done) => {
    var firstClient = net.connect(3000, () => {
      firstClient.write('message');
    })
    var secondClient = net.connect(3000, () => {
      secondClient.on('data', (data) => {
        expect(data.toString()).to.eql('message');
        done();
      })
    })
  })
});
