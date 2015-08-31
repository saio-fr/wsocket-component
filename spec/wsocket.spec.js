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

var WSocket = require('../src/main.js');

var WSocketTest = function(container) {
  var that = this;

  that.noobHuman = container.use('noobHuman', WSocket, {
    url: 'ws://0.0.0.0:8041/',
    realm: 'test'
  });

  that.greatAVI = container.use('greatAVI', WSocket, {
    url: 'ws://0.0.0.0:8042/',
    realm: 'test',
    authId: 'auth',
    password: 'auth'
  });
};

WSocketTest.prototype.start = function() {
  var that = this;

  var avi = function() {
    return 42;
  };

  return that.greatAVI.register(
      'the.ultimate.question.of.life.the.universe.and.everything', avi)
    .then(function() {
      console.log('What is the answer to the Great Question of Life,\n' +
        'the Universe and Everything ?');
      return that.noobHuman.call('the.ultimate.question.of.life.the.universe.and.everything');
    }).then(function(result) {
      console.log(result);
      if (result !== 42) {
        throw new Error('The Universe is deeper than you think');
      }
    });
};

WSocketTest.prototype.stop = function() {
  var that = this;
  return that.greatAVI.unregister('the.ultimate.question.of.life.the.universe.and.everything');
};

module.exports = WSocketTest;
