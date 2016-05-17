const net = require('net');
const expect = require('chai').expect;
const server = require('../tcp_server');
const client = require('../tcp_client');

describe('tcp tests', () => {
  it('should send message to all clients, but not to sender', (done) => {
    var result;
    var wroteBack = false;
    var firstClient = net.connect(3000, () => {
      firstClient.on('data', () => {
        wroteBack = true;
      })
      firstClient.write('message');
    })
    var secondClient = net.connect(3000, () => {
      secondClient.on('data', (data) => {
        result = data.toString();
      })
    });
    setTimeout(() => {
      expect(result).to.eql('message');
      expect(wroteBack).to.eql(false);
      done();
    }, 50)
  })
});
