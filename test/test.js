'use strict';

var chai = require('chai');
var expect = require('chai').expect;
var myFrequency = require('./../lib/frequency.js');
var myUnique = require('./../lib/unique.js');
var myPush = require('./../lib/push.js');
var myUnshift = require('./../lib/unshift.js');
var myPop = require('./../lib/pop.js');
var myShift = require('./../lib/shift.js');


describe('myFrequency', function() {
	it('should return the most frequent letter in an array', function() {
		var freq = ['llama', 'lion', 'lamb', 'luna'];
		expect(myFrequency(freq)).to.eql('l');		
	});
});

describe('myUnique', function() {
  it('should return only unique values from array', function() {
    var uniq = [1,2,3,4,5,4,3,2,1];
    expect(myUnique(uniq)).to.eql([1,2,3,4,5]);
  });
});

describe('myPush', function() {
	it('should return add a value to the end of the array', function() {
		var arr1 = [1,2,3];
		console.log(myPush(arr1, 4));
		expect(myPush(arr1, 4)).to.eql([ 1, 2, 3, 4, 4]);		
	});
});

describe('myUnshift', function() {
  it('should add a value to the start of the array', function() {
    var arr2 = [1,2,3];
    console.log(myUnshift(arr2, 4));
    expect(myUnshift(arr2, 4)).to.eql([4, 2, 2, 2, 3]);
  });
});

describe('myPop', function() {
	it('should remove the last value from an array', function() {
		var arr3 = [1,2,3];
		expect(myPop(arr3)).to.eql([1,2]);		
	});
});

describe('myShift', function() {
  it('should remove the first value from array', function() {
    var arr4 = [1,2,3];
    expect(myShift(arr4)).to.eql([2,3]);
  });
});
