'use strict';

const net = require('net');
const expect = require('chai').expect;
const createServer = require('../chat.js');
const data = {};

function createClient(clientName, done) {
  let client = net.connect(3000, () => {
    client.write('test');
    if (clientName === 'secondTest') {
      client.write('test');
    }
    client.on('data', (chunk) => {
      if (!data[clientName]) data[clientName] = '';
      data[clientName] += chunk.toString();
      done();
    })
  }).on('error', (err) => {
    console.log(err);
    client.end();
  });
}

describe('chat test suite', () => {
  before(() => {
    createServer();
  })
  beforeEach('initializes first client for multi-client tests', (done) => {
    data['test'] = '';
    createClient('test', done);
  });
  it('should receive data from the server', () => {
    expect(data['test']).to.eql('test received');
  })
  before((done) => {
    data['test'] = '';
    createClient('secondTest', done);
  })
  it('should send data to clients that did not write it', () => {
    expect(data['test']).to.eql('test receivedtest received');
  })
  it('should not send data to clients that wrote it', () => {
    expect(data['secondTest']).to.eql('test received');
  })
})
