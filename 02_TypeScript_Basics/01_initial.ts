/* Initial 
--------------*/

// function add(n1, n2) {
//   return n1 + n2;
// }

// const number1 = 5;
// const number2 = "2.8";

// // concatenation problem can occurs

// const result = add(number1, number2);

// console.log(result);

/* Typsecript help during development, it does not run on runtime 
-----------------------------------------------------------------

 - Javascript => dynamic type: evaluated on runtine
 - TypeScript => static: evaluated before runtime

 CAUTION: The core primitive types in TypeScript are all lowercase!
*/

// function add(n1: number, n2: number) {
//   return n1 + n2;
// }

// const number1 = 5;
// const number2 = 2.8;

// const result = add(number1, number2);

// console.log(result);

/* ----------------------------------------------- */

/* Working with number, string, boolean 
=============================================*/

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  if (showResult) {
    console.log(phrase, n1 + n2);
  } else {
    return n1 + n2;
  }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "The result is : ";
add(number1, number2, printResult, resultPhrase);
