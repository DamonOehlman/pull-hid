var hid = require('..');
var pull = require('pull-stream');

// attach to the first device that matches a guitar hero controller
var device = [
  [0x2458,0x0001]
].map(hid).filter(Boolean)[0];

if (! device) {
  return console.log('No myo found');
}

pull(
  device.read(),
  pull.drain(console.log)
);
