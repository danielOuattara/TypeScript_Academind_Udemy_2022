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

function add(n1: number, n2: number) {
  return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;

const result = add(number1, number2);

console.log(result);

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
// // Incorrect, TypeScript knows that there is no property called lastname in person object

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
// console.log(person2);
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

// console.log(person4.age);
// // Auto completion: avalaible

/* ----------------------
// Nested Objects & Types */

// // Of course object types can also be created for nested objects.
// // Let's say you have this JavaScript object:

// const product: {
//   id: string;
//   price: number;
//   tags: string[];
//   details: {
//     title: string;
//     description: string;
//   };
// } = {
//   id: "abc1",
//   price: 12.99,
//   tags: ["great-offer", "hot-and-new"],
//   details: {
//     title: "Red Carpet",
//     description: "A great carpet - almost brand-new!",
//   },
// };

// console.log("product = ", product);

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

// favoriteActivities = "sports";
// // Incorrect, expected array of string, not a string variable

// favoriteActivities = ["sports"];
// // Correct, received an array of string

// favoriteActivities = ["sports", 1];
// // Incorrect, array of string only

// let favoriteActivities2: any[];

// favoriteActivities2 = ["sports", 1]; // Correct, array of any

// for (const hobby of person.hobbies) {
//   console.log(
//     hobby[0].toUpperCase() + hobby.slice(1),
//     "- index : ",
//     person.hobbies.indexOf(hobby)
//   );
// }

/* ---------------------------------------------------------
Tuples Types */

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];  // <-- used to work with tuple
// } = {
//   name: "Daniel",
//   age: 38,
//   hobbies: ["sports", "cooking", "flying"],
//   role: [2, "author"],
// };

// person.role.push("admin"); // push() is ONLY accepted in Tuple
// person.role =[0, "admin"] // X Correct
// person.role =[0, "admin","user"] // X Incorrect, can't altere Tuple
// person.role[1] = 10 // Incorrect, typle can't be altered

// console.log(person);

/* ---------------------------------------------------------
Enum Types */

// // Approach by hand: tedious

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// const person = {
//   name: "Daniel",
//   age: 38,
//   hobbies: ["sports", "cooking", "flying"],
//   role: ADMIN,
// };

// console.log("user role is :", person.role);

// // Using tuples examples

// enum Role_1 { ADMIN, READ_ONLY, AUTHOR} // Correct
// enum Role_2 { ADMIN = 12, READ_ONLY = 2, AUTHOR= 23} // On numbering logic: Correct
// enum Role_3 { ADMIN="ADMIN", READ_ONLY= 100, AUTHOR} // Mixing: Correct

// const person_2 = {
//   name: "Daniel",
//   age: 38,
//   hobbies: ["sports", "cooking", "flying"],
//   role: Role_3.ADMIN,
// };

// console.log(person_2.role);

// if(person_2.role === Role_3.ADMIN) {
//   console.log("User is Admin")
// }
// if(person_2.role !== Role_3.AUTHOR) {
//   console.log("User is NOT author")
// }

/* ----------------------------------------- 
Any Types*/

// const person = {
//   name: "Daniel",
//   age: 38,
//   hobbies: ["sports", "cooking", "flying"],
// };

// let favoriteActivities: any[];

// favoriteActivities = "sports";
// // Incorrect, expected array of any, not a string variable

// favoriteActivities = ["sports"];
// // Correct, received an array of string

// favoriteActivities = ["sports", 1];
// // Incorrect, array of string only

// let favoriteActivities2: any[];

// favoriteActivities2 = ["sports", 1]; // Correct, array of any

// for (const hobby of person.hobbies) {
//   console.log(
//     hobby[0].toUpperCase() + hobby.slice(1),
//     "- index : ",
//     person.hobbies.indexOf(hobby)
//   );
// }

/* ----------------------------------------- 
Union Types: pipe symbol */

// function combine(input1: number | string, input2: number | string) {
//   if (typeof input1 === "number" && typeof input2 === "number") {
//     return input1 + input2;
//   }
//   return input1 + " " + input2;
// }

// const combinedAges = combine(30, 26);
// console.log("combinedAges = ", combinedAges);

// const combinedNames = combine("John", "Doe");
// console.log("combinedAges = ", combinedNames);

/* ------------------------------------------
Litteral Types */

// function combine(
//   input1: number | string,
//   input2: number | string,
//   resultType: "as-number" | "as-text"
// ) {
//   if (
//     (typeof input1 === "number" && typeof input2 === "number") ||
//     resultType === "as-number"
//   ) {
//     return Number(input1) + Number(input2);
//   }
//   return input1 + " " + input2;
// }

// const combinedAges = combine(30, 26, "as-number");
// console.log("combinedAges = ", combinedAges);

// const combinedNames = combine("John", "Doe", "as-text");
// console.log("combinedAges = ", combinedNames);

/*---------------------------------------------

 Type Aliases / Custom Types */

// type Combinable = number | string;
// type ConverstionDescription = "as-number" | "as-text";

// function combine(
//   input1: Combinable,
//   input2: Combinable,
//   resultType: ConverstionDescription
// ) {
//   if (
//     (typeof input1 === "number" && typeof input2 === "number") ||
//     resultType === "as-number"
//   ) {
//     return Number(input1) + Number(input2);
//   }
//   return input1 + " " + input2;
// }

// const combinedAges = combine(30, 26, "as-number");
// console.log("combinedAges = ", combinedAges);

// const combinedNames = combine("John", "Doe", "as-text");
// console.log("combinedAges = ", combinedNames);

/*---------------------------------------------

 Type Aliases & Object Type */

// type Player = { name: string; age: number };
// const u1: Player = { name: "Max", age: 30 }; // this works!

// // For example, you can simplify this code:

// function greet1(user: { name: string; age: number }) {
//   console.log("Hi, I am " + user.name);
// }

// function isOlder1(user: { name: string; age: number }, checkAge: number) {
//   return checkAge > user.age;
// }

// // To:

// type User = { name: string; age: number };

// function greet2(user: User) {
//   console.log("Hi, I am " + user.name);
// }

// type USerWithAge = {
//   User: User;
//   checkAge: number;
// };

// function isOlder2(user: USerWithAge) {
//   return user.checkAge > user.User.age;
// }

/*------------------------------------------------
Function Return Typs & Void  */

// function add(input1: number, input2: number): number | string {
//   if (typeof input1 === "number" && typeof input2 === "number") {
//     return input1 + input2;
//   }
//   return input1 + " " + input2;
// }

// //-----------------------------

// function add_2(input1: number, input2: number): void {
//   if (typeof input1 === "number" && typeof input2 === "number") {
//     console.log(input1 + input2);
//   }
//   console.log(input1 + input2);
// }

/*---------------------------------------------------
Functions as Types */

// function add(input1: number, input2: number): number {
//   return input1 + input2;
// }

// //-----------------------------

// function add_2(input1: number, input2: number): void {
//   if (typeof input1 === "number" && typeof input2 === "number") {
//     console.log(input1 + input2);
//   }
//   console.log(input1 + input2);
// }

// let combinedValue_1: Function;  // <-- Function as Types, basic

// combinedValue_1 = add; // Accepted

// console.log(combinedValue_1(6, 8));

// combinedValue_1 = 5; // X Incorrect

// combinedValue_1 = add_2; // Correct

// //---

// let combinedValue_2: (a: number, b: number) => number; // <-- Function as Types, specific

// combinedValue_2 = add; // Accepted

// console.log(combinedValue(6, 8));

// combinedValue_2 = 5; // X Incorrect

// combinedValue_2 = add_2; // Incorrect
//
//
// /*---------------------------------------------------

// Functions Types & CallBack */

// // callback defined as the 3rd parameter

// function add_3(n1: number, n2: number, cb: (numb: number) => void) {
//   const result = n1 + n2;
//   cb(result);
// }

// add_3(10, 20, (output) => {
//   console.log(output);
// });

/*---------------------------------------------------
Unkown Types */

// let userInput: unknown;
// let userName: string;
// let userName_2: string;

// userInput = "Daniel";

// console.log(userInput);

// //---

// userName = userInput; // X Incorrect
// console.log(userName);

// //---
// if (typeof userInput == "string") {
//   userName_2 = userInput;
// }

/*---------------------------------------------------
Never Types */

// function generateError(message: string, code: number): never {
//   throw { message, code };
// }

// const result = generateError("Bad Request", 400);

// console.log("result = ", result);
