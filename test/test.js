'use strict';

const expect = require('chai').expect;
const net = require('net');
const server = require(__dirname + '/../lib/tcp-server');

describe('tcp tests', ()=>{
  it('should send a message to all clients except sender', (done)=>{
    let result;
    let wroteBack = false;
    const client1 = net.connect(3000, ()=>{
      client1.on('data', (data)=>{
        if (data.toString() !== 'SENDING... \n') wroteBack = true;
      })
      client1.write('testing');
    });
    const client2 = net.connect(3000, ()=>{
      client2.on('data', (data)=>{
        result = data.toString();
      });
    });
    setTimeout(()=>{
      expect(result.slice(-7)).to.eql('testing');
      expect(wroteBack).to.be.false;
      done();
    }, 200)
  });
});
