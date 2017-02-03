'use strict';

/*eslint-env es6*/

const fs = require('fs');

const readStream = fs.createReadStream(__dirname + '/test.txt');

let dataString = '';

readStream.on('data', (chunk) => {
  console.log('Truffles');
  console.log(chunk);
  dataString =+ chunk.toString();
});

readStream.on('end', () => {
  console.log('stream ended');
});

process.stdin.on('data', (chunk) => {
  console.log('${chunk.toString()} was piped into this program');
});

process.stdin.pipe(process.stdout);
