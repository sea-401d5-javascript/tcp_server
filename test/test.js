"use strict";

const expect = require('chai').expect;
const net = require('net');
const tcp = require('../server');

describe('Chat server testing: ', () => {
  it('should send a message to all clients except sender', (done) => {
    let result;
    let wroteBack = false;

    const clientOne = net.connect(3000, () => {
      clientOne.on('data', () => {
        throw new Error('it wrote back');
      });
      clientOne.write('test');
    });
    const clientTwo = net.connect(3000, () => {
      clientTwo.on('data', (data) => {
        expect(data.toString()).to.eql('test');
        done();
      });
    });
    setTimeout(() => {
      expect(result).to.eql('test');
      expect(wroteBack).to.eql(false);
      done();
    }, 200)
  });

})
