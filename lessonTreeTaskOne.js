'use strict';

let result = '2 3 5 7'
let i = 8
while (i <= 100) {
    if (i % 2 && i % 3 && i % 5 && i % 7) {
        result += ' ' + i;
    }
    i++;
}
console.log(result);