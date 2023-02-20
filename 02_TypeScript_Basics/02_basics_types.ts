/* Working with number, string, boolean 
=============================================*/

// function add(n1: number, n2: number, showResult: boolean, phrase: string) {
//   if (showResult) {
//     console.log(phrase, n1 + n2);
//   } else {
//     return n1 + n2;
//   }
// }

// const number1 = 5;
// const number2 = 2.8;
// const printResult = true;
// const resultPhrase = "The result is : ";
// add(number1, number2, printResult, resultPhrase);

/* ----------------------------------------------- */

/* Type Assignment & Type Inference */

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  if (showResult) {
    console.log(phrase, n1 + n2);
  } else {
    return n1 + n2;
  }
}

let number1: number = 5;
// Not useful & redundant: native type inference in TypeScript already does the job

// let number1 = 5; // good V

// let number2; // type 'any'
// number2 = 2.5;  // OK
// number2= "2.5"  // OK

let number2: number;
number2 = 2.5; // Good V
// number2 = "2.5" // Incorrect X, why value is string ?
const printResult = true;

const resultPhrase_0 = "The result is : ";
console.log(typeof resultPhrase_0); // string

let resultPhrase = "The result is : "; // type inference automatically recognized as string

// resultPhrase = 23 // Incorrect, variable  was previously recognized as string,
// so why does it have a number value ?

add(number1, number2, printResult, resultPhrase);

/* ----------------------------------------------- */
