#!/usr/bin/node
// prints the first argument passed to it
const process = require('process');
const args = process.argv.slice(2);

// count number of arguments passed without length
const str = args;
let len = 0;
while (str[len] !== undefined) {
  len += 1;
}

// print argument at index 0
if (len === 0) {
  console.log('No argument');
} else {
  console.log(str[0]);
}
