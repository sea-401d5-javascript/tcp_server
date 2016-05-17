'use strict';

const expect = require('chai').expect;
const net = require('net');
const server = require(__dirname + '/../lib/tcp-server');
const client1 = net.connect({port:3000});
const client2 = net.connect({port:3000});

describe('', ()=>{
  it('should send a message', ()=>{
    client1.write('things')
    expect();
  });
  it('should ', ()=>{
    expect();
  });
});
