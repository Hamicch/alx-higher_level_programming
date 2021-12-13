#!/usr/bin/node
// prints a message depending of the number of arguments passed
const process = require('process');
let args = process.argv.slice(2);

if(args.length === 0) {
	console.log('No Arguments')
} else if (args.length === 1) {
	console.log('Argument found')
}
else {
	console.log('Arguments found')
}
