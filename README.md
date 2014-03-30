# pull-hid

[Pull Streams](http://github.com/dominictarr/pull-stream) for
[node-hid](https://github.com/node-hid/node-hid) devices.


[![NPM](https://nodei.co/npm/pull-hid.png)](https://nodei.co/npm/pull-hid/)

![experimental](https://img.shields.io/badge/stability-experimental-red.svg)

## Example Usage

```js
var hid = require('pull-hid');
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
```
