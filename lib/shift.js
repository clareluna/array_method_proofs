'use strict';

module.export = function myShift (array) {
for (var i = 0; i < array.length; i += 1) {
    array[i] = array[i + 1] || 0;
}
array.length = array.length - 1
return array;
}


