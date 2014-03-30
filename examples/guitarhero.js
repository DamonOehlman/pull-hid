var hid = require('..');
var pull = require('pull-stream');

// attach to the first device that matches a guitar hero controller
var device = [
  [0x12ba, 0x0100] // PS3 guitar hero controller vendor, product id pair
].map(hid).filter(Boolean)[0];

if (! device) {
  return console.log('No guitar hero controllers found');
}

pull(
  device.read(),
  pull.drain(console.log)
);