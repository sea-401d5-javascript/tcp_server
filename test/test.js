'use strict'

const createServer = require(__dirname + '/../server.js');
const expect = require('chai').expect
const net = require('net');
let clientZero;
let clientOne;
let clientZeroResponses = {};
let clientOneResponses = {};

describe('server', () => {
  before(() => {
    clientZero = net.connect({port: 3000});
    clientOne = net.connect({port: 3000});
  })
  it('one should get zeros input', () => {
    clientOne.on('data', (chunk) => {
      clientOneResponses.firstTest = chunk.toString();
      expect(clientOneResponses.firstTest).to.eql('0: hello');
    });
    clientZero.write('hello');
  });
  it('one should not get ones input', () => {
    clientOne.on('data', (chunk) => {
      clientOneResponses.secondTest = chunk.toString();
      expect(!clientOneResponses.secondTest);
    });
    clientOne.write('hello');
  });
  it('zero should get ones input', () => {
    clientZero.on('data', (chunk) => {
      clientZeroResponses.thirdTest = chunk.toString();
      expect(clientZeroResponses.thirdTest).to.eql('1: wassup');
    });
    clientZero.write('wassup');
  });
  it('zero should not get zeros input', () => {
    clientZero.on('data', (chunk) => {
      clientZeroResponses.fourthTest = chunk.toString();
      expect(!clientZeroResponses.fourthTest);
    });
    clientZero.write('wassup');
  })
  it('stuff', () => {
    console.log(clientOneResponses, clientZeroResponses);
  })
  // it('when clientZero inputs a string, clientOne should get that string', (done) => {
  //   clientOne.on('data', (chunk) => {
  //     clientOneResponses.firstInput = chunk.toString();
  //     expect(chunk.toString()).to.eql('0: hello');
  //   });
  //   clientZero.write('hello');
  //   done();
  // })
  // it('when clientZero inputs a string, clientZero should not get that string', () => {
  //   clientZero.on('data', (chunk) => {
  //     throw new Error('this should not have been received');
  //     console.log('this should not have been received!');
  //   });
  //   clientZero.write('hello');
  //   done();
  // });
  // it('when clientOne inputs a string, clientZero should get that string', (done) => {
  //   clientZero.on('data', (chunk) => {
  //     clientZeroResponses.firstInput = chunk.toString();
  //     console.log(clientZeroResponses);
  //     expect(chunk.toString()).to.eql('1: wassup');
  //   });
  //   clientOne.write('wassup');
  //   done();
  // })
  // it('trying stuff', () => {
  //   console.log(clientZeroResponses, clientOneResponses);
  // })
});
