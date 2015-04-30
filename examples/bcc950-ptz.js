var hid = require('..');
var pull = require('pull-stream');

// attach to the first device that matches a guitar hero controller
var device = [
  [0x046d, 0x0838]
].map(hid).filter(Boolean)[0];

if (! device) {
  return console.log('Could not locate BCC950 webcam');
}

// pull(
//   device.read(),
//   pull.drain(console.log)
// );

// return;

console.log(device.hid);

function panLeft() {
  device.hid.write([0x21, 0x01, 0x0E, 0x00, 0x01, 0x00, 0xFF, 0x01, 0x00, 0x01]); // [0x88, 0x01, 0x06, 0x01, 0x01, 0x01, 0x01, 0x33, 0xFF]);

  console.log('wrote data, waiting for response');
  device.hid.read(function(err, data) {
    console.log('got data: ', data);
    panLeft();
  });
}

panLeft();
