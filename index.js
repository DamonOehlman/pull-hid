/* jshint node: true */
'use strict';

var HID = require('node-hid');
var pull = require('pull-core');

/**
  # pull-hid

  [Pull Streams](http://github.com/dominictarr/pull-stream) for
  [node-hid](https://github.com/node-hid/node-hid) devices.

  ## Example Usage

  <<< examples/guitarhero.js

**/

var hid = module.exports = function(target) {
  var device = hid.open(target);

  // create the reader
  function read() {
    return function(end, cb) {
      if (end) {
        return cb(end);
      }

      device.read(cb);
    };
  }

  function write(read, done) {
  }

  // if we were
  if (device instanceof Error) {
    return;
  }

  return {
    hid: device,
    read: pull.Source(read),
    write: pull.Sink(write)
  };
}

hid.open = function(target) {
  // if we have been provided a vendor id product id pair, then look for
  // the device
  if (Array.isArray(target)) {
    target = (HID.devices.apply(HID, target)[0] || {}).path;
  }

  // if we don't have a valid target, return
  if (! target) {
    return new Error('No target specified');
  }

  // create the device
  try {
    return new HID.HID(target);
  }
  catch (e) {
    return e;
  }

  return new Error('No matching device found');
}
