// simple prompt calculator

// take operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

// execute result
let result;

if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// display result
alert(`${number1} ${operator} ${number2} = ${result}`);