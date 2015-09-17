'use strict'
module.exports = function myFrequency(array) {

    var letters = array.join('').split('').sort();
    var max = 0;
    var mostUsed = '';
    var compare;

    for(var i = 0; i < letters.length - 1; i++) {
        compare = 0;
        for(var j = 1; j < letters.length; j++) {
            if(letters[i] === letters[j]) {
                compare++;
            };
        };
        if(compare > max) {
            max = compare;
            mostUsed = letters[i];
        };
    };
    return mostUsed;
};

