'user strict';

const fs = require('fs');
const net = require('net');
var expect = require('chai').expect;


var client1 = net.connect({port: 3000});
var client2 = net.connect({port: 3000});

describe('testing server', () => {
  it('should send message', () => {
    expect(client1).to.not.eql(client2);
  });
});
