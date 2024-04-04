/*We are building a calculator */

//This library allows me to accept user input from nodejs
const prompt= require("prompt-sync")();

let results;

//The variable accepts user operator inputs user must choose from
const operator = prompt("Enter operator (+,-,*, or/)");

//Accept input
const num1 = parseFloat(prompt('Enter num1: '));
const num2 = parseFloat(prompt('Enter num2: '));

switch(operator){
   //Addition operator
   case'+':
    results =num1 + num2;
    console.log(`${num1} + ${num2} = ${results}`);
    break;
    //For subtraction
    case'-':
    results =num1 - num2;
    //({``, allows me to perform real time inputs }and {$callback function, responding to user interactions like button clicks or events. })
    console.log(`${num1} - ${num2} = ${results}`);
    break;
    //Addition operator
   case'*':
   results =num1 * num2;
   console.log(`${num1} * ${num2} = ${results}`);
   break;
   //Addition operator
   case'/':
    results =num1 / num2;
    console.log(`${num1} / ${num2} = ${results}`);
    break;
}