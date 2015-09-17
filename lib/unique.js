'use strict';

module.exports = function myUnique(array){
    array.sort();
    for(var i = 1; i < array.length; ){
        if(array[i-1] == array[i]){
            array.splice(i, 1);
        } else {
            i++;
            }
        }
    return array;
    }
