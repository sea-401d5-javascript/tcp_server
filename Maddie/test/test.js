'use strict'
const expect = require('chai').expect;
const net = require('net');
const server = require('../tcp_server.js');


describe('Test TCP server', () => {
  it('message received is equal to message sent', (done) => {
    let result;
    let wroteback = false;
    const client1 = net.connect(3000, () => {
      client1.on('data', () => {
        wroteback = true;
        });
      client1.write('Hello')
      })
    const client2 = net.connect(3000, () => {
      client2.on('data', (message) => {
        result = (message.toString()).slice(-5);
      });
    });

    setTimeout(() => {
      expect(result).to.eql('Hello');
      expect(wroteback).to.eql(false);
      done();
      }, 50);

    });
})
