/* Initial 
--------------*/

// function add(n1, n2) {
//   return n1 + n2;
// }

// const number1 = 5;
// const number2 = "2.8";

// concatenation problem can occurs

// const result = add(number1, number2);

// console.log(result);

/* Typsecript help during development, it does not run on runtime 
-----------------------------------------------------------------
 - Javascript => dynamic type ,evaluated on runtine
 - TypeScript => static ,evaluated before runtime

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

/* Working with number, string, boolean */

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

// function add(n1: number, n2: number, showResult: boolean, phrase: string) {
//   if (showResult) {
//     console.log(phrase, n1 + n2);
//   } else {
//     return n1 + n2;
//   }
// }

// let number1: number = 5;
// // Not useful & redondant:  native type inference in TypeScript already does the job

// // let number1 = 5; // good V

// // let number2; // type 'any'
// // number2 = 2.5;  // OK
// // number2= "2.5"  // OK

// let number2: number;
// number2 = 2.5 // Good V
// // number2 = "2.5" // Incorrect X, why value is string ?
// const printResult = true;

// const resultPhrase_0 = "The result is : ";
// console.log(typeof resultPhrase_0) // string

// let resultPhrase = "The result is : "; // type inference automatically recognized as string
// // resultPhrase = 23 // Incorrect, variable  was previously recognized as string, so why does it have a number value ?

// add(number1, number2, printResult, resultPhrase);

/* ----------------------------------------------- */

/* Objects Type */

// // best way
// const person = {
//   name: "Daniel",
//   age: 38,
// };

// console.log(person);

// console.log(person.lastname);
// // Incorrect, TypeScript knows that trher is no property called latname in person object

// // autocompletion OK using the dot

// // Any object has an object type

// /*
// const person = {
//   name: string,
//   age: number,
// };

// */

// // Below is restrictive,
// const person2: object = {
//   name: "Daniel",
//   age: 38,
// };
// // console.log(person2.);
// // No auto completion

// // Below is restrictive, as above
// const person3: {} = {
//   name: "Daniel",
//   age: 38,
// };

// // console.log(person2.);
// // No auto completion

// // Below is restrictive, as above
// const person4: {
//   name: string;
//   age: number;
// } = {
//   name: "Daniel",
//   age: 38,
// };

// // console.log(person2.);
// // No auto completion

/* ----------------------
Nested Objects & Types */

// Of course object types can also be created for nested objects.
// Let's say you have this JavaScript object:

// const product = {
//   id: "abc1",
//   price: 12.99,
//   tags: ["great-offer", "hot-and-new"],
//   details: {
//     title: "Red Carpet",
//     description: "A great carpet - almost brand-new!",
//   },
// };

// // This would be the type of such an object:

// // {
// //   id: string;
// //   price: number;
// //   tags: string[];
// //   details: {
// //     title: string;
// //     description: string;
// //   }
// // }

// // So you have an object type in an object type so to say.

/* ---------------------------------------------------------
Arrays Types */

// const person = {
//   name: "Daniel",
//   age: 38,
//   hobbies: ["sports", "cooking", "flying"],
// };

// let favoriteActivities: string[];

// // favoriteActivities = "sports"; // Incorrect, expected array of string, not a string variable

// favoriteActivities = ["sports"]; // Correct, received an array of string

// // favoriteActivities = ["sports", 1]; // Incorrect, array of string only

// let favoriteActivities2: any[];

// favoriteActivities2 = ["sports", 1]; // Correct, array of any

// for (const hobby of person.hobbies) {
//   console.log(hobby, "- index : ", person.hobbies.indexOf(hobby));
// }

/* ---------------------------------------------------------
Tuples Types */

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Daniel",
//   age: 38,
//   hobbies: ["sports", "cooking", "flying"],
//   role: [2, "author"],
// };

// person.role.push("admin") // push() is ONLY accepted in Tuple
// // person.role =[0, "admin","user") // X Incorrect, can't altere Tuple
// // person.role[1] = 10 // Incorrect, typle can't be altered

// console.log(person)

/* ---------------------------------------------------------
Enum Types */

// Approach by hand: tadeious

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// const person = {
//   name: "Daniel",
//   age: 38,
//   hobbies: ["sports", "cooking", "flying"],
//   role: ADMIN,
// };

// console.log(person.role);

// Using tuples

// enum Role { ADMIN, READ_ONLY, AUTHOR} // Correct
//enum Role { ADMIN = 12, READ_ONLY = 2, AUTHOR= 23} // On numbering logic :  Correct
enum Role { ADMIN="ADMIN", READ_ONLY= 100, AUTHOR} // Mixing : Correct

const person = {
  name: "Daniel",
  age: 38,
  hobbies: ["sports", "cooking", "flying"],
  role: Role.ADMIN,
};

console.log(person.role);

if(person.role === Role.ADMIN) {
  console.log("User is Admin")
}
if(person.role !== Role.AUTHOR) {
  console.log("User is NOT author")
}
