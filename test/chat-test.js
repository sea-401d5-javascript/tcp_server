'use strict';

const net = require('net');
const expect = require('chai').expect;
const data = {};
const sockets = [];

function createServer() {
  net.createServer((socket) => {
    sockets.push(socket);
    socket.on('data', (chunk) => {
      sockets.forEach((sock) => {
        socket.name = 'Client' + sockets.indexOf(sock);
        if (sockets.length === 1 || socket.name !== sock.name) {
          socket.write('test received');
        } else {
          socket.write('not receiving');
        }
      });
    });
  }).listen(3000, () => {
    console.log('listening on port 3000');
  });
}

function createClient(clientName, done) {
  if (!data[clientName]) data[clientName] = '';
  let client = net.connect(3000, () => {
    client.write('test');
    client.on('data', (chunk) => {
      console.log(chunk.toString());
      data[clientName] += chunk.toString();
      done();
    });
  }).on('error', (err) => {
    console.log(err);
    client.end();
  });
}

describe('chat test suite', () => {
  before((done) => {
    createServer();
    createClient('test', done);
  });
  it('should receive data from the server', () => {
    expect(data['test']).to.eql('test received');
  });
  before((done) => {
    createClient('secondTest', done);
  });
  it('should send data to clients that did not write it', () => {
    expect(data['test']).to.eql('test received');
  });
  it('should not send data to clients that wrote it', () => {
    expect(data['secondTest']).to.not.eql('test received');
  });
});
