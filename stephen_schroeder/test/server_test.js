const expect = require('chai').expect;
const net = require('net');
const fs = require('fs');
const server = require(__dirname + '/../lib/server');

describe('TCP server', () => {
  var requestString = 'Hello World\r\n';
  var filepath = __dirname + '/../log_test.txt';

  before((done) => {
    server.start(filepath);
    var client = net.createConnection(3000, () => {
      console.log('Connected to server');
      client.write(requestString);
      done();
    });
  });

  it('should write request to newly created text file', (done) => {
    fs.readFile(filepath, (err, data) => {
      if (err) {
        expect(true).to.eql(false);
        console.log(err);
        return done();
      }
      expect(data.toString()).to.eql(requestString);
      done();
    });
  });

  after(() => {
    fs.unlink(filepath, (err) => {
      if (err) console.log(err);
    });
  });
});
