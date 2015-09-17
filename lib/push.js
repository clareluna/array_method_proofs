'use strict';

module.exports = function myPush(array, item) {
	array[array.length] = item;
	return array;
};
