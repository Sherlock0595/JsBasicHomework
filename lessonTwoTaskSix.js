
function addition(arg1, arg2) {
    return (arg1 + arg2);
}


function subtraction(arg1, arg2) {
    return (arg1 - arg2);
}


function multiplication(arg1, arg2) {
    return (arg1 * arg2);
}
    

function division(arg1, arg2) {
    return (arg1 / arg2);
}




function mathOperation(arg1, arg2, operation) {

    switch (operation) {
        case '+':
            return addition(arg1, arg2);

        case '-':
            return subtraction(arg1, arg2);

        case '*':
            return multiplication(arg1, arg2);

        case '/':
            return division(arg1, arg2);

    }


}

console.log(mathOperation(102, 323, '+'));
console.log(mathOperation(110, 330, '*'));
console.log(mathOperation(1230, 30, '-'));
console.log(mathOperation(101, 306, '/'));