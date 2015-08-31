/*-------------------------------------------------*\
 |                                                 |
 |      /$$$$$$    /$$$$$$   /$$$$$$   /$$$$$$     |
 |     /$$__  $$  /$$__  $$ |_  $$_/  /$$__  $$    |
 |    | $$  \__/ | $$  \ $$   | $$   | $$  \ $$    |
 |    |  $$$$$$  | $$$$$$$$   | $$   | $$  | $$    |
 |     \____  $$ | $$__  $$   | $$   | $$  | $$    |
 |     /$$  \ $$ | $$  | $$   | $$   | $$  | $$    |
 |    |  $$$$$$/ | $$  | $$  /$$$$$$ |  $$$$$$/    |
 |     \______/  |__/  |__/ |______/  \______/     |
 |                                                 |
 |                                                 |
 |                                                 |
 |    *---------------------------------------*    |
 |    |   © 2015 SAIO - All Rights Reserved   |    |
 |    *---------------------------------------*    |
 |                                                 |
\*-------------------------------------------------*/

var Socket = require('@saio/wsocket');
var _ = require('underscore');

var WSocket = function(container, options) {
  var that = this;

  if (_.isUndefined(options)) {
    options = {};
  }

  options = _.defaults(options, {
    url: 'ws://localhost:80/',
    realm: 'realm'
  });

  Socket.call(that, options.url, options.realm, {
    authId: options.authId, // np if undefined
    password: options.password
  });
};

_.extend(WSocket.prototype, Socket.prototype);

WSocket.prototype.start = function() {
  return this.open();
};

WSocket.prototype.stop = function() {
  return this.close();
};

module.exports = WSocket;
