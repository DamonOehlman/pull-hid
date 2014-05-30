var hid = require('..');
var pull = require('pull-stream');

// attach to the first device that matches a guitar hero controller
var device = [
  [0x046d, 0x0838]
].map(hid).filter(Boolean)[0];

if (! device) {
  return console.log('Could not locate BCC950 webcam');
}

pull(
  device.read(),
  pull.drain(console.log)
);
