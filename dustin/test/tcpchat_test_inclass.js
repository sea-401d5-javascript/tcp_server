var chai = require('chai');
var net = require('net');
var expect = chai.expect;
require('../lib/chat_server.js');

describe('tcp test', function () {
  it('should send a message to all clients exept sender', function (done) {
    var results;
    var wroteBack = false;

    var clientOne = net.connect(3000, function () {
      clientOne.on('data', function () {
        wroteBack = true;
      });
      clientOne.write('test');

    });

    var clientTwo = net.connect(3000, function () {
      clientTwo.on('data', function (data) {
        results = data.toString();
        //expect(data.toString()).to.eql('test');
      });
    });

    setTimeout(function () {
      expect(results).to.equal('test');
      expect(wroteBack).to.equal(false);
      done();
    }, 200);

  });
});
