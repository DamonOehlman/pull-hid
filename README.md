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

## License(s)

### ISC

Copyright (c) 2014, Damon Oehlman <damon.oehlman@gmail.com>

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
