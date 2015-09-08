'use strict';

var chai = require('chai');
var expect = chia.expect;
var myFrequency = require('./lib/frequency.js');
var myUnique = require('./lib/unique.js');
var myPush = require('./lib/push.js');
var myUnshift = require('./lib/unshift.js');
var myPop = require('./lib/pop.js');
var myShift = require('./lib/shift.js');


describe('greet', function() {
  it('should greet someone by name', function() {
    expect(greet('your name here')).to.eql('hello your name here');
  });
});