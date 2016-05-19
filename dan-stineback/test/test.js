'user strict';

var fs = require('fs');
var net = require('net');
var expect = require('chai').expect;
require('../tcp-server');

describe('testing client', (done)=>{
  var result;
  var wroteBack = false;
  var client1 = net.connect(3000, ()=> {
    clientOne.on('data', (data)=> {
      if (data != 'SENDING.. \n') wroteBack = true;
      });
      clientOne.write('TEST');
  });
  var client2 = net.connect(3000, ()=>{
    lientTwo.on('data', ()=> {
        result = data.toString();
      });
    });
    setTimeout(()=> {
      expect(result).to.eql('TEST');
      expect(wroteBack).to.eql(false);
      done();
    }, 200)
  });
});



describe('testing server', () => {
  it('should send message', () => {
    expect(client1).to.not.eql(client2);
  });
});
