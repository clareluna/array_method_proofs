'use strict';

module.export = function myPush(array, item) {
	array[array.length] = item;
	return array;
};
