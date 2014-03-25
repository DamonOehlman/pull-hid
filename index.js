/* jshint node: true */
'use strict';

var HID = require('node-hid');
var pull = require('pull-core');

/**
  # pull-hid

  [Pull Streams](http://github.com/dominictarr/pull-stream) for
  [node-hid](https://github.com/node-hid/node-hid) devices.

  ## Reference

**/

/**
  ### open(path)

  Open the target device using the path specified. The path can also be
  provided as an array of valid vendor and product ids that can be used to
  open the first device that matches.

**/
exports.open = function(path) {
  // 
};

/**
  ### read

  Create a pull-stream Source and read from the target device.

  <<< examples/guitarhero.js

**/
exports.read = pull.Source(function(path) {

});

/**
  ### write

  Create a pull-stream Sink and write to the target device.

  <<< examples/bcc950.js

**/
exports.write = pull.Sink(function(read, path, done) {

});